import * as Internal from '../internal'
import * as utils from '../helpers'
import { hexToUint8Array } from '../__test-utils__/utils'

describe('New Crypto Tests 2020', function () {
    const alice_bytes = hexToUint8Array('77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a')
    const alice_priv = hexToUint8Array('70076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c6a')
    const alice_pub = hexToUint8Array('058520f0098930a754748b7ddcb43ef75a0dbf3a0d26381af4eba4a98eaa9b4e6a')
    const bob_bytes = hexToUint8Array('5dab087e624a8a4b79e17f8b83800ee66f3bb1292618b6fd1c2f8b27ff88e0eb')
    const bob_priv = hexToUint8Array('58ab087e624a8a4b79e17f8b83800ee66f3bb1292618b6fd1c2f8b27ff88e06b')
    const bob_pub = hexToUint8Array('05de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f')
    const shared_sec = hexToUint8Array('4a5d9d5ba4ce2de1728e3bf480350f25e07e21c947d19e3376f09b3c1e161742')

    test(`createKeyPair converts alice's private keys to a keypair`, async () => {
        const alicekeypair = await Internal.crypto.createKeyPair(alice_bytes)
        expect(utils.isEqual(alicekeypair.privKey, alice_priv)).toBeTruthy()
        expect(utils.isEqual(alicekeypair.pubKey, alice_pub)).toBeTruthy()

        const bobkeypair = await Internal.crypto.createKeyPair(bob_bytes)
        expect(utils.isEqual(bobkeypair.privKey, bob_priv)).toBeTruthy()
        expect(utils.isEqual(bobkeypair.pubKey, bob_pub)).toBeTruthy()
    })

    test(`createKeyPair generates a key if not provided`, async () => {
        const keypair = await Internal.crypto.createKeyPair()
        expect(keypair.privKey.byteLength).toStrictEqual(32)
        expect(keypair.pubKey.byteLength).toStrictEqual(33)
        expect(new Uint8Array(keypair.pubKey)[0]).toStrictEqual(5)
    })

    test(`ECDHE computes the shared secret for alice`, async () => {
        const secret = await Internal.crypto.ECDHE(bob_pub, alice_priv)
        expect(utils.isEqual(shared_sec, secret)).toBeTruthy()
    })

    test(`ECDHE computes the shared secret for bob`, async () => {
        const secret = await Internal.crypto.ECDHE(alice_pub, bob_priv)
        expect(utils.isEqual(shared_sec, secret)).toBeTruthy()
    })
    const priv = hexToUint8Array('48a8892cc4e49124b7b57d94fa15becfce071830d6449004685e387c62409973')
    const pub = hexToUint8Array('0555f1bfede27b6a03e0dd389478ffb01462e5c52dbbac32cf870f00af1ed9af3a')
    const msg = hexToUint8Array('617364666173646661736466')
    const sig = hexToUint8Array(
        '2bc06c745acb8bae10fbc607ee306084d0c28e2b3bb819133392473431291fd0dfa9c7f11479996cf520730d2901267387e08d85bbf2af941590e3035a545285'
    )

    test(`Ed25519Sign works`, async () => {
        const sigCalc = await Internal.crypto.Ed25519Sign(priv, msg)
        expect(utils.isEqual(sig, sigCalc)).toBeTruthy()
    })

    test(`Ed25519Verify throws on bad signature`, async () => {
        const badsig = sig.slice(0)
        badsig.set([0], 0)

        const result = await Internal.crypto.Ed25519Verify(pub, msg, badsig)
        expect(result).toBe(false)
    })

    test(`Ed25519Verify returns true on good signature`, async () => {
        const result = await Internal.crypto.Ed25519Verify(pub, msg, sig)

        expect(result).toBe(true)
    })
})

