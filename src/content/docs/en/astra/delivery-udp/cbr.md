---
title: Constant Bitrate (CBR)
---

Constant Bitrate (CBR) is a method of filling bitrate gaps with null packets to achieve a constant rate, which is required for DVB modulators.

The diagram below shows a stream without CBR, where bitrate varies and has gaps:

![VBR Diagram](https://cdn.cesbo.com/help/astra/delivery/udp/vbr.png)

When CBR is enabled, the stream is filled with null packets to maintain a constant bitrate, as shown in the diagram below:

![CBR Diagram](https://cdn.cesbo.com/help/astra/delivery/udp/cbr.png)

## How to configure CBR

To configure CBR in Astra, you need to add the `cbr` parameter to your UDP output address. The `cbr` parameter is only available for UDP outputs. For example:

`udp://239.255.1.1#cbr=4000`

This will enable CBR with a target bitrate of 4000 Kbps. You can adjust the bitrate value according to your requirements.

::note
CBR doesn't reduce bitrate. If your stream's bitrate exceeds the CBR limit, all excess packets will be dropped.
::

## How to reduce bitrate

The cbr option in Astra does not reduce the stream's bitrate. It only fills bitrate gaps with null packets to achieve a constant rate. To actually reduce the bitrate, you need to transcode the stream. This can be done using a tool like [Senta](https://senta.tv) or FFmpeg.
