# HTTP - MPEG-TS

HTTP (The Hypertext Transfer Protocol) - is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems.

Transfer Protocol functions as a request–response protocol in the client–server model. A web browser, for example, may be the client whereas a process, named web server, running on a computer hosting one or more websites may be the server. The client submits an HTTP request message to the server. The server, which provides resources such as HTML files and other content or performs other functions on behalf of the client, returns a response message to the client. The response contains completion status information about the request and may also contain requested content in its message body.

Detailed description available in the [RFC 9112][RFC 9112] standard.

## HTTP via TCP

HTTP is an application layer protocol designed within the framework of the Internet protocol suite. Its definition presumes an underlying and reliable transport layer protocol, thus Transmission Control Protocol (TCP) is commonly used. However, HTTP can be adapted to use unreliable protocols such as the User Datagram Protocol (UDP), for example in HTTPU and Simple Service Discovery Protocol (SSDP).

Detailed description available in the [RFC 768][RFC 768] standard.

## MPEG

MPEG transport stream (Moving Picture Experts Group) - is a standard digital container format for transmission and storage of audio, video, and Program and System Information Protocol (PSIP) data. It is used in broadcast systems such as DVB, ATSC and IPTV.

Transport stream specifies a container format encapsulating packetized elementary streams, with error correction and synchronization pattern features for maintaining transmission integrity when the communication channel carrying the stream is degraded.

Detailed description available in the [ISO/IEC 13818-1][ISO] standard.

A transport stream encapsulates a number of other substreams, often packetized elementary streams (PESs) which in turn wrap the main data stream using the MPEG codec or any number of non-MPEG codecs (such as AC3 or DTS audio, and MJPEG or JPEG 2000 video), text and pictures for subtitles, tables identifying the streams, and even broadcaster-specific information such as an electronic program guide. Many streams are often mixed together, such as several different television channels, or multiple angles of a movie.

![MPEG](/en/book/protocols/img/MPEG.png)

Each stream is chopped into (at most) 188-byte sections and interleaved together. Due to the tiny packet size, streams can be interleaved with less latency and greater error resilience compared to program streams and other common containers such as AVI, MOV/MP4, and MKV, which generally wrap each frame into one packet. 

Transport streams tend to be broadcast as constant bitrate (CBR) and filled with padding bytes when not enough data exists.

## Differences between TCP and UDP

| Basis | Transmission control protocol (TCP) | User datagram protocol (UDP) |
|-------|----------|---------|
| Type of Service     | TCP is a connection-oriented protocol. Connection-orientation means that the communicating devices should establish a connection before transmitting data and should close the connection after transmitting the data.     | UDP is the Datagram-oriented protocol. This is because there is no overhead for opening a connection, maintaining a connection, and terminating a connection. UDP is efficient for broadcast and multicast types of network transmission.     |
| Reliability     | TCP is reliable as it guarantees the delivery of data to the destination router.      | The delivery of data to the destination cannot be guaranteed in UDP.      |
| Error checking mechanism     | TCP provides extensive error-checking mechanisms. It is because it provides flow control and acknowledgment of data.   | UDP has only the basic error checking mechanism using checksums.      |
| Sequence     | Sequencing of data is a feature of Transmission Control Protocol (TCP). this means that packets arrive in order at the receiver.   | Sequencing of data is a feature of Transmission Control Protocol (TCP). this means that packets arrive in order at the receiver.      |
| Speed     | TCP is comparatively slower than UDP.   | UDP is faster, simpler, and more efficient than TCP.      |
| Stream Type     | The TCP connection is a byte stream.   | UDP connection is message stream.      |

[RFC 9112]: (https://datatracker.ietf.org/doc/html/rfc9112)

[RFC 768]: (https://datatracker.ietf.org/doc/html/rfc9112)

[ISO]: [https://](https://ocw.unican.es/pluginfile.php/171/course/section/78/iso13818-1.pdf)