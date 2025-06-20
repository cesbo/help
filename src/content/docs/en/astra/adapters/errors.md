---
title: Common DVB Errors
sidebar:
    order: 80
---

Common metrics like signal level and signal-to-noise ratio (SNR) indicate the broad status of signal reception, but are not sufficient for diagnosing specific reception problems.

## BER

BER (Bit Error Rate) is a metric used to quantify the number of bits that are incorrectly received or decoded in a given transmission. The BER error is an expression of the number of incorrect bits as a ratio or percentage of the total number of bits transmitted.

In DVB systems, the BER error is an important metric for measuring the quality of the received signal. A low BER indicates a good signal quality with fewer errors, while a high BER suggests that the signal quality is poor and more errors are present in the transmitted data. Factors such as noise, interference, signal strength, and transmission distance can all affect the BER.

To improve the BER, DVB systems often employ various error-correcting techniques, such as Forward Error Correction (FEC), which can detect and correct errors in the transmitted data, enhancing the overall quality and reliability of the digital signal.

## UNC

UNC (Uncorrectable Error) indicates that a received data packet contains errors that cannot be corrected by the error-correction mechanisms employed in the system, such as Forward Error Correction (FEC).

Typically, digital communication systems use FEC to detect and correct errors in transmitted data. However, if the number of errors within a data packet is too high, or if the errors are too severe, the FEC mechanisms may fail to correct them. In such cases, the system reports an UNC error.

UNC errors can result from various factors, including poor signal quality, high noise levels, interference, or problems with the transmission equipment. High levels of UNC errors may lead to degraded video or audio quality, freezing or pixelation in digital TV broadcasts, or even loss of signal.

To minimize UNC errors, it's essential to:

1. Consider sun interference - Periodic signal degradation, also known as solar outage or sun fade, can occur when the sun aligns directly behind the satellite, causing increased noise levels and temporary signal disruption. This phenomenon typically lasts for a few minutes each day during specific periods of the year
2. Check the dish alignment and LNB - Connect a signal analyzer directly to the LNB using a short cable
3. Connect the signal analyzer to the cable on the receiver side. The coaxial cable insulation may be damaged or compromised
