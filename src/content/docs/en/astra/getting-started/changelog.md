---
title: Changelog
description: Release notes and feature updates for recent Astra versions
noindex: true
sidebar:
    order: 100
---

## 250221

[Download Astra-250221](https://cdn.cesbo.com/astra/builds/astra-250221)

### SRT

- SRT library downgraded to v1.4.3 due to packet loss and CC errors
- SRT input automatically restarts connections when the bitrate dropped to zero

### DVB

- Option `restart_adapter` to restart DVB adapter with channel analyzer. When channel receives stream with errors it send command to restart adapter.
- Fixed crash on starting DVB from Lua scripts
- SAT>IP sends options to the SAT>IP server for Multistream/PLS

### UDP

- Fixed logs storm with message "UDP recv buffer overflow"
- Added option `join` for UDP output to send Multicast Join request (required by some network switches)
- Added option `ts_size=204` for MPEG-TS with 204 byte packets (ISDB-T streams in Brazil and Japan)

### MPEG-TS

- Fixed remap for AIT packets

### Web Interface

- Links to m3u-playlists with different sources (HLS, HTTP MPEG-TS, UDP): Settings -> HTTP Play

## 241024

[Download Astra-241024](https://cdn.cesbo.com/astra/builds/astra-241024)

### SRT

- SRT library updated to v1.5.3
- Sessions for SRT output in listener mode
- SRT output refactoring, better stability, fixed memory leak
- options `streamid` for SRT input

### TBS DVB-T modulator

- Support TBS6104 DVB-T Quad Modulator Card

### HLS

- HLS Output pass SCTE-35 markers
- HLS Input corrects Continuity Counter if starts from 0 on each segment

### MPEG-TS

- support text encoded with UTF-16, ISO/IEC 10646 BMP in the EIT and SDT tables
- stops PSI generation if no data on input

### Web Interface

- icons for DVB Virtual adapters
- fix status and bitrate for SAT>IP adapter in the web interface
- fix web reload on reconnect
- fix servers deletion in the web interface
- logout button
- tabs for Settings -> General

### Internal changes

- keep moving code from Lua scripts to the Astra Core: API methods for stream-status, stream-report, playlists, JSON processing and others

## 230719

[Download Astra-230719](https://cdn.cesbo.com/astra/builds/astra-230719)

In this changelog is a short comparasion with latest stable release 220504

### SRT

- SRT library updated to v1.5.1
- Option `statsout=FILE` to write SRT receiving/transmitting stats to the CSV file. This file can be processed using https://github.com/mbakholdina/srt-stats-plotting.
- Supports the standard address format, such as `srt://example.com?passphrase=12345`.
If your address contains the # symbol in the streamid option, it should be changed to `%23`. For example: `srt://example.com?streamid=%23!::r=LaminorTV,m=request`
- Better receiving stability
- option `oheadbw` - recovery bandwidth overhead above input rate. Default: `25`
- options `sndbuf` and `rcvbuf` to tune transmitting and receiving buffer size

### DVB Virtual adapters

Virtual adapters is an option in the Adapter settings for easy setup streams:
- MPTS streams: you may define address of the MPTS stream and scan it to append all channels separately. [Read more](/en/astra/receiving-udp/mpts-via-udp/)
- CI adapter: you may configure channels descrambling with external CI adapters like DigitalDevices Octopus Twin CI or TBS6900. [Read more](/en/astra/adapters/external-ci/)
- SAT>IP adapter: this is replacement for the SAT>IP checkbox in previous versions. [Read more](/en/astra/receiving/satip-client/)
- SAT>IP: increase receiving buffer size
- SAT>IP: more log for HTTP connection errors

### DVB Tuners & DVB Input

- For multistandard adapters available option for manual frontend selection - `fe_device`. This can be found in the web interface: Adapter options -> Advanced -> FE Device
- Scan DVB adapters before Astra start

### DigitalDevices RESI modulator

- Fix options `gain` and `attenuator` for latest drivers
- Default buffer size increased to 64Mb
- Reset RESI before starting

### HTTP/HLS

Input:

- HLS input supports M3U8 with URLs without scheme. For example: `//example.com/media/001.ts`
- Bitrate syncing by DTS/PTS timestamps instead of PCR. (many HLS streams has corrupted PCR values)

Output:

- Rewrited authorization algorithms for better performance (moved from Lua scripts to the C-core)
- HTTP Backend authorization supports redirects
- Check IP list in HTTP authorization before other methods
- HLS Output sends empty TS file if file is not found (was 404 error, but some ffplay based players sends many requests trying to reload it)
- Option Settings -> HLS -> Session Timeout to customize time when session should be closed on inactive

### UDP

- Ignore invalid TS files on Input (previous versions restarted receiving)
- Option `src=IP` to specify UDP multicast source address for IGMPv3. Example: `udp://eth1@239.255.1.1:1234#src=192.168.88.100`

### MPTS

- Change EIT type with enabled `remux_eit` option. If EIT tsid is not equal to the `tsid` option defined in the MPTS settings, then EIT type will be changed from `actual` to `other`

### Processing

- option `set_pcr_pid` to change PCR pid if it separated from video
- T2MI fix issue with CC errors on some streams

### Monitoring

- Option `interval=SEC` for InfluxDB address to define sending intervals. Default is 60 second. For example: `https://example.com:8086#interval=5`
- `app_mem_kb` in the [Process status API](/en/astra/api/process/). Process memory usage in kilobytes
- `video_count` and `audio_count` in the [Stream status API](/en/astra/api/stream/)

### Master-Slave

- Option `delay` for slave-mode to start process with delay. Default 3 seconds. Example: `astra -c slave.conf -p 8000 --slave "http://master:8000#delay=10"`

### Web Interface

- Icon
- Web Interface from `als.cesbo.com` integrated into Astra binary file (`als.cesbo.com` not used anymore)
- Option to set a custom path to the web interface. This can be found in Settings -> General -> Custom Path. For example, with the path `secret`, the interface will be available at `http://example.com:8000/secret/`
- Option to modify port for the web interface. This can be found in Settings -> General -> Custom Port. This option customizes the port value defined in the `-p` option. Also supported local interface address, such as `127.0.0.1:8000` - the web will be available only on localhost
- Option Settings -> HTTP Play -> Path to TV Screenshots - attach channel screenshots to the cards on dashboard
- Description for channel
- Modal dialogs to configure stream and adapter settings

### Internal changes

- Moved a lot of code from Lua scripts to the Astra Core for better performance
- Astra checks port for API and Web interface to prevent launching same process twice
- Update OpenSSL to v1.1.1t
- Integrate LibUV v1.44.2 (preparing for switching from internal event processing to libuv)

## Archive Versions

- [241024](https://cdn.cesbo.com/astra/builds/astra-241024)
- [230719](https://cdn.cesbo.com/astra/builds/astra-230719)
- [230307](https://cdn.cesbo.com/astra/builds/astra-230307)
- [220504](https://cdn.cesbo.com/astra/builds/astra-220504)
