---
title: Address Format
description: Media address format and options
weight: 6
---

The media address consists of three parts:

```
type://address#options
```

- `type` - describes what type of protocol to use. The following types are available:
    - Input:
    - `dvb` - DVB adapter
    - `udp` - UDP multicast, unicast or broadcast
    - `rtp` - a protocol based on UDP
    - `http` - HTTP protocol. MPEG-TS, HLS (HTTP live streaming video)
    - `rtsp` - RTSP
    - `file` - MPEG-TS files
    - Output:
    - `http` - HTTP protocol. MPEG-TS, HLS (HTTP live streaming video)
    - `resi` - a protocol that sends data to the DVB-C modulator
    - `file` - MPEG-TS files
    - `np` - NetworkPush - the HTTP-based protocol is used to send streams to the server
- `address` - protocol specific address
- `options` - protocol specific and general options. Options must be separated by the `&` character

## Protocol formats

Click to expand:


### UDP/RTP

{{< details "Read..." >}}

```
udp://[interface@]address[:port][#options]
rtp://[interface@]address[:port][#options]
```

- `interface` - name of the local interface. The routing table is used by default.
- `address` - IPv4 address of the stream. Multicast or unicast.
- `port` - port number. Default: `1234`.

Input options:

- `thread` - receives UDP in separate thread
- `renew=INTERVAL` - renewing your multicast group subscription after a specified time (in seconds)
- `ts_size=BYTES` - size of the TS packet with FEC codes
- `socket_size=BYTES` - size of the system socket. Default: `sysctl net.core.rmem_default`

Output options:

- `ttl=TTL` - the life time of a UDP packet. Default: `32`
- `cbr=RATE` - add NULL-TS packets to the stream to get a constant bitrate. The value must be in KBit/s
- `socket_size=BYTES` - size of the system socket. Default: `sysctl net.core.wmem_default`

For example:

```
udp://239.255.1.1:1234
udp://eth0@239.255.1.1
udp://239.255.1.1:1234#cbr=8000
```

{{< /details >}}


### RTSP Input

{{< details "Read..." >}}

```
rtsp://[login:password@]address[:port][/path][#options]
```

- `login:password` - username and password for authorization rtsp
- `address` - IPv4 server address or domain name
- `port` - port number. Default: `554`
- `path` - the path to the resource. Default: `/`

Input options:

- `tcp` - interleaved mode. receive stream over TCP instead UDP
- `ua=NAME` - custom User-Agent header

{{< /details >}}


### HTTP Input

{{< details "Read..." >}}

```
http://[auth@]host[:port][/path][#options]
https://[auth@]host[:port][/path][#options]
```

- `auth` - login and password for http authentication
- `host` - remote server address
- `port` - remote port. Default: `80` for http and `443` for https
- `path` - the path to the resource. Default: `/`

Options:

- `ua=NAME` - custom User-Agent header
- `buffer_time=SECONDS` - incoming buffer size in seconds. Default: `3` for HTTP. For HLS depends of segment size
- `no_sync` - only for HTTP streams. Disables bufferization
- `debug` - log all receiving information: HTTP headers, segments download time
- `bandwidth=KBIT` - only for HLS streams. Choose variant with bandwidth close to defined value. By the default selects stream with maximal bandwidth

{{< /details >}}


### HTTP Output

{{< details "Read..." >}}

```
http://interface:port[/path][#options]
https://interface:port[/path][#options]
http://interface:port[/path]/index.m3u8[#options]
```

- `https` - available since 2020-12-11
- `interface` - local interface IPv4 address or `0` to accespt connectiona on all interfaces
- `port` - port
- `path` - resource path. HLS will be enabled if path has file with `.m3u8` extension

Options:

- `no_auth` - access to the stream without authentication

HLS Options:

- `duration=5` - segment length in seconds. Default: `5`
- `quantity=6` - number of segments. Default: `6`

_Recomends to use global HLS setings_

HTTP Options:

- `buffer_size=SIZE` - the size of the client buffer, in kilobytes. A buffer is allocated for each connection and prevents data loss during transmission delay. Default: `1024`
- `buffer_fill=SIZE` - the minimum size of data in kilobytes that must be collected before sending to the client. Default: `buffer_size / 20`

{{< /details >}}


### SRT Caller Input

{{< details "Read..." >}}

In the caller mode Astra sends request to the listener side. Listener accept request and sends stream to the Astra Input.

```
srt://host:port[#options]
```

- `host` - remote server address
- `port` - remote port

Options:

- `streamid=ID` - stream identifier
- `passphrase=PASS` - password for the encrypted transmission. Password length should be in range 10 .. 79 characters
- `pbkeylen=N` - crypto key length in bytes. Possible values: 16, 24, 32
- `tsbpdmode` - timestamp-based packet delivery mode

{{< /details >}}


### SRT Listener Input

{{< details "Read..." >}}

In the listener mode Astra await a request from the caller side. Caller sends request to the Astra Input and sends stream when connection established.

```
srt://[interface]@:port[#options]
```

- `interface` - name of the local interface. If interface is not defined Astra accept requests from any interface
- `port` - remote port

Options:

- `tsbpdmode` - timestamp-based packet delivery mode

{{< /details >}}


### SRT Caller Output

{{< details "Read..." >}}

In the caller mode Astra sends request to the listener side. Astra sends request to the Listener and sends stream when connection established.

