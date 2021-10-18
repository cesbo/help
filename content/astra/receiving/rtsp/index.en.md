---
title: RTSP
---

## Address format

```
rtsp://[login:password@]address[:port][/path][#options]
```


- `login:password` - username and password for authorization rtsp
- `address` - IPv4 server address or domain name
- `port` - port number. Default: `554`
- `path` - the path to the resource. Default: `/`

Options:

- `tcp` - interleaved mode. receive stream over TCP instead UDP
- `ua=NAME` - custom User-Agent header

## About RTSP

TODO: #7 About RTSP