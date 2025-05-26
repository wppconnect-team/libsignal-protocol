/**
 * Utility functions for binary and base64 conversions, equality checks, and array manipulations.
 *
 * Reference: https://signal.org/docs/
 */

/**
 * Converts a Uint8Array to a binary string.
 * @param arr Uint8Array to convert
 * @returns Binary string
 * @example
 * ```ts
 * const str = uint8ArrayToBinaryString(new Uint8Array([65, 66])) // 'AB'
 * ```
 */
export function uint8ArrayToBinaryString(arr: Uint8Array): string {
    return Buffer.from(arr).toString('binary')
}

/**
 * Converts a binary string to a Uint8Array.
 * @param str Binary string to convert
 * @returns Uint8Array
 * @example
 * ```ts
 * const arr = binaryStringToUint8Array('AB') // Uint8Array([65, 66])
 * ```
 */
export function binaryStringToUint8Array(str: string): Uint8Array {
    return Buffer.from(str, 'binary')
}

/**
 * Checks if two Uint8Arrays are equal up to the length of the shortest array.
 * @param a First Uint8Array
 * @param b Second Uint8Array
 * @returns True if equal up to the shortest length, false otherwise
 * @throws Error if either array is empty
 * @example
 * ```ts
 * isEqual(new Uint8Array([1,2]), new Uint8Array([1,2,3])) // true
 * isEqual(new Uint8Array([1,2]), new Uint8Array([1,3])) // false
 * ```
 */
export function isEqual(a: Uint8Array | undefined, b: Uint8Array | undefined): boolean {
    if (!a || !b) {
        return false
    }
    const minLength = Math.min(a.length, b.length)
    if (minLength === 0) {
        throw new Error('a/b compare too short')
    }
    for (let i = 0; i < minLength; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
}

/**
 * Converts a Uint8Array to an ArrayBuffer.
 * @param arr Uint8Array to convert
 * @returns ArrayBuffer
 */
export function uint8ArrayToArrayBuffer(arr: Uint8Array): ArrayBuffer {
    return arr.buffer.slice(arr.byteOffset, arr.byteLength + arr.byteOffset)
}

/**
 * Converts a base64 string to a Uint8Array.
 * @param b64 Base64 encoded string
 * @returns Uint8Array
 * @example
 * ```ts
 * const arr = base64ToUint8Array('QUJD') // Uint8Array([65,66,67])
 * ```
 */
export function base64ToUint8Array(b64: string): Uint8Array {
    return Uint8Array.from(Buffer.from(b64, 'base64'))
}

/**
 * Converts a Uint8Array to a base64 string.
 * @param buffer Uint8Array to convert
 * @returns Base64 encoded string
 * @example
 * ```ts
 * const b64 = uint8ArrayToBase64(new Uint8Array([65,66,67])) // 'QUJD'
 * ```
 */
export function uint8ArrayToBase64(buffer: Uint8Array): string {
    return Buffer.from(buffer).toString('base64')
}
