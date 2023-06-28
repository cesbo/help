---
title: "Other Methods"
date: 2023-03-23
---

## Sessions

The method returns a list of current sessions. Answer format:

```
{
     "cmd": "sessions"
}
```

The format of the session information: SESSION-INFO:

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

* `client_id` — unique number of the session
* `channel_id` — stream ID
* `channel_name` — stream name
* `addr` — The IP address of the client. To get the IP address from HTTP header X-Real-IP or X-Forwarded-For, while proxying requests, you must use the auth_request.
* `uptime` — time, in seconds, since the beginning of the session

To end the session, you must use the close-session method:

```
{
    "cmd": "close-session",
    "id": N
}
```

* `id` — session number

## Other

### Restart astra

Request:

```
{
    "cmd": "restart"
}
```

### Getting the configuration

Request:

```
{
    "cmd": "load"
}
```

The answer is the contents of the configuration file.

### Loading конфигурации

Request:

```
{
    {"cmd":"upload","config":{...}}
}
```

### Get user config

```
{
    "cmd": "get-user",
    "id": "login"
}
```

### Set serial number

```
{
    "cmd": "set-license",
    "license": "xxx"
}
```

### Set image in stream tile:

```
{
   "cmd":"set-stream-image",
   "id":"a001",
   "url":"http://..."
}
```
