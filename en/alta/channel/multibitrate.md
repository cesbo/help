# Multi-Bitrate

Multi-Bitrate (MBR) streaming provides access to the channels with different picture quality for smooth streaming in different conditions.

## Variant

Each quality of the same channel is called a variant. Channel could have one or more variants.

For example, channel "Travel TV" presented in different qualities:

- `720p` - HD
- `480p` - SD

Both channels should have same path `travel-tv` and same index. But different variant names: `hd` and `sd`.

So channel will be availble by the address: `https://example.com/travel-tv/index.m3u8`
In the archive all data will be stored in two directories: `/mnt/storage/travel-tv/hd/` - for HD variant; `/mnt/storage/travel-tv/sd/` for SD variant.

Default variant name is `main`.
