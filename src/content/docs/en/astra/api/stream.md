---
title: Streams API
sidebar:
    order: 2
---

In the Astra interface, you can manage Stream configurations and control their status using HTTP API methods.

:::note
Configurable parameters are similar to those used in the Astra interface configuration, you can read more on the relevant articles about configuring these parameters. Read more
:::

## Stream configuration

```json
{
    "id": "...",
    "name": "...",
    "type": "...",
    "enable": true,
    "input": [
        ""
    ]
}
```

- `name` - stream name
- `type` - stream type `spts` or `mpts`
- `enable` - `true` if stream is enabled
- `input` - list of the stream inputs
- other options depends of the stream configuration.

## Get Stream configuration

Request: `GET /api/stream-info/{id}`

- `id` - unique stream identifier

In response will be JSON with stream configuration

## Modify Stream configuration

Request: `POST /control/`

```json
{
    "id": "...",
    "cmd": "set-stream",
    "stream": { ... }
}
```

- `id` - unique stream identifier
- `stream` - stream configuration

## Toggle Stream

Turn stream on/off. Request: `POST /control/`

```json
{
    "cmd": "toggle-stream",
    "id": "..."
}
```

- `id` - unique stream identifier

:::tip
You may enable or disable stream by launching next command:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-stream", "id":"a001"}' \
    http://server:8000/control/
```

on successful Astra returns:

```json
{ "toggle-stream": "ok" }
```
:::

## Restart Stream

Request: `POST /control/`

```json
{
    "cmd": "restart-stream",
    "id": "..."
}
```

- `id` - unique stream identifier

## Switch active input

Choose active input. Works only for streams with next backup types: `passive` or `disable`. Request: `POST /control/`

```json
{
    "cmd": "set-stream-input",
    "id": "...",
    "input": "..."
}
```

- `id` - unique stream identifier
- `input` – input number. Numbering starts from 1. If option not defined will be started next input after the active input

:::tip
You may switch stream input by launching next command:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"set-stream-input", "id":"a001", "input": 2}' \
    http://server:8000/control/
```

on successful Astra returns:

```json
{ "set-stream-input": "ok" }
```
:::

## Delete Stream

Request: `POST /control/`

```json
{
    "cmd": "set-stream",
    "id": "...",
    "stream": {
        "remove": true
    }
}
```

- `id` - unique stream identifier

## Get Stream Status

Request: `GET /api/stream-status/{id}`

- `id` - unique stream identifier

Optional query parameters: `GET /api/stream-status/{id}?t={time}`

- `time` - default is `1` - statistics for last minute. `0` - statistics for last second (current stream status).

Response:

```json
{
    "timestamp": 0,
    "instance": "...",
    "name": "...",
    "input_id": 1,
    "active": true,
    "onair": true,
    "sessions": 0,
    "bitrate": 0,
    "packets": 0,
    "pes_error": 0,
    "sc_error": 0,
    "cc_error": 0,
    "video_count": 1,
    "audio_count": 1
}
```

- `timestamp` - report time, for `t=0` is a current time
- `instance` - instance name if defined in the Settings -> General -> Instance Name
- `name` - stream name
- `input_id` - active input identifier. for example if primary works fine will be 1. if stream switched to the backup input will be number of this input
- `active` - `true` if stream is active, or `false` if stream work on demand and inactive
- `onair` - `true` if active input works without errors
- `sessions` - number of active sessions on the stream
- `bitrate` - stream bitrate in Kbit/s
- `pes_error` - number of invalid PES-packets packets
- `sc_error` - number of scrambled TS-packets. If stream is protected with Conditional Access System (CAS) then `sc_error` and `pes_error` will be greater than 0. If stream descrambled with invalid key then `sc_error` will be equal to 0 and `pes_error` will be greater than 0
- `cc_error` - CC errors counter. CC error can be caused by packets loss or excess
- `video_count` - number of video streams
- `audio_count` - number of audio streams
