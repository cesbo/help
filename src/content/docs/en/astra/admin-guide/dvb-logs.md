---
title: "DVB Logs: Tuning and Receiving"
date: 2023-08-10
---

DVB Logs provide information about DVB tuner and DVB-CI.

## FE has lock

```
fe has lock. status:SCVYL signal:60% snr:80% ber:0 unc:0
```

Information message prints after signal returned. When adapter created or restarted manually this messages suppressed.

- **status** - tuner status coded with symbols common for `femon` tool:
    - **S** - Signal. Found something above the noise level
    - **C** - Carrier. Found a DVB signal
    - **V** - Viterbi. FEC (forward error correction) is stable
    - **Y** - Sync. Found sync data
    - **L** — Lock. Signal locked and tuner is ready
- **signal** — signal level
- **snr** — signal-to-noise ratio
- **ber** — bit errors counter
- **unc** — block errors counter

Read more about [Common errors on DVB receiving](/misc/troubleshooting/dvb/errors)

## FE has no lock

```
fe has no lock. status:_____
```

Adapter unable to tune to signal. Check connection to the antenna and antenna alignment.
Also signal could be lost due to weather conditions such as heavy rain or seasonal sun interference.

## dvr cc error

Astra analyze receiving packets with PID 0 (PAT - Program Association Table), if detected packets loss prints this error and restarts tuner

## dvr sync byte error

Astra unable to find MPEG-TS sync byte in the stream. This is very rare issue. Probably wrong frequency

## dvr receiving timeout

No data was received from the DVB adapter during the timeout period. Default is 120 second.

## dvr read error

Issue happens on some old versions of Astra due to high load. There is two solutions:

- update to the latest version
- split your configuration file to several processes. As example 2 adapters with it channels in one instance, and other 2 adapters with it channels in another

## failed to open frontend: Device or resource busy

Adapter is taken by another process. Please, check our [Troubleshooting guide](/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-device-or-resource-busy)


## failed to open frontend: No such file or directory

Issue with DVB drivers. Please, check our [Troubleshooting guide](/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-no-such-file-or-directory)
