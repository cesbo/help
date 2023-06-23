---
title: "DigitalDevices RESI DVB-C Modulator"
date: 2023-06-23
---

![DigitalDevices RESI DVB-C Modulator](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/digitaldevices-resi-dvb-c-modulator/resi.png)

RESI is a DVB-C modulator by the DigitalDevices

4 - 24 Transponder according to DVB-C specification
Frequency range: 114 – 858 MHz
Symbol rates: 1,0 – 7,1 MSym/s
QAM: 16, 32, 64, 128, 256
Signal / Noise ratio: 42dB
Output with 8 channels (per channel): 101 dBµV

Configuring the adapter:
Find the card number and modulators using the command:

```sh
find "/dev/dvb" -name "mod*"
```

In the output - we get the number of the adapter and its modulators.

```bash
root@dvb:~# find "/dev/dvb" -name "mod*"
/dev/dvb/adapter0/mod7
/dev/dvb/adapter0/mod6
/dev/dvb/adapter0/mod5
/dev/dvb/adapter0/mod4
/dev/dvb/adapter0/mod3
/dev/dvb/adapter0/mod2
/dev/dvb/adapter0/mod1
/dev/dvb/adapter0/mod0
```

adapter0 - adapter number in the system
mod0 - 7 - this is 8 modulators on this card (8 frequencies)

Settings in Astra:
[MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) must be sent to the modulator input
In the output setting, select the transfer type-RESI:
![RESI astra](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/digitaldevices-resi-dvb-c-modulator/resi-astra.png)

*Adapter* - number of the adapter in the system. (in our example, 0)
*Device* - number of the modulator on the adapter. (in our example-4 modulator)
`!!` Please note: all these fields are filled in manually!
*Frequency*
*Modulation*
*Symbol Rate*
*Attenuator* - signal level. (the higher the number , the lower the output signal level)
