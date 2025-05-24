import { DeviceType } from '..'
import { KeyHelper } from '../key-helper'
import { SignalProtocolStore } from '../__test__/storage-type'

export function hexToUint8Array(str: string): Uint8Array {
    const array = new Uint8Array(str.length / 2)
    for (let i = 0; i < str.length / 2; i++) array[i] = parseInt(str.substr(i * 2, 2), 16)
    return array
}

export function assertEqualUint8Arrays(a1: Uint8Array, a2: Uint8Array): void {
    expect(a1.length).toBe(a2.length)
    for (let i = 0; i < a1.length; ++i) {
        expect(a1[i]).toBe(a2[i])
    }
}

export async function generateIdentity(store: SignalProtocolStore): Promise<void> {
    return Promise.all([KeyHelper.generateIdentityKeyPair(), KeyHelper.generateRegistrationId()]).then(function (
        result
    ) {
        store.put('identityKey', {
            pubKey: new Uint8Array(result[0].pubKey),
            privKey: new Uint8Array(result[0].privKey),
        })
        store.put('registrationId', result[1])
    })
}

export async function generatePreKeyBundle(
    store: SignalProtocolStore,
    preKeyId: number,
    signedPreKeyId: number
): Promise<DeviceType<Uint8Array>> {
    return Promise.all([store.getIdentityKeyPair(), store.getLocalRegistrationId()]).then(function (result) {
        const identity = result[0]
        const registrationId = result[1]

        return Promise.all([
            KeyHelper.generatePreKey(preKeyId),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            KeyHelper.generateSignedPreKey(identity!, signedPreKeyId),
        ]).then(function (keys) {
            const preKey = keys[0]
            const signedPreKey = keys[1]

            store.storePreKey(preKeyId, preKey.keyPair)
            store.storeSignedPreKey(signedPreKeyId, signedPreKey.keyPair)

            return {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                identityKey: identity!.pubKey,
                registrationId: registrationId,
                preKey: {
                    keyId: preKeyId,
                    publicKey: preKey.keyPair.pubKey,
                },
                signedPreKey: {
                    keyId: signedPreKeyId,
                    publicKey: signedPreKey.keyPair.pubKey,
                    signature: signedPreKey.signature,
                },
            }
        })
    })
}
