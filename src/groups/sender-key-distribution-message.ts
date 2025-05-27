import { Field, Message, Type } from 'protobufjs/light'

/**
 * Represents a SenderKeyDistributionMessage for distributing sender keys in group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const msg = new SenderKeyDistributionMessage(...)
 * const serialized = msg.serialize()
 * const parsed = SenderKeyDistributionMessage.deserialize(serialized)
 * ```
 */
@Type.d('SenderKeyDistributionMessage')
export class SenderKeyDistributionMessage extends Message<SenderKeyDistributionMessage> {
    private static readonly CURRENT_VERSION = 3

    @Field.d(1, 'uint32', 'optional')
    public id!: number

    @Field.d(2, 'uint32', 'optional')
    public iteration!: number

    @Field.d(3, 'bytes', 'optional')
    public chainKey!: Uint8Array

    @Field.d(4, 'bytes', 'optional')
    public signingKey!: Uint8Array

    public version = SenderKeyDistributionMessage.CURRENT_VERSION

    public static serialize(message: SenderKeyDistributionMessage): Uint8Array {
        const versionByte = (((message.version << 4) | message.version) & 0xff) % 256

        const payload = super.encode(message).finish()
        const out = new Uint8Array(1 + payload.length)
        out[0] = versionByte
        out.set(payload, 1)
        return out
    }

    /**
     * Desserializa o buffer, validando a versão antes de delegar ao decode original.
     */
    public static deserialize(buffer: Uint8Array): SenderKeyDistributionMessage {
        const versionByte = buffer[0]

        const message = super.decode(buffer.subarray(1)) as SenderKeyDistributionMessage

        message.version = (versionByte & 0xff) >> 4

        return message
    }

    /**
     * Serializes the message for transmission.
     */
    public serialize(): Uint8Array {
        return SenderKeyDistributionMessage.serialize(this)
    }

    public deserialize(buffer: Uint8Array): SenderKeyDistributionMessage {
        return SenderKeyDistributionMessage.deserialize(buffer)
    }
}
