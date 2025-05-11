---
title: Add profile
description: How add profile?
sidebar:
    order: 3
---
You can read about profile [here](../profiles)

For adding profile go to **ffmpeg profiles** tab

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Next click `Add profile`

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

Then setup Name

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

Then, setup command. In this example, we are make a command that continuously streams a static file (fox example, to create a test table).

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

In this ffmpeg command, the input stream has been replaced with the variable  `${i}` , and the output stream with  `${o}`. And save it

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)Profile will be added

![img](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)
