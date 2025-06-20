---
title: "SAT>IP Client"
sidebar:
    order: 3
---

SAT>IP (or Sat-IP) specifies an IP-based client–server communication protocol for a TV gateway. SAT>IP server connects to one or more DVB broadcast sources and provides access to channels for multiple clients over HTTP or RTSP protocols.

In this chain, Astra acts as an SAT>IP client. It can receive DVB streams over SAT>IP protocol and be used as a hub for TV Channels from different sources, for their further processing and streaming to clients.

## Benefits of using SAT>IP receivers

The most important advantage is the possibility of separating the reception and processing of channels. Usually Sat-dishes and terrestrial antennas are located on the roof which requires dedicated cabling to distribute the satellite signal to DVB Server (Linux PC with Astra software) which is located in the server room. This can be costly, especially in large buildings or complexes. And with the SAT>IP solutions, on the other hand, we may use existing network infrastructure to distribute the signal (or reduce cabling to a single Ethernet cable) and this can significantly reduce installation costs.  Since Astra can handle large amounts of traffic without performance degradation, it is worth an option to use.

![SAT>IP diagram](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/sat2ip.svg)

Secondly, we can extend the variety of hardware with what you may receive a DVB signal.  It is SAT>IP server hardware like: [Digital Devices Octopus NET](https://www.digital-devices.eu/shop/en/business-tv/network-tuner/), HDHomeRun,  Telestar R1, and many other devices, including low-cost options, which support SAT>IP Standard.

What is important to mention, is that with the Minisatip server software, we also may use PCIe DVB cards and/or USB sticks (tuners) as SAT>IP Adapters at Astra Cesbo. For more details on how to use the Minisatip server look at [our article](/en/misc/tools-and-utilities/minisatip) and on developer [GitHub](https://github.com/catalinii/minisatip).

## Configuration

To use the SAT>IP protocol, you need to create New Adapter in the Astra Web Interface:

![SAT>IP Configuration](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-config.png)

- `Name` - write a required name for Adapter. It is better to use names that describe what equipment and what frequency is used
- `Virtual` - select the "SAT>IP" option
- `SAT>IP Server` - enter SAT>IP server address
- `Adapter` - adapter number on the SAT>IP server
- `Type` - select adapter type (Satellite/Terrestrial/Cable)

Depending on the reception type, you will need additionally configure the Transponder data or Frequency to scan. You can find more detailed information at the following links:
[Introduction to DVB Adapter Tuning](/en/astra/adapters/) and [DVB-S/S2 Tuner Options](/en/astra/adapters/s/)

Save adapter settings by clicking "Apply" button. Now you can click on the "Scan" button and select the required programs.

![SAT>IP Dashboard](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-dashboard.png)
