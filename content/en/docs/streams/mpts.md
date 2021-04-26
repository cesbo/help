---
title: MPTS
weight: 7
---

MPTS - Multi Program Transport Stream - a stream containing several services (programs).
It is often used to transfer channels to ip-qam/ip-asi modulators.

Open the main page (Dashboard) of Astra and find the item `New Stream`,
in the upper right corner, to open a new window. Find `Multi Program Stream` and set the checkbox on it.
After that, you will have additional fields.

## General

{{< figure src="/assets/img/docs/streams/mpts1.png" alt="MPTS General Options" >}}

Definitions of items in a block:

- `Enable` - Enabled or disabled mpts stream.
- `Name` - The name of the mpts. It can be arbitrary and it is used only for identification in the web interface or log file.
- `ID` - This field is optional. ID is generated automatically when saving mpts.
- `Country` - Country code described in the specification [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
- `UTC Offset` - The time offset from UTC in the range from -720 minutes to +780 minutes (used for generation of the tables TOT/TDT for auto time setting in the TV and the correct operation of the EPG).
- `Network ID` - Install Original Network ID, default: 1
- `Network Name` - Used in NIT table
- `Provider Name` - Used in NIT table (Network Information Table), which describes the information who owns the frequency, provider and network name. Is used to quickly identify the provider that owns the stream. For example this data we can see when scanning the frequency on the satellite.
- `Codepage` - Specify the correct code page so that the service names are displayed correctly. For example, for English users it is Latin (ISO 6937)
- `TSID` - Transport Stream ID. Default: 1
- `ONID` - Original Network ID. Default: 1

## Input List

{{< figure src="/assets/img/docs/streams/mpts2.png" alt="MPTS Input List" >}}

Streams included in mpts should not have repeated PIDs. It is also **desirable** to assign
PNR numbers for each input with the `set_pnr=` option. For example:

```
udp://225.1.1.27:1234#set_pnr=11
udp://225.1.1.28:1234#set_pnr=12
udp://225.1.1.29:1234#set_pnr=13
```

## Output List

{{< figure src="/assets/img/docs/streams/mpts3.png" alt="MPTS Output List" >}}

Same as for the SPTS mode.

## SDT

The SDT table (Service Descriptor Table) contains descriptions of the services available in this mpts stream.

{{< figure src="/assets/img/docs/streams/mpts4.png" alt="MPTS SDT Options" >}}

- Service type - Video, Audio, or Teletext.
- Service name - Channel name in Service Description Table
- PNR - related Program Number
- Scrambled channel - Adds information to the channel description that the channel is encrypted. Modern dvb-receivers, focusing on this information, can display on the TV screen data that the channel is encrypted.
- LCN - Logical Channel Number - the information, focusing on which, dvb-tuner arranges services (channels) in the right order. (The same as sorting the channels).

## NIT

The NIT table (Network Information Table) contains the parameters of the data transmission system.

{{< figure src="/assets/img/docs/streams/mpts5.png" alt="MPTS NIT Options" >}}

- LCN Version - logical channel number version. This setting may vary from country to country.
    - EACEM (default)
    - Nordig v1
- Delivery Type - in this menu, we select the type of signal delivery: DVB-S/C/T (usually DVB-C) and fill in the fields that appear.
- Frequency - transponder frequency. Specified in MHz.
- Symbolrate - symbol rate. Specified in KBaud.
- FEC - if your streams contain FEC, select the required value. Otherwise, select the default value.
- Modulation - modulation type

## Network Search

Focusing on these parameters, modern dvb-tuner and TVs can perform the Quick Search.
Not to perform on the set-top boxes and TV full channel search (which usually takes a long time), set up this simple and necessary service:

1. Create all necessary mpts streams and fill in Delivery Type parameters in them. For example:
    - `mpts_1` with frequency 378
    - `mpts_2` with frequency 386
    - `mpts_3` with frequency 394
2. Go to settings `mpts_1` and open the `NIT` tab. Check all related multiplexes
3. Done!

> How it works
> During the channel setup, the TV or STB finds the frequency 378,
> with `mpts_1`, got the `NIT` tables for all linked multiplexes and scan them fast.

## Advanced tab

It contains several characteristic:

{{< figure src="/assets/img/docs/streams/mpts6.png" alt="MPTS Advanced" >}}

- Disable PID's auto-remap - Disable automatic redefinition of PID numbers in MPTS.
- SI packets interval - this is the interval for sending stream data. The default value is 500 milliseconds. This value does not need to be changed.
- Pass NIT/SDT/EIT/TDT - disables Astra processing of these tables. For example, tables are prepared by an external generator
- PAT/NIT/CAT/SDT version - table version number. The number is incremented each time the mpts settings are updated. When the dvb receiver finds a change in the table number, it immediately re-reads it. There is no need to change the values manually.
