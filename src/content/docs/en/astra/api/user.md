---
title: Users API
---

Users used to control access to the Astra Web Interface as well as access to the HTTP MPEG-TS and HLS outputs

## User configuration

```json
{
    "enable": true,
    "type": 0,
    "comment": "...",

    "token": "...",
    "ip": "...",
    "expire": 0,
    "conlimit": 0
}
```

- `enable` – enabled account or not
- `type` – user type
    - `1` - admin. full access to the Astra Web Interface
    - `2` - observer. read only access to the Astra Web Interface
    - `3` - regular user. without access to the Astra Web Interface
- `comment` - optional field, for user description

Optional fields for buil-in authorization to access HLS or HTTP MPEG-TS channels:

- `token` - token used in HTTP requests. For example: `http://server:8000/play/a001/index.m3u8?token=secret`
- `ip` - allow access to the channels by the client IP address
- `expire` - date in unix timestamp format, when access to channels will be restricted
- `connlimit` - limit connections to channels

## Get user

Request: `POST /control/`

```json
{
    "cmd": "get-user",
    "id": "..."
}
```

- `id` - user login

In response will be JSON with user configuration

## Create or update user

Request: `POST /control/`

```json
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "enable": true,
        "type": 0,
        "password": "..."
    }
}
```

- `id` – user login
- `user` - user configuration
- `password` - plain password, in the config will be saved the password hash

<details>
<summary>Example</summary>

You may create new user by launching next command:

```sh
curl -X POST -user login -d @- http://server:8000/control/ <<END
{
  "cmd": "set-user",
  "id": "new-admin",
  "user": {
    "enable": true,
    "type": 1,
    "password": "secret"
  }
}
END
```

on success Astra returns:

```json
{ "set-user": "ok" }
```
</details>

## Remove user

Request: `POST /control/`

```json
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## Toggle user

Request: `POST /control/`

Turn user on or off:

```json
{
    "cmd": "toggle-user",
    "id": "..."
}
```

- `id` - user login

<details>
<summary>Example</summary>

You may enable or disable user by launching next command:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-user", "id":"login"}' \
    http://server:8000/control/
```

on success Astra returns:

```json
{ "toggle-user": "ok" }
```
</details>
