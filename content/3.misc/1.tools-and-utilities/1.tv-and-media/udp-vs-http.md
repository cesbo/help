---
title: "The comparison of transmission protocols, HLS, UDP and HTTP"
date: 2023-03-17
---
The article describes the difference of 3 protocols

## UDP (multicast)

Multicast is UDP packets transmitted from one source to a group of subscribers. The address to which such packets are sent is typically between 224.0.0.0 and 239.255.255.255, but 224.0.0.0/8 is not recommended because of the large number of specialized addresses.
The oldest way to deliver a TV signal to the user: stream is sent as udp-packets broadcast.

UDP-similar to the transfer of goods by catapult, that means launched and forgotten. Whether the package reached its destination or not, received it or not, it's not the concern of the one who launched.

This is a significant drawback: the broadcaster cannot diagnose the problem with the client, that is, if there is a loss of udp packets, cubes and scattering will appear on the TV screen.

Multicast can be used only in local networks, as Internet routers do not route multicast. For routing in a local network-special multicast pim-routers are used.
Multicast requires high-quality network equipment and if it is configured incorrectly, it greatly overloads the network.
Of the advantages: good compatibility with old set-top boxes and saving network bandwidth. For example: if one switch 5 users watch the first channel - in the uplink of the switch will be only 1 subscription instead of 5.

Authorization / restriction of viewing is possible only by means of stream encryption.

## UDP (unicast)

Unicast-UDP packets transmitted from one source to the receiver address.
For example: a server with the ip address 192.168.8.1 reports to the address 192.168.8.2
Reception is made by the client at his own address: 192.168.8.2
Suitable for transmission of streams of real-time inside the head stations or receiving equipment on server decoding - transcoding.

## HTTP - MPEG-TS

It is a protocol for the transmission of audio and video data.
The principle of broadcasting is similar to downloading an infinite file. It is well compatible with old set-top boxes, but with an unstable connection, transmission breaks are possible - just as when downloading a file via the Internet with an unstable connection.

The principle of delivery is similar to the delivery of goods on the conveyor belt-deliver, but if if there not have time to unload, or be some other problems in the movement of the tape - delivery will stop.

Authorization by login/password, ip/mac and encryption of biss or cas stream is possible.

## HLS

HLS (HTTP Live Streaming) is a relatively new communication protocol for HTTP-based media streaming developed by Apple as part of QuickTime, Safari, OS x and iOS software. The work is based on the principle of splitting the whole stream into small fragments - chunks, consistently downloaded over HTTP. The flow is continuous and can theoretically be infinite. At the beginning of the session, a playlist in M3U format containing metadata about the existing nested streams is downloaded.

HLS-similar to the delivery of cargo containers - deliver a lot of chunk at once, and while it is unloaded, we will bring more. If a container is not reached - we have plenty of time to deliver it again.

Authorization by login / password, tokens, ip / mac is possible.
