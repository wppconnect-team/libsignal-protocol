export function uint8ArrayToString(arr: Uint8Array): string {
    const end = arr.length
    let begin = 0
    if (begin === end) return ''
    let chars: number[] = []
    const parts: string[] = []
    while (begin < end) {
        chars.push(arr[begin++])
        if (chars.length >= 1024) {
            parts.push(String.fromCharCode(...chars))
            chars = []
        }
    }
    return parts.join('') + String.fromCharCode(...chars)
}
export function binaryStringToUint8Array(str: string): Uint8Array {
    let i = 0
    const k = str.length
    let charCode
    const bb: number[] = []
    while (i < k) {
        charCode = str.charCodeAt(i)
        if (charCode > 0xff) throw RangeError('illegal char code: ' + charCode)
        bb[i++] = charCode
    }
    return Uint8Array.from(bb)
}

export function isEqual(a: Uint8Array | undefined, b: Uint8Array | undefined): boolean {
    if (a === undefined || b === undefined) {
        return false
    }
    const a1: string = uint8ArrayToString(a)
    const b1: string = uint8ArrayToString(b)
    const maxLength = Math.max(a1.length, b1.length)
    if (maxLength < 5) {
        throw new Error('a/b compare too short')
    }
    return a1.substring(0, Math.min(maxLength, a1.length)) == b1.substring(0, Math.min(maxLength, b1.length))
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
