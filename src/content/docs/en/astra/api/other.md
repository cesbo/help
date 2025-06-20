---
title: Other API Methods
---

## Astra Version

Request: `POST /control/`

```json
{
    "cmd": "version"
}
```

## Astra Restart

Request: `POST /control/`

```json
{
    "cmd": "restart"
}
```

## Download configuration

Request: `POST /control/`

```json
{
    "cmd": "load"
}
```

In the response will be whole configuration file.

## Upload configuration

Request: `POST /control/`

```json
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - whole configuration file

## Set serial number

Request: `POST /control/`

```json
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - license serial number

## Set image to the stream tile

Request: `POST /control/`

```json
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - stream identifier
- `url` - image address, as well could be used data-format, for example: `data:image/png;base64,...`

This method used in the script to set screenshots for stream tiles. Read more in [Channel Screenshots on Dashboard](/en/astra/admin-guide/mosaic)
