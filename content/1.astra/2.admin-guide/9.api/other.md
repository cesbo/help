---
title: "Other API Methods"
date: 2023-06-30
---

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
