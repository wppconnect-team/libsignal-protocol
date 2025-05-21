import { SignalProtocolAddressType } from '../types'

/**
 * Represents a (groupId, senderId, deviceId) tuple for group messaging.
 */
export class SenderKeyName {
    private readonly groupId: string
    private readonly sender: SignalProtocolAddressType

    /**
     * @param groupId The group identifier
     * @param sender The sender's SignalProtocolAddress
     */
    constructor(groupId: string, sender: SignalProtocolAddressType) {
        this.groupId = groupId
        this.sender = sender
    }

    /**
     * Returns the group ID.
     */
    getGroupId(): string {
        return this.groupId
    }

    /**
     * Returns the sender address.
     */
    getSender(): SignalProtocolAddressType {
        return this.sender
    }

    /**
     * Serializes the tuple as a string.
     */
    serialize(): string {
        return `${this.groupId}::${this.sender.name}::${this.sender.deviceId}`
    }

    /**
     * Checks equality with another SenderKeyName.
     */
    equals(other: unknown): boolean {
        if (!other || !(other instanceof SenderKeyName)) return false
        return this.groupId === other.groupId && this.sender.equals(other.sender)
    }

    /**
     * Returns a simple hash code for the tuple.
     */
    hashCode(): number {
        // Simple hash combining both fields
        let hash = 0
        for (const c of this.groupId + this.sender.toString()) {
            hash = (hash << 5) - hash + c.charCodeAt(0)
            hash |= 0
        }
        return hash
    }
}
