import * as internal from './internal'
import { KeyPairType, SignedPreKeyPairType, PreKeyPairType } from './types'

/**
 * Utility object for generating identity, pre-keys, and registration IDs, following the Signal/libsignal protocol.
 *
 * Reference: https://signal.org/docs/
 *
 * @example
 * ```ts
 * const identity = await KeyHelper.generateIdentityKeyPair()
 * const regId = KeyHelper.generateRegistrationId()
 * const signedPreKey = await KeyHelper.generateSignedPreKey(identity, 1)
 * const senderKey = await KeyHelper.generateSenderKey()
 * const preKey = await KeyHelper.generatePreKey(1)
 * ```
 */
export const KeyHelper = {
    /**
     * Generates a Curve25519 identity key pair.
     * @returns Promise resolving to a KeyPairType
     */
    generateIdentityKeyPair(): Promise<KeyPairType> {
        return internal.crypto.createKeyPair()
    },

    /**
     * Generates a random registration ID (14 bits, as per Signal spec).
     * @returns Registration ID (number)
     */
    generateRegistrationId(): number {
        const registrationId = new Uint16Array(internal.crypto.getRandomBytes(2))[0]
        return registrationId & 0x3fff
    },

    /**
     * Generates a signed pre-key pair and signature.
     * @param identityKeyPair Identity key pair (must be valid)
     * @param signedKeyId Key ID for the signed pre-key
     * @returns Promise resolving to a SignedPreKeyPairType
     * @throws TypeError if arguments are invalid
     */
    async generateSignedPreKey(identityKeyPair: KeyPairType, signedKeyId: number): Promise<SignedPreKeyPairType> {
        if (
            !(identityKeyPair.privKey instanceof Uint8Array) ||
            identityKeyPair.privKey.byteLength !== 32 ||
            !(identityKeyPair.pubKey instanceof Uint8Array) ||
            identityKeyPair.pubKey.byteLength !== 33
        ) {
            throw new TypeError('Invalid argument for identityKeyPair')
        }
        if (!isNonNegativeInteger(signedKeyId)) {
            throw new TypeError('Invalid argument for signedKeyId: ' + signedKeyId)
        }
        const keyPair = await internal.crypto.createKeyPair()
        const sig = await internal.crypto.Ed25519Sign(identityKeyPair.privKey, keyPair.pubKey)
        return {
            keyId: signedKeyId,
            keyPair: keyPair,
            signature: sig,
        }
    },

    /**
     * Generates a random 32-byte sender key.
     * @returns Promise resolving to a Uint8Array
     */
    async generateSenderKey(): Promise<Uint8Array> {
        return internal.crypto.getRandomBytes(32)
    },

    /**
     * Generates a pre-key pair with a given key ID.
     * @param keyId Key ID for the pre-key
     * @returns Promise resolving to a PreKeyPairType
     * @throws TypeError if keyId is invalid
     */
    async generatePreKey(keyId: number): Promise<PreKeyPairType> {
        if (!isNonNegativeInteger(keyId)) {
            throw new TypeError('Invalid argument for keyId: ' + keyId)
        }

        const keyPair = await internal.crypto.createKeyPair()
        return { keyId: keyId, keyPair: keyPair }
    },
}

/**
 * Checks if a value is a non-negative integer.
 * @private
 */
function isNonNegativeInteger(n: unknown): n is number {
    return typeof n === 'number' && n % 1 === 0 && n >= 0
}
