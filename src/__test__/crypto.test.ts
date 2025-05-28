import * as internal from '../internal'
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

    test(`createKeyPair converts alice's private keys to a keypair`, function () {
        const alicekeypair = internal.crypto.createKeyPair(alice_bytes)
        expect(utils.isEqual(alicekeypair.privKey, alice_priv)).toBeTruthy()
        expect(utils.isEqual(alicekeypair.pubKey, alice_pub)).toBeTruthy()

        const bobkeypair = internal.crypto.createKeyPair(bob_bytes)
        expect(utils.isEqual(bobkeypair.privKey, bob_priv)).toBeTruthy()
        expect(utils.isEqual(bobkeypair.pubKey, bob_pub)).toBeTruthy()
    })

    test(`createKeyPair generates a key if not provided`, function () {
        const keypair = internal.crypto.createKeyPair()
        expect(keypair.privKey.byteLength).toStrictEqual(32)
        expect(keypair.pubKey.byteLength).toStrictEqual(33)
        expect(new Uint8Array(keypair.pubKey)[0]).toStrictEqual(5)
    })

    test(`ECDHE computes the shared secret for alice`, function () {
        const secret = internal.crypto.ECDHE(bob_pub, alice_priv)
        expect(utils.isEqual(shared_sec, secret)).toBeTruthy()
    })

    test(`ECDHE computes the shared secret for bob`, function () {
        const secret = internal.crypto.ECDHE(alice_pub, bob_priv)
        expect(utils.isEqual(shared_sec, secret)).toBeTruthy()
    })
    const priv = hexToUint8Array('48a8892cc4e49124b7b57d94fa15becfce071830d6449004685e387c62409973')
    const pub = hexToUint8Array('0555f1bfede27b6a03e0dd389478ffb01462e5c52dbbac32cf870f00af1ed9af3a')
    const msg = hexToUint8Array('617364666173646661736466')
    const sig = hexToUint8Array(
        '2bc06c745acb8bae10fbc607ee306084d0c28e2b3bb819133392473431291fd0dfa9c7f11479996cf520730d2901267387e08d85bbf2af941590e3035a545285'
    )

    test(`Ed25519Sign works`, function () {
        const sigCalc = internal.crypto.Ed25519Sign(priv, msg)
        expect(utils.isEqual(sig, sigCalc)).toBeTruthy()
    })

    test(`Ed25519Verify throws on bad signature`, function () {
        const badsig = sig.slice(0)
        badsig.set([0], 0)

        const result = internal.crypto.Ed25519Verify(pub, msg, badsig)
        expect(result).toBe(false)
    })

    test(`Ed25519Verify returns true on good signature`, function () {
        const result = internal.crypto.Ed25519Verify(pub, msg, sig)

        expect(result).toBe(true)
    })
})

