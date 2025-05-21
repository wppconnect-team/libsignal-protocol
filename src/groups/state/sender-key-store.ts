import { SenderKeyName } from '../sender-key-name'
import { SenderKeyRecord } from './sender-key-record'

/**
 * Interface for storing and loading SenderKeyRecords for group messaging.
 */
export interface SenderKeyStore {
    /**
     * Stores the SenderKeyRecord for a given (groupId, senderId, deviceId) tuple.
     */
    storeSenderKey(senderKeyName: SenderKeyName, record: SenderKeyRecord): Promise<void> | void
    /**
     * Loads the SenderKeyRecord for a given (groupId, senderId, deviceId) tuple.
     */
    loadSenderKey(senderKeyName: SenderKeyName): Promise<SenderKeyRecord> | SenderKeyRecord
}
