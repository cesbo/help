# UDP

UDP is a low latency protocol for local networks. [Read more](/en/codex/#/protocols/udp)

## Address format

```
udp://[interface@]address[:port][#options]
```

- `interface` – name of the local interface. The system routing table used by the default;
- `address` – IPv4 address of the stream. Multicast or unicast;
- `port` – port number. Default: **1234**.

Options:

- `sync` – transmit UDP in separate thread with bitrate syncing;
- `cbr=Rate` – make stream with constant bitrate. Appends empty packets (NULL-TS) to the stream or cuts excessed packets. Option value should be in KBit/s.
- `socket_size=Bytes` – size of the system socket. Default: `sysctl net.core.wmem_default`
- `ttl=Hops` – time to live for UDP packets. Default: **32**

## Mulsticast

We recommend to use multicast addresses in range `239.0.0.0 - 239.255.255.255` . More information on [www.iana.org](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml).
