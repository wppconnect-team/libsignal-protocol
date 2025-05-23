import { KeyPairType } from '../types'
import {
    Curve25519Wrapper,
    AsyncCurve25519Wrapper,
    AsyncCurve as AsyncCurveType,
    Curve as CurveType,
} from '@privacyresearch/curve25519-typescript'

export class Curve {
    // Curve 25519 crypto
    private _curve25519: CurveType
    async: AsyncCurve
    constructor(curve25519: Curve25519Wrapper) {
        this._curve25519 = curve25519
        this.async = new AsyncCurve()
    }

    set curve(c: CurveType) {
        this._curve25519 = c
    }

    createKeyPair(privKey: Uint8Array): KeyPairType {
        validatePrivKey(privKey)
        const raw_keys = this._curve25519.keyPair(privKey)
        return processKeys({
            pubKey: new Uint8Array(raw_keys.pubKey),
            privKey: new Uint8Array(raw_keys.privKey),
        })
    }

    ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Uint8Array {
        pubKey = validatePubKeyFormat(pubKey)
        validatePrivKey(privKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        return new Uint8Array(this._curve25519.sharedSecret(pubKey, privKey))
    }

    Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Uint8Array {
        validatePrivKey(privKey)

        if (message === undefined) {
            throw new Error('Invalid message')
        }

        return new Uint8Array(this._curve25519.sign(privKey, message))
    }

    Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): boolean {
        pubKey = validatePubKeyFormat(pubKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        if (msg === undefined) {
            throw new Error('Invalid message')
        }

        if (sig === undefined || sig.length != 64) {
            throw new Error('Invalid signature')
        }

        /**
         * The fact that verify returns true when a signature is invalid could be confusing.
         * The meaning of this function should be clear.
         */
        return !this._curve25519.verify(pubKey, msg, sig)
    }
}

export class AsyncCurve {
    private _curve25519: AsyncCurveType
    constructor() {
        this._curve25519 = new AsyncCurve25519Wrapper()
    }

    set curve(c: AsyncCurveType) {
        this._curve25519 = c
    }

    async createKeyPair(privKey: Uint8Array): Promise<KeyPairType> {
        validatePrivKey(privKey)
        const raw_keys = await this._curve25519.keyPair(privKey)
        return processKeys({
            pubKey: new Uint8Array(raw_keys.pubKey),
            privKey: new Uint8Array(raw_keys.privKey),
        })
    }

    async ECDHE(pubKey: Uint8Array, privKey: Uint8Array): Promise<Uint8Array> {
        pubKey = validatePubKeyFormat(pubKey)
        validatePrivKey(privKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        return new Uint8Array(await this._curve25519.sharedSecret(pubKey, privKey))
    }

    async Ed25519Sign(privKey: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
        validatePrivKey(privKey)

        if (message === undefined) {
            throw new Error('Invalid message')
        }

        return new Uint8Array(await this._curve25519.sign(privKey, message))
    }

    async Ed25519Verify(pubKey: Uint8Array, msg: Uint8Array, sig: Uint8Array): Promise<boolean> {
        pubKey = validatePubKeyFormat(pubKey)

        if (pubKey === undefined || pubKey.length != 32) {
            throw new Error('Invalid public key')
        }

        if (msg === undefined) {
            throw new Error('Invalid message')
        }

        if (sig === undefined || sig.length != 64) {
            throw new Error('Invalid signature')
        }

        /**
         * The fact that verify returns true when a signature is invalid could be confusing.
         * The meaning of this function should be clear.
         */
        const verifyResult = await this._curve25519.verify(pubKey, msg, sig)

        return !verifyResult
    }
}

function validatePrivKey(privKey: unknown): void {
    if (!(privKey instanceof Uint8Array) || privKey.length != 32) {
        throw new Error('Invalid private key')
    }
}
function validatePubKeyFormat(pubKey: Uint8Array): Uint8Array {
    if (pubKey === undefined || ((pubKey.length != 33 || pubKey[0] != 5) && pubKey.length != 32)) {
        console.warn(`Invalid public key`, { pubKey })
        throw new Error(`Invalid public key: ${pubKey} ${pubKey?.length}`)
    }
    if (pubKey.length == 33) {
        return pubKey.slice(1)
    } else {
        console.error('WARNING: Expected pubkey of length 33, please report o ST e o client que gerou a pubkey')
        return pubKey
    }
}

function processKeys(raw_keys: KeyPairType): KeyPairType {
    // prepend version byte
    const origPub = new Uint8Array(raw_keys.pubKey)
    const pub = new Uint8Array(33)
    pub.set(origPub, 1)
    pub[0] = 5

    return { pubKey: pub, privKey: new Uint8Array(raw_keys.privKey) }
}
