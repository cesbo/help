---
title: "PT100 DVB-T modulator"
date: 2023-06-23
---
![PT100 DVB-T modulator](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/pt100-dvb-t-modulator/pt100.jpeg)

T100 is a DVB-T modulator based on IT9507+AD8345 chips - [http://www.hides.com.tw/product_pt100_eng.html](http://www.hides.com.tw/product_pt100_eng.html)
`!!!` available from version from 2021.08.09

There are 4 modulators on the board, with the characteristics:
Frequency range 50~950MHz step size 1KHz
Modulation - 64QAM/16QAM/QPSK
Signal/Noise: 45dB
RF Output Level -8 dBm (100 dBuV)

Setup:
Find the modulators number using the command:

```sh
find "/dev" -name "it950x*"
```

In the output of the command, we will get the numbers of the modulators:

```bash
root@dvb:~# find "/dev" -name "it950x*"
/dev/usb-it950x3
/dev/usb-it950x2
/dev/usb-it950x1
/dev/usb-it950x0
```

it950x0 - where 0 is the modulator number

Let's set up Astra:
An [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) stream must be sent to the modulator
In the output setting, we specify the type it950x: `it950x://#adapter=0` (0 - modulator number)
Additionally - there is an option gain=x (the percentage value can be in the range from 0 to 100) - this option controls the signal level.
Astra receives data on the frequency and type of modulation from the completed NIT table in mpts.
Setup example:

![PT100 DVB-T modulator step 1](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/pt100-dvb-t-modulator/step-2-2.png)

![PT100 DVB-T modulator step 2](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/pt100-dvb-t-modulator/step-3.jpeg)

![PT100 DVB-T modulator step 3](https://cesbo.b-cdn.net/help/misc/hardware-and-drivers/pt100-dvb-t-modulator/step-4.png)