```
srt://host:port[#options]
```

- `host` - remote server address
- `port` - remote port

Options:

- `streamid=ID` - stream identifier
- `passphrase=PASS` - password for the encrypted transmission. Password length should be in range 10 .. 79 characters
- `pbkeylen=N` - crypto key length in bytes. Possible values: 16, 24, 32
- `tsbpdmode` - timestamp-based packet delivery mode

{{< /details >}}


### DigitalDevices RESI DVB-C Modulator

{{< details "Read..." >}}

```
resi://#adapter=0&device=0&frequency=346&modulation=QAM256
```

Options:

- `adapter` - RESI adapter number in the system: /dev/dvb/adapter0
- `device` - modulator number in RESI adapter: /dev/dvb/adapter0/mod0
- `frequency` - transponder frequency
- `symbolrate` - transponder speed. Default: `6900`
- `modulation` - DVB-C modulation, possible meanings: QAM16, QAM32, QAM64, QAM128, QAM256. Default: `QAM64`
- `attenuator` - Signal attenuation. The value must be between 0 and 10. Default: `0`

{{< /details >}}


### TBS6004 DVB-C Modulator [^1]

{{< details "Read..." >}}

TBS6004 is a DVB-C modulator manufactured by TBS. Available since 2020-12-28

```
tbs://#adapter=0&device=0&frequency=346&modulation=QAM256
```

Options:

- `adapter` - RESI adapter number in the system: /dev/tbsmod0
- `device` - modulator number in RESI adapter: /dev/tbsmod0/mod0
- `frequency` - transponder frequency
- `symbolrate` - transponder speed. Default: `6900`
- `modulation` - DVB-C modulation, possible meanings: QAM16, QAM32, QAM64, QAM128, QAM256. Default: `QAM64`

{{< /details >}}


### MPEG-TS File Input

{{< details "Read..." >}}

```
file://path[#options]
```

- `path` - the path to the file

Path could be absolute - starting with `/` for example `file:///mnt/raid0/file.ts`
or relative `file://file.ts`

Options:

- `loop` - looping file playback
- `lock` - full path to lock file to save reading position

{{< /details >}}


### MPEG-TS File Output

{{< details "Read..." >}}

```
file://path[#options]
```

- `path` - the path to the file

Path could be absolute - starting with `/` for example `file:///mnt/raid0/file.ts`
or relative `file://file.ts`, or path to directory `file:///mnt/storage/stream/`

Options:

- `duration` - single file length in minutes. Only for writing to directory
- `depth` - arhive time in hours. Files older than `depth` will be removed from directory

{{< /details >}}


### Network Push

{{< details "Read..." >}}

Network Push — The HTTP-based transmission protocol.
Used for transmitting stream from the client to the server.

```
np://[login:password@]address[:port][/path]
```

- `login:password` - login and password for HTTP authorization. Supports: Basic, Digest. For Input only!
- `address` - IPv4 address or host domain name
- `port` - port number. Default: `80`
- `path` - the path to the resource. Default: `/`

{{< /details >}}


## General input options

- `pnr=PNR` - the program number/SID (Service ID) retrieves the channel with the specified number from the stream
- `set_pnr=PNR` - to change  PNR. The value must be between 1 and 65535
- `set_tsid=TSID` - to change TSID (Transport Stream ID)
- `biss=1122330044556600` - use BISS key for decrypting stream
- `cam` - use DVB-CI for decrypting stream
- `cam=CAM-ID` - use Softcam for decrypting stream
- `ecm_pid=PID` - to install ECM PID (not recommended)
- `cas` - skip service data about conditional access systems. Used to transmit an encrypted stream
- `filter=N,...` - stream filtration, used to remove the specified PID. Identifiers are separated by commas
- `filter~=N,...` - stream filtering, used to remove all data except specified PID and service tables. Identifiers are separated by commas
- `map.SRC=DST` - change PID to the specified values. SRC - the original identifier or data type. Possible types: pmt, video, audio, ait, language code. DST - required identifier. The value can be between 16 and 8190
- `no_sdt` - to delete channel information: channel name, operator name (SDT Service Description Table)
- `pass_sdt` - SDT transfer without processing. By default, if pnr is set, Astra transmits information only on the selected stream
- `no_eit` - delete EPG event information (EIT - Event Information Table)
- `pass_eit` - EIT transmission without processing. By default, if pnr is set, Astra transmits information only on the selected stream
- `no_analyze` - disables checking for changes in the stream
- `cc_limit=N` - set CC error limit. If the number of CC errors exceeds the set limit, Astra will switch to the backup source (if available). Default: no limit is set
- `bitrate_limit=RATE` - set the minimum bitrate for the analyzer in Kbit/s. The source will be considered non-working if the stream bitrate is less than the specified value. Default: `16 Kbit/s` for stream without video data and `128 Kbit/s` for stream with video data
- `pass_data` - pass the elementary streams containing the data (data-pid). By default, Astra deletes this data
- `order` [^2] - sort PID in the PMT table. Often used with the `lang` parameter to select a priority audio track. In this example, we will set the English audio track first (default): `map.audio.ita=1475&map.audio.eng=1472&order=1472,1475`
- `lang` [^2] - set the language property for the audio track. Example: `lang.1241=eng` where: `1241` - pid, `eng` - language code.

[^1]: Version 2021-05-01 and newer
[^2]: Version 5.64 and newer
