---
title: HTTP MPEG-TS
---

## Address format

```
http://[auth@]host[:port][/path][#options]
https://[auth@]host[:port][/path][#options]
```


- `auth` - login and password for http authentication
- `host` - remote server address
- `port` - remote port. Default: `80` for http and `443` for https
- `path` - the path to the resource. Default: `/`

Options:

- `ua=NAME` - custom User-Agent header
- `buffer_time=SECONDS` - incoming buffer size in seconds. Default: `3`
- `no_sync` - disables bufferization
- `debug` - log all receiving information: HTTP headers

## About HTTP
