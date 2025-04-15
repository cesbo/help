---
title: Adding logo
description: Make logo for stream
sidebar:
    order: 2
---
To make a logo for a stream, you can use the ffmpeg profile [Logo adding](https://github.com/cesbo/senta-streamer-profiles/blob/master/profiles/logo.profile). Here's an example of how you can add a logo to a stream:

First, you need to add a profile for the logo. Go to the [ffmpeg profiles](/profiles) tab and click [load profile from github](/profiles/loading-from-github). Then, when you find `Logo adding` profile and add it.

Next, you need to add this profile to the stream. Set the input and output parameters. And variables: X, Y - offset logo from the top right corner, logo - path to the logo file.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_1.png)In this example, we get stream from rtsp stream and download a ts-file to the server.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_2.png)Finally, you can see the result in VLC.

![](https://cesbo.b-cdn.net/senta/help/streamer/whith_logo.png)
