# Access to the archive

!!! note
    Unixtime is the number of seconds since January 1st, 1970 at 00:00:00 UTC.

## Stream Mode

In the stream mode you receives data partially according to the watching time.

For access to the stream at:

- HLS: `https://example.com/channel-path/index.m3u8?start=0`

Arguements:

- `start=unixtime` - unixtime to start playing from the archive with specific time;
- `start=-seconds` - negative number to start playing from the archive relative to the current time.

## Video on Demand Mode

Video on Demand (VOD) mode provides access to the whole archive in requested time range.
To enable this mode set a name for HLS VOD File. For example, with name `vod` full URL will be:

- HLS: `https://example.com/channel-path/vod.m3u8?start=0&duration=seconds`

Arguements:

- `start=0` - same as for the stream mode;
- `duration=seconds` - program duration in seconds.
