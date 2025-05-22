import { HKDF } from '../../internal/crypto'

/**
 * Represents the symmetric material (IV and Cipher Key) for encrypting group messages.
 */
export class SenderMessageKey {
    private readonly iteration: number
    private readonly iv: ArrayBuffer
    private readonly cipherKey: ArrayBuffer
    private readonly seed: ArrayBuffer

    /**
     * Use static async create() to instantiate.
     * @param iteration The message iteration
     * @param seed The seed for key derivation
     * @param iv The derived IV
     * @param cipherKey The derived cipher key
     */
    private constructor(iteration: number, seed: ArrayBuffer, iv: ArrayBuffer, cipherKey: ArrayBuffer) {
        this.iteration = iteration
        this.seed = seed
        this.iv = iv
        this.cipherKey = cipherKey
    }

    /**
     * Asynchronously creates a SenderMessageKey by deriving IV and cipherKey using HKDF.
     * @param iteration The message iteration
     * @param seed The seed for key derivation
     */
    static async create(iteration: number, seed: ArrayBuffer): Promise<SenderMessageKey> {
        // Derives 48 bytes: 16 for IV, 32 for cipherKey
        // info = 'WhisperGroup'
        // salt can be zero or fixed, depending on usage
        // Here, for simplicity, salt = 32 bytes zero
        const salt = new Uint8Array(32).buffer
        const [ivFull, cipherKeyFull] = await HKDF(seed, salt, 'WhisperGroup')
        const iv = ivFull.slice(0, 16)

        const keys = new Uint8Array(32)
        keys.set(new Uint8Array(ivFull.slice(16)))
        keys.set(new Uint8Array(cipherKeyFull.slice(0, 16)), 16)

        const cipherKey = keys.buffer

        // const cipherKey = cipherKeyFull.slice(0, 32)
        return new SenderMessageKey(iteration, seed, iv, cipherKey)
    }

    /**
     * Returns the message iteration.
     */
    getIteration(): number {
        return this.iteration
    }

    /**
     * Returns the IV for encryption.
     */
    getIv(): ArrayBuffer {
        return this.iv
    }

    /**
     * Returns the cipher key for encryption.
     */
    getCipherKey(): ArrayBuffer {
        return this.cipherKey
    }

    /**
     * Returns the seed used for derivation.
     */
    getSeed(): ArrayBuffer {
        return this.seed
    }
}
