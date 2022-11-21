# RTSP

RTSP (Real Time Streaming Protocol) is a protocol used mostly for IP cameras. [Read more](/en/book/protocols/rtsp/)

## Address format

```
rtsp://address
rtsp://address:port/path
rtsp://login:password@address:port/path#options
```

- `login:password` – login and password for RTSP authentication. Supports Basic and Digest authentication methods
- `address` – IPv4 server address or domain name
- `port` – port number. Default: **554**
- `path` – the path to the resource. Default: **/**

Options:

- `tcp` – interleaved mode. receive stream over TCP instead UDP
- `ua=Name` – custom User-Agent header

## Web Interface

You can write source address directly to the Input address line in the Stream settings, or click to the gear icon and use an Input configuration form:

![RTSP Input options](rtsp.png){: width="400"}

## Troubleshooting
