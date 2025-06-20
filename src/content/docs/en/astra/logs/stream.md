---
title: Stream Logs
sidebar:
    order: 21
---

Stream Logs provide information about receiving and processing streams.

## PES Error

Corrupted header of the packets with media data such as video or audio.

- Issue with a descrambling of the protected stream, such as invalid key, expired subscription, conditional access module overheat
- DVB signal issue due to sun interference

## Channel has no active inputs

The error occurs if the channel does not have any available sources for switching.
In the channel settings (Single program stream), you can specify multiple sources (Input) for reservation. These sources work in a sequential order - if the first source fails, a switch to the second source, and so on. The error occurs if the channel lacks available sources for switching.

## PAT: stream with id is not found

No channel with the specified number (pnr) was found in the stream. To check available channels and their corresponding numbers, perform a scan the input with [Astra MPEG-TS Analyzer](/en/articles/tools-and-utilities/astra-mpeg-ts-analyzer/).
