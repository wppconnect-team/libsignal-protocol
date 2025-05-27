import { Field, Message, Type } from 'protobufjs/light'
import * as internal from '../../internal'

/**
 * Represents a message key in the Sender Key ratchet for group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const msgKey = new SenderMessageKey(...)
 * ```
 */
@Type.d('SenderKeyStateStructure_SenderMessageKey')
export class SenderMessageKey extends Message<SenderMessageKey> {
    @Field.d(1, 'uint32', 'optional')
    public iteration!: number

    @Field.d(2, 'bytes', 'optional')
    public seed!: Uint8Array

    private _iv?: Uint8Array

    public _cipherKey?: Uint8Array

    public get iv(): Uint8Array {
        if (!this._iv) {
            this.deriveHKDF()
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._iv!
    }

    public get cipherKey(): Uint8Array {
        if (!this._cipherKey) {
            this.deriveHKDF()
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._cipherKey!
    }

    protected deriveHKDF() {
        // Derives 48 bytes: 16 for IV, 32 for cipherKey
        // info = 'WhisperGroup'
        // salt can be zero or fixed, depending on usage
        // Here, for simplicity, salt = 32 bytes zero
        const salt = new Uint8Array(32)
        const [ivFull, cipherKeyFull] = internal.crypto.HKDF(this.seed, salt, 'WhisperGroup')
        const iv = ivFull.slice(0, 16)

        const cipherKey = new Uint8Array(32)
        cipherKey.set(new Uint8Array(ivFull.slice(16)))
        cipherKey.set(new Uint8Array(cipherKeyFull.slice(0, 16)), 16)

        this._iv = iv
        this._cipherKey = cipherKey
    }
}
