---
title: How to decrypt BISS CAS
sidebar:
    order: 35
---

The Basic Interoperable Scrambling System (BISS) is a straightforward and efficient conditional access system that utilizes a static key to protect content from unauthorized access. BISS is based on the Common Scrambling Algorithm (CSA), which scrambles the channel data, ensuring secure transmission of content over satellite and terrestrial broadcasting networks.

## Receiving a Scrambled Channel

To decrypt a scrambled channel, you need to append the `biss` option with the appropriate key to the input address. For example:

```
dvb://a001#pnr=1&biss=12345600789ABC00
```

:::note
Input Options are separated by the `&` symbol, as shown in the example. The `#` symbol marks the beginning of the options. If your address does not have any options, the full address with the added `biss` option would look like this: `udp://239.255.1.1:1234#biss=12345600789ABC00`
:::

When using an invalid BISS key, the decrypted stream will be corrupted. In this case, the Astra analyzer will display a `PES Error`.

## Retransmitting Scrambled Channels

To retransmit a scrambled channel without decrypting it, you can use the `cas` option in the Input Address. Example of an Input Address with the `cas` option:

```
dvb://a001#pnr=1&cas
```

This method allows you to pass the scrambled channel to the output, preserving all the necessary data required for descramblers to decode the content.
