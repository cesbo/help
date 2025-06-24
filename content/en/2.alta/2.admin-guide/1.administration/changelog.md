---
title: "Changelog"
noindex: true
---

## 250314

[Download Alta-250214](https://cdn.cesbo.com/alta/builds/alta-250314)

### Interface

- Filter bar for channels, receivers, and dashboard
- Config export

### Channels

- Fixed issue with receiving interruptions due to PTS/DTS handling
- Enhanced logging for PTS/DTS errors and demuxer monitoring
- Added DirectIO for file writing operations

### Important configuration refactoring

- Removed options `Media Access` and `VOD Access` from the channel settings
- Options `Media Enable` and `VOD Enable` are now available in the Channels -> HLS Access settings. Use this options only if you want to get access to the content without sessions and authentication (eg. you use Alta as a backend)
- Access to the VOD playlist through the `index.m3u8` without additional options: `http://your-server/channel-path/index.m3u8?start=unix-timestamp&duration=minutes`

## 250205

[Download Alta-250205](https://cdn.cesbo.com/alta/builds/alta-250205)

### Dashboard

- Channels and Receivers overview
- By clicking on the channel card you can see: bitrate for each variant, storage usage, and active sessions

![Dashboard](https://cdn.cesbo.com/help/alta/admin-guide/changelog/250205_ui_dashboard.png)

### Receivers

- Receiver restart on error with receiving media

### Channels

- HLS multibitrate, you can add multiple variants for each channel
- The "Media Enable" option is now a simple checkbox to turn on direct access to the media playlist. Default URL to the media playlist will be: `http://your-server/channel-path/variant-name/media.m3u8`
- The "VOD Enable" option is now a simple checkbox to turn on direct access to the VOD playlist. Default URL to the VOD playlist will be: `http://your-server/channel-path/variant-name/vod.m3u8?start=unix-timestamp&duration=minutes`

![Channel Variants](https://cdn.cesbo.com/help/alta/admin-guide/changelog/250205_ui_variants.png)

### Catchup

- Catchup provides a media player (such as Kodi, Televizo) with information on how to access media content from storage.
- If storage is configured for channel, then the catchup options will be added to the exported playlist.
- You can configure the `tvg_id` option in the channel settings to link the channel with related xmltv data.

### RTSP

- RTSP now supports the ip cameras with the h.265 codec

### Other

- Better performance and memory management.

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
