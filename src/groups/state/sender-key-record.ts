import { Field, Message, Type } from 'protobufjs/light'
import { SenderChainKey } from '../ratchet/sender-chain-key'
import { SenderSigningKey } from '../ratchet/sender-signing-key'
import { SenderKeyState } from './sender-key-state'

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
@Type.d('SenderKeyRecordStructure')
export class SenderKeyRecord extends Message<SenderKeyRecord> {
    @Field.d(1, SenderKeyState, 'repeated', [])
    public senderKeyStates: SenderKeyState[] = []

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
            if (state.keyId === keyId) return state
        }
        throw new Error('No keys for: ' + keyId)
    }

    /**
     * Adds a new SenderKeyState to the record.
     */
    addSenderKeyState(id: number, iteration: number, chainKey: Uint8Array, signatureKey: Uint8Array): void {
        this.senderKeyStates.unshift(
            new SenderKeyState({
                keyId: id,
                senderChainKey: new SenderChainKey({
                    iteration,
                    chainKey,
                }),
                signingKey: new SenderSigningKey({
                    public: signatureKey,
                }),
            })
        )
        if (this.senderKeyStates.length > MAX_STATES) {
            this.senderKeyStates.pop()
        }
    }

    /**
     * Sets the SenderKeyState, replacing all previous states.
     */
    setSenderKeyState(id: number, iteration: number, chainKey: Uint8Array, signatureKey: SenderSigningKey): void {
        this.senderKeyStates = [
            new SenderKeyState({
                keyId: id,
                senderChainKey: new SenderChainKey({
                    iteration,
                    chainKey,
                }),
                signingKey: signatureKey,
            }),
        ]
    }
}
