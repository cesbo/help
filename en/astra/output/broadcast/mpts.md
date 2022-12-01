# MPTS

Multi Program Transport Stream (MPTS) - is a transport stream contains several services (programs). Used across broadcast networks (satellite, cable, terrestrial) to transmit several channels with single transponder.

## Network and Network search

Broadcast network is a group of MPTS delivered by the same service provider. Each MPTS in the network shoud be identified by the unique Transport Stream ID (TSID).

## MPTS Structure

### Stream information

Version: 2021-04-12 or later

Request: ```GET /api/stream-info/{id}```

- `id` - unique stream identifier

Response:

```go
{
    "name": "...",
    "id": "...",
    "type": "...",
    "enable": true,
    "input": [
        ""
    ]
}
```

- ```name``` - stream name
- ```id``` - unique stream identifier
- ```type``` - stream type ```spts``` or ```mpts```
- ```enable``` - true if stream is enabled
- ```input``` - list of the stream inputs
- other options depends of the stream configuration

### Stream status

Version: 2021-04-12 or later

Request: ```GET /api/stream-status/{id}```

- ```id``` - unique stream identifier
  
Optional query parameters: ```GET /api/stream-status/{id}?t={time}```

- ```time``` - default is ```1```
- ```1``` - statistics for last minute
- ```0``` - statistics for last second (current stream status)
- For historical data InfluxDB should be configured
  
Response:

```go
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

- ```timestamp``` - report time, for ```t=0``` is a current time
- ```instance``` - instance name if defined in the Settings -> General -> Instance Name
- ```name``` - stream name
- ```input_id``` - active input identifier; for example if primary works fine will be 1. if stream switched to the backup input will be number of this input
- ```active``` - ```true``` if stream is active, or ```false``` if stream work on demand and inactive
- ```onair``` - ```true``` if active input works without errors
- ```sessions``` - number of active sessions on the stream
- ```bitrate``` - stream bitrate in Kbit/s
- ```packets``` - TS-packets counter
- ```sc_error``` - scrambled TS-packets counter
- ```cc_error``` - CC errors counter
- ```pes_error``` - invalid PES-packets counter