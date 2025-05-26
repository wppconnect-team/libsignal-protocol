import { SenderKeyName } from '../sender-key-name'
import { SenderKeyRecord } from './sender-key-record'

/**
 * Interface for storing and retrieving sender keys for group messaging (Signal/libsignal).
 *
 * Reference: https://signal.org/docs/specifications/group/#sender-keys
 *
 * @example
 * ```ts
 * store.storeSenderKey(senderKeyName, record)
 * const record = store.loadSenderKey(senderKeyName)
 * ```
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
