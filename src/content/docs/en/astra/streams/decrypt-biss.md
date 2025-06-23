---
title: How to decrypt BISS CAS
sidebar:
    order: 35
---

BISS is a basic conditional access system with a static key to protect content from unauthorized access.

## Receiving a Scrambled Channel

To decrypt a scrambled channel, you need to append the `biss` option with the appropriate key to the input address. For example:

```
dvb://a001#pnr=1&biss=12345600789ABC00
```

When using an invalid BISS key, the decrypted stream will be corrupted. In this case, the Astra analyzer will display a `PES Error`.

## Retransmitting Scrambled Channels

To retransmit a scrambled channel without decrypting it, you can use the `cas` option in the Input Address. Example of an Input Address with the `cas` option:

```
dvb://a001#pnr=1&cas
```

This method allows you to pass the scrambled channel to the output, preserving all the necessary data required for descramblers to decode the content.
