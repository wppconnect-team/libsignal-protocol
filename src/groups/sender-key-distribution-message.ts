import { textsecure } from '../protos'

/**
 * Represents a SenderKeyDistributionMessage for distributing sender keys in group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const msg = new SenderKeyDistributionMessage(...)
 * const serialized = msg.serialize()
 * const parsed = SenderKeyDistributionMessage.fromSerialized(serialized)
 * ```
 */
export class SenderKeyDistributionMessage {
    public readonly id: number
    public readonly iteration: number
    public readonly chainKey: Uint8Array
    public readonly signingKey: Uint8Array
    public readonly serialized: Uint8Array
    public readonly version: number

    /**
     * Creates a SenderKeyDistributionMessage from fields.
     * @param id The sender key ID
     * @param iteration The chain key iteration
     * @param chainKey The chain key value
     * @param signingKey The public signing key
     */
    constructor(id: number, iteration: number, chainKey: Uint8Array, signingKey: Uint8Array, version = 3) {
        this.id = id
        this.iteration = iteration
        this.chainKey = chainKey
        this.signingKey = signingKey
        this.version = version
        // Serialize the main fields (adjust according to the real .proto)
        const message = textsecure.SenderKeyDistributionMessage.create({
            id,
            chainKey,
            iteration,
            signingKey,
        })

        const versionByte = (((this.version << 4) | this.version) & 0xff) % 256
        const messsage = textsecure.SenderKeyDistributionMessage.encode(message).finish()

        this.serialized = Buffer.concat([new Uint8Array([versionByte]), messsage])
    }

    /**
     * Serializes the message for transmission.
     */
    serialize(): Uint8Array {
        return this.serialized
    }

    /**
     * Creates an instance from serialized data.
     */
    static fromSerialized(serialized: Uint8Array): SenderKeyDistributionMessage {
        const versionByte = serialized[0]
        const version = (versionByte & 0xff) >> 4
        const message = serialized.slice(1)

        const decoded = textsecure.SenderKeyDistributionMessage.decode(message)
        const id = decoded.id ?? 0
        const iteration = decoded.iteration ?? 0
        const chainKey = decoded.chainKey ?? new Uint8Array()
        const signingKey = decoded.signingKey ?? new Uint8Array()
        return new SenderKeyDistributionMessage(id, iteration, chainKey, signingKey, version)
    }
}
