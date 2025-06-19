---
title: About Astra
sidebar:
    order: 1
---

Software headend for Digital TV broadcasting over cable, satellite, terrestrial, and IP networks.

## Is This for You?

Astra is designed for professionals in the broadcasting industry, including:

- Cable, satellite, and terrestrial TV operators
- IPTV and OTT service providers
- Content delivery networks (CDNs)
- Hotels, hospitals, and others who provide TV services for their own customers

## What needs to be installed?

Astra works on any Linux-based distribution for x86 64-bit CPUs. We recommend using Fedora 42.

[Read how to install Astra](/en/astra/getting-started/install/)

## How Does It Work?

Astra is a software headend that receives, processes, and delivers digital TV content.

### Receiving content

Astra supports various types of sources:

- DVB, including satellite, cable, and terrestrial
- HLS and HTTP MPEG-TS streams
- Multicast streams in IP networks with UDP or RTP
- SRT protocol in caller or listenner modes
- RTSP streams from IP cameras

[Read more...](/en/astra/receiving/intro/)

### Processing content

Astra prepares received channels for delivery using MPEG-TS processing features:

- MPEG-TS Demultiplexing to extract channels from multi-program streams
- Streams filtering and remapping
- Descrambling with DVB-CI and Conditional Access Modules
- Analyzing streams
- Stream redundancy by automatically switching to backup sources

Astra works on the transport stream level, and delivers content without changing the original video and audio streams.

[Read more...](/en/astra/processing/demux/)

### Delivering content

Broadcasting & Streaming content over different networks:

- Preparing streams and MPEG-TS multiplexing for cable, terrestrial, and satellite networks
- Scrambling using DVB Simulcrypt
- HLS and HTTP MPEG-TS streaming with access authentication
- Delivery streams over IP networks with UDP Multicast
- SRT protocol in listenner or caller modes

[Read more...](/en/astra/delivery/mpts-settings/)

## Management

- Web-Interface
- Realtime monitoring
- Integration with Zabbix, Grafana, and InfluxDB
- API
- Lua scripts
