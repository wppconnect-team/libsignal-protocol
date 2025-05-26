export function uint8ArrayToBinaryString(arr: Uint8Array): string {
    return Buffer.from(arr).toString('binary')
}
export function binaryStringToUint8Array(str: string): Uint8Array {
    return Buffer.from(str, 'binary')
}

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

export function uint8ArrayToArrayBuffer(arr: Uint8Array): ArrayBuffer {
    return arr.buffer.slice(arr.byteOffset, arr.byteLength + arr.byteOffset)
}

/**
 * Converts a base64 string to a Uint8Array.
 * @param b64 base64 encoded string
 * @returns Uint8Array
 */
export function base64ToUint8Array(b64: string): Uint8Array {
    return Uint8Array.from(Buffer.from(b64, 'base64'))
}

/**
 * Converts a Uint8Array to a base64 string.
 * @param buffer Uint8Array
 * @returns base64 encoded string
 */
export function uint8ArrayToBase64(buffer: Uint8Array): string {
    return Buffer.from(buffer).toString('base64')
}
