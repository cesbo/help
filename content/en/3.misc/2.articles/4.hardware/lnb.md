---
title: "Low-Noise Block for satellite dishes"
date: 2023-07-07
image: https://cdn.cesbo.com/help/misc/articles/hardware/lnb/lnb.jpg
---

The LNB (Low-Noise Block) is a device used in satellite dishes. It operates in specific frequency bands to receive signals, which it then amplifies and converts to a level optimal for transmission over a coaxial cable.

![LNB](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/lnb.jpg)

## Power supply

The power supply for an LNB comes directly from the satellite receiver via the connected coaxial cable. This is usually in the range of 13 to 18 volts, with the voltage level also used to control the polarization of the received signal.

- 18 volt is supplied for linear horizontal or circular left polarization, with the switching current typically ranging from 16 to 20 volts
- 13 volt is used for linear vertical or circular right polarization, with the switching current generally falling between 11 and 14 volts

## Heterodyne frequency

A commonly used type, the Universal LNB, operates in the Ku-band, with frequencies ranging from 10700 to 12750 MHz. This LNB utilizes two Local Oscillators (LOs): one set at 9750 MHz for the low-band (10700 - 11700 MHz) and another set at 10600 MHz for the high-band (11700 - 12750 MHz). When a signal is received, it is mixed with the appropriate LO frequency. This results in an Intermediate Frequency (IF) signal ranging from 950 to 2150 MHz, which can be effectively transmitted over the coaxial cable.

The selection between the two Local Oscillators in a Universal LNB is controlled by a 22 kHz tone signal sent by the satellite receiver over the coaxial cable.

## Quattro LNB

A Quattro LNB has four outputs, each dedicated to a specific band and polarization. This type of LNB designed for:

- Fiber transmitters
- Multiswitch systems with up to 32 independent outputs 
- Multiswitch with Unicable protocol

![Fiber Transmitter](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/fiber.png)

## Quad LNB

A Quad LNB has for independent outputs, each capable of accessing all frequencies in the Ku-band.

::note
It's important to note that a Quad LNB is designed for consumer use. Quattro LNB is not intended for direct connection to a receiver.
The two types of LNBs are distinctly different and cannot replace each other in their respective applications. Be careful not to confuse them.
::