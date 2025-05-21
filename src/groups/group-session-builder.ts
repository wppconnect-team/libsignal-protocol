import { SenderKeyStore } from './state/sender-key-store'
import { SenderKeyName } from './sender-key-name'
import { SenderKeyRecord } from './state/sender-key-record'
import { KeyHelper } from '../key-helper'
import { SenderKeyDistributionMessage } from '../protos'

/**
 * Responsible for setting up group SenderKey encrypted sessions.
 * Sessions are constructed per (groupId, senderId, deviceId) tuple.
 */
export class GroupSessionBuilder {
    private senderKeyStore: SenderKeyStore

    /**
     * @param senderKeyStore The storage interface for sender keys
     */
    constructor(senderKeyStore: SenderKeyStore) {
        this.senderKeyStore = senderKeyStore
    }

    /**
     * Processes a received SenderKeyDistributionMessage for a group session.
     * @param senderKeyName The (groupId, senderId, deviceId) tuple
     * @param senderKeyDistributionMessage The received distribution message
     */
    async process(
        senderKeyName: SenderKeyName,
        senderKeyDistributionMessage: SenderKeyDistributionMessage
    ): Promise<void> {
        // senderKeyDistributionMessage must have id, iteration, chainKey, signatureKey
        const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
        senderKeyRecord.addSenderKeyState(
            senderKeyDistributionMessage.id!,
            senderKeyDistributionMessage.iteration!,
            senderKeyDistributionMessage.chainKey!,
            senderKeyDistributionMessage.signingKey!
        )
        await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
    }

    /**
     * Creates a group session for sending messages.
     * @param senderKeyName The (groupId, senderId, deviceId) tuple
     * @returns An object representing the SenderKeyDistributionMessage
     */
    async create(senderKeyName: SenderKeyName): Promise<SenderKeyDistributionMessage> {
        // Returns an object representing SenderKeyDistributionMessage
        const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
        if (senderKeyRecord.isEmpty()) {
            senderKeyRecord.setSenderKeyState(
                KeyHelper.generateRegistrationId(),
                0,
                new Uint8Array(32).buffer, // random chainKey
                await KeyHelper.generateIdentityKeyPair()
            )
            await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
        }
        const state = senderKeyRecord.getSenderKeyState()
        return {
            id: state.getKeyId(),
            iteration: state.getSenderChainKey().getIteration(),
            chainKey: new Uint8Array(state.getSenderChainKey().getSeed()),
            signingKey: new Uint8Array(state.getSigningKeyPublic()),
        }
    }
}
