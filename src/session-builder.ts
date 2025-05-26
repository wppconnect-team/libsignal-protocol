import { SignalProtocolAddressType, StorageType, Direction, KeyPairType } from './types'
import { DeviceType, SessionType, BaseKeyType, ChainType } from './session-types'

import * as internal from './internal'
import { SessionRecord } from './session-record'
import { textsecure } from './protos'
import { SessionLock } from './session-lock'
import { uint8ArrayToBase64 } from './helpers'

/**
 * Handles the creation and management of secure sessions using the X3DH and Double Ratchet protocols, as specified by Signal/libsignal.
 *
 * Reference:
 * - X3DH: https://signal.org/docs/specifications/x3dh/
 * - Double Ratchet: https://signal.org/docs/specifications/doubleratchet/
 *
 * @example
 * ```ts
 * const builder = new SessionBuilder(storage, remoteAddress)
 * const session = await builder.processPreKeyJob(device)
 * ```
 */
export class SessionBuilder {
    remoteAddress: SignalProtocolAddressType
    storage: StorageType

    /**
     * Creates a new SessionBuilder for a given remote address and storage.
     * @param storage Storage backend implementing StorageType
     * @param remoteAddress Remote party's SignalProtocolAddress
     */
    constructor(storage: StorageType, remoteAddress: SignalProtocolAddressType) {
        this.remoteAddress = remoteAddress
        this.storage = storage
    }

    /**
     * Processes a pre-key job for a given device, establishing a new session if needed.
     * @param device DeviceType containing identity and pre-keys
     * @returns Promise resolving to the established SessionType
     * @throws Error if identity is not trusted or keys are invalid
     */
    processPreKeyJob = async (device: DeviceType): Promise<SessionType> => {
        const trusted = await this.storage.isTrustedIdentity(
            this.remoteAddress.name,
            device.identityKey,
            Direction.SENDING
        )
        if (!trusted) {
            throw new Error('Identity key changed')
        }

        // This will throw if invalid
        await internal.crypto.Ed25519Verify(
            device.identityKey,
            device.signedPreKey.publicKey,
            device.signedPreKey.signature
        )

        const ephemeralKey = await internal.crypto.createKeyPair()

        const deviceOneTimePreKey = device.preKey?.publicKey

        const session = await this.startSessionAsInitiator(
            ephemeralKey,
            device.identityKey,
            device.signedPreKey.publicKey,
            deviceOneTimePreKey,
            device.registrationId
        )
        session.pendingPreKey = {
            signedKeyId: device.signedPreKey.keyId,
            baseKey: ephemeralKey.pubKey,
        }
        if (device.preKey) {
            session.pendingPreKey.preKeyId = device.preKey.keyId
        }
        const address = this.remoteAddress.toString()
        const serialized = await this.storage.loadSession(address)
        let record: SessionRecord
        if (serialized !== undefined) {
            record = SessionRecord.deserialize(serialized)
        } else {
            record = new SessionRecord()
        }

        record.archiveCurrentState()
        record.updateSessionState(session)
        await Promise.all([
            this.storage.storeSession(address, record.serialize()),
            this.storage.saveIdentity(this.remoteAddress.toString(), session.indexInfo.remoteIdentityKey),
        ])

        return session
    }

