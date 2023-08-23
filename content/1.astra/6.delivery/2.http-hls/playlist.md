---
title: "Playlist for HTTP Play"
date: 2023-08-22
---

Astra generate simple playlist with links to all enabled channels. This playlist available only for [HTTP Play](/astra/delivery/http-hls/http-play) feature.

![HTTP Play settings](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/http-play.png)

## Playlist format

Astra provide access to playlist in next formats:

- **M3U8** - is a most popular format supported by all media players
- **XSPF** - is an XML-based playlist format, supported by some players

In this guide we will use M3U8 format.

## Links to the playlist

Default link to the M3U8 playlist is:

```
http://example.com:8000/playlist.m3u8
```

Where:

- `example.com` - your server IP address
- `8000` - is a port to HTTP Play, by default it equal to the Astra Web Interface port, but could be customized in the HTTP Play settings
- `playlist.m3u8` - playlist file name, also could be customized in the HTTP Play settings

## Channel Groups

For better navigation channels in playlist could be grouped. To do that create new category in the Settings -> Groups. Read more how to create [Channel Groups](/astra/admin-guide/settings/channel-groups).

Then select created category in the HTTP Play settings, option "Playlist Arrange".

::note
Some players, like VLC, doesn't support M3U8 groups and shows flat playlist
::

## Channel Logos

Some players and middleware solutions display channel logos alongside their names in the channels list.

![Channel Logos on Middleware](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/mw.jpg)

To begin, download archive with logo images from: https://epg.it999.ru/it999_transparent_logo.zip
You may download and extract archive on your server using the following commands:

```
mkdir -p /var/lib/astra
cd /var/lib/astra
curl -LO https://epg.it999.ru/it999_transparent_logo.zip
unzip it999_transparent_logo.zip
rm it999_transparent_logo.zip
```

In the Settings -> HTTP Play -> Path to TV logos, set the path as `/var/lib/astra/it999_transparent_220x132`. Please, note the directory name is for example above.

The provided archive includes logos in PNG format, with filenames matching the channel names. With these steps completed, the playlist will now include the `tvg-logo` option for each channel.

## Electronic Program Guide

Some players and middleware solutions display current and upcoming events for channels. The Electronic Program Guide (EPG) can be exported to the player in XMLTV or any other format supported by the player.

In the Astra Settings -> HTTP Play -> M3U Header, set option `url-tvg="https://teleguide.info/download/new3/xmltv.xml.gz"`. This line will be added to the playlist header and provide information about EPG location.
This URL is just an example, you can use any other EPG source or explore our solution, [EPG Aggregator](/astra/admin-guide/stream/epg).

The final step is a configuring channel ID to link your channels with EPG records. Each channel in the XMLTV has unique identifier, like so:

```xml
<channel id="226">
    <display-name lang="en">Discovery Channel</display-name>
</channel>
```

In Astra, navigate to the Channel settings, open EPG tab, and set the "XMLTV Channel ID" value to **226**:

![Stream EPG options](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/stream-epg.png)
