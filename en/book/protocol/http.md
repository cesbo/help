# HTTP MPEG-TS

HTTP (The Hypertext Transfer Protocol) - is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems.

Transfer Protocol functions as a request–response protocol in the client–server model. A media player or web browse, may be the client whereas a process, named HTTP server, running on a computer hosting media content is a server. The server, which provides resources such as media streams and other content or performs other functions on behalf of the client, returns a response message to the client. The response contains completion status information about the request, broadcast media stream or error message.

Detailed description available in the [RFC 9112](https://datatracker.ietf.org/doc/html/rfc9112){target="_blank"} standard.

## HTTP via TCP

HTTP is an application layer protocol designed within the framework of the Internet protocol suite. Its definition presumes an underlying and reliable transport layer protocol, thus Transmission Control Protocol (TCP) is commonly used.

Detailed description available in the [RFC 793](https://datatracker.ietf.org/doc/html/rfc793){target="_blank"} standard.

## MPEG-TS

MPEG transport stream (Moving Picture Experts Group) - is a standard digital container format for transmission and storage of audio, video, and Program and System Information Protocol data. It is used in broadcast data stream.

Read more about [MPEG-TS](/en/book/transport/mpegts/){target="_blank"}

## Differences between TCP and UDP

| Basis | Transmission control protocol (TCP) | User datagram protocol (UDP) |
|-------|----------|---------|
| Type of Service     | TCP is a connection-oriented protocol. Connection-orientation means that the communicating devices should establish a connection before transmitting data and should close the connection after transmitting the data.     | UDP is the Datagram-oriented protocol. This is because there is no overhead for opening a connection, maintaining a connection, and terminating a connection. UDP is efficient for broadcast and multicast types of network transmission.     |
| Reliability     | TCP is reliable as it guarantees the delivery of data to the destination router.      | The delivery of data to the destination cannot be guaranteed in UDP.      |
| Error checking mechanism     | TCP provides extensive error-checking mechanisms. It is because it provides flow control and acknowledgment of data.   | UDP has only the basic error checking mechanism using checksums.      |
| Sequence     | Sequencing of data is a feature of Transmission Control Protocol (TCP). this means that packets arrive in order at the receiver.   | Sequencing of data is a feature of Transmission Control Protocol (TCP). this means that packets arrive in order at the receiver.      |
| Overall     | TCP is slower than UDP due to the specific of the protocol and requires more resources. But it provides better stability and media access control.   | UDP is faster, simpler, and more efficient than TCP. But sometimes it loses some data     |
