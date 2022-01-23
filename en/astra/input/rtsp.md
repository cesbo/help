# RTSP

RTSP (Real Time Streaming Protocol) is a protocol used mostly for IP cameras. [Read more](/en/book/#/delivery/rtsp)

## Address format

```
rtsp://[login:password@]address[:port][/path][#options]
```

- `login:password` – username and password for rtsp authorization
- `address` – IPv4 server address or domain name
- `port` – port number. Default: **554**
- `path` – the path to the resource. Default: **/**

Options:

- `tcp` – interleaved mode. receive stream over TCP instead UDP
- `ua=Name` – custom User-Agent header
