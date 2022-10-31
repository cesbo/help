# Config

Each channel has an unique path. For example `travel-tv/1080p`:

- `travel-tv` is a Base Path;
- `1080p` is a Variant Name.

```json
{
    "ott": {
        "channels": {
            "travel-tv/1080p": {
                "enable": true,
                "name": "Travel TV HD"
            }
        }
    }
}
```

## Base Path

Channel base path is a location of the channel resources on the server. In example channel path is `travel-tv`:

- HLS[^1] access to the channel: `https://example.com/travel-tv/index.m3u8`;
- Channel archive on the server: `/mnt/storage/travel-tv/`.

## Variant Name

Channel could have one or more variants with different qualities. For example:

```json
{
    "ott": {
        "channels": {
            "travel-tv/1080p": {
                "enable": true,
                "name": "Travel TV HD"
            },
            "travel-tv/480p": {
                "enable": true,
                "name": "Travel TV SD"
            }
        }
    }
}
```

Both channels should have same base path `travel-tv` and same index. But different variant names: `1080p` and `480p`.

So channel will be availble by the HLS[^1] address: `https://example.com/travel-tv/index.m3u8`
In archive all data will be stored in two directories: `/mnt/storage/travel-tv/1080p/` - for HD variant; `/mnt/storage/travel-tv/480p/` for SD variant.

Read more about [HLS Miltibitrates](/en/book/protocols/hls/#multibitrate){target="_blank"}.

## Index File

Index file is a main file of the channel. By default file name is `index`. Full file name depends of the protocol:

- HLS[^1]: `index.m3u8` - contains list of the [HLS Media Files](#hls-media-file)

For example with next configuration channel will be available by the address `https://example.com/travel-tv/main.m3u8`:

```json
{
    "ott": {
        "channels": {
            "travel-tv/1080p": {
                "enable": true,
                "name": "Travel TV HD",
                "index": "main"
            }
        }
    }
}
```

## HLS Media Playlist

HLS[^1] Media Playlist contains links to the segments - files with video and audio data. Each variant has own media file. By the default session number used as a media file name. But you can define a custom media file name to get direct access to the segments.

For example with next configuration media playlist with segments will be available by the address `https://example.com/travel-tv/1080p.m3u8`:

```json
{
    "ott": {
        "channels": {
            "travel-tv/1080p": {
                "enable": true,
                "name": "Travel TV HD",
                "media_access": "1080p"
            }
        }
    }
}
```

[^1]: HLS - HTTP Live Streaming protocol. [Read more](/en/book/protocols/hls/){target="_blank"}
