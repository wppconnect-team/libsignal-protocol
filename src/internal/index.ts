import { webcrypto } from 'crypto'
import { Crypto } from './crypto'
import { Curve } from './curve'
import { CurveType } from '../types'

export * from './curve'
export * from './crypto'

export const curve = new Curve()
export const crypto = new Crypto(curve, webcrypto)

export function setCurve(newCurve: CurveType): void {
    curve.curve = newCurve
}

export function setWebCrypto(webcrypto: webcrypto.Crypto): void {
    crypto.webcrypto = webcrypto
}
