import { SenderKeyStore } from './state/sender-key-store'
import { SenderKeyName } from './sender-key-name'
import * as internal from '../internal'
import { SenderKeyMessage } from './sender-key-message'
import { SessionLock } from '../session-lock'
import { SenderKeyState } from './state/sender-key-state'
import { SenderMessageKey } from './ratchet/sender-message-key'

/**
 * Handles group message encryption and decryption using the Sender Key protocol (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const cipher = new GroupCipher(store, senderKeyName)
 * const encrypted = await cipher.encrypt(plaintext)
 * const decrypted = await cipher.decrypt(ciphertext)
 * ```
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
    async encrypt(paddedPlaintext: Uint8Array): Promise<Uint8Array> {
        const runJob = async () => {
            const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
            const senderKeyState = record.getSenderKeyState()

            // Get the sender key for the given iteration
            const iteration = senderKeyState.senderChainKey.iteration
            const senderKey = this.getSenderKey(senderKeyState, iteration === 0 ? 0 : iteration + 1)

            // Encrypt the plaintext
            const ciphertext = internal.crypto.encrypt(senderKey.cipherKey, paddedPlaintext, senderKey.iv)
            const signingKeyPrivate = senderKeyState.signingKey.private

            if (!signingKeyPrivate) throw new Error('Missing signing key')

            // Create the message and sign it
            const msg = await SenderKeyMessage.create(
                senderKeyState.keyId,
                senderKey.iteration,
                ciphertext,
                signingKeyPrivate
            )

            await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
            return msg.serialize()
        }

        return SessionLock.queueJobForNumber(this.senderKeyId.toString(), runJob)
    }

    /**
     * Decrypts a group message from a serialized SenderKeyMessage (protobuf + signature).
     * @param senderKeyMessageBytes The received serialized SenderKeyMessage (protobuf + signature)
     * @returns Plaintext
     */
    async decrypt(senderKeyMessageBytes: Uint8Array): Promise<Uint8Array> {
        const runJob = async () => {
            const record = await this.senderKeyStore.loadSenderKey(this.senderKeyId)
            if (record.isEmpty()) throw new Error('No sender key for: ' + this.senderKeyId.toString())
            const msg = SenderKeyMessage.fromSerialized(senderKeyMessageBytes)
            // Search the correct state by keyId
            const senderKeyState = record.getSenderKeyStateById(msg.keyId)
            const signingKeyPublic = senderKeyState.signingKey.public
            if (!(await msg.verifySignature(signingKeyPublic))) throw new Error('Invalid signature')

            // Get the sender key for the given iteration
            const iteration = senderKeyState.senderChainKey.iteration
            const senderKey = this.getSenderKey(senderKeyState, iteration)

            // Decrypt
            // const senderKey = await senderKeyState.getSenderChainKey().getSenderMessageKey()
            const plaintext = internal.crypto.decrypt(senderKey.cipherKey, msg.ciphertext, senderKey.iv)
            await this.senderKeyStore.storeSenderKey(this.senderKeyId, record)
            return plaintext
        }

        return SessionLock.queueJobForNumber(this.senderKeyId.toString(), runJob)
    }

    private getSenderKey(senderKeyState: SenderKeyState, iteration: number): SenderMessageKey {
        let senderChainKey = senderKeyState.senderChainKey
        if (senderChainKey.iteration > iteration) {
            if (senderKeyState.hasSenderMessageKey(iteration)) {
                return senderKeyState.removeSenderMessageKey(iteration)!
            }
            throw new Error(`Received message with old counter: ${senderChainKey.iteration}, ${iteration}`)
        }

        if (iteration - senderChainKey.iteration > 2000) {
            throw new Error('Over 2000 messages into the future!')
        }

        while (senderChainKey.iteration < iteration) {
            senderKeyState.addSenderMessageKey(senderChainKey.getSenderMessageKey())
            senderChainKey = senderChainKey.getNext()
        }

        senderKeyState.senderChainKey = senderChainKey.getNext()
        return senderChainKey.getSenderMessageKey()
    }
}
