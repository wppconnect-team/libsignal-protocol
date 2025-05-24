/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignalProtocolAddress } from '../signal-protocol-address'
import { StorageType, Direction, SessionRecordType, PreKeyPairType, SignedPreKeyPairType } from '../types'
import * as util from '../helpers'

// Type guards
export function isKeyPairType(kp: any): kp is KeyPairType {
    return !!(kp?.privKey && kp?.pubKey)
}

export function isPreKeyType(pk: any): pk is PreKeyPairType {
    return typeof pk?.keyId === 'number' && isKeyPairType(pk?.keyPair)
}

export function isSignedPreKeyType(spk: any): spk is SignedPreKeyPairType {
    return spk?.signature && isPreKeyType(spk)
}

interface KeyPairType {
    pubKey: Uint8Array
    privKey: Uint8Array
}

interface PreKeyType {
    keyId: number
    keyPair: KeyPairType
}
interface SignedPreKeyType extends PreKeyType {
    signature: Uint8Array
}

function isUint8Array(thing: StoreValue): boolean {
    return thing instanceof Uint8Array
}

type StoreValue = KeyPairType | string | number | PreKeyType | SignedPreKeyType | Uint8Array | undefined

export class SignalProtocolStore implements StorageType {
    private _store: Record<string, StoreValue>

    constructor() {
        this._store = {}
    }
    //
    get(key: string, defaultValue: StoreValue): StoreValue {
        if (key === null || key === undefined) throw new Error('Tried to get value for undefined/null key')
        if (key in this._store) {
            return this._store[key]
        } else {
            return defaultValue
        }
    }
    remove(key: string): void {
        if (key === null || key === undefined) throw new Error('Tried to remove value for undefined/null key')
        delete this._store[key]
    }
    put(key: string, value: StoreValue): void {
        if (key === undefined || value === undefined || key === null || value === null)
            throw new Error('Tried to store undefined/null')
        this._store[key] = value
    }

    async getIdentityKeyPair(): Promise<KeyPairType | undefined> {
        const kp = this.get('identityKey', undefined)
        if (isKeyPairType(kp) || typeof kp === 'undefined') {
            return kp
        }
        throw new Error('Item stored as identity key of unknown type.')
    }

    async getLocalRegistrationId(): Promise<number | undefined> {
        const rid = this.get('registrationId', undefined)
        if (typeof rid === 'number' || typeof rid === 'undefined') {
            return rid
        }
        throw new Error('Stored Registration ID is not a number')
    }
    isTrustedIdentity(identifier: string, identityKey: Uint8Array, _direction: Direction): Promise<boolean> {
        if (identifier === null || identifier === undefined) {
            throw new Error('tried to check identity key for undefined/null key')
        }
        const trusted = this.get('identityKey' + identifier, undefined)
        if (trusted === undefined) {
            return Promise.resolve(true)
        }
        return Promise.resolve(
            util.uint8ArrayToBinaryString(identityKey) === util.uint8ArrayToBinaryString(trusted as Uint8Array)
        )
    }
    async loadPreKey(keyId: string | number): Promise<KeyPairType | undefined> {
        let res = this.get('25519KeypreKey' + keyId, undefined)
        if (isKeyPairType(res)) {
            res = { pubKey: res.pubKey, privKey: res.privKey }
            return res
        } else if (typeof res === 'undefined') {
            return res
        }
        throw new Error(`stored key has wrong type`)
    }
    async loadSession(identifier: string): Promise<SessionRecordType | undefined> {
        const rec = this.get('session' + identifier, undefined)
        if (typeof rec === 'string') {
            return rec as string
        } else if (typeof rec === 'undefined') {
            return rec
        }
        throw new Error(`session record is not an Uint8Array`)
    }

    async loadSignedPreKey(keyId: number | string): Promise<KeyPairType | undefined> {
        const res = this.get('25519KeysignedKey' + keyId, undefined)
        if (isKeyPairType(res)) {
            return { pubKey: res.pubKey, privKey: res.privKey }
        } else if (typeof res === 'undefined') {
            return res
        }
        throw new Error(`stored key has wrong type`)
    }
    async removePreKey(keyId: number | string): Promise<void> {
        this.remove('25519KeypreKey' + keyId)
    }
    async saveIdentity(identifier: string, identityKey: Uint8Array): Promise<boolean> {
        if (identifier === null || identifier === undefined)
            throw new Error('Tried to put identity key for undefined/null key')

        const address = SignalProtocolAddress.fromString(identifier)

        const existing = this.get('identityKey' + address.getName(), undefined)
        this.put('identityKey' + address.getName(), identityKey)
        if (existing && !isUint8Array(existing)) {
            throw new Error('Identity Key is incorrect type')
        }

        if (
            existing &&
            util.uint8ArrayToBinaryString(identityKey) !== util.uint8ArrayToBinaryString(existing as Uint8Array)
        ) {
            return true
        } else {
            return false
        }
    }
    async storeSession(identifier: string, record: SessionRecordType): Promise<void> {
        return this.put('session' + identifier, record)
    }
    async loadIdentityKey(identifier: string): Promise<Uint8Array | undefined> {
        if (identifier === null || identifier === undefined) {
            throw new Error('Tried to get identity key for undefined/null key')
        }

        const key = this.get('identityKey' + identifier, undefined)
        if (isUint8Array(key)) {
            return key as Uint8Array
        } else if (typeof key === 'undefined') {
            return key
        }
        throw new Error(`Identity key has wrong type`)
    }
    async storePreKey(keyId: number | string, keyPair: KeyPairType): Promise<void> {
        return this.put('25519KeypreKey' + keyId, keyPair)
    }

    // TODO: Why is this keyId a number where others are strings?
    async storeSignedPreKey(keyId: number | string, keyPair: KeyPairType): Promise<void> {
        return this.put('25519KeysignedKey' + keyId, keyPair)
    }
    async removeSignedPreKey(keyId: number | string): Promise<void> {
        return this.remove('25519KeysignedKey' + keyId)
    }
    async removeSession(identifier: string): Promise<void> {
        return this.remove('session' + identifier)
    }
    async removeAllSessions(identifier: string): Promise<void> {
        for (const id in this._store) {
            if (id.startsWith('session' + identifier)) {
                delete this._store[id]
            }
        }
    }
}
