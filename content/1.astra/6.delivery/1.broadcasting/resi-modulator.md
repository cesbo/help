---
title: "DigitalDevices RESI DVB-C Modulator"
date: 2023-06-23
---

The RESI, a DVB-C modulator by Digital Devices, outputs a DVB-C compatible data stream into an existing 75-ohm coaxial cabling.

![DigitalDevices RESI DVB-C Modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-modulator/resi.png)

Technical specifications:

- 4 - 24 Transponder according to DVB-C specification
- Frequency range: 114 – 858 MHz
- Symbol rates: 1,0 – 7,1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Signal / Noise ratio: 42dB
- Output with 8 channels (per channel): 101 dBµV

## Find modulator in system

Use the following command to find the adapter number and the modulator device number:

```sh
find "/dev/dvb" -name "mod*"
```

The output will display a list of devices in the system:

```sh
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
/dev/dvb/adapter0/mod2
```

- `adapter0` - adapter number
- `mod2` - device number

## Configure Astra

For DVB-C network channels should be grouped int single stream - multiplex (or MPTS, Multi Program Transport Stream). It is used to transfer channels to ip-qam/ip-asi modulators and multiplexers. [Read more](/astra/delivery/broadcasting/mpts-settings) how to create MPTS in Astra. In the output setting, select the transfer type-RESI:

![RESI astra](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-modulator/resi-astra.png)

- **Adapter** - number of the adapter in the system. (in our example, 0)
- **Device** - number of the modulator on the adapter. (in our example-4 modulator)
- **Attenuator** - reduces the power of a signal without appreciably distorting its waveform

Transponder options could be defined manually, by the default this is not needed, Astra use options from MPTS settings:

- **Frequency** - transponder frequency
- **Modulation** - signal modulation
- **Symbol Rate** - number of signal changes per second

Next options could be added to the address:

- `gain=N` - value could be in range from 0 to 100
- `buffer_size=N` - buffer size in megabytes. Default: `256`
- `legacy` - compatibility mode with old RESI modulator for 10 transpodners

Read more in: [Cable Television with Astra for Hospitality Industry](/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

## Troubleshooting

### No such file or directory

If you attempt to find the adapter number and encounter an error:

```
find: ‘/dev/dvb’: No such file or directory
```

it is likely that the DigitalDevices driver is not installed. Please [install driver](/misc/tools-and-utilities/dvb/dd-driver)
