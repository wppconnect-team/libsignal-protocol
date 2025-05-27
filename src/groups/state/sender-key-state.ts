import { Field, Message, Type } from 'protobufjs/light'
import { SenderChainKey } from '../ratchet/sender-chain-key'
import { SenderMessageKey } from '../ratchet/sender-message-key'
import { SenderSigningKey } from '../ratchet/sender-signing-key'

const MAX_MESSAGE_KEYS = 2000

/**
 * Represents the state of a sender key for a group session (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const state = new SenderKeyState(...)
 * ```
 */
@Type.d('SenderKeyStateStructure')
export class SenderKeyState extends Message<SenderKeyState> {
    @Field.d(1, 'uint32', 'optional')
    public keyId!: number

    @Field.d(2, SenderChainKey, 'optional')
    public senderChainKey!: SenderChainKey

    @Field.d(3, SenderSigningKey, 'optional')
    public signingKey!: SenderSigningKey

    @Field.d(4, SenderMessageKey, 'repeated', [])
    public senderMessageKeys: SenderMessageKey[] = []

    /**
     * Checks if a message key for the given iteration exists.
     */
    hasSenderMessageKey(iteration: number): boolean {
        return this.senderMessageKeys.some((k) => k.iteration === iteration)
    }

    /**
     * Adds a SenderMessageKey for a given iteration.
     */
    addSenderMessageKey(senderMessageKey: SenderMessageKey): void {
        this.senderMessageKeys.push(senderMessageKey)
        if (this.senderMessageKeys.length > MAX_MESSAGE_KEYS) {
            this.senderMessageKeys.shift()
        }
    }

    /**
     * Removes and returns the SenderMessageKey for a given iteration, if present.
     */
    removeSenderMessageKey(iteration: number): SenderMessageKey | undefined {
        const idx = this.senderMessageKeys.findIndex((k) => k.iteration === iteration)
        if (idx !== -1) {
            const [removed] = this.senderMessageKeys.splice(idx, 1)
            return new SenderMessageKey({
                iteration: removed.iteration,
                seed: removed.seed,
            })
        }
        return undefined
    }
}
