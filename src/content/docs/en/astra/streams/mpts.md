---
title: "MPTS: General Settings"
sidebar:
    order: 21
---

MPTS (Multi Program Transport Stream) lets you bundle multiple TV channels into a single stream. This is useful when you need to send several channels together to broadcasting equipment or cable networks.

For example, instead of sending Channel 1, Channel 2, and Channel 3 as separate streams, MPTS combines them into one stream that carries all three channels.

## Creating an MPTS Stream

To create an MPTS stream:

1. Go to the main Dashboard
2. Click `New Stream` in the upper right corner
3. Check the `Multi Program Stream` checkbox
4. Configure the settings below

## General

The General tab contains the basic settings for your MPTS stream.

![General Options](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/general.png)

### Basic Settings

- `Enable`: Turn the MPTS stream on or off
- `Name`: Give your MPTS stream a name to identify it in the interface
- `ID`: Auto-generated when you save (optional field)

### Location Settings

- `Country`: Country code where the local time offset applies. Used for correct time adjustment in regional broadcasts. Use [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format
- `UTC Offset`: Set time zone offset from UTC (-720 to +780 minutes). This helps TVs set the correct time automatically

### Network Settings

- `Network ID`: Unique number for your DVB network (default: 1)
- `Network Name`: Name for your DVB network
- `Provider Name`: Your company or organization name (shows when users scan channels)
- `Codepage`: Character encoding for text. Use Latin (ISO 6937) for English

### Stream Identifiers

- `TSID`: Transport Stream ID - unique number for this stream (default: 1)
- `ONID`: Original Network ID - identifies the original network. Must be the same for all streams in your network (default: 1)

## Input List

The Input List defines which streams (TV Channels) will be combined into your MPTS output. Each input represents a single channel that you want to include in the final multi-channel stream.

![Input List](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/input.png)

### Managing Inputs

- `New Input`: Add a new stream to your MPTS stream
- `Reorder (↑↓)`: Change the order of channels in the list
- `Settings (⚙)`: Configure individual channel settings like source URL and program number

### Important Settings

Each input stream needs unique identifiers to avoid conflicts:

- `Unique PIDs`: Each channel must have different packet identifiers. By default, Astra assigns unique PIDs automatically
- `Program Numbers`: Assign unique program numbers using `set_pnr=` option

**Example input URLs:**

```
udp://225.1.1.27:1234#set_pnr=11
udp://225.1.1.28:1234#set_pnr=12
udp://225.1.1.29:1234#set_pnr=13
```

This creates three channels with program numbers 11, 12, and 13 respectively.

### Use Streams from Astra

You can also use existing streams from the Astra as inputs for your MPTS stream. This allows you to use channels that are already configured and prepared for MPTS.

Use the `stream://` URL format and specify the stream ID you want to include.

**Example input URL:**

```
stream://a123
```

So example flow will look like this:

- SPTS streams used to receive channels from external sources (like UDP or DVB), prepare them for broadcasting (e.g., set program numbers, PIDs, filters, etc.)
- MPTS stream combines these SPTS streams into a single multi-channel output

## Output List

The Output List defines where your MPTS stream will be sent. After combining multiple channels into a single MPTS stream, you need to specify the destination(s) where this combined stream should be delivered.

![Output List](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/output.png)

### Managing Outputs

- `New Output`: Add a new destination for your MPTS stream
- `Settings (⚙)`: Configure output settings like destination URL, constant bitrate, and other parameters

### Common Output Types

Your MPTS stream can be sent to various destinations:

- `UDP Multicast`: Send to network devices or other streaming servers
- `Hardware`: Send to broadcasting equipment

Read more about DVB modulator configurations:

- [DigitalDevices RESI DVB-C Modulator](/en/astra/delivery-broadcast/resi-dvb-c-modulator/)
- [TBS DVB-C Modulator](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)
- [HiDes DVB-T Modulator](/en/astra/delivery-broadcast/hides-dvb-t-modulator/)
