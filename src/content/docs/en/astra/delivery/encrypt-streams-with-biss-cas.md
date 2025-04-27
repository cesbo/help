---
title: "Encrypt streams with BISS CAS"
date: 2023-04-02
sidebar:
    order: 6
---

The Basic Interoperable Scrambling System (BISS) is a straightforward and efficient conditional access system that utilizes a static key to protect content from unauthorized access. BISS is based on the Common Scrambling Algorithm (CSA), which scrambles the channel data, ensuring secure transmission of content over satellite and terrestrial broadcasting networks.

::alert
Although BISS provides a level of content protection, it is essential to note that this system is not recommended due to its weak protection mechanism. The static CSA key used in BISS is susceptible to brute force attacks
::

## BISS Key

The BISS key is an 8-byte long sequence, represented as 16 hexadecimal symbols. For example, the key `1234569C789ABCCE` can be broken down as follows:

- The first 6 hexadecimal symbols `123456` constitute the first part of the key
- The 7th and 8th symbols `9C` are a checksum for the first part (calculated as `0x12 + 0x34 + 0x56 = 0x9C`)
- The 9th to 14th hexadecimal symbols `789ABC` form the second part of the key.
- The last two symbols `CE` are a checksum for the second part (calculated as `0x78 + 0x9A + 0xBC = 0x1CE`, with only the last byte used for the checksum)

In Astra, you can define the key as `12345600789ABC00`, and Astra will automatically calculate the checksums for you. This simplifies the process and helps ensure the accuracy and integrity of the BISS key

## Scrambling Transmitted Streams

To scramble a transmitted stream, append the `biss` option with the appropriate key to the Output Address. For example:

```
udp://239.255.1.1:1234#biss=12345600789ABC00
```

By specifying the BISS key in the Output Address, Astra will automatically scramble the channel using the provided key.

## Analyze scrambled stream

You can verify if a channel is scrambled using Astra MPEG-TS Analyzer. To do this, start the analyzer with the following command:

```
astra --analyze udp://239.255.1.1:1234
```

The analyzer will write messages to the console, indicating that the stream is scrambled.

## Play scrambled streams with VLC Player

Scrambled streams can be received and viewed using VLC Player. To launch VLC with the appropriate BISS key from the command line, enter the following command:

```
vlc --ts-csa-ck 1234569C789ABCCE udp://@239.255.1.1:1234
```

By using the `--ts-csa-ck` option followed by the BISS key, VLC will be able to decrypt and play the content seamlessly. Make sure you provide the correct BISS key with calculated checksums.

## Receive scrambled streams with Astra

To receive scrambled streams with Astra, please check this guide: [Decrypt streams with BISS CAS](../../processing/cas/decrypt-biss)
