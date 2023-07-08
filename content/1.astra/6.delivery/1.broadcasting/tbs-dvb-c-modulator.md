---
title: "TBS6004 DVB-C modulator"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg
---

::badge[Astra 2021.08.09 and newer]

TBS6004 is a DVB-C 4 QAM modulator PCIe card.

![TBS DVB-C modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg)

Technical specifications:

- 4 modulators on the board
- Frequencies: 100 ~ 1000 MHz
- Modulation - 16QAM, 32QAM, 64QAM, 128QAM, 256QAM
- RF Output Level - 5-120 dBuV

## Setup

Use our guide to [Install TBS driver](/misc/tools-and-utilities/dvb/tbs-driver). Use the following command to find the adapter number and the modulator device number:

```
find "/dev" -name "mod*"
```

In the output - we will see the numbers of modulators:

```
/dev/tbsmod0/mod1
/dev/tbsmod0/mod0
```

- `tbsmod0` - adapter number
- `mod1` - device number

## Astra settings

1. Prepare [MPTS](/astra/delivery/broadcasting/mpts-settings) for modulator
2. In the output setting, specify the address: `tbs://#adapter=0&device=1` (0 - adapter number, 1 - modulator)
3. In the MPTS NIT settings, configure transponder options

![MPTS NIT Settings](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/mpts-nit.png)

Read more in: [Cable Television with Astra for Hospitality Industry](/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

### Additional options

Additional options could be added to the output address:

- `bitrate=N` - default value depends on symbolrate and modulation type. For example for symbolrate 6900 and 256-QAM value will be 55
- `gain=N` - signal level in range from 0 to 100. Default value: 60

## Troubleshooting

### No such file or directory

If you attempt to find the adapter number and encounter an error:

```
find: ‘/dev/dvb’: No such file or directory
```

it is likely that the TBS driver is not installed. Please [install TBS driver](/misc/tools-and-utilities/dvb/tbs-driver)
