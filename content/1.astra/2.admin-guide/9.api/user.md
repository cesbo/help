---
title: "How to call API methods in Astra?"
date: 2023-03-23
---

## set-user

This method create, remove, or modify users. Request:

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

* `id` – unique user identifier (login)
* `enable` – required field. enabled account or not
* `type` – required field. user type: 1 - admin, 2 - read only, 3 - regular user (without access to the Astra administration interface)
* `password`

To remove user send similar request:

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## toggle-user

Turn off/on user. Request:

```
{
    "cmd": "toggle-user",
    "id": "..."
}
```
