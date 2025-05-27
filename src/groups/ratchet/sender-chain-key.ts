import { Field, Message, Type } from 'protobufjs/light'
import * as internal from '../../internal'
import { SenderMessageKey } from './sender-message-key'

const MESSAGE_KEY_SEED = new Uint8Array([0x01])
const CHAIN_KEY_SEED = new Uint8Array([0x02])

/**
 * Represents a chain key in the Sender Key ratchet for group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const chainKey = new SenderChainKey(...)
 * ```
 */
@Type.d('SenderKeyStateStructure_SenderChainKey')
export class SenderChainKey extends Message<SenderChainKey> {
    @Field.d(1, 'uint32', 'optional')
    public iteration!: number

    @Field.d(2, 'bytes', 'optional')
    public chainKey!: Uint8Array

    /**
     * Derives the SenderMessageKey for this iteration.
     */
    getSenderMessageKey(): SenderMessageKey {
        const seed = internal.crypto.sign(this.chainKey, MESSAGE_KEY_SEED)
        return new SenderMessageKey({
            iteration: this.iteration,
            seed,
        })
    }

    /**
     * Returns the next SenderChainKey in the chain.
     */
    getNext(): SenderChainKey {
        const nextKey = internal.crypto.sign(this.chainKey, CHAIN_KEY_SEED)
        return new SenderChainKey({
            iteration: this.iteration + 1,
            chainKey: nextKey,
        })
    }
}
