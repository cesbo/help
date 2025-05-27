---
title: "MPEG-TS"
date: 2023-06-13
sidebar:
    order: 8
---

MPEG-TS (Transport Stream) - is a transport format for transmission video, audio, and other data over IP or broadband networks.
Detailed description available in the [ISO 13818-1](https://www.iso.org/standard/74427.html) standard.

## Packetized Elementary Stream

Elementary Stream (ES) is a compressed data output from the encoder.

Packetized Elementary Stream (PES) is a sequence of the headers with ES information and the ES frames.
Multiplexing is an operation of the packetizing several elementary streams into single stream.
Demultiplexing is the reverse process of multiplexing. Demultiplexing single stream into separate components and pass components to processing.

## Program-Specific Information

Program-specific information (PSI) is a packets with information about stream for receiver to demultiplex and decode streams of program.

- Program Association Table (PAT) - list of programs. Contains Program Number (PNR) and Packet Identifier (PID) of the associated PMT
- Program Mapping Table (PMT) - list of program streams. PID's of the associated Video, Audio, and other data
- Conditional Access Table (CAT) - information about Conditional Access Systems

## Service Information

In addition to the PSI, data is needed to provide identification of services and events for the user:

- Network Information Table (NIT)
- Service Description Table (SDT) - information such as service name, provider name, etc
- Event Information Table (EIT) - contains event information such as event name, start time, etc
- Time and Date Table (TDT)
- Time Offset Table (TOT)

## Transport Stream

Transport Stream is a sequence of the TS packets.
TS packets have fixed length in 188 bytes. First byte, also called the sync byte, is always 0x47.
Next 3 bytes is a header. Remain 184 bytes is a payload (PES, PSI, or SI packets).

TS Header contains next information:

- Packet Identifier (PID). It could be in range 0 - 8191
- Continuity Counter (CC). It could be in range 0 - 15. With a counter the MPEG-TS analyzer able to detect corruption of the packets continuity.
- Payload Unit Start Indicator - is a single bit indicates is packet contains begining of the payload

## PID - TS Packet identifier

Elementary streams (video, audio) and information tables are packed to the TS-packets. Each packet has unique identifier - PID.
The PID value must be between 0 and 8191. The range 0 to 31 and 8191 is reserved and should not be used. You can use any PID in the range from 32 to 8190.
