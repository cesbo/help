# Access to the archive

## Stream Mode

In the stream mode you receives data partially according to the watching time.

For access to the stream at:

- HLS: `https://example.com/channel-path/index.m3u8?start=unixtime`

Arguements:

- `?start=unixtime` - program beginning in [unixtime](unixtime.md);
- `?start=-seconds` - relative program beginneing seconds ago...

## Video on Demand Mode

Video on Demand (VOD) mode provides access to the whole archive in requested time range.
To enable this mode set a name for [HLS VOD File](../channel/options.md#hls-vod-file). For example, with name `vod` full URL will be:

- HLS: `https://example.com/channel-path/vod.m3u8?start=unixtime&duration=seconds`

Arguements:

- `start=unixtime` - program beginning in [unixtime](unixtime.md) or relative time in seconds;
- `duration=seconds` - program duration in seconds.
