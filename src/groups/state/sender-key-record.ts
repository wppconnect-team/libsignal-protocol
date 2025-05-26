import { SenderKeyState } from './sender-key-state'
import { textsecure } from '../../protos'

const MAX_STATES = 5

/**
 * Stores and manages the state of sender keys for group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const record = new SenderKeyRecord()
 * record.addState(...)
 * const state = record.getSenderKeyState()
 * ```
 */
export class SenderKeyRecord {
    private senderKeyStates: SenderKeyState[] = []

    /**
     * Creates a SenderKeyRecord from a serialized Uint8Array (protobuf).
     */
    static fromSerialized(buffer: Uint8Array): SenderKeyRecord {
        const decoded = textsecure.SenderKeyRecordStructure.decode(buffer)
        const record = new SenderKeyRecord()
        for (const stateStruct of decoded.senderKeyStates) {
            record.senderKeyStates.push(SenderKeyState.fromProto(stateStruct))
        }
        return record
    }

    /**
     * Serializes the SenderKeyRecord to a Uint8Array (protobuf).
     */
    serialize(): Uint8Array {
        const protoStates: textsecure.ISenderKeyStateStructure[] = this.senderKeyStates.map((s) => s.toProto())
        const proto = textsecure.SenderKeyRecordStructure.create({ senderKeyStates: protoStates })
        const encoded = textsecure.SenderKeyRecordStructure.encode(proto).finish()
        return new Uint8Array(encoded.buffer, encoded.byteOffset, encoded.byteLength)
    }

    /**
     * Returns true if there are no states in the record.
     */
    isEmpty(): boolean {
        return this.senderKeyStates.length === 0
    }

    /**
     * Returns the most recent SenderKeyState.
     * Throws if there are no states.
     */
    getSenderKeyState(): SenderKeyState {
        if (!this.isEmpty()) {
            return this.senderKeyStates[0]
        }
        throw new Error('No key state in record!')
    }

    /**
     * Returns the SenderKeyState for a given keyId.
     * Throws if not found.
     */
    getSenderKeyStateById(keyId: number): SenderKeyState {
        for (const state of this.senderKeyStates) {
            if (state.getKeyId() === keyId) return state
        }
        throw new Error('No keys for: ' + keyId)
    }

    /**
     * Adds a new SenderKeyState to the record.
     */
    addSenderKeyState(id: number, iteration: number, chainKey: Uint8Array, signatureKey: Uint8Array): void {
        this.senderKeyStates.unshift(new SenderKeyState(id, iteration, chainKey, signatureKey))
        if (this.senderKeyStates.length > MAX_STATES) {
            this.senderKeyStates.pop()
        }
    }

    /**
     * Sets the SenderKeyState, replacing all previous states.
     */
    setSenderKeyState(
        id: number,
        iteration: number,
        chainKey: Uint8Array,
        signatureKey: { pubKey: Uint8Array; privKey: Uint8Array }
    ): void {
        this.senderKeyStates = [new SenderKeyState(id, iteration, chainKey, signatureKey)]
    }
}
