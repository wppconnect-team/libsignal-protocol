import { Field, Message, Type } from 'protobufjs/light'

/**
 * Represents a signing key in the Sender Key ratchet for group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const signingKey = new SenderSigningKey(...)
 * ```
 */
@Type.d('SenderKeyStateStructure_SenderSigningKey')
export class SenderSigningKey extends Message<SenderSigningKey> {
    @Field.d(1, 'bytes', 'optional')
    public public!: Uint8Array

    @Field.d(2, 'bytes', 'optional')
    public private?: Uint8Array
}
