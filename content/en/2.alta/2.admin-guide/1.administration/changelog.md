---
title: "Changelog"
noindex: true
---

## 241210

::alert
This version has breaking changes!

Before update please save a copy of your configuration file.
Default configuration file is located in `/etc/alta/alta.conf`
::

[Download Alta-241210](https://cdn.cesbo.com/alta/builds/alta-241210)

### Receivers

- Fix issue with RTSP receiving for most h.264 cameras
- Receivers separated from channels. In future updates, the receivers list will also be used for convenient monitoring of all sources

![Receivers](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_receiverlist.png)

- Import receivers from m3u playlist

![Import M3U](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_import_m3u.png)

### Channels

- New channel interface with statistics about storage usage. You can see how much disk space is occupied by the archive for each channel

![Channels](https://cesbo.b-cdn.net/help/alta/admin-guide/changelog/ui_ott_channellist.png)

- Export channels to m3u playlist

![Export M3U](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_export_m3u.png)

### Sessions

- New session interface with active sessions

![Sessions](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_sessions.png)

### Storage

- New interface for storage with information about storage usage

![Storage](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_storagelist.png)

### Other changes

- Group actions with channels and receivers

![Group Actions](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_group_action.png)

## 240909

[Download Alta-240909](https://cdn.cesbo.com/alta/builds/alta-240909)

### Receivers

- Fixed bug with audio synchronization
- EAC3 Audio codec support
- Providing information with stream name in the output streams
- Fixed RTSP address in channel settings

### HTTP Server

- replaced custom made HTTP Server with fastest HTTP engine for Go: [Fiber](https://gofiber.io/)
