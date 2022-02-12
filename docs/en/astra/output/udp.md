# UDP

UDP is a low latency protocol for local networks. [Read more](/en/book/delivery/udp)

## Address format

```
udp://address
udp://address:port
udp://interface@address:port#options
```

- `interface` – name of the local interface. The system routing table used by the default;
- `address` – IPv4 address of the stream. Multicast or unicast;
- `port` – port number. Default: **1234**.

Options:

- `sync` – transmit UDP in separate thread with bitrate syncing;
- `cbr=Rate` – make stream with constant bitrate. Appends empty packets (NULL-TS) to the stream or cuts excessed packets. Option value should be in KBit/s.
- `socket_size=Bytes` – size of the system socket. Default: `sysctl net.core.wmem_default`
- `ttl=Hops` – time to live for UDP packets. Default: **32**

## Mulsticast

We recommend to use multicast addresses in range `239.0.0.0 - 239.255.255.255` . More information on [www.iana.org](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml).

## Web Interface

In the web interface UDP Output options available in the Stream options. You can write destination address directly to the Output address line:

![Output address](output-list-696w.png){: width="400"}

Or click to the gear icon and use an Output configuration form:

![UDP Output options](udp-696w.png){: width="400"}

## Bitrate syncing

Bitrate syncing - this feature normalizes interval between UDP packets. Bitrate syncing calculates real stream bitrate by PCR (Program Clock References) timestamps.

UDP Output turns on a bitrate syncing with next options:

- `sync` - just normalize UDP jitter
- `cbr` - normalize UDP jitter and appends NULL-TS packets to the stream for constant bitrate
- Settings -> General -> Use multithreading for UDP - just normalize UDP jitter for all UDP outputs

By the standard interval between PCR packets should be between 20-250 millisecond.

## Troubleshooting

### Not working

<details class="marker">
<summary>VLC/FFmpeg can't receive stream</summary>

VLC/FFmpeg requires `@` symbol before address. For example: `udp://@239.255.1.1:1234`

</details>

### Bitrate syncing errors

<details class="marker">
<summary>mpegts/sync failed. buffer empty</summary>

Astra sent all packets from output buffer and new packets is not arrived.

</details>

<details class="marker">
<summary>mpegts/sync failed. buffer overflow</summary>

Astra sends packets slower then receives it.

</details>

<details class="marker">
<summary>mpegts/sync failed. next PCR not found</summary>

Interval between packets with PCR timestamp is too large.

</details>
