---
title: "MPEG-TS Demultiplexing"
date: 2023-08-28
sidebar:
    order: 1
---

MPEG-TS Demultiplexing is the process of extracting individual audio, video, and data streams from a combined MPEG-TS broadcast, also known as multiplext or MPTS.

## Extracting single channel from multiplex

In digital TV broadcasting, the stream received from sources such as satellite, terrestrial, or cable networks contains multiple channels. To extract a single channel from this multiplex, Astra provides a specific option: `pnr`.

For example, to receive a stream from a DVB Adapter with the identifier `a001` and extract channel number `1`, you would use the following input address:

```
dvb://a001#pnr=1
```

Astra forms this address automatically if you scan DVB Adapter and append channels with web interface. Read more: [Scan DVB Adapter](/astra/receiving/dvb/scan) and [Receiving MPTS via UDP](/astra/receiving/ip/mpts-via-udp)

## Filter service tables

In some cases you may want to remove service tables delivered with channel. To do that Astra has additional input options:

- `no_eit` - removes Event Information Table (EIT). EIT provides Electronic Program Guide (EPG)
- `no_sdt` - removes Service Description Table (SDT). SDT provides information about channel and delivery network
- `no_tdt` - removes Time and Date Table (TDT). TDT provides current UTC date and time
- `no_tot` - removes Time Offset Table (TOT). TOT provides current UTC date and time with offset information of the current region time zone

Example:

```
dvb://a001#pnr=1&no_sdt&no_eit
```

## Pass service tables without modification

During the demultiplexing process, Astra keep in EIT and SDT tables information related to the selected channel only. If you want to pass packets as is, without any changes you may use next options:

- `pass_eit` - pass EIT without changes
- `pass_sdt` - pass SDT without changes

These options is not recommended to use and they are incompatible with `set_pnr` and `set_tsid` options.

## Packets with private data

During the demultiplexing process, Astra excludes packets containing unknown data and only allows Video and Audio streams to pass through. If you intend to retain private data, use option `pass_data`:

```
dvb://a001#pnr=1&pass_data
```

## Packets with conditional access data

During the demultiplexing process, Astra discards all packets and associated information related to the Conditional Access System (CAS). If you want to retain this data, use option `cas`:

```
dvb://a001#pnr=1&cas
```

This option becomes essential when descrambling streams using dedicated CAM modules. Read more in our article: [Descrambling channels with External DVB-CI](/astra/receiving/dvb/external-ci)

## Change program number

To customize the Program Number (PNR), use option `set_pnr`:

```
dvb://a001#pnr=1&set_pnr=1000
```

PNR value could be in range from 1 to 65535. This feature could be useful if you want to prepare channel for next multiplexing.
