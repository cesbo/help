# HTTP MPEG-TS

Receiving stream with a single HTTP request like downloading an infinity file. [Read more](/en/book/#/delivery/http)

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

- `pnr=Number` - select program from MPTS (Multi-Program Transport Stream)
- `ua=Name` – custom User-Agent header
- `buffer_time=Seconds` – incoming buffer size in seconds. Default: **3**
- `no_sync` – disables bufferization
- `debug` – log all receiving information: HTTP headers

## Web Interface

In the web interface HTTP Input options available in the Stream options. You can write source address directly to the Input address line:

![Input address](input-list-696w.png ':size=696')

Or click to the gear icon and use an Input configuration form:

![HTTP Input options](http-696w.png ':size=696')

## Troubleshooting
