import { SenderChainKey } from '../ratchet/sender-chain-key'
import { SenderMessageKey } from '../ratchet/sender-message-key'
import {
    SenderKeyStateStructure,
    SenderKeyStateStructure_SenderChainKey,
    SenderKeyStateStructure_SenderSigningKey,
    SenderKeyStateStructure_SenderMessageKey,
} from '../../protos/LocalStorageProtocol'

const MAX_MESSAGE_KEYS = 2000

/**
 * Represents the state of a sender key for a group session (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * const state = new SenderKeyState(...)
 * ```
 */
export class SenderKeyState {
    private keyId: number
    private senderChainKey: SenderChainKey
    private signingKeyPublic: Uint8Array
    private signingKeyPrivate?: Uint8Array
    private senderMessageKeys: { iteration: number; seed: Uint8Array }[] = []

    /**
     * @param id The key ID
     * @param iteration The chain key iteration
     * @param chainKey The chain key value
     * @param signatureKey The signing key (public or key pair)
     */
    constructor(
        id: number,
        iteration: number,
        chainKey: Uint8Array,
        signatureKey: Uint8Array | { pubKey: Uint8Array; privKey: Uint8Array }
    ) {
        this.keyId = id
        this.senderChainKey = new SenderChainKey(iteration, chainKey)
        if (signatureKey instanceof Object && 'pubKey' in signatureKey && 'privKey' in signatureKey) {
            this.signingKeyPublic = signatureKey.pubKey
            this.signingKeyPrivate = signatureKey.privKey
        } else {
            this.signingKeyPublic = signatureKey as Uint8Array
        }
    }

    /**
     * Creates a SenderKeyState from a protobuf structure.
     */
    static fromProto(proto: SenderKeyStateStructure): SenderKeyState {
        const keyId = proto.senderKeyId ?? 0
        const chainKeyStruct = proto.senderChainKey as SenderKeyStateStructure_SenderChainKey
        const signingKeyStruct = proto.senderSigningKey as SenderKeyStateStructure_SenderSigningKey
        const iteration = chainKeyStruct?.iteration ?? 0
        const chainKey = chainKeyStruct?.seed || new Uint8Array(0)
        const signingKeyPublic = signingKeyStruct?.public || new Uint8Array(0)
        const signingKeyPrivate = signingKeyStruct?.private || undefined
        const state = new SenderKeyState(
            keyId,
            iteration,
            chainKey,
            signingKeyPrivate ? { pubKey: signingKeyPublic, privKey: signingKeyPrivate } : signingKeyPublic
        )
        // Restore message keys
        if (proto.senderMessageKeys) {
            for (const mk of proto.senderMessageKeys) {
                if (mk.seed) {
                    state.senderMessageKeys.push({
                        iteration: mk.iteration ?? 0,
                        seed: mk.seed,
                    })
                }
            }
        }
        return state
    }

    /**
     * Serializes the SenderKeyState to a protobuf structure.
     */
    toProto(): SenderKeyStateStructure {
        const chainKey = this.senderChainKey
        const signingKeyStruct: SenderKeyStateStructure_SenderSigningKey = {
            public: new Uint8Array(this.signingKeyPublic),
            private: this.signingKeyPrivate ? new Uint8Array(this.signingKeyPrivate) : undefined,
        }
        const chainKeyStruct: SenderKeyStateStructure_SenderChainKey = {
            iteration: chainKey.getIteration(),
            seed: new Uint8Array(chainKey.getSeed()),
        }
        const messageKeys: SenderKeyStateStructure_SenderMessageKey[] = this.senderMessageKeys.map((mk) => ({
            iteration: mk.iteration,
            seed: new Uint8Array(mk.seed),
        }))
        return {
            senderKeyId: this.keyId,
            senderChainKey: chainKeyStruct,
            senderSigningKey: signingKeyStruct,
            senderMessageKeys: messageKeys,
        }
    }

    /**
     * Returns the key ID.
     */
    getKeyId(): number {
        return this.keyId
    }

    /**
     * Returns the current SenderChainKey.
     */
    getSenderChainKey(): SenderChainKey {
        return this.senderChainKey
    }

    /**
     * Sets the SenderChainKey.
     */
    setSenderChainKey(chainKey: SenderChainKey): void {
        this.senderChainKey = chainKey
    }

    /**
     * Returns the public signing key.
     */
    getSigningKeyPublic(): Uint8Array {
        return this.signingKeyPublic
    }

    /**
     * Returns the private signing key, if available.
     */
    getSigningKeyPrivate(): Uint8Array | undefined {
        return this.signingKeyPrivate
    }

    /**
     * Checks if a message key for the given iteration exists.
     */
    hasSenderMessageKey(iteration: number): boolean {
        return this.senderMessageKeys.some((k) => k.iteration === iteration)
    }

    /**
     * Adds a SenderMessageKey for a given iteration.
     */
    addSenderMessageKey(senderMessageKey: SenderMessageKey): void {
        this.senderMessageKeys.push({ iteration: senderMessageKey.getIteration(), seed: senderMessageKey.getSeed() })
        if (this.senderMessageKeys.length > MAX_MESSAGE_KEYS) {
            this.senderMessageKeys.shift()
        }
    }

    /**
     * Removes and returns the SenderMessageKey for a given iteration, if present.
     */
    async removeSenderMessageKey(iteration: number): Promise<SenderMessageKey | undefined> {
        const idx = this.senderMessageKeys.findIndex((k) => k.iteration === iteration)
        if (idx !== -1) {
            const [removed] = this.senderMessageKeys.splice(idx, 1)
            return await SenderMessageKey.create(removed.iteration, removed.seed)
        }
        return undefined
    }
}
