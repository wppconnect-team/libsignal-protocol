import * as protos from '../protos'
import { crypto } from '../internal/crypto'
import { uint8ArrayToArrayBuffer } from '../helpers'

/**
 * Represents a SenderKeyMessage for group messaging, including serialization and signature.
 * Structure and methods inspired by the Java/libsignal standard.
 */
export class SenderKeyMessage {
    public static readonly SIGNATURE_LENGTH: number = 64
    public readonly keyId: number
    public readonly iteration: number
    public readonly ciphertext: ArrayBuffer
    public readonly signature: ArrayBuffer
    public readonly serialized: ArrayBuffer
    public readonly version: number
    private constructor(
        keyId: number,
        iteration: number,
        ciphertext: ArrayBuffer,
        serialized: ArrayBuffer,
        signature: ArrayBuffer,
        version: number
    ) {
        this.keyId = keyId
        this.iteration = iteration
        this.ciphertext = ciphertext
        this.serialized = serialized
        this.signature = signature
        this.version = version
    }

    /**
     * Creates a signed SenderKeyMessage (Ed25519 signature).
     * @param keyId The sender key ID
     * @param iteration The message iteration
     * @param ciphertext The encrypted message
     * @param signingKeyPrivate The sender's private signing key
     */
    static async create(
        keyId: number,
        iteration: number,
        ciphertext: ArrayBuffer,
        signingKeyPrivate: ArrayBuffer,
        version = 3
    ): Promise<SenderKeyMessage> {
        const versionByte = (((version << 4) | version) & 0xff) % 256

        const message = protos.SenderKeyMessage.create({
            id: keyId,
            iteration,
            ciphertext: new Uint8Array(ciphertext),
        })
        const encoded = protos.SenderKeyMessage.encode(message).finish()

        const serialized = Buffer.concat([new Uint8Array([versionByte]), encoded])

        const signature = await crypto.Ed25519Sign(signingKeyPrivate, serialized)

        return new SenderKeyMessage(keyId, iteration, ciphertext, serialized, signature, version)
    }

    /**
     * Verifies the signature of the message.
     * @param signingKeyPublic The sender's public signing key
     */
    async verifySignature(signingKeyPublic: ArrayBuffer): Promise<boolean> {
        return await crypto.Ed25519Verify(signingKeyPublic, this.serialized, this.signature)
    }

    /**
     * Serializes the message for transmission (protobuf + signature concatenated).
     * @returns ArrayBuffer containing protobuf + signature
     */
    serialize(): ArrayBuffer {
        const sig = new Uint8Array(this.signature)
        const ser = new Uint8Array(this.serialized)
        const out = new Uint8Array(ser.length + sig.length)
        out.set(ser, 0)
        out.set(sig, ser.length)
        return out.buffer
    }

    /**
     * Creates an instance from serialized data (protobuf + signature concatenated).
     * @param serializedWithSig ArrayBuffer containing protobuf + signature
     */
    static fromSerialized(serializedWithSig: ArrayBuffer): SenderKeyMessage {
        const serializedEncoded = new Uint8Array(serializedWithSig)

        const versionByte = serializedEncoded[0]

        const version = (versionByte & 0xff) >> 4

        const message = serializedEncoded.slice(1, serializedEncoded.byteLength - SenderKeyMessage.SIGNATURE_LENGTH)
        const signature = serializedEncoded.slice(-1 * SenderKeyMessage.SIGNATURE_LENGTH)

        const serialized = Buffer.concat([new Uint8Array([versionByte]), new Uint8Array(message)])

        const decoded = protos.SenderKeyMessage.decode(new Uint8Array(message))
        const keyId = decoded.id ?? 0
        const iteration = decoded.iteration ?? 0
        const ciphertext = decoded.ciphertext ? uint8ArrayToArrayBuffer(decoded.ciphertext) : new ArrayBuffer(0)
        return new SenderKeyMessage(keyId, iteration, ciphertext, serialized, signature, version)
    }
}
