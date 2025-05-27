import { Curve } from './curve'
import * as util from '../helpers'
import { KeyPairType } from '../types'
import * as nodecrypto from 'crypto'

/**
 * High-level cryptographic utility class using Node.js crypto and Curve25519/Ed25519.
 *
 * Provides random bytes, symmetric encryption/decryption, HMAC, hashing, HKDF, and curve operations.
 *
 * - Usa Node.js crypto para operações simétricas e de hash.
 * - Usa Curve25519/Ed25519 para operações assimétricas (via classe Curve).
 *
 * References:
 * - Signal/libsignal: https://github.com/signalapp/libsignal-protocol-java
 */
export class Crypto {
    private _curve: Curve

    /**
     * Cria uma nova instância de Crypto.
     * @param curve Instância opcional de Curve
     */
    constructor(curve?: Curve) {
        this._curve = curve || new Curve()
    }

    /**
     * Generates cryptographically secure random bytes.
     * @param n Number of bytes
     * @returns Uint8Array of random bytes
     *
     * @example
     * ```ts
     * const random = crypto.getRandomBytes(32)
     * ```
     */
    getRandomBytes(n: number): Uint8Array {
        return nodecrypto.randomBytes(n)
    }

    /**
     * Encrypts data using AES-CBC.
     * @param key AES key of 16/24/32 bytes as Uint8Array
     * @param data Data to encrypt as Uint8Array
     * @param iv 16-byte initialization vector as Uint8Array
     * @returns Promise resolving to encrypted data as Uint8Array
     *
     * @example
     * ```ts
     * const ciphertext = await crypto.encrypt(key, data, iv)
     * ```
     */
    async encrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Promise<Uint8Array> {
        const cipher = nodecrypto.createCipheriv('aes-' + key.length * 8 + '-cbc', key, iv)
        const encrypted = Buffer.concat([cipher.update(data), cipher.final()])
        return new Uint8Array(encrypted)
    }

    /**
     * Decrypts data using AES-CBC.
     * @param key AES key of 16/24/32 bytes as Uint8Array
     * @param data Data to decrypt as Uint8Array
     * @param iv 16-byte initialization vector as Uint8Array
     * @returns Promise resolving to decrypted data as Uint8Array
     *
     * @example
     * ```ts
     * const plaintext = await crypto.decrypt(key, ciphertext, iv)
     * ```
     */
    async decrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Promise<Uint8Array> {
        const decipher = nodecrypto.createDecipheriv('aes-' + key.length * 8 + '-cbc', key, iv)
        const decrypted = Buffer.concat([decipher.update(data), decipher.final()])
        return new Uint8Array(decrypted)
    }

    /**
     * Computes HMAC-SHA256 signature of data using the given key.
     * @param key HMAC key as Uint8Array
     * @param data Data to sign as Uint8Array
     * @returns Promise resolving to HMAC signature as Uint8Array
     *
     * @example
     * ```ts
     * const mac = await crypto.sign(key, data)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc2104
     */
    async sign(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
        const hmac = nodecrypto.createHmac('sha256', key)
        hmac.update(data)
        return new Uint8Array(hmac.digest())
    }

    /**
     * Computes SHA-512 hash of the input data.
     * @param data Data to hash as Uint8Array
     * @returns Promise resolving to SHA-512 hash as Uint8Array
     *
     * @example
     * ```ts
     * const hash = await crypto.hash(data)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc6234
     */
    async hash(data: Uint8Array): Promise<Uint8Array> {
        const hash = nodecrypto.createHash('sha512')
        hash.update(data)
        return new Uint8Array(hash.digest())
    }

