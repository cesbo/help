---
title: "Mosaic: Channel Screenshots on Dashboard"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
---

Mosaic is a simple script to create channel screenshots with ffmpeg and set them on Astra Dashboard using Astra API.

Channel Screenshots helps to visually evaluate quality of the channels.

![Dashboard with Screenshots](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Requirements

- Astra with enabled [HTTP Play](/astra/delivery/http-hls/http-play)
- FFmpeg

## Install Script

[Download](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) script and save it on your server:

```
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

## Configure Script

Open script with any text editor and change next variables:

- `THREADS` - number of threads to make several screenshots at the same time
- `PLAYLIST_URL` - full URL to playlist. If you use HTTP Authorization, then set Token in any user settings, and use this token in the playlist URL
- `SCREENSHOT_PATH` - full path to save screenshots on your server. Default path is `/var/lib/astra/mosaic/`
- `API_PORT` - port to API
- `API_AUTH` - admin login and password to access API

## Start script with Systemd

To start script automatically you may append it to the systemd.

1. Download configuration file: https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
2. Save file on your server to `/etc/systemd/system/mosaic.service`
3. Start script: `systemctl start mosaic`
4. Enable autorun: `systemctl enable mosaic`

```
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

After the start check that new png files are creating in the screenshots directory:

```
ls /var/lib/astra/mosaic/
```

## Configure Astra

Open Settings -> HTTP Play

![HTTP Play Settings](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Set path to screenshots, same as in the `SCREENSHOT_PATH` option.

After saving changes and restart, Astra shows screenshot on dashboard.
