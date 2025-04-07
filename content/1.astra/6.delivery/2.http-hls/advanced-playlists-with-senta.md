---
title:"Advanced Playlists with Senta"

date:2023-12-19
---
[Senta](https://senta.tv/ "Senta") is a simple [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) solution for creating and managing user playlists.

## Senta features:

1. Editing the channel list (adding icons, alternative channel sources, changing channel captions, setting [EPG](https://en.wikipedia.org/wiki/Electronic_program_guide) parameters).
2. Grouping channels.
3. Creating packages of TV channels.
4. Assigning TV channel packages to users.
5. Providing conditional user access to a TV channel using a token ([Middleware for Astra Cesbo](https://help.cesbo.com/astra/delivery/http-hls-auth/middleware)).

## Playlist creation steps:

1. Download a channel playlist from Astra Cesbo.
2. Upload the playlist to Senta.
3. Create channel groups by adding channels from Astra. A channel can belong to multiple groups.
4. Create TV channel packages by adding channel groups. Similarly, a group can be part of multiple packages.
5. Create service users and assign them TV channel packages.

## Configuring Senta.tv as Middleware:

Similar to [HTTP middleware](https://help.cesbo.com/astra/delivery/http-hls-auth/middleware#http-reques), specify the following address: `https://senta.tv/check`

If you have any additional questions, you can refer to [senta documentation](https://senta.tv/help)
