import { SessionCipher, MessageType } from '../session-cipher'
import { SessionBuilder } from '../session-builder'
import { generateIdentity, generatePreKeyBundle, assertEqualUint8Arrays } from '../__test-utils__/utils'

import { SignalProtocolStore } from './storage-type'
import { SignalProtocolAddress } from '../signal-protocol-address'
import { SessionRecord } from '../session-record'
import { TestVectors } from './testvectors'
import * as Internal from '../internal'
import { KeyPairType } from '../types'
import * as utils from '../helpers'
import { textsecure } from '../protos'
import { textsecure_test } from '../__test-utils__/PushMessages'
import { BaseKeyType } from '../session-types'

const tv = TestVectors()

const store = new SignalProtocolStore()
const registrationId = 1337
const address = new SignalProtocolAddress('foo', 1)
const sessionCipher = new SessionCipher(store, address.toString())

const record = new SessionRecord(registrationId)
const session = {
    registrationId: registrationId,
    currentRatchet: {
        rootKey: new Uint8Array(32),
        lastRemoteEphemeralKey: new Uint8Array(32),
        previousCounter: 0,
    },
    indexInfo: {
        baseKey: new Uint8Array(32),
        baseKeyType: BaseKeyType.OURS,
        remoteIdentityKey: new Uint8Array(32),
        closed: -1,
    },
    oldRatchetList: [],
    chains: {},
}
record.updateSessionState(session)
const prep = store.storeSession(address.toString(), record.serialize())

test('getRemoteRegistrationId, when an open record exists, returns a valid registrationId', async () => {
    await prep
    const value = await sessionCipher.getRemoteRegistrationId()
    expect(value).toBe(registrationId)
})

test('getRemoteRegistrationId, when a record does not exist, returns undefined', async () => {
    await prep
    const sessionCipher = new SessionCipher(store, 'bar.1')
    const value = await sessionCipher.getRemoteRegistrationId()
    expect(value).toBeUndefined()
})

test('hasOpenSession returns true', async () => {
    await prep
    const value = await sessionCipher.hasOpenSession()
    expect(value).toBeTruthy()
})

it('hasOpenSession: no open session exists returns false', async () => {
    await prep
    const address = new SignalProtocolAddress('bar', 1)
    const sessionCipher = new SessionCipher(store, address.toString())
    const record = new SessionRecord()
    await store.storeSession(address.toString(), record.serialize())
    const value = await sessionCipher.hasOpenSession()
    expect(value).toBeFalsy()
})

test('hasOpenSession: when there is no session returns false', async () => {
    await prep
    const address = new SignalProtocolAddress('baz', 1)
    const sessionCipher = new SessionCipher(store, address.toString())
    const value = await sessionCipher.hasOpenSession()
    expect(value).toBeFalsy()
})
//----------------------------------------------------------------------------------------------------
async function setupReceiveStep(
    store: SignalProtocolStore,
    data: { [k: string]: any },
    privKeyQueue: Uint8Array[]
): Promise<void> {
    if (data.newEphemeralKey !== undefined) {
        privKeyQueue.push(data.newEphemeralKey)
    }

    if (data.ourIdentityKey === undefined) {
        return Promise.resolve()
    }

    const keyPair = Internal.crypto.createKeyPair(data.ourIdentityKey)
    store.put('identityKey', keyPair)
    const signedKeyPair = Internal.crypto.createKeyPair(data.ourSignedPreKey)
    await store.storeSignedPreKey(data.signedPreKeyId, signedKeyPair)
    if (data.ourPreKey !== undefined) {
        const keyPair = Internal.crypto.createKeyPair(data.ourPreKey)
        await store.storePreKey(data.preKeyId, keyPair)
    }
}

function getPaddedMessageLength(messageLength: number): number {
    const messageLengthWithTerminator = messageLength + 1
    let messagePartCount = Math.floor(messageLengthWithTerminator / 160)
    if (messageLengthWithTerminator % 160 !== 0) {
        messagePartCount++
    }
    return messagePartCount * 160
}

