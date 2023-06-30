---
title: "Other API Methods"
date: 2023-06-30
---

## Sessions

Sessions is a list of active connections to HTTP MPEG-TS or HLS outputs.

### Get session list

```
{
     "cmd": "sessions"
}
```

In response will be array of active sessions:

```
{
    "sessions": [
        {
            "client_id": N,
            "channel_id": "...",
            "channel_name": "...",
            "addr": "...",
            "uptime": N
        }
    ]
}
```

- `client_id` — unique session identifier
- `channel_id` — unique channel identifier
- `channel_name` — channel name
- `addr` — client IP address
- `uptime` — the time in seconds, for which the session has been running

### Close session

```
{
    "cmd": "close-session",
    "id": N
}
```

- `id` — session identifier

## Restart astra

```
{
    "cmd": "restart"
}
```

## Download configuration

```
{
    "cmd": "load"
}
```

In the response will be whole configuration file.

## Upload configuration

```
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - whole configuration file

## Set serial number

```
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - license serial number

## Set image to the stream tile:

```
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - stream identifier
- `url` - image address, as well could be used data-format, for example: `data:image/png;base64,...`
