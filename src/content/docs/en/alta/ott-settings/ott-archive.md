---
title: "OTT Archive"
date: 2023-02-24
sidebar:
    order: 1
---

Alta OTT Archive is a storage for media content on the local or remote server.

## Access Time

Media player get access to the archive by the link with the start time attribute. Start time could be defined in two formats:

- Absolute time - unix-timestamp format is a number of seconds since January 1st, 1970 at 00:00:00 UTC;
- Relative time - time in second from the current time. For example: -600 - 10 minutes, or -300 - 5 minuts ago.

## Stream Mode

In the Stream mode player receives data partially according to the watching time.

For example, to start receiving a media archive from December 1, 2022 at 02:00:00 request URL should be:

```
https://example.com/channel-path/index.m3u8?start=1669860000
```

- `start` - absolute or relative time of the archive beginning.

## Video on Demand Mode

Video on Demand (VOD) mode provides access to the whole archive in requested time range.

By the default this mode is not active due to security reasons. To enable it set a playlist name in the option VOD Access in the channel settings. For example, playlist name is vod. To get full archive starting from December 1, 2022 at 02:00:00 to December 1, 2022 at 03:00:00 request URL should be:

```
https://example.com/channel-path/vod.m3u8?start=1669860000&duration=3600
```

- `start` - absolute or relative time of the archive beginning;
- `duration` - archive duration in seconds;
