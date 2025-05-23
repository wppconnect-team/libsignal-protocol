import * as protos from '../protos'
import { crypto } from '../internal/crypto'

/**
 * Represents a SenderKeyMessage for group messaging, including serialization and signature.
 * Structure and methods inspired by the Java/libsignal standard.
 */
export class SenderKeyMessage {
    public static readonly SIGNATURE_LENGTH: number = 64
    public readonly keyId: number
    public readonly iteration: number
    public readonly ciphertext: Uint8Array
    public readonly signature: Uint8Array
    public readonly serialized: Uint8Array
    public readonly version: number
    private constructor(
        keyId: number,
        iteration: number,
        ciphertext: Uint8Array,
        serialized: Uint8Array,
        signature: Uint8Array,
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
        ciphertext: Uint8Array,
        signingKeyPrivate: Uint8Array,
        version = 3
    ): Promise<SenderKeyMessage> {
        const versionByte = (((version << 4) | version) & 0xff) % 256

        const message = protos.SenderKeyMessage.create({
            id: keyId,
            iteration,
            ciphertext: new Uint8Array(ciphertext),
        })
        const encoded = protos.SenderKeyMessage.encode(message).finish()

        const serialized = new Uint8Array([versionByte, ...encoded])

        const signature = await crypto.Ed25519Sign(signingKeyPrivate, serialized)

        return new SenderKeyMessage(keyId, iteration, ciphertext, serialized, signature, version)
    }

    /**
     * Verifies the signature of the message.
     * @param signingKeyPublic The sender's public signing key
     */
    async verifySignature(signingKeyPublic: Uint8Array): Promise<boolean> {
        return await crypto.Ed25519Verify(signingKeyPublic, this.serialized, this.signature)
    }

    /**
     * Serializes the message for transmission (protobuf + signature concatenated).
     * @returns Uint8Array containing protobuf + signature
     */
    serialize(): Uint8Array {
        const sig = new Uint8Array(this.signature)
        const ser = new Uint8Array(this.serialized)
        const out = new Uint8Array(ser.length + sig.length)
        out.set(ser, 0)
        out.set(sig, ser.length)
        return out
    }

    /**
     * Creates an instance from serialized data (protobuf + signature concatenated).
     * @param serializedWithSig Uint8Array containing protobuf + signature
     */
    static fromSerialized(serializedWithSig: Uint8Array): SenderKeyMessage {
        const serializedEncoded = new Uint8Array(serializedWithSig)

        const versionByte = serializedEncoded[0]

        const version = (versionByte & 0xff) >> 4

        const message = serializedEncoded.slice(1, serializedEncoded.byteLength - SenderKeyMessage.SIGNATURE_LENGTH)
        const signature = serializedEncoded.slice(-1 * SenderKeyMessage.SIGNATURE_LENGTH)

        const serialized = new Uint8Array([versionByte, ...message])

        const decoded = protos.SenderKeyMessage.decode(new Uint8Array(message))
        const keyId = decoded.id ?? 0
        const iteration = decoded.iteration ?? 0
        const ciphertext = decoded.ciphertext ? decoded.ciphertext : new Uint8Array(0)
        return new SenderKeyMessage(keyId, iteration, ciphertext, serialized, signature, version)
    }
}
