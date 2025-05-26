import { CurveType, KeyPairType } from '../types'
import * as curve25519 from '@wppconnect/curve25519'

/**
 * Implementation of Curve25519 and Ed25519 cryptographic operations.
 *
 * References:
 * - Curve25519: https://datatracker.ietf.org/doc/html/rfc7748
 * - Ed25519: https://datatracker.ietf.org/doc/html/rfc8032
 */
class Curve25519 implements CurveType {
    /**
     * Generates a key pair from a private key.
     * @param privKey 32-byte private key as Uint8Array
     * @returns KeyPairType { pubKey: Uint8Array, privKey: Uint8Array }
     *
     * @example
     * ```ts
     * const privKey = new Uint8Array(32)
     * const keyPair = curve.createKeyPair(privKey)
     * ```
     */
    createKeyPair(privKey: Uint8Array): KeyPairType {
        return curve25519.generateKeyPair(privKey)
    }

    /**
     * Calculates a shared secret using ECDH (Elliptic Curve Diffie-Hellman).
     * @param pubKey 32-byte public key as Uint8Array
     * @param privKey 32-byte private key as Uint8Array
     * @returns Shared secret as Uint8Array
     *
     * @example
     * ```ts
     * const secret = curve.calculateAgreement(pubKey, privKey)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc7748
     */
    calculateAgreement(pubKey: Uint8Array, privKey: Uint8Array): Uint8Array {
        return curve25519.sharedSecret(pubKey, privKey)
    }

    /**
     * Signs a message using Ed25519.
     * @param privKey 32-byte private key as Uint8Array
     * @param message Message to sign as Uint8Array
     * @returns Signature as Uint8Array (64 bytes)
     *
     * @example
     * ```ts
     * const signature = curve.calculateSignature(privKey, message)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    calculateSignature(privKey: Uint8Array, message: Uint8Array): Uint8Array {
        return curve25519.sign(privKey, message)
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
     * const isValid = curve.verifySignature(pubKey, msg, sig)
     * ```
     * @see https://datatracker.ietf.org/doc/html/rfc8032
     */
    verifySignature(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): boolean {
        return curve25519.signatureIsValid(pubKey, msg, sig)
    }
}

/**
 * High-level Curve25519/Ed25519 wrapper for cryptographic operations.
 * Allows dependency injection for custom curve implementations.
 *
 * @example
 * ```ts
 * const curve = new Curve()
 * const keyPair = await curve.createKeyPair(privKey)
 * const shared = await curve.ECDHE(pubKey, privKey)
 * const sig = await curve.Ed25519Sign(privKey, message)
 * const valid = await curve.Ed25519Verify(pubKey, message, sig)
 * ```
 */
export class Curve {
    private _curve: CurveType
    constructor(curve?: CurveType) {
        this._curve = curve || new Curve25519()
    }

    /**
     * Sets the curve implementation.
     * @param curve Custom curve implementation
     */
    set curve(curve: CurveType) {
        this._curve = curve
    }

    /**
     * Generates a key pair from a private key.
     * The returned public key is prefixed with 0x05 (33 bytes total), following the libsignal protocol standard.
     *
     * @param privKey 32-byte private key as Uint8Array
     * @returns Promise resolving to KeyPairType, where pubKey is a 33-byte Uint8Array (0x05-prefixed)
     *
     * @example
     * ```ts
     * const keyPair = await curve.createKeyPair(privKey)
     * // keyPair.pubKey[0] === 0x05
     * // keyPair.pubKey.length === 33
     * ```
     * @see https://github.com/signalapp/libsignal-protocol-java/blob/master/java/src/main/java/org/whispersystems/libsignal/ecc/Curve.java
     */
    async createKeyPair(privKey: Uint8Array): Promise<KeyPairType> {
        validatePrivKey(privKey)
        const raw_keys = await this._curve.createKeyPair(privKey)
        return processKeys(raw_keys)
    }

    /**
     * Performs ECDH to derive a shared secret.
     * @param pubKey 32-byte public key as Uint8Array
     * @param privKey 32-byte private key as Uint8Array
     * @returns Promise resolving to shared secret as Uint8Array
     */
    async ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Promise<Uint8Array> {
        pubKey = validatePubKeyFormat(pubKey)
        validatePrivKey(privKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        return await this._curve.calculateAgreement(pubKey, privKey)
    }

    /**
     * Signs a message using Ed25519.
     * @param privKey 32-byte private key as Uint8Array
     * @param message Message to sign as Uint8Array
     * @returns Promise resolving to signature as Uint8Array (64 bytes)
     */
    async Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
        validatePrivKey(privKey)

        if (message === undefined) {
            throw new Error('Invalid message')
        }

        return await this._curve.calculateSignature(privKey, message)
    }

    /**
     * Verifies an Ed25519 signature.
     * @param pubKey 32-byte public key as Uint8Array
     * @param msg Message as Uint8Array
     * @param sig Signature as Uint8Array (64 bytes)
     * @returns Promise resolving to true if valid, false otherwise
     */
    async Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): Promise<boolean> {
        pubKey = validatePubKeyFormat(pubKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        if (msg === undefined) {
            throw new Error('Invalid message')
        }

        if (sig === undefined || sig.length != 64) {
            throw new Error('Invalid signature')
        }

        return await this._curve.verifySignature(pubKey, msg, sig)
    }
}

/**
 * Validates that the private key is a 32-byte Uint8Array.
 * @param privKey Private key to validate
 * @throws Error if invalid
 */
function validatePrivKey(privKey: unknown): void {
    if (!(privKey instanceof Uint8Array) || privKey.length != 32) {
        throw new Error('Invalid private key')
    }
}

/**
 * Validates and normalizes the public key format.
 * Accepts 33-byte keys starting with 0x05 (removes prefix), or 32-byte keys.
 * @param pubKey Public key to validate
 * @returns Normalized 32-byte public key
 * @throws Error if invalid
 *
 * @example
 * ```ts
 * const normalized = validatePubKeyFormat(pubKey)
 * ```
 */
function validatePubKeyFormat(pubKey: Uint8Array): Uint8Array {
    if (pubKey === undefined || ((pubKey.length != 33 || pubKey[0] != 5) && pubKey.length != 32)) {
        console.warn(`Invalid public key`, { pubKey })
        throw new Error(`Invalid public key: ${pubKey} ${pubKey?.length}`)
    }
    if (pubKey.length == 33) {
        return pubKey.slice(1)
    } else {
        console.warn(
            'WARNING: Expected pubkey of length 33, please report to ST and the client that generated the pubkey'
        )
        return pubKey
    }
}

/**
 * Adds a version byte (0x05) to the public key for compatibility.
 * @param raw_keys KeyPairType with 32-byte pubKey and privKey
 * @returns KeyPairType with 33-byte pubKey (prefixed with 0x05)
 */
function processKeys(raw_keys: KeyPairType): KeyPairType {
    // prepend version byte
    const origPub = raw_keys.pubKey
    const pub = new Uint8Array(33)
    pub.set(origPub, 1)
    pub[0] = 5

    return { pubKey: pub, privKey: raw_keys.privKey }
}
