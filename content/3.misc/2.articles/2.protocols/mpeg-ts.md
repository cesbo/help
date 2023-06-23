---
title: MPEG-TS
date: 2023-06-13
---
### PID - TS Packet identifier

Elementary streams (video, audio) and information tables are packed to the TS-packets. Each packet has unique identifier - PID.
The PID value must be between 0 and 8191. The range 0 to 31 and 8191 is reserved and should not be used. You can use any PID in the range from 32 to 8190.

#### How to find PID values in the stream?

* With VLC player:
  Play the stream, then open Tools - Media Information - Codec. The "Original ID" field contains PID value.
* With Astra analyzer:
  Launch in console:
  ```sh
  astra --analyze "stream address"
  ```

### CBR/VBR - Bitrate

Stream bitrate has two types:

* **VBR** - variable bitrate, depends of the stream compression ratio
* **CBR** - constant bitrate, this is VBR stream stuffed with NULL-TS packets
  NULL-TS packets have constant PID - 8191 and don't have payload, only zeros.

To generate CBR streams in Astra append the cbr option into the output address. Value should be in Kbit/s. For example:

```
udp://239.255.1.1:1234#cbr=8000
```

Note: the **"no_sync"** option disables CBR
For versions below 5.63 - the CBR option must be used in conjunction with the "sync" option"

If the bitrate of the stream is higher than the value "cbr", data that is not included in the bandwidth will be discarded. This option works only for UDP output. There is no reason to use CBR for any other formats.
