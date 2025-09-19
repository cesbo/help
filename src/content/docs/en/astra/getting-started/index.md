---
title: About Astra
description: Digital TV broadcasting software that receives, processes, and delivers television signals over cable, satellite, terrestrial, and IP networks
sidebar:
    order: 1
---

Astra is digital TV broadcasting software that receives television signals from different sources, then delivers them to your viewers over cable, satellite, terrestrial, and IP networks.

## Is This for You?

Astra is designed for:

- Cable, satellite, and terrestrial TV operators
- IPTV and OTT service providers
- Content delivery networks (CDNs)
- Hotels, hospitals, and others who provide TV services for their own customers

## How Does It Work?

Astra runs on Linux servers and gets TV content from various sources, then delivers it to your viewers.

[Read how to install Astra](/en/astra/getting-started/install/)

### Receiving content

Astra supports various types of sources:

- Satellite, Cable, and Terrestrial signals using DVB and ISDB-T standards
- HLS and HTTP MPEG-TS streams
- Multicast streams in IP networks with UDP or RTP
- SRT protocol in caller or listener modes
- RTSP streams from IP cameras

### Processing content

Astra prepares received channels for delivery using MPEG-TS processing features:

- MPEG-TS Demultiplexing to extract channels from multi-program streams
- Streams filtering and remapping
- Descrambling with DVB-CI and Conditional Access Modules
- Analyzing streams
- Stream redundancy with automatic failover to backup sources when primary feeds fail

Astra works on the transport stream level, and delivers content without changing the original video and audio streams.

### Delivering content

Broadcasting & Streaming content over different networks:

- Preparing streams and MPEG-TS multiplexing for cable, terrestrial, and satellite networks
- Scrambling using DVB Simulcrypt
- HLS and HTTP MPEG-TS streaming with access authentication
- Delivery streams over IP networks with UDP Multicast
- SRT protocol in listener or caller modes

### Other Features

- **Web-Interface** - Control and configure Astra in your browser
- **Realtime monitoring** - Track adapters and streams health
- **Integration with Zabbix, Grafana, and InfluxDB** - Connect with your existing monitoring tools
- **API** - Automate tasks and integrate with other systems
- **Lua scripts** - Customize functionality with scripting
