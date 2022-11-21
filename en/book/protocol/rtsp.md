# RTSP

RTSP (Real Time Streaming Protocol) - is an application-level network protocol designed for multiplexing and packetizing multimedia transport streams over a suitable transport protocol. RTSP is used in entertainment and communications systems to control streaming media servers. The protocol is used for establishing and controlling media sessions between endpoints. Clients of media servers issue commands such as play, record and pause, to facilitate real-time control of the media streaming from the server to a client (video on demand) or from a client to the server.

Detailed description available in the [RFC 7826][RFC] standard.

 As a rule RTSP servers often leverage the Real-Time Transport Protocol (RTP) in conjunction with the Real-Time Control Protocol to move the actual streaming data. 

>RTP -  is a network protocol for delivering audio and video over IP networks. RTP is used in communication and entertainment systems that involve streaming media, such as telephony, video teleconference applications including WebRTC, television services and web-based push-to-talk features.
The transmission of streaming data itself is not a task of RTSP. Most RTSP servers use RTP in conjunction with RTCP for media stream delivery. However, some vendors implement proprietary transport protocols. 

## The differences between RTSP and HTTP RTP (RTCP)

**Similarities:**
- Both use plain text to send messages, and the RTSP protocol syntax is similar to HTTP.
RTSP was originally designed to be compatible with previously written HTTP protocol parsing code.

**Differences:**
- RTSP save state. RTSP commands need to know what state they are currently in. In other words, RTSP commands are always sent in order, with each next command coming after the previous one. RTSP will not drop the connection, no matter what state it is in. HTTP, on the other hand, does not save the state. After how the protocol sends a command, the connection is broken and there is no dependency between the commands.

- RTSP uses port 554, while HTTP uses port 80.

- Compared to RTSP, HTTP requests are sent by the client and the server responds. With RTSP, both the client and the server can send requests, which means that RTSP can be bidirectional.

## RTSP workflow

RTSP is conceptually similar to HTTP in function and was easily compatible with existing HTTP networks when it was first developed.

It was described as a “network remote control” for media servers. It was designed to control the streams without downloading any files. When a video stream is started, a device using the protocol sends an RTSP request to the media server that initiates the setup process.

RTSP also supports several control request operations such as play, pause, setup, etc. RTSP maintains an end-to-end connection with TCP and achieves a high throughput over this stable connection without requiring any local download or caching.

The protocol does not support content encryption or retransmission of lost packets, as RTSP is connected to a dedicated server for streaming and relies on RTP to transmit real media. These limitations along with scaling problems led to a drop in overall RTSP usage.

## IP camera streaming

When a user initiates a video stream from an IP camera using RTSP, the device sends an RTSP request to the streaming server. Subsequently, the video and audio data can then be transmitted using RTP. You can thus think of RTSP in terms of a television remote control for media streaming, with RTP acting as the broadcast itself.

Most IP cameras use the RTSP protocol to pull data to the media server. From surveillance to conferencing, IP cameras work great when you want to live stream from one location without getting too fancy. These user-friendly streaming devices don’t require a separate encoder. When pairing IP cameras with a stateful server, RTSP gets the job done. What’s more, broadcasters can then aggregate the content for delivery to any device with a live transcoding solution. Watch the video below to learn more.

[//]: Links
[RFC]: https://www.rfc-editor.org/rfc/rfc8216