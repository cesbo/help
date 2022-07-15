# Changelog

## Next version

Alpha

- http server: [authorization](auth/index.md)
- http server: [ip authorization](auth/ip.md)
- http server: [backend authorization](auth/backend.md)
- http server: [secure authorization](auth/securetoken.md)
- receiver/rtsp
- receiver/file: loop
- api: channel settings
- h265: extract frames information
- archive: write files to disk without cache (Direct I/O)
- archive: send files to remote server

## v2207

Minimum Viable Product (MVP)

- mpegts: extract frames from transport stream
- mpegts: packetize frames into transport stream
- h264: extract frames information
- hls segmenter: segments starts with i-frame
- hls segmenter: get stream information from receiver (codecs, bitrate, resolution, etc.)
- archive: VOD playlist
- archive: save metadata to sqlite database
- receiver/hls: AES-128 encryption
- receiver/file: read mpegts files
- receiver/http: receive mpegts over http
- receiver/rtsp: basic/digest authentication, interleaved mode
- hls: empty m3u8/ts on error
- hls: multibitrate

## v2202

Proof of Concept (POC)

- mpegts: muxer/demuxer/analyzer
- receiver/hls: multithreaded receiver with keep-alive, http2
- receiver/udp: multithreaded receiver
- hls segmenter
- access/hls: access to hls segments in memory
- access/hls: master and media playlist generation
- archive: write files to disk with metadata in the file name
- access: http server
- access: sessions
- archive: indexing segments on startup
- archive: access to hls segments on disk
- archive: remove old segments from disk

## Birthday

First commit: 28 Nov 2021
Total Commits: 979 (14 Jul 2021)
Language: [Go](https://go.dev)
