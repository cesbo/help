---
title: Static image
description: Streaming static image
sidebar:
    order: 1
---
For adding profile go to **ffmpeg profiles** tab

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Next click **add profile**

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

Then setup Name

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

Then, setup command. In this example, we are make a command that continuously streams a static file (fox example, to create a test table). In this ffmpeg command, the input stream has been replaced with the variable  `${i}`, and the output stream with  `${o}` . And save it

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)

Profile will be added

![](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)

Next, you can add this profile to the stream. Set input and output parameters. In this example, we download a ts-file to the server and specify the path in the input field, then set udp-stream as the output.

![](https://cesbo.b-cdn.net/senta/help/streamer/set-prof.png)

You can see result in vlc!

![](https://cesbo.b-cdn.net/senta/help/streamer/matras.png)
