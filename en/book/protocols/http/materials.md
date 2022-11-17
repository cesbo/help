# MPEG-TS

MPEG transport stream (Moving Picture Experts Group) - is a standard digital container format for transmission and storage of audio, video, and Program and System Information Protocol (PSIP) data. It is used in broadcast systems such as DVB, ATSC and IPTV.

Transport stream specifies a container format encapsulating packetized elementary streams, with error correction and synchronization pattern features for maintaining transmission integrity when the communication channel carrying the stream is degraded.

Transport streams differ from the similarly-named MPEG program stream in several important ways: program streams are designed for reasonably reliable media, while transport streams are designed for less reliable transmission, namely terrestrial or satellite broadcast. Further, a transport stream may carry multiple programs.

Detailed description available in the [ISO/IEC 13818-1][ISO] standard.

## How MPEG works?

A transport stream encapsulates a number of other substreams, often packetized elementary streams (PESs) which in turn wrap the main data stream using the MPEG codec or any number of non-MPEG codecs (such as AC3 or DTS audio, and MJPEG or JPEG 2000 video), text and pictures for subtitles, tables identifying the streams, and even broadcaster-specific information such as an electronic program guide. Many streams are often mixed together, such as several different television channels, or multiple angles of a movie.

![MPEG](/en/book/protocols/img/MPEG.png)

Each stream is chopped into (at most) 188-byte sections and interleaved together. Due to the tiny packet size, streams can be interleaved with less latency and greater error resilience compared to program streams and other common containers such as AVI, MOV/MP4, and MKV, which generally wrap each frame into one packet. This is particularly important for video conferencing, where large frames may introduce unacceptable audio delay.

Transport streams tend to be broadcast as constant bitrate (CBR) and filled with padding bytes when not enough data exists.

>PES (Packetized Elementary Stream) - is a specification in the MPEG-2 that defines carrying of elementary streams (usually the output of an audio or video encoder) in packets within MPEG program streams and MPEG transport streams. The elementary stream is packetized by encapsulating sequential data bytes from the elementary stream inside PES packet headers.

>CBR (Constant bitrate) - is a term used in telecommunications, relating to the quality of service. Compare with variable bitrate.

## Compression standards and sub-standards of the MPEG group:

- MPEG-1 - The basic video and audio compression standard used as standard for Video CDs.
- MPEG-2 - is a standard for "the generic coding of moving pictures and associated audio information". It describes a combination of lossy video compression and lossy audio data compression methods, which permit storage and transmission of movies using currently available storage media and transmission bandwidth. While MPEG-2 is not as efficient as newer standards such as H.264/AVC and H.265/HEVC, backwards compatibility with existing hardware and software means it is still widely used, for example in over-the-air digital television broadcasting and in the DVD-Video standard.
- MPEG-3 - it was developed as an audio and video coding standard for High-definition television, with data rates ranging from 20 to 40 Mbps. Work on the MPEG-3 standard has been discontinued.
- MPEG-4 - It extends MPEG-1 to support video/audio "objects", 3D content, low bitrate compression and DRM.


[ISO]: [https://](https://ocw.unican.es/pluginfile.php/171/course/section/78/iso13818-1.pdf)