describe('Crypto', function () {
    describe('Encrypt AES-CBC', function () {
        test('works', async () => {
            const key = hexToUint8Array('603deb1015ca71be2b73aef0857d77811f352c073b6108d72d9810a30914dff4')
            const iv = hexToUint8Array('000102030405060708090a0b0c0d0e0f')
            const plaintext = hexToUint8Array(
                '6bc1bee22e409f96e93d7e117393172aae2d8a571e03ac9c9eb76fac45af8e5130c81c46a35ce411e5fbc1191a0a52eff69f2445df4f9b17ad2b417be66c3710'
            )
            const ciphertext = hexToUint8Array(
                'f58c4c04d6e5f1ba779eabfb5f7bfbd69cfc4e967edb808d679f777bc6702c7d39f23369a9d9bacfa530e26304231461b2eb05e2c39be9fcda6c19078c6a9d1b3f461796d6b0d6b2e0c2a72b4d80e644'
            )
            const result = await Internal.crypto.encrypt(key, plaintext, iv)
            expect(utils.isEqual(result, ciphertext)).toBeTruthy()
        })
    })

    describe('Decrypt AES-CBC', function () {
        test('works', async () => {
            const key = hexToUint8Array('603deb1015ca71be2b73aef0857d77811f352c073b6108d72d9810a30914dff4')
            const iv = hexToUint8Array('000102030405060708090a0b0c0d0e0f')
            const plaintext = hexToUint8Array(
                '6bc1bee22e409f96e93d7e117393172aae2d8a571e03ac9c9eb76fac45af8e5130c81c46a35ce411e5fbc1191a0a52eff69f2445df4f9b17ad2b417be66c3710'
            )
            const ciphertext = hexToUint8Array(
                'f58c4c04d6e5f1ba779eabfb5f7bfbd69cfc4e967edb808d679f777bc6702c7d39f23369a9d9bacfa530e26304231461b2eb05e2c39be9fcda6c19078c6a9d1b3f461796d6b0d6b2e0c2a72b4d80e644'
            )
            const result = await Internal.crypto.decrypt(key, ciphertext, iv)
            expect(utils.isEqual(result, plaintext)).toBeTruthy()
        })
    })

    describe('HMAC SHA-256', function () {
        test('works', async () => {
            const key = hexToUint8Array(
                '6f35628d65813435534b5d67fbdb54cb33403d04e843103e6399f806cb5df95febbdd61236f33245'
            )
            const input = hexToUint8Array(
                '752cff52e4b90768558e5369e75d97c69643509a5e5904e0a386cbe4d0970ef73f918f675945a9aefe26daea27587e8dc909dd56fd0468805f834039b345f855cfe19c44b55af241fff3ffcd8045cd5c288e6c4e284c3720570b58e4d47b8feeedc52fd1401f698a209fccfa3b4c0d9a797b046a2759f82a54c41ccd7b5f592b'
            )
            const mac = hexToUint8Array('05d1243e6465ed9620c9aec1c351a186')
            const result = await Internal.crypto.sign(key, input)
            expect(utils.isEqual(result.slice(0, mac.byteLength), mac)).toBeTruthy()
        })
    })

    describe('HKDF', function () {
        test('works', async () => {
            // HMAC RFC5869 Test vectors
            const T1 = hexToUint8Array('3cb25f25faacd57a90434f64d0362f2a2d2d0a90cf1a5a4c5db02d56ecc4c5bf')
            const T2 = hexToUint8Array('34007208d5b887185865')
            const IKM = new Uint8Array(22)
            for (let i = 0; i < 22; i++) IKM[i] = 11

            const salt = new Uint8Array(13)
            for (let i = 0; i < 13; i++) salt[i] = i

            const info = new Uint8Array(10)
            for (let i = 0; i < 10; i++) info[i] = 240 + i

            const OKM = await Internal.crypto.HKDF(IKM, salt, info)
            expect(utils.isEqual(OKM[0], T1)).toBeTruthy()
            expect(utils.isEqual(OKM[1].slice(0, 10), T2)).toBeTruthy()
        })
    })
})
