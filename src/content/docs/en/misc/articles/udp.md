---
title: "UDP"
date: 2023-06-13
sidebar:
    order: 7
---

UDP (User Datagram Protocol) is a communication protocol utilized in local networks or the Internet, known for its minimal delays and less-than-optimal stability. UDP provides message exchange between application programs and receivers, using checksums to maintain data integrity and port numbers to address various functions at the source and destination of the datagram.

Detailed description available in the [RFC768](https://www.rfc-editor.org/rfc/rfc768){target="_blank"} standard.

## Multicast

In computer networking, multicast refers to group communication in which data transmission occurs simultaneously to a group of destination receivers. Multicast is especially effective in cases of multiple receivers as it can efficiently use bandwidth by sending a single copy of the data across the network backbone. This ability makes it an ideal protocol for streaming Digital TV.

![UDP Multicast](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

## Broadcast

**Never use it for Digital TV!** Broadcasting is a method of transferring a message to all recipients simultaneously.

## Unicast

Unicast, a one-to-one transmission, is frequently utilized in higher layer protocols like RTSP and SRT. It can also serve to transmit Digital TV between different servers within a localhost or local network - for example, from a receiver to a transcoder, and then to the HLS segmenter.
