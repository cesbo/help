---
title: Adapters
---

## Adapter information

Version: 2021-04-12 or later

Request: `GET /api/adapter-info/{id}`

- `id` - unique adapter identifier

Response:

```json
{
    "name": "...",
    "id": "...",
    "type": "...",
    "enable": true,
    "adapter": 0,
    "device": 0
}
```

- `name` - adapter name;
- `id` - unique adapter identifier;
- `type` - adapter type: `S`, `S2`, `T`, `T2`, `ATSC`, `ISDB-T`, `C`, `C/A`, `C/B`, `C/C`;
- `enable` - `true` if adapter is enabled;
- `adapter` - number of adapter in the system: `/dev/dvb/adapter0`
- `device` - number of the device in the adapter: `/dev/dvb/adapter0/frontend0`
- other options depends of the adapter configuration

## Adapter status

Version: 2021-04-12 or later

Request: `GET /api/adapter-status/{id}`

- `id` - unique adapter identifier

Optional query parameters: `GET /api/adapter-status/{id}?t={time}`

- `time` - default is `1` - statistics for last minute.
    `0` - statistics for last second (current adapter status).
    For historical data InfluxDB should be configured

Response:

```json
{
    "timestamp": 0,
    "instance": "...",
    "name": "...",
    "lock": true,
    "signal": 0,
    "signal_db": 0,
    "snr": 0,
    "snr_db": 0,
    "ber": 0,
    "unc": 0,
    "bitrate": 0
}
```

- `timestamp` - report time, for `t=0` is a current time;
- `instance` - instance name if defined in the Settings -> General -> Instance Name;
- `name` - stream name;
- `lock` - `true` if tuner has lock and able to receive data;
- `signal` - approximate signal level in percent;
- `signal_db` - signal level in dBm multiplied by 100;
- `snr` - approximate signal to noise ratio in percent;
- `snr_db` - signal to noise ratio in dB multiplied by 100;
- `ber` - bit errors counter;
- `unc` - block errors counter;
- `bitrate` - total bitrate in Kbit/s.
