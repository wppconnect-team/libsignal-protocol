import { KeyPairType, SignedPublicPreKeyType, PreKeyType } from './types'

/**
 * Defines types and structures for session state, ratchets, chains, and device info as used in the Signal/libsignal protocol.
 *
 * Reference: https://signal.org/docs/
 */

/**
 * Indicates the type of a message chain (sending or receiving) in the Double Ratchet algorithm.
 */
export enum ChainType {
    SENDING = 1,
    RECEIVING = 2,
}

/**
 * Indicates the owner of a base key in a session (ours or theirs).
 */
export enum BaseKeyType {
    OURS = 1,
    THEIRS = 2,
}

/**
 * Represents the state of a secure session, including ratchets, chains, and pending pre-keys.
 *
 * @template T Type of key material (default: Uint8Array)
 */
export interface SessionType<T = Uint8Array> {
    indexInfo: IndexInfo<T>
    registrationId?: number
    currentRatchet: Ratchet<T>
    pendingPreKey?: PendingPreKey<T>
    oldRatchetList: OldRatchetInfo<T>[]
    chains: { [ephKeyString: string]: Chain<T> }
}

/**
 * Metadata about the session, including remote identity and base key info.
 */
export interface IndexInfo<T> {
    closed: number
    remoteIdentityKey: T
    baseKey?: T
    baseKeyType?: BaseKeyType
}

/**
 * Represents the current ratchet state in the Double Ratchet algorithm.
 */
export interface Ratchet<T> {
    rootKey: T
    ephemeralKeyPair?: KeyPairType<T>
    lastRemoteEphemeralKey: T
    previousCounter: number
    added?: number //timestamp
}

/**
 * Information about a previous ratchet step (for skipped messages).
 */
export interface OldRatchetInfo<T> {
    ephemeralKey: T
    added: number //timestamp
}

/**
 * Represents a message chain (sending or receiving) in the Double Ratchet algorithm.
 */
export interface Chain<T> {
    chainType: ChainType
    chainKey: { key?: T; counter: number }
    messageKeys: { [key: number]: T }
}

/**
 * Information about a pending pre-key (for session setup).
 */
export interface PendingPreKey<T> {
    baseKey: T
    preKeyId?: number
    signedKeyId: number
}

/**
 * Types of encrypted messages in the Signal protocol.
 */
export enum EncryptionResultMessageType {
    WhisperMessage = 1,
    PreKeyWhisperMessage = 3,
}

/**
 * Result of an encryption operation, including type, body, and registration ID.
 */
export interface EncryptionResult {
    type: EncryptionResultMessageType
    body: Uint8Array
    registrationId: number
}

/**
 * Represents a device in the Signal protocol, including identity and pre-keys.
 */
export interface DeviceType<T = Uint8Array> {
    identityKey: T
    signedPreKey: SignedPublicPreKeyType<T>
    preKey?: PreKeyType<T>
    registrationId?: number
}

/**
 * Interface for session record storage and management.
 */
export interface RecordType {
    archiveCurrentState: () => void
    deleteAllSessions: () => void
    getOpenSession: () => SessionType | undefined
    getSessionByBaseKey: (baseKey: Uint8Array) => SessionType | undefined
    getSessionByRemoteEphemeralKey: (remoteEphemeralKey: Uint8Array) => SessionType | undefined
    getSessions: () => SessionType[]
    haveOpenSession: () => boolean
    promoteState: (session: SessionType) => void
    serialize: () => string
    updateSessionState: (session: SessionType) => void
}
