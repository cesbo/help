---
title: "MPTS: NIT Settings"
sidebar:
    order: 23
---

The "NIT" window allows you to define the network information table (NIT) for a custom modulator. The NIT contains information about the networks available to the user, such as the network ID, network name, and frequency

![Network Options](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/nit.png)

- `LCN Version` - this parameter indicates the version number of the Logical Channel Number (LCN) table used by the service. The LCN table contains information about the ordering of services in a particular region or country
- `Delivery Type` - this parameter defines the method used to deliver the signal for the selected service
- `Frequency` - this parameter determines the frequency of the output signal. It can be set in MHz (megahertz) and can have values ranging from 45 to 1002 MHz, depending on the delivery type selected for the modulator
- `Symbolrate` - symbol rate. Specified in KBaud
- `FEC` - if your streams contain FEC, select the required value. Otherwise, select the default value
- `Modulation` - this parameter allows you to select the type of modulation to be used for the selected service

## Network Search

Focusing on these parameters, modern dvb-tuner and TVs can perform the Quick Search. Not to perform on the set-top boxes and TV full channel search (which usually takes a long time), set up this simple and necessary service:

1. Create all necessary mpts streams and fill in Delivery Type parameters in them. For example:
  - mpts_1 with frequency 378
  - mpts_2 with frequency 386
  - mpts_3 with frequency 394
2. Go to settings mpts_1 and open the NIT tab. Check all related multiplexes
3. Done!

> How it works During the channel setup, the TV or STB finds the frequency 378, with `mpts_1`, got the `NIT` tables for all linked multiplexes and scan them fast.
