---
title: "Recommended equipment"
date: 2023-06-23
---

Server hardware is advised for constructing a digital TV headend due to its designed capability for continuous operation and high quality and reliability. Key components include:

- Server cases often include multiple power supplies equipped with surge protection
- Memory modules incorporate error correction systems
- Redundant cooling systems

These elements, among others, contribute to a robust digital TV headend setup.

## CPU

The optimal CPU frequency for a digital TV headend is 2.5 - 3GHz or higher. Processors with many cores, but lower frequency (e.g. 1.8-2.5 GHz) are not well suitable for tasks requiring low latency.

Processors with L2 cache only may not be so bad, but in 99% it indicates that the rest of the equipment such as motherboard and RAM is deprecated and not suitable for use.

An example of a good processor:

- Intel Xeon 10C E5-2680v2
- Xeon 8C E5-2670
- Intel Xeon 6C X5670
- Core i5-9600K

## RAM

The frequency of RAM is also quite an important thing. Approximate figures for comparison:

- DDR1 400 MHz - not suitable
- DDR2 600 MHz - suitable for small configurations, like receiving 10-15 channels and broadcasting them in udp
- DDR3 1333-1600 MHz - suitable
- DDR4 2133-2800 MHz - suitable
- DDR4 2800-3400 Mhz - expensive and unnecessary

The amount of RAM is important only for storing HLS chunks (segments). The average amount of RAM for 100 hls channels is 16Gb.

## Network adapters

### rx/tx buffer size

NIC ring buffer sizes differ according to the NIC vendor and grade. A larger buffer size reduces the chance of packet loss during scheduling delays.

- less than 1024 are generally not recommended
- between 2048 and 4096 are considered good
- 8192 is deemed excellent

### queues

Packets are transmitted between the NIC ring buffer and the operating system kernel via queues. Each queue is assigned one dedicated CPU core. Network adapters equipped with multiple queues can process packets simultaneously.

Network adapters with single queue for consumer use only and not recommended for digital TV headend setup.

## Recomended network adapters

### Intel

- 82599ES, 82599EB (2 ports)
- 82599EN (1 port)
- i350AM2

### Mellanox

- MT27520

### SolarFlare

- SFN7122F

## NOT recommended network adapters

### D-Link, Realtek

Any models by  for consumer use only and not suitable for digital TV headend.

### Intel

Although we recommend Intel network cards, we do not recommend these models specifically. Only one queue and all data will be processed by only one CPU core.

- 82541GI Gigabit Ethernet Controller (rev 05)
- 82541PI Gigabit Ethernet Controller (rev 05)
- 82574L Gigabit Network Connection
- 82540EM Gigabit Ethernet Controller (rev 03)
- 82545EM
- 82579LM
- 82571EB Gigabit Ethernet Controller (rev 06)
- 82573L Gigabit Ethernet Controller
- 82573E Gigabit Ethernet Controller (rev 03)
- 82578DC Gigabit Network Connection (rev 06)
- 82546EB Gigabit Ethernet Controller (rev 01)
- 82546GB Gigabit Ethernet Controller (rev 03)
- I219-V (rev 31)
- I217

### Broadcom

- Broadcom Corporation NetXtreme BCM5701
- Broadcom Corporation NetXtreme BCM5704
- Broadcom Corporation NetXtreme BCM5715
- Broadcom Corporation NetXtreme BCM5719 - periodically appear dropped / missed at 256 mbit/s.
- Broadcom Corporation NetXtreme BCM5721
- Broadcom Corporation NetXtreme BCM5722
- Broadcom Corporation NetXtreme II BCM5708
- Broadcom Corporation NetXtreme II BCM5709 - although there are multiple queues, RSS can only start working on one of them, creating a high load on a single running kernel
- Broadcom Corporation NetXtreme II BCM5716 , supports allocation of interrupts to available cores, but still leaves the bulk of packets on the core 0

### Others

- VIA Technologies, Inc. VT6105/VT6106S [Rhine-III] (rev 86)
- Qualcomm Atheros AR8121/AR8113/AR8114 Gigabit or Fast Ethernet
- Qualcomm Atheros AR8131 Gigabit Ethernet
- Qualcomm Atheros AR8132 Fast Ethernet
- Qualcomm Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
- 3Com Corporation 3c905C-TX/TX-M [Tornado]
- Red Hat, Inc Virtio network device
- Marvell Technology Group Ltd. 88E8057 PCI-E Gigabit Ethernet Controller
- Marvell Technology Group Ltd. 88E8050 PCI-E ASF Gigabit Ethernet Controller
- QLogic Corp. cLOM8214 1/10GbE Controller (rev 54) - does not work changing the number of queues, by default 3 rx, 1 rx tx.
- Network card NC326i
- NVidia Corporation MCP55 Ethernet (rev a3) - only one queue. As a result, even with a small amount of traffic gives a very high load on the processor core, which is engaged in processing traffic from this network card, which leads to unacceptably slow packet processing.

## Recommended DVB adapters

### Digital Devices

All DVB adapters by [Digital Devices](https://www.digital-devices.eu){target="_blank"} work well with Astra.

- DD Max SX8 - 8 tuner S/S2 receiver + multiswitch
- DD Max A8i - 8 tuner DVB-C2/T2 ISDB-T receiver

Also works well other hardware by Digital Devices:

- DD RESI DVB-C FSM - DVB-C modulator
- DD Octopus Twin CI - 2 CI interfaces for channel descrambling

### TBS

DVB adapters by [TBS](https://www.tbsdtv.com){target="_blank"} are one of the most popular solutions for receiving digital television.

- TBS6904 - 4 tuner S/S2 receiver
- TBS6909 - 8 tuner S/S2 receiver + multiswitch
- TBS6205 - 4 tuner DVB-T2/T/C receiver

Also works well other hardware by TBS:

- TBS6004 DVB-C 4 QAM PCIe Card
- TBS6900 - 2 CI interfaces for channel descrambling

### DVBSky

T980CI - 1 tuner DVB-T/T2/C receiver with CI slot.
S950CI - 1 tuner DVB-S/S2 receiver with CI slot.
T9580 - 2 tuner S2/T2/T/C receiver with independent tuners.

## NOT recommended DVB adapters

### DigitalDevices

- Digital Devices RESI DVB-T/ISDB-T SDR Modulator not supported

### Others

- SkyStar 1 - old card, does not support a standard S2
- Mystique SaTiX-SX - old card, does not support a standard S2
- Any USB adapters
