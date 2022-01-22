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

- `sync` – receives UDP in separate thread with bitrate syncing
- `renew=Seconds` – renewing multicast group subscription after a specified time
- `socket_size=Bytes` – size of the system socket. Default: `sysctl net.core.rmem_default`
