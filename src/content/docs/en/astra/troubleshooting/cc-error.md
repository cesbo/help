---
title: CC Error
sidebar:
    order: 1
---

CC (Continuity Counter) errors indicates that MPEG-TS packets continuity is corrupted. Error can be caused by MPEG-TS packets loss or excess.

## CC Error in Logs

This message printed as debug message in Astra logs, and as error message in the Astra MPEG-TS Analyzer logs.

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

## CC Error on UDP Receiving

UDP does not guarantee data delivery, so packets can be lost, duplicated, or arrive out of order. There is two common issues: packets loss or packets excess. Check [CC Errors on receiving UDP](/en/astra/troubleshooting/udp-input/#cc-errors-on-receiving-udp).

## CC Error on DVB Receiving

DVB depends of the signal quality, check errors on DVB adapter: [BER and UNC Errors](/en/astra/troubleshooting/ber-unc-error/)
