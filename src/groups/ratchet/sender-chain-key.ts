import { SenderMessageKey } from './sender-message-key'
import * as internal from '../../internal'

const MESSAGE_KEY_SEED = new Uint8Array([0x01])
const CHAIN_KEY_SEED = new Uint8Array([0x02])

/**
 * Represents a chain of keys for group messaging, each derived from the previous.
 */
export class SenderChainKey {
    private readonly iteration: number
    private readonly chainKey: Uint8Array

    /**
     * @param iteration The current iteration of the chain
     * @param chainKey The current chain key value
     */
    constructor(iteration: number, chainKey: Uint8Array) {
        this.iteration = iteration
        this.chainKey = chainKey
    }

    /**
     * Returns the current iteration.
     */
    getIteration(): number {
        return this.iteration
    }

    /**
     * Derives the SenderMessageKey for this iteration.
     */
    async getSenderMessageKey(): Promise<SenderMessageKey> {
        const seed = await internal.crypto.sign(this.chainKey, MESSAGE_KEY_SEED)
        return SenderMessageKey.create(this.iteration, seed)
    }

    /**
     * Returns the next SenderChainKey in the chain.
     */
    async getNext(): Promise<SenderChainKey> {
        const nextKey = await internal.crypto.sign(this.chainKey, CHAIN_KEY_SEED)
        return new SenderChainKey(this.iteration + 1, nextKey)
    }

    /**
     * Returns the raw chain key seed.
     */
    getSeed(): Uint8Array {
        return this.chainKey
    }
}
