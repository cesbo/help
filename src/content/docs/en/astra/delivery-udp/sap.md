---
title: SAP for Multicast
---

Session Announcement Protocol (SAP) is a protocol to announce available Multicast streams in local networks. Clients on the network listens for announces and receives information such:

- Stream name
- Multicast address and port
- TTL
- Stream format - RTP or UDP

Astra send SAP packets to the multicast group 239.255.255.255 port 9875.

## Configure Astra

In the Output address append `sap` option to turn the SAP announcements on.

![Channel Settings](https://cdn.cesbo.com/help/astra/delivery/broadcasting/sap/channel.png)

## Receiving SAP with VLC

Open VLC Media Player and in the Playlist select Local Network → Network streams (SAP). VLC receives SAP announcements and list all available streams. Double click on the stream to start playing.
