---
title: Introduction
description: Welcome to Senta-streamer.
sidebar:
  order: 1
  label: Introduction
---
Senta-streamer is a simple solution for video streams processing, essentially managing ffmpeg processes.

## Features

- Manages ffmpeg processes (start, stop, restart).
- Collects logs for further analysis.
- Transcoding profiles allow applying the same settings to a group of streams. They also provide experienced ffmpeg users with extensive options for fine-tuning, while enabling less experienced users to configure video processing without delving into the myriad ffmpeg options.
- Transcoding profiles also support the addition of variables, making it easier for end-users to customize stream processing.

## Senta-Streamer Logic

Sent-Streamer is a server application responsible for managing ffmpeg processes. It does not include the ffmpeg application itself. Thus, it is compatible with any version of ffmpeg.

The application logic is divided into two levels:

- ffmpeg profile - describes the command line for launching an ffmpeg process, in which parameters such as input, output, and other options (e.g., codec) are specified.

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

- ffmpeg process, which uses an ffmpeg profile, setting its own variables

```
{
    input: test.ts,
    output: udp://foo-boo:1245
}
```

The ffmpeg profile is an editable entity; end-users can write their transcoding profiles or use ready-made ones from the community. They can also convert an ffmpeg command line with keys into a profile by simply replacing input and output with variables.
