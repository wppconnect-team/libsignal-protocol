import * as Internal from '.'
import * as util from '../helpers'
import { KeyPairType } from '../types'
import { AsyncCurve as AsyncCurveType } from '@privacyresearch/curve25519-typescript'
import { webcrypto } from 'crypto'

export class Crypto {
    private _curve: Internal.AsyncCurve
    private _webcrypto: webcrypto.Crypto

    constructor(crypto?: webcrypto.Crypto) {
        this._curve = new Internal.AsyncCurve()
        this._webcrypto = crypto || webcrypto
    }

    set webcrypto(wc: webcrypto.Crypto) {
        this._webcrypto = wc
    }
    set curve(c: AsyncCurveType) {
        this._curve.curve = c
    }

    getRandomBytes(n: number): Uint8Array {
        const array = new Uint8Array(n)
        this._webcrypto.getRandomValues(array)
        return array
    }

    async encrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Promise<Uint8Array> {
        const impkey = await this._webcrypto.subtle.importKey('raw', key, { name: 'AES-CBC' }, false, ['encrypt'])
        const result = await this._webcrypto.subtle.encrypt({ name: 'AES-CBC', iv }, impkey, data)
        return new Uint8Array(result)
    }

    async decrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Promise<Uint8Array> {
        const impkey = await this._webcrypto.subtle.importKey('raw', key, { name: 'AES-CBC' }, false, ['decrypt'])
        const result = await this._webcrypto.subtle.decrypt({ name: 'AES-CBC', iv }, impkey, data)
        return new Uint8Array(result)
    }
    async sign(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
        const impkey = await this._webcrypto.subtle.importKey(
            'raw',
            key,
            { name: 'HMAC', hash: { name: 'SHA-256' } },
            false,
            ['sign']
        )
        try {
            const result = await this._webcrypto.subtle.sign({ name: 'HMAC', hash: 'SHA-256' }, impkey, data)
            return new Uint8Array(result)
        } catch (e) {
            // console.log({ e, data, impkey })
            throw e
        }
    }
    async hash(data: Uint8Array): Promise<Uint8Array> {
        const result = await this._webcrypto.subtle.digest({ name: 'SHA-512' }, data)
        return new Uint8Array(result)
    }

    async HKDF(input: Uint8Array, salt: Uint8Array, info: Uint8Array): Promise<Uint8Array[]> {
        // Specific implementation of RFC 5869 that only returns the first 3 32-byte chunks
        if (typeof info === 'string') {
            throw new Error(`HKDF info was a string`)
        }
        const PRK = await Internal.crypto.sign(salt, input)
        const infoBuffer = new Uint8Array(info.length + 1 + 32)
        infoBuffer.set(info, 32)
        infoBuffer[infoBuffer.length - 1] = 1
        const T1 = await Internal.crypto.sign(PRK, infoBuffer.slice(32))
        infoBuffer.set(T1)
        infoBuffer[infoBuffer.length - 1] = 2
        const T2 = await Internal.crypto.sign(PRK, infoBuffer)
        infoBuffer.set(T2)
        infoBuffer[infoBuffer.length - 1] = 3
        const T3 = await Internal.crypto.sign(PRK, infoBuffer)
        return [T1, T2, T3]
    }

    // Curve25519 crypto

    createKeyPair(privKey?: Uint8Array): Promise<KeyPairType> {
        if (!privKey) {
            privKey = this.getRandomBytes(32)
        }
        return this._curve.createKeyPair(privKey)
    }

    ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Promise<Uint8Array> {
        return this._curve.ECDHE(pubKey, privKey)
    }

    Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
        return this._curve.Ed25519Sign(privKey, message)
    }

    Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): Promise<boolean> {
        return this._curve.Ed25519Verify(pubKey, msg, sig)
    }
}

export const crypto = new Crypto()

export function setWebCrypto(webcrypto: webcrypto.Crypto): void {
    crypto.webcrypto = webcrypto
}

export function setCurve(curve: AsyncCurveType): void {
    crypto.curve = curve
}

// HKDF for TextSecure has a bit of additional handling - salts always end up being 32 bytes
export function HKDF(input: Uint8Array, salt: Uint8Array, info: string): Promise<Uint8Array[]> {
    if (salt.length != 32) {
        throw new Error('Got salt of incorrect length')
    }

    const abInfo = util.binaryStringToUint8Array(info)
    if (!abInfo) {
        throw new Error(`Invalid HKDF info`)
    }

    return crypto.HKDF(input, salt, abInfo)
}

export async function verifyMAC(data: Uint8Array, key: Uint8Array, mac: Uint8Array, length: number): Promise<void> {
    const calculated_mac = await crypto.sign(key, data)
    if (mac.length != length || calculated_mac.length < length) {
        throw new Error('Bad MAC length')
    }
    const a = new Uint8Array(calculated_mac)
    const b = new Uint8Array(mac)
    let result = 0
    for (let i = 0; i < mac.length; ++i) {
        result = result | (a[i] ^ b[i])
    }
    if (result !== 0) {
        throw new Error('Bad MAC')
    }
}

export function calculateMAC(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
    return crypto.sign(key, data)
}
