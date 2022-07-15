# Path

Channel path is a location of the channel resources on the server. For example channel path is `travel-tv`:

- HLS access to the channel: `https://example.com/travel-tv/index.m3u8`;
- store channel in archive on the server: `/mnt/storage/travel-tv/`.

Path could be several directories separated by slash: `entertainment/travel-tv`

## Index File

Index file is a main file of the channel.
By default file name is `index`. Full file name depends of the protocol:

- HLS: `index.m3u8` - contains list of the [HLS Media Files](#hls-media-file)

## HLS Media File

Media file contains links to the segments - files with video and audio data. Each variant has own media file. By the default session number used as a media file name. But you can define a custom media file name to get direct access to the segments.
