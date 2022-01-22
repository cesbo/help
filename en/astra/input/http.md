# HTTP MPEG-TS

Receiving stream with a single HTTP request like downloading an infinity file. [Read more](/en/codex/#/protocols/http)

## Address format

```
http://[auth@]host[:port][/path][#options]
https://[auth@]host[:port][/path][#options]
```

* `auth` – login and password for http authentication
* `host` – remote server address
* `port` – remote port. Default: **80** for http and **443** for https
* `path` – the path to the resource. Default: **/**

Options:

- `ua=Name` – custom User-Agent header
- `buffer_time=Seconds` – incoming buffer size in seconds. Default: **3**
- `no_sync` – disables bufferization
- `debug` – log all receiving information: HTTP headers
