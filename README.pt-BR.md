[English](./README.md) | **Português (Brasil)**

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# @wppconnect/libsignal-protocol

Implemente sessões e gerenciamento de chaves Signal Protocol em TypeScript.

Um fork da WPPConnect Team no ecossistema WPPConnect. Os créditos e a licença do projeto original são preservados.

[Primeiros passos](#primeiros-passos) | [Documentação](#documentação) | [Como contribuir](#como-contribuir) | [Apoie a WPPConnect](#apoie-o-projeto)

[![License: GPL-3.0-only](https://img.shields.io/badge/license-GPL--3.0--only-blue)](./LICENSE) [![CI](https://github.com/wppconnect-team/libsignal-protocol/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/wppconnect-team/libsignal-protocol/actions/workflows/build.yml) [![Documentation](https://img.shields.io/badge/docs-WPPConnect-blue)](https://wppconnect.io/) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Visão geral

Para desenvolvedores que implementam protocolos de mensagens cifradas e persistência de chaves/sessões. Este fork da WPPConnect Team de [privacyresearchgroup/libsignal-protocol-typescript](https://github.com/privacyresearchgroup/libsignal-protocol-typescript) usa `@wppconnect/curve25519` como implementação de curva. O cliente WhatsApp completo é um componente separado.

## Funcionalidades

- Chaves de identidade, IDs de registro, prekeys assinadas e prekeys de uso único.
- Estabelecimento de sessões e cifragem/decifragem por `SessionBuilder` e `SessionCipher`.

## Primeiros passos

Exige Node.js/npm. O manifest informa `@wppconnect/libsignal-protocol`, mas esse nome retornou 404 no npm nesta revisão. Compile os fontes acessíveis em vez de depender de uma instalação não confirmada no registro:

```sh
git clone https://github.com/wppconnect-team/libsignal-protocol.git
cd libsignal-protocol
npm ci
npm run build
node -e "const { KeyHelper } = require('./lib'); console.log(Number.isInteger(KeyHelper.generateRegistrationId()));"
```

O exemplo local imprime `true`. Uma integração completa deve fornecer armazenamento durável de identidade, prekeys, prekeys assinadas e sessões antes de estabelecer uma sessão.

## Configuração

Implemente o contrato de armazenamento demonstrado em [storage-type.ts](src/__test__/storage-type.ts). Preserve as decisões de confiança de identidade e o estado de sessão; não registre nem versione chaves privadas. Consulte os exemplos de sessão e as especificações do protocolo antes de projetar a persistência.

## Documentação

- [Guia de uso do upstream](https://github.com/privacyresearchgroup/libsignal-protocol-typescript#usage)
- [Especificação X3DH](https://signal.org/docs/specifications/x3dh/)
- [Especificação Double Ratchet](https://signal.org/docs/specifications/doubleratchet/)
- [Detalhes técnicos e agradecimentos preservados](documentation/readme-reference.md)

## Ecossistema WPPConnect

| Projeto | Finalidade | Quando usar |
| --- | --- | --- |
| [WPPConnect/Curve25519](https://github.com/wppconnect-team/curve25519) | Exponha operações Curve25519 por uma API TypeScript baseada em funções. | Usar as funções de curva exigidas pelo fork Signal. |

## Apoie o projeto

A contribuição à WPPConnect abaixo apoia a manutenção deste fork no ecossistema; ela não implica financiamento ou endosso dos mantenedores do upstream.

A WPPConnect é mantida por uma comunidade de código aberto. Seu apoio ajuda a financiar a manutenção, a infraestrutura, a documentação e o trabalho das pessoas que desenvolvem o ecossistema.

Se a WPPConnect ajuda seu projeto ou sua empresa, considere fazer uma contribuição pontual ou apoiar de forma recorrente.

**[Apoie a WPPConnect no Open Collective](https://opencollective.com/wppconnect)**

As contribuições são voluntárias. Consulte a página oficial para acompanhar as informações financeiras atuais. Você também pode ajudar com código, testes, documentação, traduções e relatos de problemas bem descritos.

## Como contribuir

Contribuições de código, testes, exemplos, documentação e traduções são bem-vindas. Para mudanças maiores, discuta a proposta em uma issue primeiro. Ao relatar um problema, informe as versões do projeto/runtime, uma reprodução mínima e logs sem dados sensíveis. Atualize `README.md` e `README.pt-BR.md` na mesma alteração quando mudar instalação, configuração, funcionalidades, exemplos, licença ou arrecadação.

Após instalar as dependências de desenvolvimento, use as verificações pertinentes à sua alteração:

```sh
npm run build
npm run lint
npm test
```

Exemplos e testes que dependem de conta exigem validação separada com uma conta de teste autorizada. Nunca anexe credenciais ou arquivos de sessão a uma issue.

## Comunidade e suporte

Use as [issues do repositório](https://github.com/wppconnect-team/libsignal-protocol/issues) para bugs reproduzíveis e propostas de funcionalidades. Para dúvidas de uso, participe pelos canais oficiais:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

Este projeto é independente e não é afiliado nem endossado pelo WhatsApp ou pela Meta. Siga os termos aplicáveis e obtenha autorização para operações de conta e mensagens.

## Licença

[GNU General Public License v3.0 only (GPL-3.0-only)](./LICENSE).

Copyright 2020 Privacy Research, LLC. Original work and upstream authorship are retained.

O documento jurídico original e os avisos de autoria existentes são preservados. Componentes de terceiros mantêm seus próprios termos.
