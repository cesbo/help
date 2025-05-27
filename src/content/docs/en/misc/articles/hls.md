---
title: HLS Protocol
date: 2023-06-13
sidebar:
    order: 3
---

HLS (HTTP Live Streaming) is an HTTP-based adaptive bitrate streaming communications protocol. It works by dividing a media file into multiple chunks, allowing users to access the media file piece by piece in real time.

For a detailed description, please refer to the [RFC8216](https://www.rfc-editor.org/rfc/rfc8216){target="_blank"} standard.

## HLS Architecture

The HLS (HTTP Live Streaming) architecture is designed to facilitate efficient, real-time streaming of media content. Below is a general breakdown of the components involved in HLS streaming, proceeding from the origin of the stream to the end user:

![HLS Diagram](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

1. Stream Sources - these are the original sources of the media content to be streamed. This could be live video feeds, prerecorded video files, or other types of media
2. HLS Segmenter - divides data from the stream sources into short, manageable "chunks" of data. These chunks are typically between 2 to 10 seconds long
3. Transcoders - transcode the segmented stream into various bitrates. This process creates multiple versions of the same content at different quality levels. The availability of multiple bitrates allows the HLS player to dynamically adjust the quality of the stream based on the viewer's network conditions, providing an optimal viewing experience
4. Cache Servers (CDN) - chunks of data distributed to cache servers, which are part of a Content Delivery Network (CDN). These servers are strategically located to reduce latency and ensure smooth delivery of content to end users
5. Users - the end users, or clients, request and receive the media chunks from the closest CDN server. The client's HLS player assembles these chunks into a continuous stream for viewing

This structure enables HLS to provide robust, adaptable streaming performance, capable of delivering high-quality content to a wide variety of devices under various network conditions.
