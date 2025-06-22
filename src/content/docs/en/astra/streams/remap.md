---
title: "Stream: Remap Settings"
sidebar:
    order: 33
---

The Remap feature in Astra allows modify the Packet Identifier (PID) for MPEG-TS elementary streams.

## Use Cases

Remapping Stream PIDs is beneficial in various scenarios:

- Smooth Input Redundancy: If primary and backup inputs have differing PIDs for video and audio elementary streams, switching to the backup input may lead to a temporary interruption in playback. By remapping PIDs to ensure uniformity across primary and backup inputs, the transition can be made seamless.
- Multi Program Stream (MPTS) Preparation: When preparing a channel for inclusion in an MPTS broadcast, each elementary stream within the channel must possess a unique PID. Remapping ensures this PIDs uniqueness, enabling smooth addition of the channel to the MPTS

## Remap Options

![Stream Remap Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/remap.png)

- `Map PID's` - modify the Packet Identifier (PID) for MPEG-TS elementary streams. Read more in [Remapping Stream PIDs](/en/astra/streams/remap/)
- `Filter PID's` - removes specific packets within the MPEG-TS stream based on their PIDs. Read more in [Filtering Stream PIDs](/en/astra/streams/filter/)
- `Change PNR` - change program number. Program number could be in range from 1 to 65535
- `Change TSID` - change transport stream identifier

## Analyze Channel

To identify available elementary streams and their PIDs, it's necessary to analyze the channel. This can be achieved by launching the built-in MPEG-TS analyzer either from the channel menu or directly from the channel settings.

![Analyze Original Stream](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-original.png)

On the provided screenshot, we can see the following elementary streams:

1. Program Map Table (PMT) - PID: `374`
1. Video - PID: `371`
2. Audio - PID: `376`, Language: `eng` (English)

Each elementary stream is represented by a unique Packet Identifier (PID), which can be used for Stream Remapping in Astra.

## Limitations

Please note that PID value could be in range from 32 to 8190.

## Input remapping

In order to perform the stream remapping, we will change the PMT PID to 100, the video stream PID to 101, and audio stream PID to 102. This operation can be conducted by appending the `map.pmt=100&map.video=101&map.audio.eng=102` option to the input address

![Input Option](https://cdn.cesbo.com/help/astra/processing/utilities/remap/input-options.png)

## Remapping for all inputs

For stream remapping across all inputs, the `Remap` tab in the channel settings can be used.

![Remap Options](https://cdn.cesbo.com/help/astra/processing/utilities/remap/remap-options.png)

In the "Map PIDs" field, `pmt=100, video=101, audio.eng=102` has been set. This alters the PIDs of the video and English audio streams to 101 and 102, respectively, across all inputs.

To verify the results of the applied stream filter, click "Apply" to save the changes. Next, launch the built-in MPEG-TS analyzer again. This will allow you to check if the unnecessary streams have been successfully filtered out.

![Analyze Remapped Stream](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-remapped.png)

## Selectors

Selector determinates what PID should be changed to the new value

- `pmt` - PID for Program Map Table (PMT)
- `video` - video stream
- `audio` - any audio stream. You may define this option twice if you have several audio streams, for example: `video=101, audio=102, audio=103`
- `audio.eng` - audio stream with defined language code
- `ac3` - AC3 audio stream. The `audio` selector could be used for AC3 streams as well
- `aac` - AAC audio stream. The `audio` selector could be used for ACC streams as well
- `371` - original PID
- `pcr` - PID for packets with PCR. Usually the PCR timestamp delivered with video stream packets
- `sub` - subtitle stream
- `ttx` - teletext stream
- `ait` - PID for Application Information Table (AIT)
