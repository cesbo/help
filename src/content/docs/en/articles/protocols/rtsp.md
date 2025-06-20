---
title: RTSP
sidebar:
    order: 5
---

RTSP (Real-Time Streaming Protocol) is an application-level network protocol that manages multimedia transport streams over suitable transport protocols. It's mainly used in entertainment and communications systems to control media servers. The protocol establishes and manages media sessions between endpoints for real-time media streaming, whether from the server to a client or vice versa.

For a detailed description, please refer to the [RFC 7826](https://www.rfc-editor.org/rfc/rfc7826){target="_blank"} standard.

## RTP

While RTSP manages the control of media streams, it delegates the actual transmission of streaming data to other protocols. Most RTSP servers use the Real-Time Transport Protocol (RTP) in conjunction with the Real-Time Control Protocol (RTCP).

RTP is a network protocol employed for delivering audio and video over IP networks and is typically utilized in systems involving streaming media, such as telephony, video teleconference applications like WebRTC, and television services.

## IP Camera Streaming

One of the most frequent applications of RTSP is in IP camera streaming. IP cameras, often used in surveillance systems, typically rely on RTSP for streaming live video feeds.

In a typical scenario, an IP camera acts as an RTSP server. The camera captures video, then encodes and packetizes the video data to be sent over the network. An end user or system — the RTSP client.
