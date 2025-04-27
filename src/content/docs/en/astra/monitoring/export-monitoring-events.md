---
title: "Export Monitoring Events"
date: 2023-03-01
sidebar:
    order: 1
---

Astra allows you to export monitoring events with the status of incoming streams or DVB-adapters.

## Monitoring URL

The address of the monitoring server can be specified in the web interface: Settings -> General -> Monitoring:

![Monitoring Options](https://cdn.cesbo.com/help/astra/monitoring/export/export-monitoring-events/options.png)

Address has the following parameters:

- `interval=30` - this parameter defines the interval for transmitting statistics, measured in seconds. The default value for this parameter is 30.
- `total=1` - this parameter is used to obtain summary statistics from the data packet

For example with address `http://example.com/api#interval=60&total=1` astra sends HTTP POST request to the `http://example.com/api` every minute, request containing JSON with summary statistics for one minute of stream monitoring.

## Stream Properties

Stream properties Astra send only once on stream startup.

```json
[
    {
        "channel": {
            "type": "spts",
            "name": "Channel Name",
            "id": "a002",
            ...
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `channel` - whole stream configuration
- `timestamp` - event time
- `hostname` - server hostname

## Stream Status

```json
[
    {
        "count": 0,
        "timestamp": 1677687310,
        "channel_id": "a002",
        "input_id": 1,
        "current": true,
        "onair": false,
        "scrambled": false,
        "bitrate": 3013,
        "packets": 2005,
        "cc_error": 0,
        "sc_error": 0,
        "pes_error": 0,
        "pcr_error": 15
    }
]
```

This list describes the parameters that provide information about the stream workflow:

- `count` - only for summary data, provide an amount of seconds that has elapsed since the last collection of statistics
- `timestamp` - event time in Unix format
- `channel_id` - unique ID of the channel
- `input_id` - the input number. Starts with 1
- `current` - indicates that statistics for current active input
- `onair` - stream status, providing a quick way to check if it's running
- `scrambled` - indicates whether the stream is encrypted or not
- `bitrate` - input bitrate in Kbit/s
- `packets` - total number of TS packets
- `cc_error` -  total number of occured CC errors
- `pes_error` -  total number of occured PES errors

This data is transmitted in JSON format as an array of several elements, with each element representing one second of observations. The number of elements in the array is determined by the frequency of statistics transmission. If statistics aggregation is enabled, then there is only one element in the array, which contains the total number of errors and the average bitrate for the period equal to the statistics transmission frequency.

## Adapter Properties

Adapter properties Astra send only once on adapter startup.

```json
[
    {
        "dvb": {
            "name": "11034V @ 13E",
            "id": "a001",
            ....
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `dvb` — while adapter configuration
- `timestamp` — event time
- `hostname` — server hostname

## Adapter Status

```json
[
    {
        "dvb_id": "a0dj",
        "timestamp": 1677687310,
        "status": 31,
        "signal": 76,
        "signal_db": -2488,
        "snr": 60,
        "snr_db": 902,
        "unc": 0,
        "ber": 0,
        "bitrate": 1938
    }
]
```

This list describes the parameters that provide information about the adapter workflow:

- `dvb_id` - unique ID of the adapter
- `timestamp` - event time
- `status` - signal status
- `signal` - approximate signal level in percent
- `signal_db` - signal level in `dBm * 100`
- `snr` -  approximate signal to noise ratio in percent
- `snr_db` - signal to noise ratio in `dB * 100`
- `ber` -  bit errors counter
- `unc` -  block errors counter
- `bitrate` - total bitrate in Kbit/s

Signal status describe the state of the tuner, described in 5-bit number:

- `SIGNAL` — the signal bit will be set when the tuner captures the signal
- `CARRIER` — stable signal reception
- `FEC` — reception FEC (forward error correction) data
- `SYNC` — received information for synchronization
- `LOCK` — the tuner is set to receive a signal.

If the tuner configured successfully and signal is locked, the status parameter will be set to 31
