# Channel Path

Channel path is a location of the channel on the server.

## Index file

Defines files that will be used as an index.
By the default is `index`, so for HLS index file will be `index.m3u8`

## Variant

Each channel has one or more variants. Variants is needed to provide same channel with different qualities.

Default varian name is `main`.

For example you have two channels: "Travel Channel HD" and "Travel Channel SD".
Both channels should have same path: `travel-channel` and same index.
Channels should have different variant name: `hd` and `sd`.

So channel will be availble by the address: `https://example.com/travel-channel/index.m3u8`
In the archive all data will be stored in two directories: `./travel-channel/hd/*` - for HD variant; `./travel-channel/sd/*` for SD variant.
