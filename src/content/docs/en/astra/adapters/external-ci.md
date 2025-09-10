---
title: External DVB-CI
description: How to use External DVB-CI adapters with Astra for decrypting channels
sidebar:
    order: 8
---

![DDCI thumbnail](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg)

Many TV providers encrypt their channels using Conditional Access Systems (CAS).
DVB-CI (Common Interface) allows you to use a Conditional Access Module (CAM) and smart card to descramble these channels.
External DVB-CI adapters provide a flexible way to connect CAMs to Astra.

## Advantages of External DVB-CI

- You can group encrypted channels from different sources and decrypt them with a single CI module
- Channels can be received on one server and decrypted on another. This is useful if you use SAT>IP receivers. You may have Astra server with CI cards stored in the server room, while SAT>IP receivers are located closer to the roof where satellite dishes are mounted. Read more about [Receiving SAT>IP](/en/astra/receiving/satip-client) with Astra

## Requirements

- You need an external DVB-CI adapter. Tested models include:
    - [DigitalDevices Octopus Twin CI](https://www.digital-devices.eu/shop/en/accessoires/bridge/266/digital-devices-octopus-twin-ci-double-ci-slot-with-2-expansionports)
    - [TBS6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html)
- Conditional Access Module (CAM)
- SmartCard from broadcaster

![DigitalDevices Octopus Twin CI](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg)

## Astra Configuration

### Create MPTS

Create an MPTS with the required channels. For each channel, add the cas option to the input address. This ensures Astra passes all information needed for decoding. For instance:

![MPTS Inputs](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/mpts.png)

### Create Virtual Adapter

:::caution
Virtual Adapter available for versions released after 20 Sep 2022
:::

Create New Adapter in the Astra Web Interface with the `CI` value in the `Virtual` field. Save adapter settings by clicking the Apply button

![New Adapter](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/new-adapter.png)

CI options:

- `Name`: adapter name
- `ID`: unique identifier. Leave blank to auto-generate
- `Virtual`: select **CI** option
- `Adapter`: number of the CI adapter in the system
- `Stream ID`: ID of the MPTS created earlier
- `CI Device`: device number on the CI adapter (default: 0)
- `CI Bitrate`: bitrate limit in MBps. Default for TBS: `70`. For DigitalDevices, should be defined in the driver
- `CA Delay`: delay (seconds) before sending channel info to the CAM. Default: `20`

CI adapter number could be found with command:

```sh
find /dev/dvb/ -name ca*
```

For example result will be:

```
/dev/dvb/adapter5/ca0
```

Where:

- `5` - CI adapter number
- `0` - device on the CI adapter

### Scan adapter

Click Scan to read channel information from the adapter.

![Scan Adapter](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/scan.png)

Select the channels you need, turn on the **Set DVB-CI CAM for selected channels** option, and press Apply to add them.

![Dashboard](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/dashboard.png)

## Troubleshooting

For common CAM-related issues see [CAM Troubleshooting](/en/astra/troubleshooting/cam/).
