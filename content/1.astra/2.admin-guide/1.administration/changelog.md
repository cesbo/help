---
title: "Changelog"
noindex: true
---

## 230719

[Download Astra-230719](https://cdn.cesbo.com/astra/builds/astra-230719)

In this changelog is a short comparasion with latest stable release 220504

### SRT

- SRT library updated to v1.5.2
- Option `statsout=FILE` to write SRT receiving/transmitting stats to the CSV file. This file can be processed using https://github.com/mbakholdina/srt-stats-plotting.
- Supports the standard address format, such as `srt://example.com?passphrase=12345`.
If your address contains the # symbol in the streamid option, it should be changed to `%23`. For example: `srt://example.com?streamid=%23!::r=LaminorTV,m=request`
- Better receiving stability
- option `oheadbw` - recovery bandwidth overhead above input rate. Default: `25`
- options `sndbuf` and `rcvbuf` to tune transmitting and receiving buffer size

### DVB Virtual adapters

Virtual adapters is an option in the Adapter settings for easy setup streams:
- MPTS streams: you may define address of the MPTS stream and scan it to append all channels separately. [Read more](/astra/receiving/ip/mpts-via-udp)
- CI adapter: you may configure channels descrambling with external CI adapters like DigitalDevices Octopus Twin CI or TBS6900. [Read more](/astra/receiving/dvb/external-ci)
- SAT>IP adapter: this is replacement for the SAT>IP checkbox in previous versions. [Read more](/astra/receiving/dvb/satip-client)
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
- `app_mem_kb` in the [Process status API](/astra/admin-guide/api/process). Process memory usage in kilobytes
- `video_count` and `audio_count` in the [Stream status API](/astra/admin-guide/api/stream#get-stream-status)

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