function pad(plaintext: Uint8Array): Uint8Array {
    const paddedPlaintext = new Uint8Array(getPaddedMessageLength(plaintext.byteLength + 1) - 1)

    paddedPlaintext.set(new Uint8Array(plaintext))
    paddedPlaintext[plaintext.byteLength] = 0x80
    return paddedPlaintext
}

function unpad(paddedPlaintext: Uint8Array): Uint8Array {
    const ppt = new Uint8Array(paddedPlaintext)

    for (let i = ppt.length - 1; i >= 0; i--) {
        if (ppt[i] == 0x80) {
            const plaintext = new Uint8Array(i)
            plaintext.set(ppt.subarray(0, i))
            return plaintext
        } else if (ppt[i] !== 0x00) {
            throw new Error('Invalid padding')
        }
    }
    throw new Error('Invalid data: input empty or all 0x00s')
}

async function doReceiveStep(
    store: SignalProtocolStore,
    data: { [k: string]: any },
    privKeyQueue: Array<any>,
    address: SignalProtocolAddress
): Promise<boolean> {
    await setupReceiveStep(store, data, privKeyQueue)
    const sessionCipher = new SessionCipher(store, address)

    try {
        let plaintext: Uint8Array
        if (data.type == textsecure_test.IncomingPushMessageSignal.Type.CIPHERTEXT) {
            const dWS: Uint8Array = new Uint8Array(await sessionCipher.decryptWhisperMessage(data.message))
            plaintext = await unpad(dWS)
        } else if (data.type == textsecure_test.IncomingPushMessageSignal.Type.PREKEY_BUNDLE) {
            const dPKWS: Uint8Array = new Uint8Array(await sessionCipher.decryptPreKeyWhisperMessage(data.message))
            plaintext = await unpad(dPKWS)
        } else {
            throw new Error('Unknown data type in test vector')
        }

        const content = textsecure_test.PushMessageContent.decode(plaintext)
        if (data.expectTerminateSession) {
            if (content.flags == textsecure_test.PushMessageContent.Flags.END_SESSION) {
                return true
            } else {
                return false
            }
        }

        return content.body === data.expectedSmsText
    } catch (e) {
        if (data.expectException) {
            return true
        }
        console.error(e)
        throw e
    }
}

async function setupSendStep(
    store: SignalProtocolStore,
    data: { [k: string]: any },
    privKeyQueue: Uint8Array[]
): Promise<void> {
    if (data.registrationId !== undefined) {
        store.put('registrationId', data.registrationId)
    }
    if (data.ourBaseKey !== undefined) {
        privKeyQueue.push(data.ourBaseKey)
    }
    if (data.ourEphemeralKey !== undefined) {
        privKeyQueue.push(data.ourEphemeralKey)
    }

    if (data.ourIdentityKey !== undefined) {
        const keyPair = Internal.crypto.createKeyPair(data.ourIdentityKey)
        if (!data.ourIdentityKey || utils.uint8ArrayToBinaryString(keyPair.privKey) != utils.uint8ArrayToBinaryString(data.ourIdentityKey))
            throw new Error('Failed to rederive private key!')
        store.put('identityKey', keyPair)
    }
    return Promise.resolve()
}

