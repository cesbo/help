---
title: Adapters Overview
sidebar:
    order: 1
---

DVB (Digital Video Broadcasting) is a set of international standards for digital television broadcasting. With Astra you can receive media content from various DVB networks, including satellite, cable, and terrestrial sources.

## DVB Adapter

To receive DVB signal on your server, you'll need additional hardware: DVB Adapter. DVB Adapters are typically PCIe boards, although USB DVB Adapters are also available, but not recommended for production use.

![DVB Adapter](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-adapter.jpg)

Key components of a DVB adapter:

- **Tuner**: also known as a frontend, this component receives the signal, converts analog to digital, and corrects errors
- **Demultiplexer**: responsible for processing the received MPEG-TS stream and filtering individual streams
- **Common Interface (CI)**: some adapters come with an interface to connect conditional access modules for stream descrambling

We recommend DVB adapters by:

- [Digital Devices](https://www.digital-devices.eu)
- [TBS](https://www.tbsdtv.com)

## Prepare your system

Before you begin, make sure that the DVB Adapter is connected to your server and that the appropriate Linux driver is installed:

- [DigitalDevices Driver Installation](/en/astra/adapters/dd-driver/)
- [TBS Driver Installation](/en/astra/adapters/tbs-driver/)

## General options

To create new adapter click "New Adapter" in the main menu.

![DVB General Options](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-general.png)

- `Enable`: turn adapter on/off;
- `Name`: adapter name;
- `ID`: unique adapter identifier. For new adapter you may keep this field blank and Astra generates it;
- `Virtual`: virtual adapters is custom interface to receive MPTS streams from different sources like SAT>IP, UDP, CI-Adapters;
- `SAT>IP`: use adapter on remote server over SAT>IP protocol (deprecated, use Virtual - SAT>IP instead);
- `Adapter`: select system devices;
- `Type`: select adapter standard.

## Advanced options

![DVB Advanced Options](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-advanced.png)

- `Enable monitoring`: enable telemetry sending to Zabbix or InfluxDB;
- `Timeout`: check DVR errors in defined interval. Default: 120;
- `CI`: use external DVB-CI adapter like [DigitalDevices DuoFlex CI](https://www.digital-devices.eu/shop/en/cine-series/ci-expansion/224/digital-devices-duoflex-ci-double-common-interface-ci-extension-duoflex-ci?c=173) or [TBS 6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html);
- `CI Device`: device number on DVB-CI adapter;
- `CI Bitrate`: define bitrate for DVB-CI adapter;
- `BISS`: descramble an entire transponder;
- `DVB API v3`: use deprecated API to read information from Adapter;
- `Budget Mode`: disable hardware PID filtering. In budget mode Astra receives whole transponder from adapter;
- `CA Delay`: delay between sending control packets to Conditional Access Module (CAM).

## DVB Type

Other options depends of the selected adapter type:

- [DVB-S/S2](/en/astra/adapters/s/)
- [DVB-T/T2](/en/astra/adapters/t/)
- [DVB-C](/en/astra/adapters/c/)

## Scan

Once your adapter is configured, you can check the signal quality and scan it for available channels. Read more: [Scan DVB Adapter](/en/astra/adapters/scan/)

## Troubleshooting

If you have any issues with starting DVB adapter please check our guide: [Troubleshooting](/en/astra/troubleshooting/dvb/)
