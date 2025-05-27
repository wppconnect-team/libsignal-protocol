/**
 * Defines core types and interfaces for the Signal/libsignal protocol, including addresses, key pairs, storage, and cryptographic operations.
 *
 * Reference: https://signal.org/docs/
 */

/**
 * Represents a unique address for a device in the Signal protocol (user + deviceId).
 */
export interface SignalProtocolAddressType {
    readonly name: string
    readonly deviceId: number
    toString: () => string
    equals: (other: SignalProtocolAddressType) => boolean
}

/**
 * Interface for generating human-readable fingerprints for identity verification.
 */
export interface FingerprintGeneratorType {
    createFor: (
        localIdentifier: string,
        localIdentityKey: Uint8Array,
        remoteIdentifier: string,
        remoteIdentityKey: Uint8Array
    ) => Promise<string>
}

/**
 * Represents a Curve25519 key pair.
 * @template T Type of key material (default: Uint8Array)
 */
export interface KeyPairType<T = Uint8Array> {
    pubKey: T
    privKey: T
}

/**
 * Represents a pre-key pair (used in X3DH session setup).
 * @template T Type of key material (default: Uint8Array)
 */
export interface PreKeyPairType<T = Uint8Array> {
    keyId: number
    keyPair: KeyPairType<T>
}

/**
 * Represents a signed pre-key pair (used in X3DH session setup).
 * @template T Type of key material (default: Uint8Array)
 */
export interface SignedPreKeyPairType<T = Uint8Array> extends PreKeyPairType<T> {
    signature: T
}

/**
 * Represents a pre-key (public part only).
 * @template T Type of key material (default: Uint8Array)
 */
export interface PreKeyType<T = Uint8Array> {
    keyId: number
    publicKey: T
}

/**
 * Represents a signed public pre-key (public part + signature).
 * @template T Type of key material (default: Uint8Array)
 */
export interface SignedPublicPreKeyType<T = Uint8Array> extends PreKeyType<T> {
    signature: T
}

/**
 * Serialized session record (as string).
 */
export type SessionRecordType = string

/**
 * Indicates the direction of a message or trust check (sending or receiving).
 */
export enum Direction {
    SENDING = 1,
    RECEIVING = 2,
}

/**
 * Interface for secure storage of keys, sessions, and identities in the Signal protocol.
 */
export interface StorageType {
    getIdentityKeyPair: () => Promise<KeyPairType | undefined>
    getLocalRegistrationId: () => Promise<number | undefined>

    isTrustedIdentity: (identifier: string, identityKey: Uint8Array, direction: Direction) => Promise<boolean>
    saveIdentity: (encodedAddress: string, publicKey: Uint8Array, nonblockingApproval?: boolean) => Promise<boolean>

    loadPreKey: (encodedAddress: string | number) => Promise<KeyPairType | undefined>
    storePreKey: (keyId: number | string, keyPair: KeyPairType) => Promise<void>
    removePreKey: (keyId: number | string) => Promise<void>

    storeSession: (encodedAddress: string, record: SessionRecordType) => Promise<void>
    loadSession: (encodedAddress: string) => Promise<SessionRecordType | undefined>

    // This returns a KeyPairType, but note that it's the implementer's responsibility to validate!
    loadSignedPreKey: (keyId: number | string) => Promise<KeyPairType | undefined>
    storeSignedPreKey: (keyId: number | string, keyPair: KeyPairType) => Promise<void>
    removeSignedPreKey: (keyId: number | string) => Promise<void>
}

/**
 * Interface for cryptographic curve operations (Curve25519/Ed25519).
 */
export interface CurveType {
    createKeyPair: (privKey: Uint8Array) => KeyPairType | Promise<KeyPairType>
    calculateAgreement: (pubKey: Uint8Array, privKey: Uint8Array) => Uint8Array | Promise<Uint8Array>
    verifySignature: (pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array) => boolean | Promise<boolean>
    calculateSignature: (privKey: Uint8Array, message: Uint8Array) => Uint8Array | Promise<Uint8Array>
}
