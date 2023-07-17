---
title: "Users API"
date: 2023-06-30
---

Users used to control access to the Astra Web Interface as well as access to the HTTP MPEG-TS and HLS outputs

## Get user

```
{
    "cmd": "get-user",
    "id": "..."
}
```

- `id` - user login

## Create or update user

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "enable": true,
        "type": 0,
        "password": "...",
        ...
    }
}
```

- `id` – user login
- `enable` – enabled account or not
- `type` – user type
    - `1` - admin. full access to the Astra Web Interface
    - `2` - observer. read only access to the Astra Web Interface
    - `3` - regular user. without access to the Astra Web Interface
- `password` - plain password, in the config will be saved the password hash

## Remove user

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## Toggle user

Turn user on or off:

```
{
    "cmd": "toggle-user",
    "id": "..."
}
```

- `id` - user login
