import { SenderKeyStore } from './state/sender-key-store'
import { SenderKeyName } from './sender-key-name'
import { crypto } from '../internal/crypto'
import { SenderKeyMessage } from './sender-key-message'

/**
 * Main entry point for Signal Protocol group encrypt/decrypt operations.
 * Once a session is established, this class is used for all subsequent encrypt/decrypt operations.
 */
export class GroupCipher {
    private senderKeyStore: SenderKeyStore
    private senderKeyId: SenderKeyName

    /**
     * @param senderKeyStore The storage interface for sender keys
     * @param senderKeyId The (groupId, senderId, deviceId) tuple
     */
    constructor(senderKeyStore: SenderKeyStore, senderKeyId: SenderKeyName) {
        this.senderKeyStore = senderKeyStore
        this.senderKeyId = senderKeyId
    }

    /**
     * Encrypts a message for the group, returning a serialized SenderKeyMessage (with signature appended).
     * @param paddedPlaintext The plaintext message bytes, optionally padded
     * @returns Serialized SenderKeyMessage (protobuf + signature)
     */
    async encrypt(paddedPlaintext: ArrayBuffer): Promise<ArrayBuffer> {
        const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
        const senderKeyState = record.getSenderKeyState()
        const senderKey = await senderKeyState.getSenderChainKey().getSenderMessageKey()
        const ciphertext = await crypto.encrypt(senderKey.getCipherKey(), paddedPlaintext, senderKey.getIv())
        const keyId = senderKeyState.getKeyId()
        const iteration = senderKey.getIteration()
        const signingKeyPrivate = senderKeyState.getSigningKeyPrivate()
        if (!signingKeyPrivate) throw new Error('Missing signing key')
        // Cria a mensagem e assina
        const msg = await SenderKeyMessage.create(keyId, iteration, ciphertext, signingKeyPrivate)
        senderKeyState.setSenderChainKey(await senderKeyState.getSenderChainKey().getNext())
        await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
        return msg.serialize()
    }

    /**
     * Decrypts a group message from a serialized SenderKeyMessage (protobuf + signature).
     * @param senderKeyMessageBytes The received serialized SenderKeyMessage (protobuf + signature)
     * @returns Plaintext
     */
    async decrypt(senderKeyMessageBytes: ArrayBuffer): Promise<ArrayBuffer> {
        const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
        if (record.isEmpty()) throw new Error('No sender key for: ' + this.senderKeyId.serialize())
        const msg = SenderKeyMessage.fromSerialized(senderKeyMessageBytes)
        // Search the correct state by keyId
        const senderKeyState = record.getSenderKeyStateById(msg.keyId)
        const signingKeyPublic = senderKeyState.getSigningKeyPublic()
        if (!(await msg.verifySignature(signingKeyPublic))) throw new Error('Invalid signature')
        // Decrypt
        const senderKey = await senderKeyState.getSenderChainKey().getSenderMessageKey()
        const plaintext = await crypto.decrypt(senderKey.getCipherKey(), msg.ciphertext, senderKey.getIv())
        await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
        return plaintext
    }
}
