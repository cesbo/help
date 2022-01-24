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

## Web Interface

In the web interface RTSP Input options available in the Stream options. You can write source address directly to the Input address line:

![Input address](input-list-696w.png ':size=696')

Or click to the gear icon and use an Input configuration form:

![RTSP Input options](rtsp-696w.png ':size=696')

## Troubleshooting
