import { SenderKeyState } from './sender-key-state'
import { SenderKeyRecordStructure, SenderKeyStateStructure } from '../../protos/LocalStorageProtocol'

const MAX_STATES = 5

/**
 * Represents a set of SenderKeyStates for a specific SenderKeyName.
 */
export class SenderKeyRecord {
    private senderKeyStates: SenderKeyState[] = []

    /**
     * Creates a SenderKeyRecord from a serialized ArrayBuffer (protobuf).
     */
    static fromSerialized(buffer: ArrayBuffer): SenderKeyRecord {
        const decoded = SenderKeyRecordStructure.decode(new Uint8Array(buffer))
        const record = new SenderKeyRecord()
        for (const stateStruct of decoded.senderKeyStates) {
            record.senderKeyStates.push(SenderKeyState.fromProto(stateStruct))
        }
        return record
    }

    /**
     * Serializes the SenderKeyRecord to an ArrayBuffer (protobuf).
     */
    serialize(): ArrayBuffer {
        const protoStates: SenderKeyStateStructure[] = this.senderKeyStates.map((s) => s.toProto())
        const proto = SenderKeyRecordStructure.create({ senderKeyStates: protoStates })
        const encoded = SenderKeyRecordStructure.encode(proto).finish()
        return encoded.buffer.slice(encoded.byteOffset, encoded.byteOffset + encoded.byteLength)
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
    addSenderKeyState(id: number, iteration: number, chainKey: ArrayBuffer, signatureKey: ArrayBuffer): void {
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
        chainKey: ArrayBuffer,
        signatureKey: { pubKey: ArrayBuffer; privKey: ArrayBuffer }
    ): void {
        this.senderKeyStates = [new SenderKeyState(id, iteration, chainKey, signatureKey)]
    }
}
