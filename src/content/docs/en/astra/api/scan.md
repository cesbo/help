---
title: Scan API
---

## Start Analyzer

Request: `POST /control/`

```json
{
    "cmd": "scan-init",
    "scan": "..."
}
```

- `scan` - stream address. Read more about [Media Address Format](/en/astra/streams/address-format/)

Response:

```json
{
    "scan-init": "ok",
    "id": "..."
}
```

- `id` - identifier of the created analyzer instance

Analyzer will be stopped automatically in 10 seconds. To keep analyzer active for longer, use `scan-check` API method.

## Stop Analyzer

Request: `POST /control/`

```json
{
    "cmd": "scan-kill",
    "id": "..."
}
```

- `id` - identifier of the analyzer instance

This method stops analyzer immediately.

## Get Information

Request: `POST /control/`

```json
{
    "cmd": "scan-check",
    "id": "..."
}
```

- `id` - identifier of the analyzer instance

Response:

```json
{
    "scan-check": "ok",
    "scan": [
        {
            "psi": "...",
            "table_id": N,
            "pid": N,
            "version": N,
            "crc32": N,
            ...
        }
    ]
}
```

- `scan` - array with stream information, if no any new information this field will be omitted

Stream information:

- `psi` - Program Stream Information (PSI) packet name. Could be: `pat`, `pmt`, `cat`, `nit`, `sdt`
- `table_id` - PSI identifier
- `pid` - MPEG-TS packet identifier
- `version` - PSI packet version
- `crc32` - PSI packet checksum

Additional fields depen of the PSI type.

### PAT

Program Association Table (PAT) is a list of programs. Contains Program Number (PNR) and Packet Identifier (PID) of the associated PMT. Additional fields:

```json
{
    "psi": "pat",
    "table_id": 0,
    "pid": 0,
    "tsid": N,
    "programs": [
        {
            "pnr": N,
            "pid": N
        }
    ]
}
```

- `table_id` - always `0`
- `pid` - always `0`
- `tsid` - Transport Stream identifier
- `programs` - list of programs

Program information:

- `pnr` - program number
- `pid` - MPEG-TS packet identifier for PMT

### PMT

Program Mapping Table (PMT) is a list of program elementary streams: Video, Audio, and other data. Additional fields:

```json
{
    "psi": "pmt",
    "table_id": 2,
    "pnr": N,
    "pid": N,
    "pcr": N,
    "streams": [
        {
            "pid": N,
            "type_name": "...",
            "type_id": N,
            "descriptors": [
                {
                    "type_id": N,
                    "type_name": "...",
                    ...
                }
            ]
        }
    ]
}
```

- `table_id` - always `2`
- `pid` - MPEG-TS packet identifier
- `pnr` - Program Number
- `pcr` - MPEG-TS packet identifier for packets with the Program Clock Reference (PCR) timestamps
- `streams` - list of program elementary streams

Elementary Stream information:

- `pid` - MPEG-TS packet identifier for elementary stream
- `type_name` - elementary stream type: `VIDEO`, `AUDIO`, `SUB`, `TTX`, `AIT`, `DATA`
- `type_id` - elementary stream identifier
- `descriptors` - elementary stream descriptors contains additional information
