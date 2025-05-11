---
title: "Receiving HLS"
date: 2023-08-10
sidebar:
    order: 9
---

HLS or HTTP Live Streaming is an HTTP-based adaptive bitrate video streaming protocol. It is most popular format for streaming over internet (OTT services). Read more about [HLS Protocol](/en/misc/articles/hls)

## Address format

```
http://address
http://address:port/path
http://login:password@address:port/path#options
```

This is common HTTP address. Astra supports https as well.

- `login:password` – login and password for HTTP authentication. Supports Basic and Digest authentication methods
- `address` – IPv4 server address or domain name
- `port` – port number. Default: `80` for http and `443` for https
- `path` – the path to the resource. Default: `/`

Options:

- `ua=Name` – custom User-Agent header
- `timeout=N` - timeout for HLS segments loading. By default, timeout depend of the segment duration
- `debug` - log response headers. Also should be turned on debug in the log messages
- `bandwidth=N` - select stream with defined bandwidth. By default, astra select stream with maximal bandwidth value

## Web Interface

To set up HLS input in Astra, just write your source address to the Input field.
