# Input

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
- address - protocol specific address
- options - protocol specific and general options. Options must be separated by the & character

## General input options

- `pnr=PNR` - the program number/SID (Service ID) retrieves the channel with the specified number from the stream
- `set_pnr=PNR` - to change PNR. The value must be between 1 and 65535
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
- `order` [^1] - sort PID in the PMT table. Often used with the lang parameter to select a priority audio track. In this example, we will set the English audio track first (default): `map.audio.ita=1475&map.audio.eng=1472&order=1472,1475`
- `lang` [^1] - set the language property for the audio track. Example: `lang.1241=eng` where: `1241` - pid, `eng` - language code.

[^1]: Available from version 5.64