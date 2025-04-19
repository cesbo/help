---
title: "Stream Logs: Receiving and Processing"
date: 2023-08-10
---

Stream Logs provide information about receiving and processing streams.

## CC Error

CC (Continuity Counter) errors indicates that MPEG-TS packets continuity is corrupted. Error can be caused by MPEG-TS packets loss or excess.

This message printed as debug message in Astra logs, and as error message in the Astra MPEG-TS Analyzer logs.

Check more information depending of the protocol you use for receiving stream:

- UDP does not guarantee data delivery, so packets can be lost, duplicated, or arrive out of order. [UDP Troubleshooting](/misc/troubleshooting/receiving/udp#too-many-errors-on-receiving-udp)
- DVB depends of the signal quality, check errors on DVB adapter. [Common errors on DVB receiving](/misc/troubleshooting/dvb/errors)

## PES Error

Corrupted header of the packets with media data such as video or audio.

- Issue with a descrambling of the protected stream, such as invalid key, expired subscription, conditional access module overheat
- DVB signal issue due to sun interference

## Channel has no active inputs

The error occurs if the channel does not have any available sources for switching.
In the channel settings (Single program stream), you can specify multiple sources (Input) for reservation. These sources work in a sequential order - if the first source fails, a switch to the second source, and so on. The error occurs if the channel lacks available sources for switching.

## PAT: stream with id is not found

No channel with the specified number (pnr) was found in the stream. To check available channels and their corresponding numbers, perform a scan the input with [Astra MPEG-TS Analyzer](/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer).
