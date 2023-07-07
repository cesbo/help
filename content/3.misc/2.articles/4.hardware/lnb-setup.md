---
title: "Low-Noise Block"
date: 2023-06-23
---
LNB (Low Noise Block downconverter) is a critical component in satellite TV systems. It amplifies weak satellite signals and converts their frequency for optimal transmission.

The main functions of the LNB are:

* Amplifying weak signals received by the antenna for longer distance transmission without signal degradation.
* Converting high-frequency satellite signals to a lower frequency, making them easier to process and transmit over a coaxial cable.

Key features of LNBs include:

* Multiple outputs for receiving signals from different satellites or enabling simultaneous recording and viewing.
* Some advanced models have antenna position control for automated satellite switching.

For detailed instructions on LNB installation, troubleshooting, and best practices, refer to the provided documentation and training material

## LNB power

This is turning on/off the power supply to the LNB via the antenna cable. The need to turn off the LNB power is rare, for example - if power is supplied to the LNB through the power injector.

The 13/18 Volt voltages are not only supply voltages but also polarization switching signals. 18 Volt is the horizontal (left) switching signal in the range of 16-20 Volts, and 13 Volt Is the vertical (right) switching signal in the range of 11-14 Volts.

## LNB type, heterodyne frequency

LNB Type and LNB Freq are the converter types/frequency of the heterodyne that correspond to it.
Three variants of the converter are common: for the C-band with a heterodyne frequency of 5150 MHz, and for the Ku-band: linear polarization, and circular.

Ku-band 10700-12750 MHz consists of two sub-bands:

Low Band (lower) 10700-11700 MHz
High Band (upper) 11700-12750 MHz

For each band, the converter uses its own heterodyne, with frequencies of 9750 MHz for the lower and 10600 MHz for the upper sub-bands. The values of the intermediate frequency are from 950 to 1950 MHz ( 950 = 10700 - 9750 and 1950 = 11700 - 9750) for the lower, and from 1100 to 2150 MHz (1100 = 11700 - 10600 and 2150 = 12750 - 10600) for the upper sub-bands.

The upper bound of the lower sub-band is 9750 + 2150 = 11900, and the lower bound of the upper sub-band is 10600 + 950 = 11550. Thus, in the frequency band from 11550 to 11900 MHz, there is an overlap of the upper and lower sub-bands, and signal reception is possible in both of them. This explains the fact that the frequency of the section (Switch), usually equal to 11700 MHz, is chosen conditionally and can be changed based on the quality of reception of the signal lying in the overlap area.

Regardless of the type, the converter does the same job: converts carrier frequencies to intermediate frequencies.
How it happens:
For the Ku band: carrier frequency (transponder) - heterodyne frequency = intermediate frequency.

In case of C-band frequencies which are in the range 3400 - 4200 MHz, frequency above and is usually taken equal to 5150 MHz. In this case, the expression takes the form of agate * As = A (C - get) + A (C - get). The essence of this does not change - the total frequency is suppressed by filters, and the difference is amplified and fed to the receiver.

## 22 kHz

The 22 kHz signal is a sub-band switching signal. When 22 kHz is turned on, the High Band is taken and in the absence of this signal, respectively, the lower band. In the case of universal Converter-selection is automatic depending on the selected frequency.

In the case of QUATTRO converter - where each output is rigidly fixed polarization and range, this signal is ignored. Also 13/18 volts are not taken into account. They are only used as LNB power.
