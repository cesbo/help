---
title: BISS
sidebar:
    order: 11
---

BISS is a basic conditional access system with a static key to protect content from unauthorized access.

:::caution
BISS has weak protection and can be broken with brute force attacks. Use it only when stronger encryption isn't available.
:::

## BISS Key Format

BISS keys are 16 hexadecimal characters long. You can use either format:

- Full key with checksums: `1234569C789ABCCE` (16 characters)
- Simplified key: `12345600789ABC00` (Astra calculates checksums automatically)

We recommend using the simplified format to avoid checksum calculation errors.

## Encrypting a Stream

Add the `biss` option with your key to the output address:

```
udp://239.255.1.1:1234#biss=12345600789ABC00
```

### Key without Checksums

In version 250502 and later, you can use a BISS key as is, without checksum calculation. Append option `no_checksum` to the address:

```
udp://239.255.1.1:1234#biss=12345600789ABC00&no_checksum
```

As a result, the key will be used as is, without calculating checksums.

## Checking if Encryption Works

Use the Astra analyzer to verify the stream is scrambled:

```sh
astra --analyze udp://239.255.1.1:1234
```

The analyzer will show messages confirming the stream is scrambled.

## Playing Encrypted Streams

**With VLC Player:**

```sh
vlc --ts-csa-ck 1234569C789ABCCE udp://@239.255.1.1:1234
```

Note: VLC requires the full key with checksums.

**With Astra:**

See [How to decrypt BISS CAS](/en/astra/streams/decrypt-biss/) for receiving encrypted streams.
