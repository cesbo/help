# Stream Mode

In the stream mode you receives program as a stream...

By the default the file name to access a stream is `index`. Full URL will be:

- HLS: `https://example.com/channel-path/index.m3u8?start=unixtime`

Arguements:

- `?start=unixtime` - program beginning in [unixtime](unixtime.md);
- `?start=-seconds` - relative program beginneing seconds ago...
