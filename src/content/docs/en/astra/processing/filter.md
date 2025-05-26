---
title: Filtering Stream PIDs
date: 2023-07-17
sidebar:
    order: 2
---

Stream Filtering removes specific packets within the MPEG-TS stream based on their PIDs. Additionally, the process modifies the corresponding program-specific information tables, such as Program Association Table (PAT) and Program Map Table (PMT), to reflect the removal of the identified packets.

## Analyze Channel

To identify available elementary streams and their PIDs, it's necessary to analyze the channel. This can be achieved by launching the built-in MPEG-TS analyzer either from the channel menu or directly from the channel settings.

![Analyze Original Stream](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-original.png)

On the provided screenshot, we can see the following elementary streams:

1. Video - PID: `1331`
1. Subtitle - PID: `1335`, Language: `bul` (Bulgarian)
1. Audio - PID: `1332`, Language: `bul` (Bulgarian)
1. Audio - PID: `1336`, Language: `eng` (English)

Each elementary stream is represented by a unique Packet Identifier (PID), which can be used for Stream Filtering in Astra.

## Input filtering

In order to perform the stream filtering, we will drop the stream with PID 1336. This operation can be conducted by appending the `filter=1336` option to the input address

![Input Option](https://cdn.cesbo.com/help/astra/processing/utilities/filter/input-options.png)

## Inverse input filtering

To perform inverse filtering and remove all streams except those specified, you can use the tilde symbol (`~`) along with the filter option. For instance, to keep only the video stream and the English audio stream (PIDs 1331 and 1336), you would append the `filter~=1331,1336` option to the input address. This will remove all other streams, leaving only the defined streams.

To verify the results of the applied stream filter, click "Apply" to save the changes. Next, launch the built-in MPEG-TS analyzer again. This will allow you to check if the unnecessary streams have been successfully filtered out.

![Analyze Filtered Stream](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-filtered.png)

## Filtering for all inputs

For stream filtering across all inputs, the `Remap` tab in the channel settings can be used. This method is suitable with the remap feature.

![Remap Options](https://cdn.cesbo.com/help/astra/processing/utilities/filter/remap-options.png)

In the `Map PIDs` field, `video=101, audio.eng=102` has been set. This alters the PIDs of the video and English audio streams to 101 and 102, respectively, across all inputs.

Subsequently, in the `Filter PID` field, `101, 102` has been specified. This implies that only the streams with these PIDs will be retained in the output, while all other elementary streams will be filtered out.

Read more: [Remap PIDs](/en/astra/processing/remap)
