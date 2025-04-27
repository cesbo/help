---
title: "Session API"
date: 2023-08-03
sidebar:
    order: 29
---

Sessions is a list of active connections to HTTP MPEG-TS or HLS outputs.

## Get session list

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
            "client_id": "...",
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

## Close session

```
{
    "cmd": "close-session",
    "id": "..."
}
```

- `id` — session identifier