    /**
     * Derives keys using HKDF (RFC 5869), as used in Signal/libsignal.
     * Always returns three 32-byte chunks. Salt must be 32 bytes.
     *
     * @param input Input keying material as Uint8Array
     * @param salt 32-byte salt as Uint8Array
     * @param info Context/application-specific info as Uint8Array or string
     * @returns Promise resolving to array of three 32-byte Uint8Array chunks
     *
     * @example
     * ```ts
     * const [k1, k2, k3] = await crypto.HKDF(input, salt, 'info')
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc5869
     */
    async HKDF(input: Uint8Array, salt: Uint8Array, info: Uint8Array | string): Promise<Uint8Array[]> {
        const abInfo = typeof info === 'string' ? util.binaryStringToUint8Array(info) : info
        if (!abInfo) {
            throw new Error(`Invalid HKDF info`)
        }

        const PRK = await this.sign(salt, input)
        const infoBuffer = new Uint8Array(abInfo.length + 1 + 32)
        infoBuffer.set(abInfo, 32)
        infoBuffer[infoBuffer.length - 1] = 1
        const T1 = await this.sign(PRK, infoBuffer.slice(32))
        infoBuffer.set(T1)
        infoBuffer[infoBuffer.length - 1] = 2
        const T2 = await this.sign(PRK, infoBuffer)
        infoBuffer.set(T2)
        infoBuffer[infoBuffer.length - 1] = 3
        const T3 = await this.sign(PRK, infoBuffer)
        return [T1, T2, T3]
    }

    /**
     * Verifies a MAC (HMAC-SHA256) against the provided data and key.
     * Throws if the MAC is invalid or has the wrong length.
     *
     * @param data Data as Uint8Array
     * @param key HMAC key as Uint8Array
     * @param mac MAC to verify as Uint8Array
     * @param length Expected MAC length in bytes
     * @throws Error if MAC is invalid
     *
     * @example
     * ```ts
     * await crypto.verifyMAC(data, key, mac, 32)
     * ```
     */
    async verifyMAC(data: Uint8Array, key: Uint8Array, mac: Uint8Array, length: number): Promise<void> {
        const calculated_mac = await this.sign(key, data)
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

    /**
     * Computes a MAC (HMAC-SHA256) for the given data and key.
     * @param key HMAC key as Uint8Array
     * @param data Data as Uint8Array
     * @returns Promise resolving to MAC as Uint8Array
     *
     * @example
     * ```ts
     * const mac = await crypto.calculateMAC(key, data)
     * ```
     */
    async calculateMAC(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
        return await this.sign(key, data)
    }

    // Curve25519 crypto

    /**
     * Generates a Curve25519 key pair. If no private key is provided, a random one is generated.
     * The returned public key is prefixed with 0x05 (33 bytes total), following the libsignal protocol standard.
     *
     * @param privKey Optional 32-byte private key as Uint8Array
     * @returns Promise resolving to KeyPairType, where pubKey is a 33-byte Uint8Array (0x05-prefixed)
     *
     * @example
     * ```ts
     * const keyPair = await crypto.createKeyPair()
     * // keyPair.pubKey[0] === 0x05
     * // keyPair.pubKey.length === 33
     * ```
     * @see https://github.com/signalapp/libsignal-protocol-java/blob/master/java/src/main/java/org/whispersystems/libsignal/ecc/Curve.java
     */
    async createKeyPair(privKey?: Uint8Array): Promise<KeyPairType> {
        if (!privKey) {
            privKey = this.getRandomBytes(32)
        }
        return this._curve.createKeyPair(privKey)
    }

    /**
     * Performs ECDH to derive a shared secret using Curve25519.
     * @param pubKey 32-byte public key as Uint8Array
     * @param privKey 32-byte private key as Uint8Array
     * @returns Promise resolving to shared secret as Uint8Array
     *
     * @example
     * ```ts
     * const shared = await crypto.ECDHE(pubKey, privKey)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc7748
     */
    async ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Promise<Uint8Array> {
        return this._curve.ECDHE(pubKey, privKey)
    }

    /**
     * Signs a message using Ed25519.
     * @param privKey 32-byte private key as Uint8Array
     * @param message Message to sign as Uint8Array
     * @returns Promise resolving to signature as Uint8Array (64 bytes)
     *
     * @example
     * ```ts
     * const sig = await crypto.Ed25519Sign(privKey, message)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    async Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
        return this._curve.Ed25519Sign(privKey, message)
    }

    /**
     * Verifies an Ed25519 signature.
     * @param pubKey 32-byte public key as Uint8Array
     * @param msg Message as Uint8Array
     * @param sig Signature as Uint8Array (64 bytes)
     * @returns Promise resolving to true if valid, false otherwise
     *
     * @example
     * ```ts
     * const valid = await crypto.Ed25519Verify(pubKey, message, sig)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    async Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): Promise<boolean> {
        return this._curve.Ed25519Verify(pubKey, msg, sig)
    }
}