    /**
     * Starts a session as the initiator (Alice) according to the X3DH protocol.
     * @param EKa Ephemeral key pair (ours)
     * @param IKb Remote identity public key
     * @param SPKb Remote signed pre-key public key
     * @param OPKb Remote one-time pre-key public key (optional)
     * @param registrationId Remote registration ID (optional)
     * @returns Promise resolving to a new SessionType
     * @throws Error if keys are missing
     *
     * @see https://signal.org/docs/specifications/x3dh/
     */
    startSessionAsInitiator = async (
        EKa: KeyPairType<Uint8Array>,
        IKb: Uint8Array,
        SPKb: Uint8Array,
        OPKb: Uint8Array | undefined,
        registrationId?: number
    ): Promise<SessionType> => {
        const IKa = await this.storage.getIdentityKeyPair()

        if (!IKa) {
            throw new Error(`No identity key. Cannot initiate session.`)
        }

        let sharedSecret: Uint8Array
        if (OPKb === undefined) {
            sharedSecret = new Uint8Array(32 * 4)
        } else {
            sharedSecret = new Uint8Array(32 * 5)
        }

        // As specified in X3DH spec secion 22, the first 32 bytes are
        // 0xFF for curve25519 (https://signal.org/docs/specifications/x3dh/#cryptographic-notation)
        for (let i = 0; i < 32; i++) {
            sharedSecret[i] = 0xff
        }

        if (!SPKb) {
            throw new Error(`theirSignedPubKey is undefined. Cannot proceed with ECDHE`)
        }

        // X3DH Section 3.3. https://signal.org/docs/specifications/x3dh/
        // We'll handle the possible one-time prekey below
        const ecRes = await Promise.all([
            internal.crypto.ECDHE(SPKb, IKa.privKey),
            internal.crypto.ECDHE(IKb, EKa.privKey),
            internal.crypto.ECDHE(SPKb, EKa.privKey),
        ])

        sharedSecret.set(ecRes[0], 32)
        sharedSecret.set(ecRes[1], 32 * 2)
        sharedSecret.set(ecRes[2], 32 * 3)

        if (OPKb !== undefined) {
            const ecRes4 = await internal.crypto.ECDHE(OPKb, EKa.privKey)
            sharedSecret.set(ecRes4, 32 * 4)
        }

        const masterKey = await internal.crypto.HKDF(sharedSecret, new Uint8Array(32), 'WhisperText')

        const session: SessionType = {
            registrationId: registrationId,
            currentRatchet: {
                rootKey: masterKey[0],
                lastRemoteEphemeralKey: SPKb,
                previousCounter: 0,
            },
            indexInfo: {
                remoteIdentityKey: IKb,
                closed: -1,
            },
            oldRatchetList: [],
            chains: {},
        }

        // We're initiating so we go ahead and set our first sending ephemeral key now,
        // otherwise we figure it out when we first maybeStepRatchet with the remote's ephemeral key

        session.indexInfo.baseKey = EKa.pubKey
        session.indexInfo.baseKeyType = BaseKeyType.OURS
        const ourSendingEphemeralKey = await internal.crypto.createKeyPair()
        session.currentRatchet.ephemeralKeyPair = ourSendingEphemeralKey

        await this.calculateSendingRatchet(session, SPKb)

        return session
    }

    /**
     * Starts a session as the responder (Bob) from a PreKeySignalMessage, according to the X3DH protocol.
     * @param OPKb Our one-time pre-key pair (optional)
     * @param SPKb Our signed pre-key pair
     * @param message PreKeySignalMessage from the initiator
     * @returns Promise resolving to a new SessionType
     * @throws Error if keys are missing
     *
     * @see https://signal.org/docs/specifications/x3dh/
     */
    startSessionWthPreKeyMessage = async (
        OPKb: KeyPairType<Uint8Array> | undefined,
        SPKb: KeyPairType<Uint8Array>,
        message: textsecure.PreKeySignalMessage
    ): Promise<SessionType> => {
        const IKb = await this.storage.getIdentityKeyPair()
        const IKa = message.identityKey!
        const EKa = message.baseKey!

        if (!IKb) {
            throw new Error(`No identity key. Cannot initiate session.`)
        }

        let sharedSecret: Uint8Array
        if (!OPKb) {
            sharedSecret = new Uint8Array(32 * 4)
        } else {
            sharedSecret = new Uint8Array(32 * 5)
        }

        // As specified in X3DH spec secion 22, the first 32 bytes are
        // 0xFF for curve25519 (https://signal.org/docs/specifications/x3dh/#cryptographic-notation)
        for (let i = 0; i < 32; i++) {
            sharedSecret[i] = 0xff
        }

        // X3DH Section 3.3. https://signal.org/docs/specifications/x3dh/
        // We'll handle the possible one-time prekey below
        const ecRes = await Promise.all([
            internal.crypto.ECDHE(IKa, SPKb.privKey),
            internal.crypto.ECDHE(EKa, IKb.privKey),
            internal.crypto.ECDHE(EKa, SPKb.privKey),
        ])

        sharedSecret.set(ecRes[0], 32)
        sharedSecret.set(ecRes[1], 32 * 2)
        sharedSecret.set(ecRes[2], 32 * 3)

        if (OPKb) {
            const ecRes4 = await internal.crypto.ECDHE(EKa, OPKb.privKey)
            sharedSecret.set(ecRes4, 32 * 4)
        }

        const masterKey = await internal.crypto.HKDF(sharedSecret, new Uint8Array(32), 'WhisperText')

        const session: SessionType = {
            registrationId: message.registrationId!,
            currentRatchet: {
                rootKey: masterKey[0],
                lastRemoteEphemeralKey: EKa,
                previousCounter: 0,
            },
            indexInfo: {
                remoteIdentityKey: IKa,
                closed: -1,
            },
            oldRatchetList: [],
            chains: {},
        }

        // If we're initiating we go ahead and set our first sending ephemeral key now,
        // otherwise we figure it out when we first maybeStepRatchet with the remote's ephemeral key

        session.indexInfo.baseKey = EKa
        session.indexInfo.baseKeyType = BaseKeyType.THEIRS
        session.currentRatchet.ephemeralKeyPair = SPKb

        return session
    }

