---
title: Stream Overview
sidebar:
    order: 1
---

Streams in Astra represents an individual channel or media flow that receives content from various sources, processes it, and delivers it to clients.

## General Options

The Single Program Stream (SPTS) commonly used to form TV channels. It can utilize multiple inputs for redundancy purposes, enhancing the reliability of the stream.

![Single Program Stream Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/general.png)

- `Enable` - new stream is enabled by default, but can be turned off if needed
- `Name` - friendly channel name used in dashboards and logs
- `ID` - unique identifier, by default Astra assigns a sequential number to new channels, but you may define your own
- `Multi Program Stream` - switch to MPTS configuration
- `Enable monitoring` - analyze stream status and send reports to the monitoring system
- `Start stream on demand` - Astra will wait for an incomming request to start stream. This mode is turned of for channels with UDP or HLS outputs
- `Keep Active` - additional option for the on-demand mode. By default, when the last client is closes connection, Astra turns channel off. This option allows the channel to remain active for some time
- `Channel Number` - option used to order channels in the playlist
- `Description` - arbitrary channel description

## Input List

Configure one or more inputs to receive stream content. To set up inputs, you can use the [Media Address Format](/en/astra/receiving/address-format) or the configuration dialog.

Read more information in our guides for protocol specific configuration:

- [HLS](/en/astra/receiving/hls)
- [HTTP MPEG-TS](/en/astra/receiving/http)
- [UDP/RTP](/en/astra/receiving/udp)
- [SRT](/en/astra/receiving/srt)
- [RSTP](/en/astra/receiving/rtsp)
- [How to receive MPTS via UDP](/en/astra/receiving/mpts-via-udp)
- [How to configure DVB, ATSC, ISDB-T, SAT>IP](/en/misc/troubleshooting/errors)

## Output List

Configure one or more outputs to provide content to clients. Outputs are optional. You can use the [HTTP Play](/en/astra/delivery/http-play) feature to provide access to channels with HLS or HTTP MPEG-TS.

Read more information in our guides for protocol specific configuration:

- [UDP](/en/astra/delivery/udp)
- [DVB with Broadcasting hardware](/en/misc/troubleshooting/errors)

## Save

Channel settings are saved when you click the Apply button.
