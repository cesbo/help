---
title: External DVB-CI
description: How to use External DVB-CI adapters with Astra for decrypting channels
sidebar:
    order: 8
---

![DDCI thumbnail](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg)

With the rise of digital broadcasting, protecting content from unauthorized access has become increasingly important. This is why many TV providers, whether they are satellite, cable, or terrestrial, encrypt content using Conditional Access Systems (CAS).

A common method used in this process is the Common Interface (CI), an interface that allows Conditional Access Modules (CAM) to connect to the DVB receiver and decrypt protected channels. Decrypting channels with an External DVB-CI adapter provides a flexible headend architecture by separating the receiving and processing parts.

## Advantages of External DVB-CI

- Encrypted channels from different sources can be grouped together for subsequent decryption in a single CI module. This can be quite useful if you have various DVB transponders with encrypted channels
- Channels can be received and decrypted on a separate servers. It is especially convenient if you use SAT>IP receivers. You may have Astra server with CI cards stored in the server room, while SAT>IP receivers are located closer to the roof where satellite dishes are mounted. Read more about [Receiving SAT>IP](/en/astra/receiving/satip-client) with Astra

## Requirements

- External DVB-CI adapter. We tested and support next models:
    - [DigitalDevices Octopus Twin CI](https://www.digital-devices.eu/shop/en/accessoires/bridge/266/digital-devices-octopus-twin-ci-double-ci-slot-with-2-expansionports)
    - [TBS6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html)
- Conditional Access Module (CAM)
- SmartCard from broadcaster

![DigitalDevices Octopus Twin CI](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg)

## Astra Configuration

### Create MPTS

Create MPTS with required channels in the input address for each channel you should append option `cas` - so that astra passes everything necessary for decoding. For instance:

![MPTS Inputs](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/mpts.png)

### Create Virtual Adapter

:::caution
Virtual Adapter available for versions released after 20 Sep 2022
:::

Create New Adapter in the Astra Web Interface with the `CI` value in the `Virtual` field. Save adapter settings by clicking the Apply button

![New Adapter](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/new-adapter.png)

CI options:

- `Name` - name for Adapter
- `ID` - unique adapter identifier. You may leave it blank, the system will generate an id, when you save the adapter
- `Virtual` - Virtual Adapter type. select the `CI` option
- `Adapter` - number of the CI adapter in the system
- `Stream ID` - stream identifier with MPTS. it is an ID value of MPTS created on first step
- `CI Device` - number of the device on the CI adapter. Default: `0`
- `CI Bitrate` - TBS CI bitrate in MBit/s. Default: `70`. For DigitalDevices bitrate could be defined in the driver settings
- `CA Delay` - delay, in seconds, before sending channel information to the Conditional Access Module. Default: `20` second

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

Now you can click the Scan button.

![Scan Adapter](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/scan.png)

Select the required programs and append them by clicking on the Apply button.

![Dashboard](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/dashboard.png)

## Troubleshooting

### CI+ Module not working

CI+ modules only for consumer use and don't supported by the External DVB-CI adapters

### Descrambled only 1 channel

The number of programs (channels) that CAM may descramble simultaneously, depending on CAM manufacturer and/or model

### How to check CAM menu?

If you need to check CAM menu to get some additional data about Conditional Access Module or SmartCard, you may use `gnutv` digital tv utility. Launch:

```sh
gnutv -adapter N -cammenu
```

Where N is a CI adapter number.
