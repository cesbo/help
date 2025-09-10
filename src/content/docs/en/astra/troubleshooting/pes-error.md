---
title: PES Error
sidebar:
    order: 2
---

PES (Packetized Elementary Stream) error indicates that the header of the packets with media data such as video or audio is corrupted. This can lead to issues in decoding and playback of the stream.

## PES Error in Logs

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: PES: PID:101=4 PID:102=6
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: PES: PID:101=5 PID:102=5
```

## Common Causes of PES Errors

- Issue with a descrambling of the protected stream, such as invalid key, expired subscription, conditional access module overheat
- DVB signal issue due to sun interference
