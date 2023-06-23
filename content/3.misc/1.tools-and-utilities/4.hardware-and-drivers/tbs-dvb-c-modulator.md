---
title: "TBS DVB-C modulator"
date: 2023-06-23
---

![TBS DVB-C modulator](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/tbs-dvb-c-modulator/tbs-dvb-c.jpeg)

This card is a PCI DVB-C modulator with 4 dependent frequencies.
`!!!` available from version from 2021.08.09

There are 4 modulators on the board, with the characteristics:
Frequencies: 100 ~ 1000 MHz
Modulation - 6/32/64/128/256QAM
RF Output Level (5-120 dBuV)

Setup:
Find the modulator number using the command:

```sh
find "/dev" -name "mod*"
```

In the output - we will see the numbers of modulators:

```bash
root@dvb:~# find "/dev" -name "mod*"
/dev/tbsmod0/mod3
/dev/tbsmod0/mod2
/dev/tbsmod0/mod1
/dev/tbsmod0/mod0
```

tbsmod0 - card number,
mod 0 - mod 3 - modulator numbers on card.

Let's set up Astra:
An [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) stream must be sent to the modulator(/latest/astra/web-interface/mpts)
In the output setting, we specify the type of tbs:`tbs://#adapter=0&device=0` (0 - modulator number.) (for the next frequency -`tbs://#adapter=0&device=1`)
Astra receives data on the frequency and type of modulation from the completed NIT table in mpts.
Setup example:

![TBS DVB-C modulator astra web 1](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/tbs-dvb-c-modulator/tbs1.png)

![TBS DVB-C modulator astra web 2](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/tbs-dvb-c-modulator/tbs2.jpeg)

![TBS DVB-C modulator astra web 3](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/tbs-dvb-c-modulator/tbs.png)
