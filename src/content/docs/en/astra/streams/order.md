---
title: How to Reorder PIDs
sidebar:
    order: 34
---

In this article, we will explore how to change the order of audio streams in a channel using Astra. When broadcasting a channel with multiple audio streams the order of the streams can be crucial for viewers convenience. Most TV and other media players automatically select the first audio stream by default. By reordering the audio streams, you can ensure that your preferred language is set as the default option.

## Analyze Channel

The first step in reordering audio streams is to analyze the channel and gather information about the available audio streams and their respective Packet Identifiers (PIDs). This will help you identify the current order of audio streams in your channel and make the necessary changes accordingly.

To analyse the channel, follow these steps:

1. Open channel settings in the Astra Web Interface
2. Within the channel settings, click the `Analyze` button. This will initiate the channel analysis process
3. After a brief moment, the analyzer will display detailed information about the channel, including available audio streams and their PIDs

![Channel Information](https://cdn.cesbo.com/help/astra/processing/utilities/order/analyze.png)

In the provided screenshot, we can see that there are video and two audio streams present:

1. VIDEO PID: `331`
2. AUDIO PID: `332`, Language: `eng` (English)
3. AUDIO PID: `333`, Language: `bul` (Bulgarian)

Take note of the stream PIDs, as you will need this information to reorder the audio streams in the next step.

## Reorder Audio Streams

The final step in reordering audio streams is to modify the channel configuration. Close the channel analyzer by clicking the `Close` button. This will return you to the channel settings.

To reorder the audio streams, follow these steps:

1. In the channel settings, locate the `Input` section. This is where you will find the input address for your channel
2. To change the order of the audio streams, append the following option to the input address: `order=331,333,332`. The order parameter should include the PIDs of the video stream first, followed by the default audio stream, and then any additional audio streams. In this example, the new order will be: Video (331), Bulgarian audio (333), and English audio (332)
3. Save the changes by clicking the `Apply` button at the bottom of the channel settings page

![Channel Settings](https://cdn.cesbo.com/help/astra/processing/utilities/order/channel-settings.png)

:::tip
Input options are separated by the `&` symbol, as shown in the example screenshot. The `#` symbol marks the beginning of the options. For instance, if your address does not have any options, the full address with the order options would be `udp://239.255.1.1:1234#order=331,333,332`
:::
