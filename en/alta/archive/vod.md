# Video on Demand Mode

For Video on Demand (VOD) sessions, media files are available representing the entire duration of the presentation. This kind of session allows the client full access to the entire program.

To enable this mode need to set a name for vod file. For example, with name `vod` full URL will be:

- HLS: `https://example.com/channel-path/vod.m3u8?start=unixtime&duration=seconds`

Arguements:

- `start=unixtime` - program beginning in [unixtime](unixtime.md). Also could be defined relative time as negative value in seconds;
- `duration=seconds` - program duration in seconds.
