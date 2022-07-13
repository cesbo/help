# Channel Options

Each channel has next options:

- `name`: channel name
- `index`: [Index File](#index-file)
- `path`: [Channel Path](#path)
- `variant`: [Channel Variant](#variant)
- `media_access`: [HLS Media File](#media-file)
- `vod_access`: [HLS VOD File](#vod-file)
- `address`: source address

## Index File

Index file is a main file of the channel.
By default file name is `index`. Full file name depends of the protocol:

- HLS: `index.m3u8` - contains list of the [HLS Media File](#media-file)

## Path

Channel path is a location of the channel resources on the server.
Path could be single direcotry or several directories separated by `/`.
For example:

- single direcotry: `travel-channel`;
- multiple directories: `entertainment/travel-channel`.

Channel path used to:

- access a channel. For example: `https://example.com/travel-channel/index.m3u8`;
- store channel archive on the server. For example: `/mnt/storage/travel-channel/`.

## Variant

Same channel could be presented in different qualities. This channels should have same path but different variant names. For example:

You have two channels: "Travel Channel HD" and "Travel Channel SD".
Both channels should have same path: `travel-channel` and same index.
But channels should have different variant names: `hd` and `sd`.

So channel will be availble by the address: `https://example.com/travel-channel/index.m3u8`
In the archive all data will be stored in two directories: `/mnt/storage/travel-channel/hd/` - for HD variant; `/mnt/storage/travel-channel/sd/` for SD variant.

Default variant name is `main`.

## HLS Media File

Media file contains links to the segments - files with video and audio data. Media file created for each variant.
By the default session number used as a media file name. But you can define a custom media file name to get direct access to the segments.
