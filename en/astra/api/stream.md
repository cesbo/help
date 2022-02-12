# Streams API

In all methods `id` is a unique stream identifier.

## Get stream configuration (all versions)

Request:

```json
{
    "cmd": "get-stream",
    "id": "..."
}
```

Response:

```json
{
    "get-stream": "ok",
    "stream": {}
}
```

- `stream` - stream configuration

## Get stream configuration (new versions)

!!! note
    Version: 2021-04-12 or later

Request: `GET /api/stream-info/{id}`

Response:

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

- `name` - stream name;
- `type` - stream type `spts` or `mpts`;
- `enable` - `true` if stream is enabled;
- `input` - list of the stream inputs;
- other options depends of the stream configuration.

## Set stream configuration

Request:

```json
{
    "id": "...",
    "cmd": "set-stream",
    "stream": {
        "enable": true,
        "type": "spts",
        "id": "...",
        "name": "...",
        "input": [],
        "output": []
    }
}
```

- `id` - option required to modify exist stream. If option is not defined Astra generates stream identifier self;
- `enable` - required field, enabled srteam or not;
- `type` - required field, stream type. Available values: spts or mpts;
- `id` - unique stream identifier;
- `name` - stream name;
- `input` - list of the stream sources;
- `output` - list of the stream destinations.

## Toggle stream

Turn stream on/off. Request:

```json
{
    "cmd": "toggle-stream",
    "id": "..."
}
```

## Restart stream

Request:

```json
{
    "cmd": "restart-stream",
    "id": "..."
}
```

## Switch active input

Choose active input. Works only for streams with next backup types: passive, disable. Request:

```json
{
    "cmd": "set-stream-input",
    "id": "...",
    "input": "..."
}
```

- `input` – input number. Numbering starts from 1. If option not defined will be started next input after the active input

## Remove stream

Request:

```json
{
    "cmd": "set-stream",
    "id": "...",
    "stream": {
        "remove": true
    }
}
```

## Stream status

!!! note
    Version: 2021-04-12 or later

Request: `GET /api/stream-status/{id}`

Optional query parameters: `GET /api/stream-status/{id}?t={time}`

- `time` - default is `1` - statistics for last minute.
    `0` - statistics for last second (current stream status).
    For historical data InfluxDB should be configured.

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
    "sc_error": 0,
    "cc_error": 0,
    "pes_error": 0
}
```

- `timestamp` - report time, for `t=0` is a current time;
- `instance` - instance name if defined in the Settings -> General -> Instance Name;
- `name` - stream name;
- `input_id` - active input identifier;
    for example if primary works fine will be 1.
    if stream switched to the backup input will be number of this input;
- `active` - `true` if stream is active, or `false` if stream work on demand and inactive;
- `onair` - `true` if active input works without errors;
- `sessions` - number of active sessions on the stream;
- `bitrate` - stream bitrate in Kbit/s;
- `sc_error` - percent of scrambled TS-packets;
- `cc_error` - CC errors counter;
- `pes_error` - percent of invalid PES-packets packets.
