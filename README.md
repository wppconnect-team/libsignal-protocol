# @wppconnect/libsignal-protocol

Signal Protocol Typescript library — forked from [privacyresearchgroup/libsignal-protocol-typescript](https://github.com/privacyresearchgroup/libsignal-protocol-typescript), with adaptations and improvements for the WPPConnect ecosystem.

> **Note:** This project uses [`@wppconnect/curve25519`](https://www.npmjs.com/package/@wppconnect/curve25519) as the default implementation for elliptic curve operations (X25519/Ed25519).

## Code layout

```
/lib                # contains MSR's crypto library
/src                # TS source files
/src/__test__       # Tests
/src/__test-utils__ # Test Utilities
```

## Overview

A ratcheting forward secrecy protocol that works in synchronous and asynchronous messaging environments.

### PreKeys

This protocol uses a concept called 'PreKeys'. A PreKey is an ECPublicKey and an associated unique ID which are stored together by a server. PreKeys can also be signed.

At install time, clients generate a single signed PreKey, as well as a large list of unsigned PreKeys, and transmit all of them to the server.

### Sessions

Signal Protocol is session-oriented. Clients establish a "session," which is then used for all subsequent encrypt/decrypt operations. There is no need to ever tear down a session once one has been established.

Sessions are established in one of two ways:

1. PreKeyBundles. A client that wishes to send a message to a recipient can establish a session by retrieving a PreKeyBundle for that recipient from the server.
2. PreKeySignalMessages. A client can receive a PreKeySignalMessage from a recipient and use it to establish a session.

### State

An established session encapsulates a lot of state between two clients. That state is maintained in durable records which need to be kept for the life of the session.

State is kept in the following places:

- Identity State. Clients will need to maintain the state of their own identity key pair, as well as identity keys received from other clients.
- PreKey State. Clients will need to maintain the state of their generated PreKeys.
- Signed PreKey States. Clients will need to maintain the state of their signed PreKeys.
- Session State. Clients will need to maintain the state of the sessions they have established.

## Usage

### Add the SDK to your project

Install via npm:

```
npm install @wppconnect/libsignal-protocol
```

Or via yarn:

```
yarn add @wppconnect/libsignal-protocol
```

Now you can import classes and functions from the package:

```ts
import {
    KeyHelper,
    SignedPublicPreKeyType,
    SignalProtocolAddress,
    SessionBuilder,
    PreKeyType,
    SessionCipher,
    MessageType
} from '@wppconnect/libsignal-protocol'
```

Or, if you prefer a grouped import:

```ts
import * as libsignal from '@wppconnect/libsignal-protocol'
```

#### Install time

At install time, a signal client needs to generate its identity keys, registration id, and prekeys.

A signal client also needs to implement a storage interface that will manage loading and storing of identity, prekeys, signed prekeys, and session state. See [`src/__test__/storage-type.ts`] for an example.

Example setup:

```ts
const createID = async (name: string, store: SignalProtocolStore) => {
  const registrationId = KeyHelper.generateRegistrationId()
  storeSomewhereSafe(`registrationID`, registrationId)

  const identityKeyPair = await KeyHelper.generateIdentityKeyPair()
  storeSomewhereSafe('identityKey', identityKeyPair)

  const baseKeyId = makeKeyId()
  const preKey = await KeyHelper.generatePreKey(baseKeyId)
  store.storePreKey(`${baseKeyId}`, preKey.keyPair)

  const signedPreKeyId = makeKeyId()
  const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, signedPreKeyId)
  store.storeSignedPreKey(signedPreKeyId, signedPreKey.keyPair)

  // Now register this with the server or directory so all users can see them.
  // Implement your directory as needed.

  const publicSignedPreKey: SignedPublicPreKeyType = {
    keyId: signedPreKeyId,
    publicKey: signedPreKey.keyPair.pubKey,
    signature: signedPreKey.signature,
  }

  const publicPreKey: PreKeyType = {
    keyId: preKey.keyId,
    publicKey: preKey.keyPair.pubKey,
  }

  directory.storeKeyBundle(name, {
    registrationId,
    identityPubKey: identityKeyPair.pubKey,
    signedPreKey: publicSignedPreKey,
    oneTimePreKeys: [publicPreKey],
  })
}
```

### Building a session

For complete usage examples, session building, encryption and decryption, see the [original README](https://github.com/privacyresearchgroup/libsignal-protocol-typescript#usage) and the Signal documentation: [X3DH](https://signal.org/docs/specifications/x3dh/) and [Double Ratchet](https://signal.org/docs/specifications/doubleratchet/).

## Elliptic Curve

This fork uses [`@wppconnect/curve25519`](https://www.npmjs.com/package/@wppconnect/curve25519) as the default implementation for elliptic curve operations (X25519/Ed25519).

## License

This project is licensed under GPLv3, as in the original project.

---

Forked and adapted from [privacyresearchgroup/libsignal-protocol-typescript](https://github.com/privacyresearchgroup/libsignal-protocol-typescript).