    /**
     * Calculates and sets the sending chain for the Double Ratchet, given a remote ephemeral key.
     * @param session The session to update
     * @param remoteKey The remote party's ephemeral public key
     * @returns Promise resolving when the sending ratchet is updated
     *
     * @see https://signal.org/docs/specifications/doubleratchet/
     */
    async calculateSendingRatchet(session: SessionType, remoteKey: Uint8Array): Promise<void> {
        const ratchet = session.currentRatchet
        if (!ratchet.ephemeralKeyPair) {
            throw new Error(`Invalid ratchet - ephemeral key pair is missing`)
        }

        const ephPrivKey = ratchet.ephemeralKeyPair.privKey
        const rootKey = ratchet.rootKey
        const ephPubKey = uint8ArrayToBase64(ratchet.ephemeralKeyPair.pubKey)
        if (!(ephPrivKey && ephPubKey && rootKey)) {
            throw new Error(`Missing key, cannot calculate sending ratchet`)
        }
        const sharedSecret = await internal.crypto.ECDHE(remoteKey, ephPrivKey)
        const masterKey = await internal.crypto.HKDF(sharedSecret, rootKey, 'WhisperRatchet')

        session.chains[ephPubKey] = {
            messageKeys: {},
            chainKey: { counter: -1, key: masterKey[1] },
            chainType: ChainType.SENDING,
        }
        ratchet.rootKey = masterKey[0]
    }

    /**
     * Processes a pre-key for a device, ensuring session setup is atomic and thread-safe.
     * @param device DeviceType containing identity and pre-keys
     * @returns Promise resolving to the established SessionType
     *
     * @example
     * ```ts
     * const session = await builder.processPreKey(device)
     * ```
     */
    async processPreKey(device: DeviceType): Promise<SessionType> {
        const runJob = async () => {
            const sess = await this.processPreKeyJob(device)
            return sess
        }
        return SessionLock.queueJobForNumber(this.remoteAddress.toString(), runJob)
    }

    /**
     * Processes a v3 PreKeySignalMessage, updating the session record as needed.
     * @param record The current SessionRecord
     * @param message The PreKeySignalMessage to process
     * @returns Promise resolving to the preKeyId used, or void
     * @throws Error if the identity is unknown or keys are missing
     *
     * @see https://signal.org/docs/specifications/x3dh/
     */
    async processV3(record: SessionRecord, message: textsecure.PreKeySignalMessage): Promise<number | void> {
        const trusted = this.storage.isTrustedIdentity(
            this.remoteAddress.name,
            message.identityKey!,
            Direction.RECEIVING
        )

        if (!trusted) {
            throw new Error(`Unknown identity key: ${message.identityKey!}`)
        }
        const [preKeyPair, signedPreKeyPair] = await Promise.all([
            this.storage.loadPreKey(message.preKeyId!),
            this.storage.loadSignedPreKey(message.signedPreKeyId!),
        ])

        if (record.getSessionByBaseKey(message.baseKey!)) {
            return
        }

        const session = record.getOpenSession()

        if (signedPreKeyPair === undefined) {
            // Session may or may not be the right one, but if its not, we
            // can't do anything about it ...fall through and let
            // decryptWhisperMessage handle that case
            if (session !== undefined && session.currentRatchet !== undefined) {
                return
            } else {
                throw new Error('Missing Signed PreKey for PreKeySignalMessage')
            }
        }

        if (session !== undefined) {
            record.archiveCurrentState()
        }
        if (message.preKeyId && !preKeyPair) {
            // console.log('Invalid prekey id', message.preKeyId)
        }

        const new_session = await this.startSessionWthPreKeyMessage(preKeyPair, signedPreKeyPair, message)
        record.updateSessionState(new_session)
        await this.storage.saveIdentity(this.remoteAddress.toString(), message.identityKey!)

        return message.preKeyId!
    }
}
