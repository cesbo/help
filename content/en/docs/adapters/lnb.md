---
title: DVB-S/S2 LNB
weight: 3
---

LNB options is available only for DVB-S/S2

Default options depends of the adapter frequency:

| Frequency range |  LOF1 |  LOF2 |  SLOF |
|----------------:|------:|------:|------:|
|  10700 .. 13250 |  9750 | 10600 | 11700 |
|    4500 .. 4800 |  5950 |     0 |     0 |
|    3400 .. 4200 |  5150 |     0 |     0 |
|    2500 .. 2700 |  3650 |     0 |     0 |
|     950 .. 2150 |     0 |     0 |     0 |

For circular polarized converters (e.g. 36°E, 56°E), set 10750 in LOF1

- LOF1 - Low sub-band, MHz
- LOF2 - High sub-band, MHz
- SLOF - Sub-band range. If adapter frequency more than SLOF, than will be used LOF2 value and sends tone (22 kHz) signal to LNB to switch
- Force Tone - option to send 22 KHz tone signal.

> **Voltage 13V/18V** - is not only for LNB power supply but also choosing signal polarization
>    - 13V is for Vertical/Right polarization. Switching signal in the range of 11-14 Volts
>    - 18V is for Horizontal/Left polarization. Switching signal in the range of 16-20 Volts

> **22kHz signal** is a heterodine switch (LOF1 or LOF2)

{{< figure src="/assets/img/docs/adapters/dvb-lnb.png" alt="DVB LNB Options" >}}

## LNB Sharing

Disable LNB voltage supply and tone signal

> Allows you to connect several DVB-adapters to single converter through
> a passive splitter. On the splitter, only one adapter must be active,
> the any other adapters should be passive. All adapters on same splitter
> should use same polarization and same sub-band
> (frequency is greater or less than the value of slof).

## DiSEqC

Digital Satellite Equipment Control

Available 4 modes:

- DiSEqC 1.0 - allows switching between up to 4 satellite sources
- DiSEqC 1.1 - allows switching between up to 16 satellite sources
- DiSEqC Command - sends raw command to DiSEqC
- Tone Burst - also known as mini DiSEqC. allows switching between 2 satellite sources

## Unicable

Provides access to the multiple LNB's over a single coaxial cable for several receivers.

Available 2 modes:

- Unicable I (EN50494) - provides access to up to 8 satellite sources
- Unicable II (EN50607) - provides access to up to 32 satellite sources

Unicable options:

- Unicable Slot - slot number
- Slot Postion - slot position
- Slot Frequency - slot frequency
