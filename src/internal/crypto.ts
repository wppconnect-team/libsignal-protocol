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
     * @returns Encrypted data as Uint8Array
     *
     * @example
     * ```ts
     * const ciphertext = crypto.encrypt(key, data, iv)
     * ```
     */
    encrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Uint8Array {
        const cipher = nodecrypto.createCipheriv('aes-' + key.length * 8 + '-cbc', key, iv)
        const encrypted = Buffer.concat([cipher.update(data), cipher.final()])
        return encrypted
    }

    /**
     * Decrypts data using AES-CBC.
     * @param key AES key of 16/24/32 bytes as Uint8Array
     * @param data Data to decrypt as Uint8Array
     * @param iv 16-byte initialization vector as Uint8Array
     * @returns Decrypted data as Uint8Array
     *
     * @example
     * ```ts
     * const plaintext = crypto.decrypt(key, ciphertext, iv)
     * ```
     */
    decrypt(key: Uint8Array, data: Uint8Array, iv: Uint8Array): Uint8Array {
        const decipher = nodecrypto.createDecipheriv('aes-' + key.length * 8 + '-cbc', key, iv)
        const decrypted = Buffer.concat([decipher.update(data), decipher.final()])
        return decrypted
    }

    /**
     * Computes HMAC-SHA256 signature of data using the given key.
     * @param key HMAC key as Uint8Array
     * @param data Data to sign as Uint8Array
     * @returns HMAC signature as Uint8Array
     *
     * @example
     * ```ts
     * const mac = crypto.sign(key, data)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc2104
     */
    sign(key: Uint8Array, data: Uint8Array): Uint8Array {
        const hmac = nodecrypto.createHmac('sha256', key)
        hmac.update(data)
        return hmac.digest()
    }

    /**
     * Computes SHA-512 hash of the input data.
     * @param data Data to hash as Uint8Array
     * @returns SHA-512 hash as Uint8Array
     *
     * @example
     * ```ts
     * const hash = crypto.hash(data)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc6234
     */
    hash(data: Uint8Array): Uint8Array {
        const hash = nodecrypto.createHash('sha512')
        hash.update(data)
        return hash.digest()
    }

    /**
     * Derives keys using HKDF (RFC 5869), as used in Signal/libsignal.
     * Always returns three 32-byte chunks. Salt must be 32 bytes.
     *
     * @param input Input keying material as Uint8Array
     * @param salt 32-byte salt as Uint8Array
     * @param info Context/application-specific info as Uint8Array or string
     * @returns Array of three 32-byte Uint8Array chunks
     *
     * @example
     * ```ts
     * const [k1, k2, k3] = crypto.HKDF(input, salt, 'info')
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc5869
     */
    HKDF(input: Uint8Array, salt: Uint8Array, info: Uint8Array | string): Uint8Array[] {
        const abInfo = typeof info === 'string' ? util.binaryStringToUint8Array(info) : info
        if (!abInfo) {
            throw new Error(`Invalid HKDF info`)
        }

        const PRK = this.sign(salt, input)
        const infoBuffer = new Uint8Array(abInfo.length + 1 + 32)
        infoBuffer.set(abInfo, 32)
        infoBuffer[infoBuffer.length - 1] = 1
        const T1 = this.sign(PRK, infoBuffer.slice(32))
        infoBuffer.set(T1)
        infoBuffer[infoBuffer.length - 1] = 2
        const T2 = this.sign(PRK, infoBuffer)
        infoBuffer.set(T2)
        infoBuffer[infoBuffer.length - 1] = 3
        const T3 = this.sign(PRK, infoBuffer)
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
     * crypto.verifyMAC(data, key, mac, 32)
     * ```
     */
    verifyMAC(data: Uint8Array, key: Uint8Array, mac: Uint8Array, length: number): void {
        const calculated_mac = this.sign(key, data)
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
     * @returns MAC as Uint8Array
     *
     * @example
     * ```ts
     * const mac = crypto.calculateMAC(key, data)
     * ```
     */
    calculateMAC(key: Uint8Array, data: Uint8Array): Uint8Array {
        return this.sign(key, data)
    }

    // Curve25519 crypto

    /**
     * Generates a Curve25519 key pair. If no private key is provided, a random one is generated.
     * The returned public key is prefixed with 0x05 (33 bytes total), following the libsignal protocol standard.
     *
     * @param privKey Optional 32-byte private key as Uint8Array
     * @returns KeyPairType, where pubKey is a 33-byte Uint8Array (0x05-prefixed)
     *
     * @example
     * ```ts
     * const keyPair = crypto.createKeyPair()
     * // keyPair.pubKey[0] === 0x05
     * // keyPair.pubKey.length === 33
     * ```
     * @see https://github.com/signalapp/libsignal-protocol-java/blob/master/java/src/main/java/org/whispersystems/libsignal/ecc/Curve.java
     */
    createKeyPair(privKey?: Uint8Array): KeyPairType {
        if (!privKey) {
            privKey = this.getRandomBytes(32)
        }
        return this._curve.createKeyPair(privKey)
    }

    /**
     * Performs ECDH to derive a shared secret using Curve25519.
     * @param pubKey 32-byte public key as Uint8Array
     * @param privKey 32-byte private key as Uint8Array
     * @returns Shared secret as Uint8Array
     *
     * @example
     * ```ts
     * const shared = crypto.ECDHE(pubKey, privKey)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc7748
     */
    ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Uint8Array {
        return this._curve.ECDHE(pubKey, privKey)
    }

    /**
     * Signs a message using Ed25519.
     * @param privKey 32-byte private key as Uint8Array
     * @param message Message to sign as Uint8Array
     * @returns Signature as Uint8Array (64 bytes)
     *
     * @example
     * ```ts
     * const sig = crypto.Ed25519Sign(privKey, message)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Uint8Array {
        return this._curve.Ed25519Sign(privKey, message)
    }

    /**
     * Verifies an Ed25519 signature.
     * @param pubKey 32-byte public key as Uint8Array
     * @param msg Message as Uint8Array
     * @param sig Signature as Uint8Array (64 bytes)
     * @returns True if valid, false otherwise
     *
     * @example
     * ```ts
     * const valid = crypto.Ed25519Verify(pubKey, message, sig)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): boolean {
        return this._curve.Ed25519Verify(pubKey, msg, sig)
    }
}
