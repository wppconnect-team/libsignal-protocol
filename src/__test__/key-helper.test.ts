import { KeyPairType } from '../types'
import { KeyHelper } from '../key-helper'

import * as Internal from '../internal'

describe('KeyHelper', function () {
    function validateKeyPair(keyPair: KeyPairType): void {
        expect(keyPair.pubKey).toBeDefined()
        expect(keyPair.privKey).toBeDefined()
        expect(keyPair.privKey.byteLength).toStrictEqual(32)
        expect(keyPair.pubKey.byteLength).toStrictEqual(33)
        expect(new Uint8Array(keyPair.pubKey)[0]).toStrictEqual(5)
    }

    describe('generateIdentityKeyPair', function () {
        test(`works`, async () => {
            const keyPair = await KeyHelper.generateIdentityKeyPair()
            validateKeyPair(keyPair)
        })
    })

    describe('generateRegistrationId', function () {
        test(`works`, () => {
            const registrationId = KeyHelper.generateRegistrationId()
            expect(typeof registrationId).toBe('number')
            expect(registrationId).toBeGreaterThanOrEqual(0)
            expect(registrationId).toBeLessThan(16384)
            expect(registrationId).toStrictEqual(Math.round(registrationId))
        })
    })

    describe('generatePreKey', function () {
        test(`generates a PreKey`, async () => {
            const pk = await KeyHelper.generatePreKey(1337)
            validateKeyPair(pk.keyPair)
            expect(pk.keyId).toStrictEqual(1337)
        })

        test(`throws on bad ID`, async () => {
            await expect(async () => {
                await KeyHelper.generatePreKey(-7)
            }).rejects.toThrow()
        })
    })

    describe('generateSignedPreKey', function () {
        test(`generates a PreKey`, async () => {
            const identityKey = await KeyHelper.generateIdentityKeyPair()

            const spk = await KeyHelper.generateSignedPreKey(identityKey, 1337)
            validateKeyPair(spk.keyPair)
            expect(spk.keyId).toStrictEqual(1337)
            await expect(
                Internal.crypto.Ed25519Verify(identityKey.pubKey, spk.keyPair.pubKey, spk.signature)
            ).resolves.toBe(true)
        })

        test(`throws on bad ID`, async () => {
            const identityKey = await KeyHelper.generateIdentityKeyPair()
            await expect(async () => {
                await KeyHelper.generateSignedPreKey(identityKey, -7)
            }).rejects.toThrow()
        })
    })
})