async function doSendStep(
    store: SignalProtocolStore,
    data: { [k: string]: any },
    privKeyQueue: Array<any>,
    address: SignalProtocolAddress
): Promise<boolean> {
    await setupSendStep(store, data, privKeyQueue)
    try {
        if (data.getKeys !== undefined) {
            const deviceObject = {
                encodedNumber: address.toString(),
                identityKey: data.getKeys.identityKey,
                preKey: data.getKeys.devices[0].preKey,
                signedPreKey: data.getKeys.devices[0].signedPreKey,
                registrationId: data.getKeys.devices[0].registrationId,
            }
            const builder = new SessionBuilder(store, address)
            await builder.processPreKey(deviceObject)
        }

        const proto = textsecure_test.PushMessageContent.create({})
        if (data.endSession) {
            proto.flags = textsecure_test.PushMessageContent.Flags.END_SESSION
        } else {
            proto.body = data.smsText
        }

        const sessionCipher = new SessionCipher(store, address)
        const pt = textsecure_test.PushMessageContent.encode(proto).finish()

        if (data.endSession) {
            //      console.log(`END SESSION PROTO`, { proto, pt })
        }
        const msg = await sessionCipher.encrypt(pad(pt))

        const msgbody = new Uint8Array(utils.binaryStringToUint8Array(msg.body!.substring(1))!)
        // NOTE: equivalent protobuf objects can have different binary encodings and still be accepted by our
        // parsers to produce quivalent objects.  Instead of testing binary identity of the entire
        // protobuf message, we parse it and check field-level identity.
        let res: boolean
        if (msg.type === 1) {
            res = utils.isEqual(data.expectedCiphertext, utils.binaryStringToUint8Array(msg.body || ''))
        } else {
            if (new Uint8Array(data.expectedCiphertext)[0] !== msg.body?.charCodeAt(0)) {
                throw new Error('Bad version byte')
            }
            //  console.log({
            //      expectedCiphertext: data.expectedCiphertext,
            //      msg: msgbody,
            //  })

            const ourpkwmsg = textsecure.PreKeySignalMessage.decode(msgbody)
            const datapkwmsg = textsecure.PreKeySignalMessage.decode(new Uint8Array(data.expectedCiphertext).slice(1))

            assertEqualUint8Arrays(datapkwmsg.baseKey!, ourpkwmsg.baseKey!)
            assertEqualUint8Arrays(datapkwmsg.identityKey!, ourpkwmsg.identityKey!)
            expect(datapkwmsg.preKeyId).toStrictEqual(ourpkwmsg.preKeyId)
            expect(datapkwmsg.signedPreKeyId).toStrictEqual(ourpkwmsg.signedPreKeyId)

            const ourencrypted = textsecure.SignalMessage.decode(
                ourpkwmsg.message!.slice(1, ourpkwmsg.message!.length - 8)
            )
            const dataencrypted = textsecure.SignalMessage.decode(
                datapkwmsg.message!.slice(1, datapkwmsg.message!.length - 8)
            )

            expect(ourencrypted.counter).toBe(dataencrypted.counter)
            expect(ourencrypted.previousCounter).toBe(dataencrypted.previousCounter)
            assertEqualUint8Arrays(ourencrypted.ratchetKey!, dataencrypted.ratchetKey!)
            assertEqualUint8Arrays(ourencrypted.ciphertext!, dataencrypted.ciphertext!)

            const expected = textsecure.PreKeySignalMessage.encode(datapkwmsg).finish()

            if (!utils.isEqual(expected, utils.binaryStringToUint8Array(msg.body.substring(1)))) {
                throw new Error('Result does not match expected ciphertext')
            }

            res = true
        }
        if (data.endSession) {
            await sessionCipher.closeOpenSessionForDevice()
            return res
        }
        return res
    } catch (e) {
        console.error(e, { store })
        throw e
    }
}

function getDescription(step: { [k: string]: any }): string {
    const direction = step[0]
    const data = step[1]
    if (direction === 'receiveMessage') {
        if (data.expectTerminateSession) {
            return 'receive end session message'
        } else if (data.type === 3) {
            return 'receive prekey message ' + data.expectedSmsText
        } else {
            return 'receive message ' + data.expectedSmsText
        }
    } else if (direction === 'sendMessage') {
        if (data.endSession) {
            return 'send end session message'
        } else if (data.ourIdentityKey) {
            return 'send prekey message ' + data.smsText
        } else {
            return 'send message ' + data.smsText
        }
    }
    return ''
}

