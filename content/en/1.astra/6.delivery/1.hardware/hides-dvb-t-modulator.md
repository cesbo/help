---
title: "HiDes DVB-T modulator"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg
---

:badge[Astra 2021.08.09]

PT100 is a DVB-T modulator for 4 frequencies by HiDes

![PT100 DVB-T modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg)

Features:

- 4 modulators on the board
- Frequency range 50~950MHz step size 1KHz
- Modulation - 64QAM/16QAM/QPSK
- Signal/Noise: 45dB
- RF Output Level -8 dBm (100 dBuV)

[Read more](http://www.hides.com.tw/product_pt100_eng.html)

## Setup

Driver could be downloaded from [official site](http://www.hides.com.tw/downloads_eng.html)

After installation find the modulators number using the command:

```
find "/dev" -name "it950x*"
```

In the output of the command, we will get the numbers of the modulators:

```
/dev/usb-it950x1
/dev/usb-it950x0
```

`it950x1` - where 1 is the modulator number

## Astra settings

Prepare [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) for modulator. In the MPTS NIT settings, configure transponder options:

![MPTS NIT Settings](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/mpts-nit.png)

In the output setting, specify the type it950x and adapter number: `it950x://#adapter=0` (0 - modulator number)

### Additional output options

Additional options could be added to the output address:

- `gain=N` - signal level in range from 0 to 100
- `fec=1/2` - :badge[Astra 2023.08.16] FEC coding ratio. Values: `1/2`, `2/3`, `3/4`, `5/6`, `7/8`, `none`
