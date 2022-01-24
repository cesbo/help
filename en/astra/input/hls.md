# HLS

HLS (HTTP Live Streaming) is a most popular HTTP-based protocol for media delivery. [Read more](/en/book/#/delivery/hls)

## Address format

```
http://host
http://host:port/path
http://auth@host:port/path#options
https://auth@host:port/path#options
```

* `auth` – login and password for HTTP authentication. Supports Basic and Digest authentication methods
* `host` – remote server address IPv4 or domain name
* `port` – remote port. Default: **80** for http and **443** for https
* `path` – path to the resource. Default: **/**

Options:

- `ua=Name` – custom User-Agent header
- `debug` – log all receiving information: HTTP headers, segments download time
- `bandwidth=KBit` – choose variant with bandwidth close to defined value. By the default selects stream with maximal bandwidth

## Web Interface

In the web interface HLS Input options available in the Stream options. You can write source address directly to the Input address line:

![Input address](input-list-696w.png ':size=696')

Or click to the gear icon and use an Input configuration form:

![HLS Input options](http-696w.png ':size=696')

## Troubleshooting
