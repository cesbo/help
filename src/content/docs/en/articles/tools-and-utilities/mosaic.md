---
title: "Mosaic: Channel Screenshots on Dashboard"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
---

Mosaic is a simple script to create channel screenshots with ffmpeg and set them on Astra Dashboard using Astra API.

Channel Screenshots helps to visually evaluate quality of the channels.

![Dashboard with Screenshots](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Requirements

- Astra with enabled [HTTP Play](/en/astra/delivery-http/http-play/)
- FFmpeg

## Install FFmpeg

Install FFmpeg with system packet manager:

```sh
apt install ffmpeg
```

## Configure HTTP Play

On you server create new directory to store screenshot images:

```sh
mkdir -p /var/lib/astra/mosaic
```

Then open Astra Web interface -> Settings -> HTTP Play:

![HTTP Play Settings](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Turn on HTTP Play if disabled and set path to the screenshots directory. Done, HTTP Play now configured and you may save changes.

Also in the HTTP Play settings you may copy link to the `playlist.m3u8`, this file contains links to all enabled channel. Link to playlist lookls like: `https://example.com:8000/playlist.m3u8`

If you use HTTP Authorization, set Token for administrator. Open Astra Web Interface -> Settings -> Users -> select administrator, and set any Token, for example: `c6017ac9`. Append this token to the playlist URL: `https://example.com:8000/playlist.m3u8?token=c6017ac9`

## Download and Configure Script

[Download](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) script and save it on your server:

```sh
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

Open script with any text editor and modify following variables:

- `THREADS` - number of threads to concurrently capture multiple screenshots. Fewer threads will take more time to update all images, while more threads will increase CPU usage. You may set as many threads as you have CPU cores
- `PLAYLIST_URL` - URL to `playlist.m3u8` file from previous step
- `SCREENSHOT_PATH` - path to store screenshots on your server: `/var/lib/astra/mosaic/`
- `API_PORT` - port to Astra API
- `API_AUTH` - admin login and password to access Astra API

## Start script with Systemd

To start script automatically you may append it to the systemd. Download configuration file for systemd and save it on your server:

```sh
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

Next commands could be used to manage script:

- Start script: `systemctl start mosaic`
- Stop script: `systemctl stop mosaic`
- Enable autorun: `systemctl enable mosaic`
- Disable autorun: `systemctl disable mosaic`

After the start check that new png files are creating in the screenshots directory:

```sh
ls /var/lib/astra/mosaic
```
