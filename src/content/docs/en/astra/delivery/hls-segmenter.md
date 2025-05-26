---
title: HLS Segmenter
date: 2023-05-26
sidebar:
    order: 11
---

HLS (HTTP Live Streaming) one of the most popular media streaming protocol. It is designed to transmit audio and video data over HTTP from a server to clients. Media content could be distributed with Content Delivery Networks (CDN) to enchance availability. In pair with dynamic, adaptable streaming HLS provides highest quality in varying network conditions.

![HLS Diagram](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

The HLS Segmenter is Astra feature to split continuous media stream into HLS segments. To provide access to HLS segments Astra generates HLS Media Playlist.

Astra specifically functions as the HLS segmenter. Other features such as transcoding and caching require additional software. For instance, FFmpeg is recommended for transcoding, while Nginx could be used for caching.

## HLS Segmenter Options

In Astra Web Interface HLS options available in Settings -> HLS

![HLS Segmenter Options](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/options.png)

- `Duration` - duration of the HLS segment in seconds. Default: 3
- `Quantity` - number of segments in one HLS Media Playlist. Default setting is 4

### Segment naming

Method of generation file name for HLS Segments

- `PCR-hash` - default value. Secure variant, Astra uses timestamp from stream for file name
- `Sequence` - sequential number as file name

### Resource path

The resource path let choose path to the resources in the HLS Media Playlist:

- `Absolute` - default value. URL with origin and full path to the resource. For example: `https://example.com/play/channel-id/segment-001.ts`
- `Relative` - relative path to the resource. For example: `segment-001.ts`
- `Full` - full path to the resource. For example: `/play/channel-id/segment-001.ts`

### Other options

- `Round duration value` - this function rounds the duration of media stream segments to integer values (not recommended)
- `Use Expires header` - this option adds the Expires header to the HTTP response. This header is necessary for the caching proxies. Read more in [HLS Caching Proxy with Nginx](/en/misc/tools-and-utilities/hls-caching-proxy-with-nginx)
- `Pass all data PIDs` - by default, only video and audio packets writes to the HLS segments. This option allow to write all Data packets.

### HLS Media Playlist

- `Use default headers for .m3u8` - with this option Astra appends HTTP headers to the response with HLS Media Playlist for Cross-Origin Resource Sharing. Enabled by the default

### HLS Segments

- `TS Extension` - this option allows to customize file extension for HLS Segments. Default is `ts`
- `TS mime type` - this option allows to customize MIME type for HLS Segments. Default is `video/MP2T`
- `Use default headers for .ts` - with this option Astra appends HTTP headers to the response with HLS Segment for Cross-Origin Resource Sharing. Enabled by the default
