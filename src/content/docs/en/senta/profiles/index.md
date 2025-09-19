---
title: System of profiles
description: What is a Profile?
sidebar:
    order: 1
---
## What is profile?

A Profile is an entity in senta-streamer, which represents a command to run the ffmpeg program, where parameters such as input and output streams, as well as other user-defined parameters, are replaced with variables.

Example:

```bash
ffmpeg -re -stream_loop -1 -i input.ts -vcodec mpeg4 -aspect 16:9 -f mpegts udp://bla-bla:1234
```

This example starts a UDP stream with static broadcasting of the file `input.ts` to the address `udp://bla-bla:1234`.

Suppose we want to use senta-streamer to broadcast a static file. We can simply add a line to the profiles, or we can replace the input and output streams with variables (`${i}` and `${o}` respectively), resulting in a universal transcoding profile that can be scaled to other streams. As a result, we get:

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

## Profile structure

In addition to the usual profile with standard variables such as `${i}` and `${o}` you can add some extensions for your profile.

You can set profile `NAME`. This name will be use when you, for example, load profile to github. It is optional field

Exmaple:

```bash
ffmpeg -y -hide_banner -i ${i} -map 0:0 -map 0:1 -c:v h264_nvenc -preset fast -profile:v main -filter:v yadif -forced-idr 1 -b:v 4M -c:a aac -b:a 128k -r 25 -g 8 -keyint_min 13 -f mpegts ${o}
NAME "HD h264"
```

Next, you can add custom [variables](/en/senta/profiles/variables) after keyword `WHERE`

Example

```bash
// Simple startup profile for HD h264 encoding
// You can change it, fork it and share it with others
ffmpeg -y -hide_banner -i ${i} -map 0:0 -map 0:1 -c:v h264_nvenc ${gpu} -preset fast -profile:v main -filter:v yadif -forced-idr 1 -b:v 4M -c:a aac -b:a 128k -r 25 -g 8 -keyint_min 13 -f mpegts ${o}
NAME "HD h264"
WHERE
[
 {
   "desc": "gpu",
   "data": {
    "name": "GPU",
    "description": "Select GPU which stream will use, set empty if you don't use GPU",
    "command": "-gpu $value",
    "default": ""
   }
 }
]
```

**Note:** you can add coments strings to your profile whith start whith `//`
