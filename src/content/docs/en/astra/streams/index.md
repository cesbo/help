---
title: Streams Overview
sidebar:
    order: 1
---

Streams in Astra represents an individual channel or media flow that receives content from various sources, processes it, and delivers it to clients.

## Create New Stream

To create a new stream:

1. Go to the main Dashboard
2. Click "New Stream" in the upper right corner

A dialog opens where you choose between SPTS (Single Program Stream) or MPTS (Multi Program Stream).

## General Options

Configure basic stream settings that control how your stream behaves and appears in the system.

![General Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/general.png)

- `Enable`: new stream is enabled by default, but can be turned off if needed
- `Name`: friendly channel name used in dashboards and logs
- `ID`: unique stream identifier. Keep it empty to assign a sequential number to new channels or you may define your own
- `Create Multi Program Stream`: switch to MPTS configuration
- `Description`: arbitrary channel description

### Input List

Configure one or more inputs to receive stream content. To set up inputs, you can use the [Media Address Format](/en/astra/streams/address-format/) or the configuration dialog.

Read more information in our guides for protocol specific configuration:

- [HLS](/en/astra/receiving-http/hls/)
- [HTTP MPEG-TS](/en/astra/receiving-http/http/)
- [UDP/RTP](/en/astra/receiving-udp/)
- [SRT](/en/astra/receiving/srt/)
- [RTSP](/en/astra/receiving/rtsp/)
- [How to receive MPTS via UDP](/en/astra/receiving-udp/mpts-via-udp/)
- [How to configure DVB, ATSC, ISDB-T, SAT>IP](/en/astra/adapters/)

### Output List

Configure one or more outputs to provide content to clients. Outputs are optional. You can use the [HTTP Play](/en/astra/delivery-http/http-play/) feature to provide access to channels with HLS or HTTP MPEG-TS.

Read more information in our guides for protocol specific configuration:

- [UDP](/en/astra/delivery-udp/)
- DVB with Broadcasting hardware, such as: [HiDes DVB-T](/en/astra/delivery-broadcast/hides-dvb-t-modulator/), [RESI DVB-C](/en/astra/delivery-broadcast/resi-dvb-c-modulator/), [TBS DVB-C](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)

## Single Program Stream

SPTS (Single Program Stream) is the default stream type for creating individual TV channels. Think of it as one channel carrying one program - like CNN or ESPN.

SPTS automatically switches between multiple inputs if one fails. For example, if you have two satellite feeds for the same channel, SPTS monitors both and switches to the backup feed when problems occur.

You can also process the stream by:

- Filtering unwanted content (like subtitles you don't need)
- Changing stream details (channel name, language info)
- Removing encryption from protected streams
- Adding encryption to secure your broadcasts

## Multi Program Stream

MPTS (Multi Program Stream) combines multiple channels into one broadcast stream. Think of it like a cable TV package - instead of sending channels separately, you bundle them together for broadcasting.

For example, if you have 10 different TV channels, MPTS packages them all into one stream that cable or satellite providers can broadcast to viewers.

MPTS includes broadcasting features like:

- Channel descriptions and network information
- Channel numbering (so viewers see "Channel 5" instead of technical IDs)
- Network search capabilities for receivers to find channels easily
- EPG (Electronic Program Guide) data embedding for showing TV schedules to viewers

Read more about [MPTS Settings](/en/astra/streams/mpts/)
