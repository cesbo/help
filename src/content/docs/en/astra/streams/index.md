---
title: Streams Overview
sidebar:
    order: 1
---

Streams in Astra represents an individual channel or media flow that receives content from various sources, processes it, and delivers it to clients.

## Create New Stream

To create a new stream:

1. Go to the main Dashboard
2. Click `New Stream` in the upper right corner

A dialog opens where you choose between Single Program Stream (SPTS) or Multi Program Stream (MPTS).

## General Options

Configure basic stream settings that control how your stream behaves and appears in the system.

![General Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/general.png)

- `Enable` - new stream is enabled by default, but can be turned off if needed
- `Name` - friendly channel name used in dashboards and logs
- `ID` - unique stream identifier. Keep it empty to assigns a sequential number to new channels or you may define your own
- `Create Multi Program Stream` - switch to MPTS configuration
- `Description` - arbitrary channel description

### Input List

Configure one or more inputs to receive stream content. To set up inputs, you can use the [Media Address Format](/en/astra/streams/address-format/) or the configuration dialog.

Read more information in our guides for protocol specific configuration:

- [HLS](/en/astra/receiving-http/hls/)
- [HTTP MPEG-TS](/en/astra/receiving-http/http/)
- [UDP/RTP](/en/astra/receiving-udp/)
- [SRT](/en/astra/receiving/srt/)
- [RSTP](/en/astra/receiving/rtsp/)
- [How to receive MPTS via UDP](/en/astra/receiving-udp/mpts-via-udp/)
- [How to configure DVB, ATSC, ISDB-T, SAT>IP](/en/astra/adapters/)

### Output List

Configure one or more outputs to provide content to clients. Outputs are optional. You can use the [HTTP Play](/en/astra/delivery-http/http-play/) feature to provide access to channels with HLS or HTTP MPEG-TS.

Read more information in our guides for protocol specific configuration:

- [UDP](/en/astra/delivery-udp/)
- DVB with Broadcasting hardware, such as: [HiDes DVB-T](/en/astra/delivery-broadcast/hides-dvb-t-modulator/), [RESI DVB-C](/en/astra/delivery-broadcast/resi-dvb-c-modulator/), [TBS DVB-C](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)

## Single Program Stream

The Single Program Stream (SPTS, also known as Channel or Service) serves as the default stream type in Astra configuration, commonly used to form TV channels. It can employ multiple inputs for redundancy purposes, enhancing the reliability of the stream. The integrated analyzer continuously monitors the active input, and if a fault is detected, it immediately switches to an alternate input.

In addition to redundancy, SPTS offers a range of processing options. These include filtering for transmitting only required media data, modifying stream information, descrambling to access protected streams, and scrambling to safeguard transmitted streams. Thus, SPTS provides a versatile and secure solution for TV channel formation.

## Multi Program Stream

The Multi Program Stream (MPTS, also known as Multiplex) is another type of stream available in Astra, activated via an option of the same name within stream settings. MPTS takes all provided inputs and multiplexes them into a singular stream for broadcasting purposes.

This stream type also provides several features designed for broadcasting. These include options for defining the stream description, network information, network search, and logical channel numbers.

Read more about [MPTS Settings](/en/astra/streams/mpts/)
