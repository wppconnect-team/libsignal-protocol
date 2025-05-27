import { FingerprintGeneratorType } from './'
import * as utils from './helpers'
import * as internal from './internal'

/**
 * Generates human-readable fingerprints for identity verification, inspired by the Signal/libsignal protocol.
 *
 * Reference: https://signal.org/docs/
 *
 * @example
 * ```ts
 * const gen = new FingerprintGenerator(1000)
 * const fingerprint = await gen.createFor('alice', aliceKey, 'bob', bobKey)
 * ```
 */
export class FingerprintGenerator implements FingerprintGeneratorType {
    static VERSION = 0

    /**
     * Generates a fingerprint string for two parties' identities.
     * @param localIdentifier Local user identifier (e.g., username)
     * @param localIdentityKey Local user's identity public key
     * @param remoteIdentifier Remote user identifier
     * @param remoteIdentityKey Remote user's identity public key
     * @returns Promise resolving to a fingerprint string
     */
    async createFor(
        localIdentifier: string,
        localIdentityKey: Uint8Array,
        remoteIdentifier: string,
        remoteIdentityKey: Uint8Array
    ): Promise<string> {
        const localStr = await getDisplayStringFor(localIdentifier, localIdentityKey, this._iterations)
        const remoteStr = await getDisplayStringFor(remoteIdentifier, remoteIdentityKey, this._iterations)
        return [localStr, remoteStr].sort().join('')
    }

    private _iterations: number
    /**
     * @param _iterations Number of hash iterations for fingerprinting (security parameter)
     */
    constructor(_iterations: number) {
        this._iterations = _iterations
    }
}

/**
 * Generates a display string for a given identifier and key.
 * @private
 */
async function getDisplayStringFor(identifier: string, key: Uint8Array, iterations: number): Promise<string> {
    const bytes = concatUint8Arrays([
        shortToUint8Array(FingerprintGenerator.VERSION),
        key,
        utils.binaryStringToUint8Array(identifier),
    ])

    const hash = await iterateHash(bytes, key, iterations)
    const output = new Uint8Array(hash)
    return (
        getEncodedChunk(output, 0) +
        getEncodedChunk(output, 5) +
        getEncodedChunk(output, 10) +
        getEncodedChunk(output, 15) +
        getEncodedChunk(output, 20) +
        getEncodedChunk(output, 25)
    )
}

/**
 * Iteratively hashes the data with the key for a given number of rounds using SHA-512.
 * @private
 */
async function iterateHash(data: Uint8Array, key: Uint8Array, count: number): Promise<Uint8Array> {
    const data1 = concatUint8Arrays([data, key])
    const result = await internal.crypto.hash(data1)
    if (--count === 0) {
        return new Uint8Array(result)
    } else {
        return iterateHash(new Uint8Array(result), key, count)
    }
}

/**
 * Encodes a chunk of the hash as a 5-digit string.
 * @private
 */
function getEncodedChunk(hash: Uint8Array, offset: number): string {
    const chunk =
        (hash[offset] * Math.pow(2, 32) +
            hash[offset + 1] * Math.pow(2, 24) +
            hash[offset + 2] * Math.pow(2, 16) +
            hash[offset + 3] * Math.pow(2, 8) +
            hash[offset + 4]) %
        100000
    let s = chunk.toString()
    while (s.length < 5) {
        s = '0' + s
    }
    return s
}

/**
 * Converts a short (number) to a Uint8Array (2 bytes, little-endian).
 * @private
 */
function shortToUint8Array(number: number): Uint8Array {
    return new Uint8Array(new Uint16Array([number]).buffer)
}

/**
 * Concatenates multiple Uint8Arrays into one.
 * @private
 */
function concatUint8Arrays(bufs: Uint8Array[]): Uint8Array {
    const lengths = bufs.map((b) => b.length)
    const totalLength = lengths.reduce((p, c) => p + c, 0)
    const result = new Uint8Array(totalLength)
    lengths.reduce((p, c, i) => {
        result.set(bufs[i], p)
        return p + c
    }, 0)
    return result
}
