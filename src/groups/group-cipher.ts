import { SenderKeyStore } from './state/sender-key-store'
import { SenderKeyName } from './sender-key-name'
import { crypto } from '../internal/crypto'
import { SenderKeyMessage } from './sender-key-message'
import { SessionLock } from '../session-lock'
import { SenderKeyState } from './state/sender-key-state'
import { SenderMessageKey } from './ratchet/sender-message-key'

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
        const runJob = async () => {
            const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
            const senderKeyState = record.getSenderKeyState()

            // Get the sender key for the given iteration
            const iteration = senderKeyState.getSenderChainKey().getIteration()
            const senderKey = await this.getSenderKey(senderKeyState, iteration === 0 ? 0 : iteration + 1)

            // Encrypt the plaintext
            const ciphertext = await crypto.encrypt(senderKey.getCipherKey(), paddedPlaintext, senderKey.getIv())
            const signingKeyPrivate = senderKeyState.getSigningKeyPrivate()

            if (!signingKeyPrivate) throw new Error('Missing signing key')

            // Create the message and sign it
            const msg = await SenderKeyMessage.create(
                senderKeyState.getKeyId(),
                senderKey.getIteration(),
                ciphertext,
                signingKeyPrivate
            )

            await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
            return msg.serialize()
        }

        return SessionLock.queueJobForNumber(this.senderKeyId.serialize(), runJob)
    }

    /**
     * Decrypts a group message from a serialized SenderKeyMessage (protobuf + signature).
     * @param senderKeyMessageBytes The received serialized SenderKeyMessage (protobuf + signature)
     * @returns Plaintext
     */
    async decrypt(senderKeyMessageBytes: ArrayBuffer): Promise<ArrayBuffer> {
        const runJob = async () => {
            const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
            if (record.isEmpty()) throw new Error('No sender key for: ' + this.senderKeyId.serialize())
            const msg = SenderKeyMessage.fromSerialized(senderKeyMessageBytes)
            // Search the correct state by keyId
            const senderKeyState = record.getSenderKeyStateById(msg.keyId)
            const signingKeyPublic = senderKeyState.getSigningKeyPublic()
            if (!(await msg.verifySignature(signingKeyPublic))) throw new Error('Invalid signature')

            // Get the sender key for the given iteration
            const iteration = senderKeyState.getSenderChainKey().getIteration()
            const senderKey = await this.getSenderKey(senderKeyState, iteration)

            // Decrypt
            // const senderKey = await senderKeyState.getSenderChainKey().getSenderMessageKey()
            const plaintext = await crypto.decrypt(senderKey.getCipherKey(), msg.ciphertext, senderKey.getIv())
            await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
            return plaintext
        }

        return SessionLock.queueJobForNumber(this.senderKeyId.serialize(), runJob)
    }

    private async getSenderKey(senderKeyState: SenderKeyState, iteration: number): Promise<SenderMessageKey> {
        let senderChainKey = senderKeyState.getSenderChainKey()
        if (senderChainKey.getIteration() > iteration) {
            if (senderKeyState.hasSenderMessageKey(iteration)) {
                return (await senderKeyState.removeSenderMessageKey(iteration))!
            }
            throw new Error(`Received message with old counter: ${senderChainKey.getIteration()}, ${iteration}`)
        }

        if (iteration - senderChainKey.getIteration() > 2000) {
            throw new Error('Over 2000 messages into the future!')
        }

        while (senderChainKey.getIteration() < iteration) {
            senderKeyState.addSenderMessageKey(await senderChainKey.getSenderMessageKey())
            senderChainKey = await senderChainKey.getNext()
        }

        senderKeyState.setSenderChainKey(await senderChainKey.getNext())
        return await senderChainKey.getSenderMessageKey()
    }
}
