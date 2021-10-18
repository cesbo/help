---
title: UDP, RTP
---

## Address format

```
udp://[interface@]address[:port][#options]
rtp://[interface@]address[:port][#options]
```

- `interface` - name of the local interface. The system routing table used by the default;
- `address` - IPv4 address of the stream. Multicast or unicast;
- `port` - port number. Default: `1234`.

Options:

- `sync` - receives UDP in separate thread with bitrate syncing
- `renew=INTERVAL` - renewing multicast group subscription after a specified time (in seconds)
- `ts_size=BYTES` - size of the TS packet with FEC codes
- `socket_size=BYTES` - size of the system socket. Default: `sysctl net.core.rmem_default`

## About UDP

UDP is most simple protocol for data transfer...

TODO: #9 About UDP

## About RTP

TODO: #8 About RTP

## Mulsticast

TODO: #2 About Multicast
TODO: #3 About IGMP

We recommend to use multicast addresses in range `239.0.0.0 - 239.255.255.255`. More information on [www.iana.org](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml)

## Unicast

TODO: #4 About Unicast

## Broadcast

TODO: #5 About Broadcast
