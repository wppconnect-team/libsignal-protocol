import { SenderKeyStore } from './state/sender-key-store'
import { SenderKeyName } from './sender-key-name'
import { KeyHelper } from '../key-helper'
import { SessionLock } from '../session-lock'
import { SenderKeyDistributionMessage } from './sender-key-distribution-message'
import { SenderSigningKey } from './ratchet/sender-signing-key'

/**
 * Handles creation and management of group sessions using the Sender Key protocol (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const builder = new GroupSessionBuilder(store, senderKeyName)
 * const distributionMsg = await builder.create()
 * ```
 */
export class GroupSessionBuilder {
    private senderKeyStore: SenderKeyStore

    /**
     * @param senderKeyStore The storage interface for sender keys
     */
    constructor(senderKeyStore: SenderKeyStore) {
        this.senderKeyStore = senderKeyStore
    }

    /**
     * Processes a received SenderKeyDistributionMessage for a group session.
     * @param senderKeyName The (groupId, senderId, deviceId) tuple
     * @param senderKeyDistributionMessage The received distribution message
     */
    async process(
        senderKeyName: SenderKeyName,
        senderKeyDistributionMessage: SenderKeyDistributionMessage
    ): Promise<void> {
        const runJob = async () => {
            // senderKeyDistributionMessage must have id, iteration, chainKey, signatureKey
            const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
            senderKeyRecord.addSenderKeyState(
                senderKeyDistributionMessage.id,
                senderKeyDistributionMessage.iteration,
                senderKeyDistributionMessage.chainKey,
                senderKeyDistributionMessage.signingKey
            )
            await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
        }
        return SessionLock.queueJobForNumber(senderKeyName.toString(), runJob)
    }

    /**
     * Creates a group session for sending messages.
     * @param senderKeyName The (groupId, senderId, deviceId) tuple
     * @returns An object representing the SenderKeyDistributionMessage
     */
    async create(senderKeyName: SenderKeyName): Promise<SenderKeyDistributionMessage> {
        const runJob = async () => {
            // Returns an object representing SenderKeyDistributionMessage
            const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
            if (senderKeyRecord.isEmpty()) {
                senderKeyRecord.setSenderKeyState(
                    KeyHelper.generateRegistrationId(),
                    0,
                    await KeyHelper.generateSenderKey(),
                    await KeyHelper.generateIdentityKeyPair().then(
                        (keyPair) =>
                            new SenderSigningKey({
                                public: keyPair.pubKey,
                                private: keyPair.privKey,
                            })
                    )
                )
                await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
            }
            const state = senderKeyRecord.getSenderKeyState()

            return new SenderKeyDistributionMessage({
                id: state.keyId,
                iteration: state.senderChainKey.iteration,
                chainKey: new Uint8Array(state.senderChainKey.chainKey),
                signingKey: new Uint8Array(state.signingKey.public),
            })
        }

        return SessionLock.queueJobForNumber(senderKeyName.toString(), runJob)
    }
}
