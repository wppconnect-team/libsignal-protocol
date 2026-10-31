**English** | [Português (Brasil)](./README.pt-BR.md)

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# @wppconnect/libsignal-protocol

Implement Signal Protocol sessions and key handling in TypeScript.

A WPPConnect Team fork in the WPPConnect ecosystem. Original project credits and license are preserved.

[Getting started](#getting-started) | [Documentation](#documentation) | [Contributing](#contributing) | [Support WPPConnect](#support-the-project)

[![License: GPL-3.0-only](https://img.shields.io/badge/license-GPL--3.0--only-blue)](./LICENSE) [![CI](https://github.com/wppconnect-team/libsignal-protocol/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/wppconnect-team/libsignal-protocol/actions/workflows/build.yml) [![Documentation](https://img.shields.io/badge/docs-WPPConnect-blue)](https://wppconnect.io/) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Overview

For developers implementing encrypted messaging protocols and durable key/session stores. This WPPConnect Team fork of [privacyresearchgroup/libsignal-protocol-typescript](https://github.com/privacyresearchgroup/libsignal-protocol-typescript) uses `@wppconnect/curve25519` as its curve implementation. It is not a standalone WhatsApp client.

## Features

- Identity keys, registration IDs, signed prekeys and one-time prekeys.
- Session establishment and encryption/decryption via `SessionBuilder` and `SessionCipher`.

## Getting started

Requires Node.js/npm. The manifest names `@wppconnect/libsignal-protocol`, but that name returned npm 404 during this review. Build the accessible source instead of relying on an unverified registry install:

```sh
git clone https://github.com/wppconnect-team/libsignal-protocol.git
cd libsignal-protocol
npm ci
npm run build
node -e "const { KeyHelper } = require('./lib'); console.log(Number.isInteger(KeyHelper.generateRegistrationId()));"
```

The local example prints `true`. A complete integration must supply durable identity, prekey, signed-prekey and session storage before establishing a session.

## Configuration

Implement the store contract shown in [storage-type.ts](src/__test__/storage-type.ts). Preserve identity trust decisions and session state; do not log or commit private keys. See the session examples and protocol specifications before designing persistence.

## Documentation

- [Upstream usage guide](https://github.com/privacyresearchgroup/libsignal-protocol-typescript#usage)
- [X3DH specification](https://signal.org/docs/specifications/x3dh/)
- [Double Ratchet specification](https://signal.org/docs/specifications/doubleratchet/)
- [Retained technical details and acknowledgments](documentation/readme-reference.md)

## WPPConnect ecosystem

| Project | Purpose | When to use it |
| --- | --- | --- |
| [WPPConnect/Curve25519](https://github.com/wppconnect-team/curve25519) | Expose Curve25519 operations through a function-based TypeScript API. | Use the curve functions needed by the Signal fork. |

## Support the project

The WPPConnect contribution below supports maintenance of this fork within the ecosystem; it does not imply funding or endorsement of upstream maintainers.

WPPConnect is maintained by an open-source community. Your support helps fund maintenance, infrastructure, documentation, and the people working on the ecosystem.

If WPPConnect helps your project or business, consider making a one-time contribution or becoming a recurring supporter.

**[Support WPPConnect on Open Collective](https://opencollective.com/wppconnect)**

Contributions are voluntary. See the official page for current financial information. You can also help with code, tests, documentation, translations and well-described issue reports.

## Contributing

Contributions of code, tests, examples, documentation and translations are welcome. For larger changes, discuss the approach in an issue first. Include the project/runtime versions, a minimal reproduction and sanitized logs when reporting a problem. Update both `README.md` and `README.pt-BR.md` in the same change when installation, configuration, features, examples, licensing or funding changes.

After installing the development dependencies, use the repository checks relevant to your change:

```sh
npm run build
npm run lint
npm test
```

Account-dependent examples and tests require separate validation with an authorized test account. Never attach credentials or session files to an issue.

## Community and support

Use [repository issues](https://github.com/wppconnect-team/libsignal-protocol/issues) for reproducible bugs and feature proposals. For usage questions, join the community through the official channels:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

This project is independent and is not affiliated with or endorsed by WhatsApp or Meta. Follow applicable terms and obtain authorization for account and messaging operations.

## License

[GNU General Public License v3.0 only (GPL-3.0-only)](./LICENSE).

Copyright 2020 Privacy Research, LLC. Original work and upstream authorship are retained.

The original legal document and existing copyright notices are preserved. Third-party components retain their own terms.
