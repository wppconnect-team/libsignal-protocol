import { SignalProtocolAddressType } from './'

/**
 * Represents a unique address for a device in the Signal protocol (user + deviceId).
 *
 * Reference: https://signal.org/docs/
 *
 * @example
 * ```ts
 * const addr = new SignalProtocolAddress('alice', 1)
 * const str = addr.toString() // 'alice.1'
 * const parsed = SignalProtocolAddress.fromString('alice.1')
 * ```
 */
export class SignalProtocolAddress implements SignalProtocolAddressType {
    /**
     * Parses a SignalProtocolAddress from a string in the format 'name.deviceId'.
     * @param s String to parse
     * @returns SignalProtocolAddress instance
     * @throws Error if the string is invalid
     */
    static fromString(s: string): SignalProtocolAddress {
        if (!s.match(/.*\.\d+/)) {
            throw new Error(`Invalid SignalProtocolAddress string: ${s}`)
        }
        const parts = s.split('.')
        return new SignalProtocolAddress(parts[0], parseInt(parts[1]))
    }

    private _name: string
    private _deviceId: number
    /**
     * Creates a new SignalProtocolAddress.
     * @param _name User name or identifier
     * @param _deviceId Device ID (number)
     */
    constructor(_name: string, _deviceId: number) {
        this._name = _name
        this._deviceId = _deviceId
    }

    /**
     * Gets the name (user identifier).
     */
    get name(): string {
        return this._name
    }

    /**
     * Gets the device ID.
     */
    get deviceId(): number {
        return this._deviceId
    }

    /**
     * Gets the name (user identifier) as a function (for compatibility).
     */
    getName(): string {
        return this._name
    }

    /**
     * Gets the device ID as a function (for compatibility).
     */
    getDeviceId(): number {
        return this._deviceId
    }

    /**
     * Returns the string representation in the format 'name.deviceId'.
     * @returns String representation
     */
    toString(): string {
        return `${this._name}.${this._deviceId}`
    }

    /**
     * Checks if this address equals another SignalProtocolAddressType.
     * @param other Address to compare
     * @returns True if equal, false otherwise
     */
    equals(other: SignalProtocolAddressType): boolean {
        return other.name === this._name && other.deviceId == this._deviceId
    }
}
