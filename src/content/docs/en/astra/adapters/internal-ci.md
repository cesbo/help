---
title: Internal DVB-CI
description: How to use Internal DVB-CI adapters with Astra for decrypting channels
sidebar:
    order: 8
---

Some DVB adapters include a built-in Common Interface (CI). These are called **Internal DVB-CI**. An example is the [TBS 6910](https://www.tbsdtv.com/products/tbs6910-dvb-dual-tuner-pcie-card.html), where the DVB tuner is directly connected to the CI slot.

## Astra Configuration

With Internal CI, no extra configuration is required. You only need to:

1. [Create a DVB adapter](/en/astra/adapters/) in Astra
2. [Scan the adapter](/en/astra/adapters/scan/) and select required channels
3. Enable the option **Set DVB-CI CAM for selected channels**

When you enable this option, Astra automatically adds the `cam` parameter to the input address of each selected channel. This tells Astra to use the DVB-CI slot for descrambling. Example of input address with `cam` parameter:

```
dvb://a001#pnr=10&cam
```

## Log messages

When starting the adapter, Astra shows information about the CI slot:

```
09:00:00[dvb_ca 0:0] CA Slots: 1
09:00:00[dvb_ca 0:0] CA Descramblers: 0
09:00:00[dvb_ca 0:0] Select slot 0
09:00:04[dvb_ca 0:0] CA Slot 0: ready to go
09:00:04[dvb_ca 0:0] CA Slot 0: active
```

After the CAM is detected:

```
09:00:10: INFO: [dvb_ca 0:0] CA Module Conax CA. 0x01 0x0B00 0x0001
09:00:14: INFO: [dvb_ca 0:0] CA Module CAID:0x0B00 (session 0:3)
```

If debug logging is enabled, you will also see channel selection commands, for example:

```
CA Slot 0.3: first pnr:10 cmd:select
```

This confirms that the channel is sent to the CAM for descrambling.

## Troubleshooting

For common CAM-related issues see [CAM Troubleshooting](/en/astra/troubleshooting/cam/).
