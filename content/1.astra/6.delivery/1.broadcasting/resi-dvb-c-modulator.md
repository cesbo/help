---
title: "DigitalDevices RESI DVB-C Modulator"
date: 2023-06-23
---

The RESI, a DVB-C modulator by Digital Devices, outputs a DVB-C compatible data stream into an existing 75-ohm coaxial cabling.

![DigitalDevices RESI DVB-C Modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png)

Technical specifications:

- 4 - 24 Transponder according to DVB-C specification
- Frequency range: 114 – 858 MHz
- Symbol rates: 1,0 – 7,1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Signal / Noise ratio: 42dB
- Output with 8 channels (per channel): 101 dBµV

## Find modulator in system

Use our guide to [Install DigitalDevices driver](/misc/tools-and-utilities/dvb/dd-driver).

Use the following command to find the adapter number and the modulator device number:

```sh
find "/dev/dvb" -name "mod*"
```

The output will display a list of devices in the system:

```
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
```

- `adapter0` - adapter number
- `mod1` - device (modulator) number

## Astra settings

1. Prepare [MPTS](/astra/delivery/broadcasting/mpts-settings) for modulator
2. In the output setting, specify the address: resi://#adapter=0&device=1 (0 - adapter number, 1 - modulator)
3. In the MPTS NIT settings, configure transponder options

![MPTS NIT Settings](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts-nit-dvb-c.png)

Read more in: [Cable Television with Astra for Hospitality Industry](/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

### Additional options

- `gain=N` - signal level in range from 0 to 100
- `buffer_size=N` - buffer size in megabytes. Default: `256`
- `legacy` - compatibility mode with old RESI modulator for 10 transpodners

## Troubleshooting

### No such file or directory

If you attempt to find the adapter number and encounter an error:

```
find: ‘/dev/dvb’: No such file or directory
```

it is likely that the DigitalDevices driver is not installed. Please [Install DigitalDevices driver](/misc/tools-and-utilities/dvb/dd-driver)
