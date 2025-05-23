import * as Internal from './internal'
import { KeyPairType, AsyncCurveType } from './types'

export class Curve {
    private _curve: Internal.Curve
    async: AsyncCurve
    constructor(curve: Internal.Curve) {
        this._curve = curve
        this.async = new AsyncCurve(curve.async)
    }

    generateKeyPair(): KeyPairType {
        const privKey = Internal.crypto.getRandomBytes(32)
        return this._curve.createKeyPair(privKey)
    }
    createKeyPair(privKey: Uint8Array): KeyPairType {
        return this._curve.createKeyPair(privKey)
    }
    calculateAgreement(pubKey: Uint8Array, privKey: Uint8Array): Uint8Array {
        return this._curve.ECDHE(pubKey, privKey)
    }
    verifySignature(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): boolean {
        return this._curve.Ed25519Verify(pubKey, msg, sig)
    }
    calculateSignature(privKey: Uint8Array, message: Uint8Array): Uint8Array {
        return this._curve.Ed25519Sign(privKey, message)
    }
}

export class AsyncCurve implements AsyncCurveType {
    private _curve: Internal.AsyncCurve
    constructor(curve: Internal.AsyncCurve) {
        this._curve = curve
    }

    generateKeyPair(): Promise<KeyPairType> {
        const privKey = Internal.crypto.getRandomBytes(32)
        return this._curve.createKeyPair(privKey)
    }

    createKeyPair(privKey: Uint8Array): Promise<KeyPairType> {
        return this._curve.createKeyPair(privKey)
    }

    calculateAgreement(pubKey: Uint8Array, privKey: Uint8Array): Promise<Uint8Array> {
        return this._curve.ECDHE(pubKey, privKey)
    }

    verifySignature(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): Promise<boolean> {
        return this._curve.Ed25519Verify(pubKey, msg, sig)
    }

    calculateSignature(privKey: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
        return this._curve.Ed25519Sign(privKey, message)
    }
}
