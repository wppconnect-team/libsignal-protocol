import * as internal from './internal'
import { KeyPairType, SignedPreKeyPairType, PreKeyPairType } from './types'

export class KeyHelper {
    static generateIdentityKeyPair(): Promise<KeyPairType> {
        return internal.crypto.createKeyPair()
    }

    static generateRegistrationId(): number {
        const registrationId = new Uint16Array(internal.crypto.getRandomBytes(2))[0]
        return registrationId & 0x3fff
    }

    static async generateSignedPreKey(
        identityKeyPair: KeyPairType,
        signedKeyId: number
    ): Promise<SignedPreKeyPairType> {
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
    }

    static async generateSenderKey(): Promise<Uint8Array> {
        return internal.crypto.getRandomBytes(32)
    }

    static async generatePreKey(keyId: number): Promise<PreKeyPairType> {
        if (!isNonNegativeInteger(keyId)) {
            throw new TypeError('Invalid argument for keyId: ' + keyId)
        }

        const keyPair = await internal.crypto.createKeyPair()
        return { keyId: keyId, keyPair: keyPair }
    }
}

function isNonNegativeInteger(n: unknown): n is number {
    return typeof n === 'number' && n % 1 === 0 && n >= 0
}
