---
title: HLS
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
- `debug` - log all receiving information: HTTP headers, segments download time
- `bandwidth=KBIT` - choose variant with bandwidth close to defined value. By the default selects stream with maximal bandwidth

## About HLS
