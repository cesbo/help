---
title: API
weight: 8
---

API (Application Programming Interface) is a methods to access data and interact with
external software components.

## Call method with curl

You may use `curl` in the console to call an API method.

`GET` method:

```sh
curl \
    --user admin:admin \
    http://server:8000/api/status
```

`POST` method:

```sh
curl \
    -X POST
    --user admin:admin \
    -d '{"cmd":"toggle-user","id":"login"}'
    http://server:8000/control/
```
