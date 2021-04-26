---
title: MPEG-TS
---

MPEG-TS (Transport Stream) - is a transport format for transmission video, audio, and other data over IP or broadband networks
Detailed description available in the `ISO 13818-1` standard.

## Packetized Elementary Stream

Elementary Stream (ES) is a compressed data output from the encoder.

Packetized Elementary Stream (PES) is a sequence of the headers with ES information and the ES frames.
Multiplexing is an operation of the packetizing several elementary streams into single stream.
Demultiplexing is the reverse process of multiplexing. Demultiplexing single stream into separate components and pass components to processing.

## Program-Specific Information

Program-specific information (PSI) is a packets with information about stream for receiver to demultiplex and decode streams of program.

- PAT - Program Association Table - list of programs. Contains Program Number (PNR) and Packet Identifier (PID) of the associated PMT
- PMT - Program Mapping Table - list of program streams. PID's of the associated Video, Audio, and other data
- CAT - Conditional Access Table - information about Conditional Access Systems
- NIT - Network Information Table

## Service Information

In addition to the PSI, data is needed to provide identification of services and events for the user:

- SDT - Service Description Table - information such as service name, provider name, etc
- EIT - Event Information Table - contains event information such as event name, start time, etc
- TDT - Time and Date Table
- TOT - Time Offset Table

## Transport Stream

Transport Stream is a sequence of the TS packets.
TS packets have fixed length in 188 bytes. First byte, also called the sync byte, is always 0x47.
Next 3 bytes is a header. Remain 184 bytes is a payload (PES, PSI, or SI packets).

Header contains next information:

- PID - Packet Identifier. It could be in range 0 - 8191
- CC - Continuity Counter. It could be in range 0 - 15
- PUSI - Payload Unit Start Indicator. Single bit indicates is packet contains begining of the payload
