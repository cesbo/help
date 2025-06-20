---
title: Streams Overview
sidebar:
    order: 1
---

Streams in Astra represents an individual channel or media flow that receives content from various sources, processes it, and delivers it to clients.

## Create New Stream

To create a new stream, navigate to the "Dashboard" and click on the "New Stream" in main menu. This will open a dialog where you can select the type of stream you want to create: Single Program Stream (SPTS) or Multi Program Stream (MPTS).

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

## Single Program Stream

![Single Program Stream Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/spts.png)

The Single Program Stream (SPTS, also known as Channel or Service) serves as the default stream type in Astra configuration, commonly used to form TV channels. It can employ multiple inputs for redundancy purposes, enhancing the reliability of the stream. The integrated analyzer continuously monitors the active input, and if a fault is detected, it immediately switches to an alternate input.

In addition to redundancy, SPTS offers a range of processing options. These include filtering for transmitting only required media data, modifying stream information, descrambling to access protected streams, and scrambling to safeguard transmitted streams. Thus, SPTS provides a versatile and secure solution for TV channel formation.

Read more about [Stream General Settings](/en/astra/admin-guide/general)

## Multi Program Stream

![Multi Program Stream Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/mpts.png)

The Multi Program Stream (MPTS, also known as Multiplex) is another type of stream available in Astra, activated via an option of the same name within stream settings. MPTS takes all provided inputs and multiplexes them into a singular stream for broadcasting purposes.

This stream type also provides several features designed for broadcasting. These include options for defining the stream description, network information, network search, and logical channel numbers.

Read more about [MPTS Settings](/en/astra/delivery/mpts-settings)
