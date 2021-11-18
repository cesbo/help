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
