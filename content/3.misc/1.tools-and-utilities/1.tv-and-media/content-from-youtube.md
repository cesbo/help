---
title: "Content from Youtube"
date: 2023-02-23
---
Sometimes you need to add content from Youtube to Astra.
This note shows how to do this using the youtube-dl utility.

## Install youtube-dl and ffmpeg

youtube-dl is a small program for capturing video content from youtube

### Centos 8:

```sh
dnf install epel-release dnf-utils
yum-config-manager --set-enabled PowerTools
yum-config-manager --add-repo=https://negativo17.org/repos/epel-multimedia.repo
yum install youtube-dl ffmpeg
```

### Ubuntu 18.04:

```sh
sudo apt-get install youtube-dl ffmpeg
```

### Example

`https://www.youtube.com/watch?v=9Auq9mYxFEE"` - address of the page with the content.
`udp://lo@127.0.0.1:5613` - multicast address from which Astra will pick up the ready udp stream.

Run in the console:

```sh
youtube-dl "https://www.youtube.com/watch?v=9Auq9mYxFEE" -o - | ffmpeg -i pipe:0  -vcodec h264 -acodec copy -muxrate 4000000 -f mpegts "udp://lo@127.0.0.1:5613/?pkt_size=1316"
```

create a stream in the Astra web interface with the source `udp://lo@127.0.0.1:5613`
Done!
