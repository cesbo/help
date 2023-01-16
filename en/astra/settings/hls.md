## HLS settings

The tab is responsible for the settings of the information flow transfer protocol.

![hls](hls-sett.png)

- **Duration** - the time scope of each individual segment in the media playlist. The parameter is displayed in seconds. Default setting is 3
- **Quantity** - the number of segments in one media playlist. Default setting is 4
- **Segment Naming** - setting a name for segments in a stream. Segment name:
  - **PCR-hash** - PCR-hash (Default)
  - **Sequence** - sequential name
- **Resource path** - choosing a save path option for the media stream
  - **Absolute** - default value, the parameter allows to use the full URL of the server address. For example: `https://example.com/play/channel-id/segment-001.ts`
  - **Relative** - the parameter allows to use the relative path to save media steram. The media stream is saved as a separate file. For example: `segment-001.ts`
  - **Full** - the parameter allows to use the full path with all directories and file name. For example: `/play/channel-id/segment-001.ts`
- **Round duration value** - this function rounds the duration of media stream segments to integer values. By default, the duration of segments in m3u8 is described to hundredths of a second
- **Use Expires header** - this option adds Expires header that contains the date/time, after which the response from the server is considered obsolete
- **Pass all data PIDs** - this option allows to completely skip pass all the data in the stream (subtitles, epg). By default, only video and audio packets are passed
- **Use default headers for .m3u8** - this option allows to change http headers for `.m3u8`
- **TS Extension** - this option allows to set the extension for segment files. As a default is `ts`
- **TS mime type** - this option allows to set mime type for segments. As a default is `video/MP2T`
- **Use default headers for .ts** - this option allows to change http headers for `.ts`