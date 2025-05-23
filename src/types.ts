/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export interface SignalProtocolAddressType {
    readonly name: string
    readonly deviceId: number
    toString: () => string
    equals: (other: SignalProtocolAddressType) => boolean
}

export interface FingerprintGeneratorType {
    createFor: (
        localIdentifier: string,
        localIdentityKey: Uint8Array,
        remoteIdentifier: string,
        remoteIdentityKey: Uint8Array
    ) => Promise<string>
}

export interface KeyPairType<T = Uint8Array> {
    pubKey: T
    privKey: T
}

export interface PreKeyPairType<T = Uint8Array> {
    keyId: number
    keyPair: KeyPairType<T>
}

export interface SignedPreKeyPairType<T = Uint8Array> extends PreKeyPairType<T> {
    signature: T
}

export interface PreKeyType<T = Uint8Array> {
    keyId: number
    publicKey: T
}

export interface SignedPublicPreKeyType<T = Uint8Array> extends PreKeyType<T> {
    signature: T
}

export type SessionRecordType = string

export enum Direction {
    SENDING = 1,
    RECEIVING = 2,
}
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

    // This returns a KeyPairType, but note that it's the implenenter's responsibility to validate!
    loadSignedPreKey: (keyId: number | string) => Promise<KeyPairType | undefined>
    storeSignedPreKey: (keyId: number | string, keyPair: KeyPairType) => Promise<void>
    removeSignedPreKey: (keyId: number | string) => Promise<void>
}

export interface CurveType {
    generateKeyPair: () => Promise<KeyPairType>
    createKeyPair: (privKey: Uint8Array) => Promise<KeyPairType>
    calculateAgreement: (pubKey: Uint8Array, privKey: Uint8Array) => Promise<Uint8Array>
    verifySignature: (pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array) => Promise<void>
    calculateSignature: (privKey: Uint8Array, message: Uint8Array) => Uint8Array | Promise<Uint8Array>
    validatePubKeyFormat: (buffer: Uint8Array) => Uint8Array
}

export interface AsyncCurveType {
    generateKeyPair: () => Promise<KeyPairType>
    createKeyPair: (privKey: Uint8Array) => Promise<KeyPairType>
    calculateAgreement: (pubKey: Uint8Array, privKey: Uint8Array) => Promise<Uint8Array>
    verifySignature: (pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array) => Promise<boolean>
    calculateSignature: (privKey: Uint8Array, message: Uint8Array) => Promise<Uint8Array>
}
