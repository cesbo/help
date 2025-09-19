---
title: HTTP MPEG-TS
sidebar:
    order: 2
---

HTTP-based protocol for video streaming. Astra receives continuous stream from the server in HTTP response.

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
- `timeout=N` - timeout for starting receive content from the server. By default `10` seconds
- `debug` - log response headers. Debug should also be enabled in the log settings
- `buffer_time=N` - specifies the size of the temporary buffer for receiving stream and synchronizing the bitrate. Astra downloads stream data to the buffer at maximum speed, then sends data evenly for processing
- `no_sync` - is a short option for `buffer_time=0` turns synchronization off and downloads stream data without any limits

## Web Interface

To set up HTTP MPEG-TS input in Astra, just write your source address to the Input field.