tv.forEach(function (test) {
    describe(test.name, () => {
        const privKeyQueue: Uint8Array[] = []
        const origCreateKeyPair = Internal.crypto.createKeyPair.bind(Internal.crypto)

        beforeAll(function () {
            // Shim createKeyPair to return predetermined keys from
            // privKeyQueue instead of random keys.
            Internal.crypto.createKeyPair = function (privKey) {
                if (privKey !== undefined) {
                    return origCreateKeyPair(privKey)
                }
                if (privKeyQueue.length == 0) {
                    throw new Error('Out of private keys')
                } else {
                    const privKey = privKeyQueue.shift()
                    const keyPair = Internal.crypto.createKeyPair(privKey)
                    if (!privKey || utils.uint8ArrayToBinaryString(keyPair.privKey) != utils.uint8ArrayToBinaryString(privKey))
                        throw new Error('Failed to rederive private key!')
                    return keyPair
                }
            }
        })

        afterAll(function () {
            Internal.crypto.createKeyPair = origCreateKeyPair
            if (privKeyQueue.length != 0) {
                throw new Error('Leftover private keys')
            }
        })

        const store = new SignalProtocolStore()
        const address = SignalProtocolAddress.fromString('SNOWDEN.1')
        test.vectors.forEach(function (step) {
            it(getDescription(step), async () => {
                let doStep: (
                    store: SignalProtocolStore,
                    data: Record<string, any>,
                    q: Uint8Array[],
                    address: SignalProtocolAddress
                ) => Promise<boolean>

                if (step[0] === 'receiveMessage') {
                    doStep = doReceiveStep
                } else if (step[0] === 'sendMessage') {
                    doStep = doSendStep
                } else {
                    throw new Error('Invalid test')
                }

                await expect(doStep(store, step[1], privKeyQueue, address)).resolves.toBeTruthy() //.then(assert).then(done, done)
            })
        })
    })
})

describe('key changes', function () {
    const ALICE_ADDRESS = new SignalProtocolAddress('+14151111111', 1)
    const BOB_ADDRESS = new SignalProtocolAddress('+14152222222', 1)
    const originalMessage = utils.binaryStringToUint8Array("L'homme est condamné à être libre")

    const aliceStore = new SignalProtocolStore()

    const bobStore = new SignalProtocolStore()
    const bobPreKeyId = 1337
    const bobSignedKeyId = 1

    const bobSessionCipher = new SessionCipher(bobStore, ALICE_ADDRESS)

    beforeAll(function (done) {
        Promise.all([aliceStore, bobStore].map(generateIdentity))
            .then(function () {
                return generatePreKeyBundle(bobStore, bobPreKeyId, bobSignedKeyId)
            })
            .then((preKeyBundle) => {
                const builder = new SessionBuilder(aliceStore, BOB_ADDRESS)
                return builder
                    .processPreKey(preKeyBundle)
                    .then(function () {
                        const aliceSessionCipher = new SessionCipher(aliceStore, BOB_ADDRESS)
                        return aliceSessionCipher.encrypt(originalMessage)
                    })
                    .then(function (ciphertext) {
                        return bobSessionCipher.decryptPreKeyWhisperMessage(ciphertext.body!, 'binary')
                    })
                    .then(function () {
                        done()
                    })
                    .catch(done)
            })
    })

    describe("When bob's identity changes", function () {
        let messageFromBob: MessageType
        beforeAll(async () => {
            const ciphertext = await bobSessionCipher.encrypt(originalMessage)
            messageFromBob = ciphertext
            await generateIdentity(bobStore)
            const idK = bobStore.get('identityKey', undefined) as KeyPairType
            const pubK = idK.pubKey
            await aliceStore.saveIdentity(BOB_ADDRESS.toString(), pubK)
        })

        test('alice cannot encrypt with the old session', async () => {
            const aliceSessionCipher = new SessionCipher(aliceStore, BOB_ADDRESS)
            await expect(async () => {
                await aliceSessionCipher.encrypt(originalMessage)
            }).rejects.toThrow('Identity key changed')
        })

        test('alice cannot decrypt from the old session', async () => {
            const aliceSessionCipher = new SessionCipher(aliceStore, BOB_ADDRESS)
            await expect(async () => {
                await aliceSessionCipher.decryptWhisperMessage(<string>messageFromBob.body, 'binary')
            }).rejects.toThrow('Identity key changed')
        })
    })
})
