# UDP

UDP (User Datagram  Protocol) - communication protocol in local networks or Internet, with minimal delays and minimal stability. This protocol provides a procedure for application programs to send messages to receivers. That procedure achieved through checksums for data integrity, and port numbers for addressing different functions at the source and destination of the datagram.

Detailed description available in the RFC768[^1] standard.

![UDP](img/UDP.png)

## How Does UDP Work?

In comparison to other networking protocols, the process behind UDP is fairly simple. A target computer is identified and the data packets, called “datagrams,” are sent to it. There is nothing in place to indicate the order in which the packets should arrive. There is also no process for checking if the datagrams reached the destination.

Even though UDP comes with checksums, which are meant to ensure the integrity of the data, and port numbers, which help differentiate the role the data plays at the source and destination, the lack of an obligatory handshake presents a problem. The program the user is executing with the help of UDP is left exposed to unreliable facets of the underlying network.

As a result, the data may get delivered, and it may not. In addition, the order in which it arrives is not controlled, as it is in TCP, so the way the data appears at the final destination may be glitchy, out of order, or have blank spots.

In a situation where there is no need to check for errors or correct the data that has been sent, this may not pose a significant problem. This is one reason why UDP is used in video applications. Getting the video signal to its destination on time is worth the occasional glitches.

A number of UDP's attributes make it especially suited for certain applications:

- It is transaction-oriented, suitable for simple query-response protocols such as the Domain Name System or the Network Time Protocol.
- It provides datagrams, suitable for modeling other protocols such as IP tunneling or remote procedure call and the Network File System.
- It is simple for bootstrapping or other purposes without a full protocol stack, such as the DHCP and Trivial File Transfer Protocol.
The lack of retransmission delays makes it suitable for real-time applications such as Voice over IP, online games, and many protocols using Real Time Streaming Protocol.
- Because it supports multicast, it is suitable for broadcast information such as in many kinds of service discovery and shared information such as Precision Time - Protocol and Routing Information Protocol.
- It is stateless, suitable for very large numbers of clients, such as in streaming media applications such as IPTV.
  
## Multicast

In computer networking, multicast is group communication where data transmission is addressed to a group of destination computers simultaneously. Multicast can be one-to-many or many-to-many distribution.

![Multicast](img/multicast.png)

Group communication may either be application layer multicast or network-assisted multicast, where the latter makes it possible for the source to efficiently send to the group in a single transmission. Copies are automatically created in other network elements, such as routers, switches and cellular network base stations, but only to network segments that currently contain members of the group. Network assisted multicast may be implemented at the data link layer using one-to-many addressing and switching such as Ethernet multicast addressing, ATM (Asynchronous Transfer Mode) and P2MP (point-to-multipoint virtual circuits). In IP multicast the implementation of the multicast concept occurs at the IP routing level, where routers create optimal distribution paths for datagrams sent to a multicast destination address.

Multicast is often employed in Internet Protocol (IP) applications of streaming media, such as IPTV and multipoint video conferencing.

## Broadcast

**Never use it!**
In computer networking, telecommunication and information theory, broadcasting is a method of transferring a message to all recipients simultaneously. Broadcasting can be performed as a high-level operation in a program, for example, broadcasting in Message Passing Interface, or it may be a low-level networking operation, for example broadcasting on Ethernet.

## Unicast

In computer networking, unicast is a one-to-one transmission from one point in the network to another point; that is, one sender and one receiver, each identified by a network address.
Unicast is commonly used in higher layer protocols such as RTSP and SRT.

## Protocols comparison

- UDP - minimal delay but it loses data packets
- HTTP MPEG-TS - A little bit more delay with a better stability. 
- HLS[^2] - long delay but it has best data transfer stability and adaptive bitrate.



[^1]: RFC 768 [Read more](https://www.rfc-editor.org/rfc/rfc768){target="_blank"}

[^2]: HLS - HTTP Live Streaming protocol. [Read more](/en/book/protocols/hls/){target="_blank"}