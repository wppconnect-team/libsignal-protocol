import { GroupCipher } from '../group-cipher'
import { GroupSessionBuilder } from '../group-session-builder'
import { SenderKeyName } from '../sender-key-name'
import { SenderKeyRecord } from '../state/sender-key-record'
import { SenderKeyStore } from '../state/sender-key-store'
import { SignalProtocolAddress } from '../../signal-protocol-address'

// Simple in-memory SenderKeyStore for testing
class InMemorySenderKeyStore implements SenderKeyStore {
    private store = new Map<string, SenderKeyRecord>()
    storeSenderKey(senderKeyName: SenderKeyName, record: SenderKeyRecord): void {
        this.store.set(senderKeyName.toString(), record)
    }
    loadSenderKey(senderKeyName: SenderKeyName): SenderKeyRecord {
        return this.store.get(senderKeyName.toString()) || new SenderKeyRecord()
    }
}

describe('GroupCipher (basic group message flow)', () => {
    it('should encrypt and decrypt a group message', async () => {
        // Setup
        const groupId = 'test-group'
        const senderAddress = new SignalProtocolAddress('alice', 1)
        const receiverAddress = new SignalProtocolAddress('bob', 1)
        const senderKeyName = new SenderKeyName(groupId, senderAddress)
        const receiverKeyName = new SenderKeyName(groupId, receiverAddress)
        const senderStore = new InMemorySenderKeyStore()
        const receiverStore = new InMemorySenderKeyStore()

        // Sender creates session and distribution message
        const senderSessionBuilder = new GroupSessionBuilder(senderStore)
        const distributionMsg = await senderSessionBuilder.create(senderKeyName)

        // Receiver processes distribution message
        const receiverSessionBuilder = new GroupSessionBuilder(receiverStore)
        await receiverSessionBuilder.process(receiverKeyName, distributionMsg)

        // Sender encrypts a message
        const cipher = new GroupCipher(senderStore, senderKeyName)
        const plaintext = new TextEncoder().encode('hello group!')
        const encrypted = await cipher.encrypt(plaintext)

        // Receiver decrypts the message
        const receiverCipher = new GroupCipher(receiverStore, receiverKeyName)
        const decrypted = await receiverCipher.decrypt(encrypted)
        const decryptedText = new TextDecoder().decode(decrypted)

        expect(decryptedText).toBe('hello group!')
    })

    it('should support round-trip serialization of SenderKeyRecord', async () => {
        const groupId = 'test-group-serialize'
        const senderAddress = new SignalProtocolAddress('alice', 1)
        const senderKeyName = new SenderKeyName(groupId, senderAddress)
        const senderStore = new InMemorySenderKeyStore()
        const sessionBuilder = new GroupSessionBuilder(senderStore)
        await sessionBuilder.create(senderKeyName)
        const record = senderStore.loadSenderKey(senderKeyName)
        const serialized = SenderKeyRecord.encode(record).finish()
        const restored = SenderKeyRecord.decode(serialized)
        expect(restored.isEmpty()).toBe(false)
        expect(restored.getSenderKeyState().keyId).toBe(record.getSenderKeyState().keyId)
    })

    it('should reject messages with invalid signature', async () => {
        const groupId = 'test-group-invalid-signature'
        const senderAddress = new SignalProtocolAddress('alice', 1)
        const receiverAddress = new SignalProtocolAddress('bob', 1)
        const senderKeyName = new SenderKeyName(groupId, senderAddress)
        const receiverKeyName = new SenderKeyName(groupId, receiverAddress)
        const senderStore = new InMemorySenderKeyStore()
        const receiverStore = new InMemorySenderKeyStore()
        const senderSessionBuilder = new GroupSessionBuilder(senderStore)
        const distributionMsg = await senderSessionBuilder.create(senderKeyName)
        const receiverSessionBuilder = new GroupSessionBuilder(receiverStore)
        await receiverSessionBuilder.process(receiverKeyName, distributionMsg)
        const cipher = new GroupCipher(senderStore, senderKeyName)
        const plaintext = new TextEncoder().encode('tampered!')
        const encrypted = await cipher.encrypt(plaintext)
        // Tamper with the signature (last byte)
        const tampered = new Uint8Array(encrypted)
        tampered[tampered.length - 1] ^= 0xff
        const receiverCipher = new GroupCipher(receiverStore, receiverKeyName)
        await expect(receiverCipher.decrypt(tampered)).rejects.toThrow('Invalid signature')
    })

    it('should persist and restore group state', async () => {
        const groupId = 'test-group-persist'
        const senderAddress = new SignalProtocolAddress('alice', 1)
        const receiverAddress = new SignalProtocolAddress('bob', 1)
        const senderKeyName = new SenderKeyName(groupId, senderAddress)
        const receiverKeyName = new SenderKeyName(groupId, receiverAddress)
        const senderStore = new InMemorySenderKeyStore()
        const receiverStore = new InMemorySenderKeyStore()
        const senderSessionBuilder = new GroupSessionBuilder(senderStore)
        const distributionMsg = await senderSessionBuilder.create(senderKeyName)
        const receiverSessionBuilder = new GroupSessionBuilder(receiverStore)
        await receiverSessionBuilder.process(receiverKeyName, distributionMsg)
        // Sender encrypts a message
        const cipher = new GroupCipher(senderStore, senderKeyName)
        const plaintext = new TextEncoder().encode('persisted message')
        const encrypted = await cipher.encrypt(plaintext)
        // Persist state
        const senderRecordSerialized = SenderKeyRecord.encode(senderStore.loadSenderKey(senderKeyName)).finish()
        const receiverRecordSerialized = SenderKeyRecord.encode(receiverStore.loadSenderKey(receiverKeyName)).finish()
        // Restore state
        const senderStore2 = new InMemorySenderKeyStore()
        const receiverStore2 = new InMemorySenderKeyStore()
        senderStore2.storeSenderKey(senderKeyName, SenderKeyRecord.decode(senderRecordSerialized))
        receiverStore2.storeSenderKey(receiverKeyName, SenderKeyRecord.decode(receiverRecordSerialized))
        // Decrypt with restored state
        const receiverCipher2 = new GroupCipher(receiverStore2, receiverKeyName)
        const decrypted = await receiverCipher2.decrypt(encrypted)
        const decryptedText = new TextDecoder().decode(decrypted)
        expect(decryptedText).toBe('persisted message')
    })
})
