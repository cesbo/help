---
title: "CAS and Simulcrypt"
date: 2023-02-24
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/og-image.png
---

Conditional Access System (CAS) is a complex solution to protect media content from unauthorized access. Astra can communicates with Conditional Access Systems such as Conax via the Simulcrypt protocol and encrypt media content using the Common Scrambling Algorithm (CSA).

![CAS diagram](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas.svg)

::note
Content encryption is effective for protecting broadcast delivery methods such as satellite, cable, and terrestrial. However, for OTT delivery, more suitable methods and combination of content protection techniques are recommended for comprehensive protection against piracy.
::

## CAS Configuration

Choose in main menu Settings and click on CAS.

![CAS Selector](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/selector.png)

Select a CAS profile, or create a new one by selecting the New CAS item.

![Simulcrypt Options for CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas-options.png)

- `Name` - arbitrary name-used for easy identification;
- `Super CAS ID` - CAS Identifier is an 8 hexadecimal symbols;
- `Start Stream ID with 1` - by default, stream numbering starts at 0. For some CAS (example: CTI), the numbering should be starts at 1;
- `ECMG Channel ID` - channel number when connecting to CAS;
- `ECMG Address` - IP address of the ECMG server;
- `ECMG Port` - server ECMG port;
- `Crypto period` - Key change interval, usually 10 seconds;
- `EMMG Protocol` - The current implementation uses TCP;
- `EMMG Port` - The port where the Astra will wait for a connection from the EMG server;
- `EMM PID` - PID for EMM packages in the system (user Defined);
- `EMM Private Data` - data to add to the CAT table. This data issued in the CAS software. If you do not have data, then this parameter is not filled;
- `EMM Clone` - this checkbox activates the function of adding EMM to each encrypted CAS channel. EMM package will be available on any channel at the end user.

## Channel Configuration

The next step is to configure the channels and append one or more Conditional Access Systems (CAS) to each channel. To do this, open the Dashboard and select the channel that you want to protect. Then, go to the Service tab in the channel settings and click "New CAS" to attach the CAS:

![CAS Options for Channel](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/channel-options.png)

- `ECM PID` - PID for ECM packages (User defined);
- `ECM Private Data` - the data of the conditional access system is added to the description of the ECM stream in the PMT table. If these parameters do not exist, you do not need to add thems;
- `Access Criteria` - this data will be provided by the CAS provider or defined on the CAS server.

## Conditional Access System

TVCAS4 is a Conditional Access System (CAS) that provides a secure and reliable solution for protecting media content.

TVCAS4 is a software-based solution that can be installed on a server and integrated with Astra via the Simulcrypt protocol. On the client side you may use a CAM module or a set-top box with a built-in Virtual CAS.

Check the [tvcas.com](https://tvcas.com/en/) for more information.
