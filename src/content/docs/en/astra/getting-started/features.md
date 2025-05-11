---
title: Features
date: 2024-08-02
sidebar:
    order: 1
---

## System Requirements

Astra works on any Linux-based distribution for x86 64-bit CPUs. We recommend using Ubuntu 22.04 LTS.

[Read more...](requirements)

## Receiving content

Astra supports various types of sources:

- DVB, including satellite, cable, and terrestrial
- HLS and HTTP MPEG-TS streams
- Multicast streams in IP networks with UDP or RTP
- SRT protocol in caller or listenner modes
- RTSP streams from IP cameras

[Read more...](../receiving/intro)

## Processing content

Astra prepares received channels for delivery using MPEG-TS processing features:

- MPEG-TS Demultiplexing to extract channels from multi-program streams
- Streams filtering and remapping
- Descrambling with DVB-CI and Conditional Access Modules
- Analyzing streams
- Stream redundancy by automatically switching to backup sources

[Read more...](../processing/demux)

## Delivering content

Broadcasting & Streaming content over different networks:

- Preparing streams and MPEG-TS multiplexing for cable, terrestrial, and satellite networks
- Scrambling using DVB Simulcrypt
- HLS and HTTP MPEG-TS streaming with access authentication
- Delivery streams over IP networks with UDP Multicast
- SRT protocol in listenner or caller modes

[Read more...](../delivery/mpts-settings)

## Management

- Responsive Web-Interface
- Realtime monitoring
- Integration with Zabbix, Grafana, and InfluxDB
- API
- Lua scripts
