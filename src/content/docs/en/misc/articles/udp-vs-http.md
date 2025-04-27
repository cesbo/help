---
title: "Comparing UDP, HTTP & HLS Protocols"
date: 2023-03-17
sidebar:
    order: 6
---

Digital TV transmission employs different protocols for broadcasting media content, specifically, User Datagram Protocol (UDP), Hypertext Transfer Protocol (HTTP), and HTTP Live Streaming (HLS). These protocols each possess distinctive characteristics that affect their efficiency, reliability, and compatibility with various devices and networks. The following comparison will delve into their core functions, benefits, and drawbacks to provide a clear understanding of their use in the digital TV landscape.

## UDP Multicast

![UDP Multicast](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

The User Datagram Protocol (UDP) multicast operates on a one-to-many basis. This means it can deliver packets from a single source to multiple subscribers simultaneously. Typically, UDP multicast finds its primary use within local network environments due to its broadcast capabilities and network limitations.

UDP multicast functions within an IP range from 224.0.0.0 to 239.255.255.255. However, the range from 224.0.0.0 to 224.255.255.255, is generally avoided due to a high concentration of specialized addresses. These addresses are reserved for network protocols, and using them can lead to conflicts.

The UDP multicast behavior can be compared to a catapult launching goods. Once the payload is launched, the sender does not control or monitor its path. The operator is not concerned about the packet's condition after it has been launched, mirroring UDP's lack of delivery guarantees and reliability checks.

Access control can be established through two methods:

- encrypting the streams for secure data transmission
- managing ports on the commutation equipment

## UDP Unicast

UDP unicast serves as a one-to-one transmission method. It is typically utilized for sending streams between different servers in a headend. An instance of this would be transmitting streams from a receiver to a transcoder, and then from the transcoder to a multiplexor.

## HTTP MPEG-TS

HTTP MPEG-TS protocol base on HTTP protocol and works like downloading an infinite file, continually sending data to the receiver in a constant stream. This approach enables good compatibility with older set-top boxes that were designed with this protocol in mind.

However, this protocol is more susceptible to unstable connections and is sensitive to delays. Any disruption or lag can result in playback issues, similar to how a conveyor belt delivering goods would halt whenever there's a delay.

Regarding access control, HTTP MPEG-TS can leverage standard HTTP methods for authorization, eliminating the need for encryption, though encryption is possible via Transport Layer Security (TLS) if required for additional security.

## HLS

![HLS Diagram](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

HTTP Live Streaming (HLS) is a protocol for streaming media content over the internet. It's designed to deliver sizable chunks of data at once, similar to the delivery of cargo containers. As one chunk (container) is being unloaded and processed by the client, the next chunk is already being prepared and sent. This allows for efficient handling of data and helps to ensure smoother, continuous playback, even in fluctuating network conditions.

HLS offers several advantages, including multibitrate streaming, which allows the protocol to adapt the video quality to the viewer's network conditions in real-time. It also supports the delivery of chunks through a Content Delivery Network (CDN), enabling efficient data distribution and improved scalability, particularly beneficial for handling large volumes of concurrent viewers.

Access control provided with HTTP methods like a HTTP MPEG-TS