describe('Crypto', function () {
    describe('Encrypt AES-CBC', function () {
        test('works', function () {
            const key = hexToUint8Array('603deb1015ca71be2b73aef0857d77811f352c073b6108d72d9810a30914dff4')
            const iv = hexToUint8Array('000102030405060708090a0b0c0d0e0f')
            const plaintext = hexToUint8Array(
                '6bc1bee22e409f96e93d7e117393172aae2d8a571e03ac9c9eb76fac45af8e5130c81c46a35ce411e5fbc1191a0a52eff69f2445df4f9b17ad2b417be66c3710'
            )
            const ciphertext = hexToUint8Array(
                'f58c4c04d6e5f1ba779eabfb5f7bfbd69cfc4e967edb808d679f777bc6702c7d39f23369a9d9bacfa530e26304231461b2eb05e2c39be9fcda6c19078c6a9d1b3f461796d6b0d6b2e0c2a72b4d80e644'
            )
            const result = internal.crypto.encrypt(key, plaintext, iv)
            expect(utils.isEqual(result, ciphertext)).toBeTruthy()
        })
    })

    describe('Decrypt AES-CBC', function () {
        test('works', function () {
            const key = hexToUint8Array('603deb1015ca71be2b73aef0857d77811f352c073b6108d72d9810a30914dff4')
            const iv = hexToUint8Array('000102030405060708090a0b0c0d0e0f')
            const plaintext = hexToUint8Array(
                '6bc1bee22e409f96e93d7e117393172aae2d8a571e03ac9c9eb76fac45af8e5130c81c46a35ce411e5fbc1191a0a52eff69f2445df4f9b17ad2b417be66c3710'
            )
            const ciphertext = hexToUint8Array(
                'f58c4c04d6e5f1ba779eabfb5f7bfbd69cfc4e967edb808d679f777bc6702c7d39f23369a9d9bacfa530e26304231461b2eb05e2c39be9fcda6c19078c6a9d1b3f461796d6b0d6b2e0c2a72b4d80e644'
            )
            const result = internal.crypto.decrypt(key, ciphertext, iv)
            expect(utils.isEqual(result, plaintext)).toBeTruthy()
        })
    })

    describe('HMAC SHA-256', function () {
        test('works', function () {
            const key = hexToUint8Array(
                '6f35628d65813435534b5d67fbdb54cb33403d04e843103e6399f806cb5df95febbdd61236f33245'
            )
            const input = hexToUint8Array(
                '752cff52e4b90768558e5369e75d97c69643509a5e5904e0a386cbe4d0970ef73f918f675945a9aefe26daea27587e8dc909dd56fd0468805f834039b345f855cfe19c44b55af241fff3ffcd8045cd5c288e6c4e284c3720570b58e4d47b8feeedc52fd1401f698a209fccfa3b4c0d9a797b046a2759f82a54c41ccd7b5f592b'
            )
            const mac = hexToUint8Array('05d1243e6465ed9620c9aec1c351a186')
            const result = internal.crypto.sign(key, input)
            expect(utils.isEqual(result.slice(0, mac.byteLength), mac)).toBeTruthy()
        })
    })

    // HMAC RFC5869 Test vectors
    describe('HKDF', function () {
        const compareHmac = (hmac: Uint8Array, OKM: Uint8Array[]) => {
            const T1 = hmac.slice(0, 32)
            const T2 = hmac.slice(32, 64)
            const T3 = hmac.slice(64, 96)

            expect(utils.isEqual(OKM[0], T1)).toBeTruthy()
            if (T2.length > 0) {
                expect(utils.isEqual(OKM[1], T2)).toBeTruthy()
            }
            if (T3.length > 0) {
                expect(utils.isEqual(OKM[2], T3)).toBeTruthy()
            }
        }

        test('RFC 5869 Test Case 1', function () {
            const hmac = hexToUint8Array(
                '3cb25f25faacd57a90434f64d0362f2a2d2d0a90cf1a5a4c5db02d56ecc4c5bf34007208d5b887185865'
            )
            const IKM = hexToUint8Array('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
            const salt = hexToUint8Array('000102030405060708090a0b0c')
            const info = hexToUint8Array('f0f1f2f3f4f5f6f7f8f9')

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('RFC 5869 Test Case 2', function () {
            const hmac = hexToUint8Array(
                'b11e398dc80327a1c8e7f78c596a49344f012eda2d4efad8a050cc4c19afa97c59045a99cac7827271cb41c65e590e09da3275600c2f09b8367793a9aca3db71cc30c58179ec3e87c14c01d5c1f3434f1d87'
            )
            const IKM = hexToUint8Array(
                '000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f'
            )
            const salt = hexToUint8Array(
                '606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeaf'
            )
            const info = hexToUint8Array(
                'b0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff'
            )

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('RFC 5869 Test Case 3', function () {
            const hmac = hexToUint8Array(
                '8da4e775a563c18f715f802a063c5a31b8a11f5c5ee1879ec3454e5f3c738d2d9d201395faa4b61a96c8'
            )
            const IKM = hexToUint8Array('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
            const salt = new Uint8Array(0)
            const info = new Uint8Array(0)

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('RFC 5869 Test Case 4', function () {
            const hmac = hexToUint8Array(
                '58dce10d5801cdfda831726bfebcb743d14a7ee83aa057a93d59b0a1317ff09d105ccecf535692b14dd5'
            )
            const IKM = hexToUint8Array('0b0b0b0b0b0b0b0b0b0b0b')
            const salt = hexToUint8Array('000102030405060708090a0b0c')
            const info = hexToUint8Array('f0f1f2f3f4f5f6f7f8f9')

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        // Test Case 5 is the same as Test Case 2, but with SHA-1
        // Test Case 6 is the same as Test Case 3, but with SHA-1

        test('RFC 5869 Test Case 7', function () {
            const hmac = hexToUint8Array(
                '596899179ab1bc00a7c03786ff43ee535004be2bb9be68bc1406636f54bd338a66a237ba2acbcee3c9a7'
            )
            const IKM = hexToUint8Array('0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c')
            const salt = new Uint8Array(0)
            const info = new Uint8Array(0)

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 1', function () {
            const hmac = hexToUint8Array('b2a3d45126d31fb6828ef00d76c6d54e9c2bd4785e49c6ad86e327d89d0de940')
            const IKM = hexToUint8Array('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
            const salt = hexToUint8Array('000102030405060708090a0b0c')
            const info = new Uint8Array(0)

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 2', function () {
            const hmac = hexToUint8Array(
                'ce6878ed2512bdb79282ff9795f091a78ba3434363ec7f7f4a2eb64265c8d6bc57deb3fcae070034ccdf25f8ac2da166c45822053c5de630c5aa76e7529e9ce728ab6d09bbb1af359d38f073da4da0c409028db6d310abf706121c37f386d1c7eb961feaf921449dc36214dc2e2b6f280170d8d2a7c5228d500c22aab56fda62'
            )
            const IKM = hexToUint8Array(
                '000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f'
            )
            const salt = utils.binaryStringToUint8Array('salt')
            const info = 'random InF\0'

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 3', function () {
            const hmac = hexToUint8Array(
                'debf25481a437e4b11c7fb01ea15b33c6a024ad61e6e1d7d70d12ed9aa0fb8d769e222d8545dc1a635b7ff3a910f9d6faaf67c233804a261c2eaed1c583c3d3cf65070d74e853bb0c1c18434f41479feb54e14e0188d48c4e9ac26a96a8aa5ee1c76273adbb4b29ece749f5ebb8ffa6b14eccb3649a22022e63db73f349eed72b9ac05b2f281c8fa3b94411bdf0b30c0bc0a2dbe8957fe9ca63f4721d789bd5b2ac22ddab78dd5d73c06071cec56c71b0d8d289f0b96aa8742b8a0a0d4f2e832dc5e5b20671877937f48268302ef781bbdda741fd7d5eb4f6777b0b5e786e'
            )
            const IKM = utils.binaryStringToUint8Array('password')
            const salt = hexToUint8Array(
                '606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeaf'
            )
            const info = new Uint8Array(0)

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 4', function () {
            const hmac = hexToUint8Array(
                'dae56c32147f77c16acfbf7924d862f6a665b2bdb261c6f24f28c9d29749f0ddf1304ba32275a404e26bdae66c223f6c6c55ac7bb0bc6f95dec0840313cc4b2d525387ff7b2b765b745fbce9dcb5aae3ce3b8b6cff224c34fa1fb246361bcba9a621eb07b9317e116e2c2a5504d2d406c89777f9f8bdffca591fca43ecf517b93c49471003128495e985ec88c8b61a7560c503db1365e491b1a6132e56605eea7809dffff7f13052a0b6c9044dc64ec289a3b8169304e74fa623e0902f94d546cca95884c02ebcfd507fb8229c091cbb7d4b76f26048dd2b33e0b131bbd34'
            )
            const IKM = hexToUint8Array('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
            const salt = utils.binaryStringToUint8Array('s$#$#%$#SBGHWE@#W#lt')
            const info = 'random InF\0'

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 5', function () {
            const hmac = hexToUint8Array('573b98885355e49f23dacdcaf549f0edfdf366a32444485b28153c7f464c8f46')
            const IKM = utils.binaryStringToUint8Array('passwordPASSWORDpassword')
            const salt = utils.binaryStringToUint8Array('salt')
            const info = ''

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })

        test('Test Case 6', function () {
            const hmac = hexToUint8Array('71505363b1096f544ec9e40e361963dd')
            const IKM = utils.binaryStringToUint8Array('pass\0word')
            const salt = utils.binaryStringToUint8Array('saltSALTSALTSALTSALTSALTSALTSALTSALTSALTSALTSALTSALT')
            const info = hexToUint8Array(
                'b0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff'
            )

            const OKM = internal.crypto.HKDF(IKM, salt, info)

            compareHmac(hmac, OKM)
        })
    })
})
