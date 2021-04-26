---
title: Remap Options
weight: 3
---

Change the PID number to the required value

{{< figure src="/assets/img/docs/streams/remap.png" alt="Remap Options" >}}

- Map PIDs - Override PID numbers
- Filter PIDs - Keep only defined PIDs
- Change PNR - Change Program Number (also known as SID - Service ID). PNR could be in range 1 - 65000
- Change TSID - Change Transport Stream Identifier

## Map PIDs

Format of mapping pid is `key=value` several pairs should splitted by comma.

Available keys:

- `pmt` - PMT table
- `video` - video
- `audio` - audio, could be defined several times
- `audio.eng` - audio with specified language descriptor
- `ttx` - teletext
- `ait` - AIT table
- `pcr` - PCR
- `sub` - subtitles
- `ac3` - ac3 audio
- `aac` - aac audio

Value is a new PID. Value could be in range 100 - 8190
