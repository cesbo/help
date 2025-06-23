---
title: "MPTS: General Settings"
sidebar:
    order: 21
---

MPTS (Multi Program Transport Stream) lets you bundle multiple TV channels into a single stream. This is useful when you need to send several channels together to broadcasting equipment or cable networks.

For example, instead of sending Channel 1, Channel 2, and Channel 3 as separate streams, MPTS combines them into one stream that carries all three channels.

## Creating an MPTS Stream

To create an MPTS stream:

1. Go to the main Dashboard
2. Click `New Stream` in the upper right corner
3. Check the `Multi Program Stream` checkbox
4. Configure the settings below

## General

The General tab contains the basic settings for your MPTS stream

![General Options](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/general.png)

Definitions of items in a block:

- `Enable`: this checkbox allows you to turn the connection to the modulator on or off. When enabled, the interface establishes a connection to the modulator
- `Name`: this parameter allows you to give the modulator an arbitrary name. The name you choose is used to identify the modulator in the Astra interface and can be any combination of letters, numbers, and special characters
- `ID`: This field is optional. ID is generated automatically when saving mpts
- `Country`:this parameter sets the country in which the modulator will be used. The country you select determines the channel frequency plan that will be used by the modulator in the specification [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
- `UTC Offset`: this parameter sets the time offset from UTC in the range from -720 minutes to +780 minutes (used for generation of the tables TOT/TDT for auto time setting in the TV and the correct operation of the EPG)
- `Network ID`: this parameter is a unique identifier for the DVB network that the modulator belongs to. Default is: 1
- `Network Name`: this parameter is an arbitrary name for the DVB network that the modulator belongs to
- `Provider Name`: Used in NIT table (Network Information Table), which describes the information who owns the frequency, provider and network name. Is used to quickly identify the provider that owns the stream. For example this data we can see when scanning the frequency on the satellite
- `Codepage`: this parameter is used to specify the character encoding used in the PSI/SI tables. For example, for English users it is Latin (ISO 6937)
- `TSID`: this parameter (Transport Stream ID) is a unique identifier for a DVB transport stream. It is used to differentiate between transport streams transmitted by different sources or with different content.  Default is: 1
- `ONID`: this parameter refers to the Original Network ID, which is used to identify the originating network to which a channel belongs. It is a unique identifier assigned to a network, and is used in conjunction with the TSID to form a complete identifier for the transport stream. The ONID value must be the same for all transport streams within a given network. Default is: 1

## Input List

The Input List in the General window is used to define input streams that will be used to modulate the output. It allows you to specify the transport stream, program number, and other parameters for each input stream. The Input List can be edited, added, or removed as needed

![Input List](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/input.png)

- `New Input`: this button allows you to add a new input to the input list. Clicking on this button opens a new window where you can configure the parameters for the new input, such as its name, type, and modulation settings
- `Arrows`: this button is located on the right side of each input in the Input List. Clicking on it allows you to select the position of this input in the general list
- `Gear`: this button is located on the right side of each input in the Input List and allows you to configure the parameters of that particular input. Clicking the "Gear" button will open a dialog box where you can modify the input's parameters, such as the input's type, bitrate, and modulation parameters

Streams included in mpts should not have repeated PIDs. It is also desirable to assign PNR numbers for each input with the `set_pnr=` option. For example:

```
udp://225.1.1.27:1234#set_pnr=11
udp://225.1.1.28:1234#set_pnr=12
udp://225.1.1.29:1234#set_pnr=13
```

## Output List

The Output List section in the General window displays the list of outputs, which can be configured for the selected modulator. In this section, you can add or remove outputs and configure their settings. Each output in the list is represented by a row with its parameters and status displayed. The status of each output can be enabled or disabled using the corresponding checkbox in the first column of the output row

![Output List](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/output.png)

- `New Output`: this button opens a new window where you can configure the parameters for the new output. The modulator number for the new output can be assigned based on the number of modulators in the adapter, starting from 0

Same as for the SPTS mode.
