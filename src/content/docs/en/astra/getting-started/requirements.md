---
title: Hardware Requirements
description: CPU, RAM, networking, and DVB adapter requirements for optimal Astra performance
sidebar:
    order: 31
---

Digital TV is a high-load service and requires some resources. Astra has no restrictions on the number of channels or clients. However, the chosen protocols and available resources may influence these parameters.

## CPU

We recommend a CPU with the highest available frequency. The optimal CPU frequency for a digital TV headend is 2.5 - 3GHz or higher. Processors with many cores, but lower frequency (e.g. 1.8-2.5 GHz) are not well suitable for tasks requiring low latency.

Processors with L2 cache only may not be so bad, but in 99% it indicates that the rest of the equipment such as motherboard and RAM is deprecated and not suitable for use.

An example of a good processor:

- Intel Xeon 10C E5-2680v2
- Xeon 8C E5-2670
- Intel Xeon 6C X5670
- Core i5-9600K

Ensure the CPU is operating in performance mode and power-saving mode is disabled. [Read more](/en/articles/system/cpupower/).

## RAM

For system and general software operation we recommend at least 2Gb of RAM. Reserve at least 20%.

Additional RAM is needed:

- For receiving, resources are not as important as delivery. About 1Gb of RAM per 100 channels.
- For DVB modulators such as TBS, DigitalDevices, or HiDes, Astra allocates 256Mb per transponder
- For delivery UDP channels with bitrate synchronization, Astra allocates about 12Mb per channel. Approximately 2Gb of RAM is enough for deliver 100 channels with UDP protocol.
- For delivery UDP channels without synchronization, Astra allocates only 1Mb per channel. This is generally not recommended.
- For HLS delivery, RAM usage depends on the HLS settings. By default, Astra prepares 4 segments, each up to 3 seconds long. For HD channel with a bitrate of 10Mbit per second, approximately 15Mb (calculated 4 * 3 * 10 / 8) will be allocated, in addition to a fixed 2Mb per channel, that doesn't depend of the channel bitrate. Each active session requires about 2Mb of RAM.

The frequency of RAM is also quite an important thing. Approximate figures for comparison:

- DDR1 400 MHz - not suitable
- DDR2 600 MHz - suitable for small configurations, like receiving 10-15 channels and broadcasting them in udp
- DDR3 1333-1600 MHz - suitable
- DDR4 2133-2800 MHz - suitable
- DDR4 2800-3400 Mhz - expensive and unnecessary

## Networking

Avoid using VLAN, Bonding and consumer-grade network adapters.

### Rx/Tx buffer size

NIC ring buffer sizes differ according to the NIC vendor and grade. A larger buffer size reduces the chance of packet loss during scheduling delays.

- less than 1024 are generally not recommended
- between 2048 and 4096 are considered good
- 8192 is deemed excellent

### Queues

Packets are transmitted between the NIC ring buffer and the operating system kernel via queues. Each queue is assigned one dedicated CPU core. Network adapters equipped with multiple queues can process packets simultaneously.

Network adapters with single queue are for consumer use only and not recommended for digital TV headend setup.

### Recommended Network Adapters

- **Intel**
    - 82599ES, 82599EB (2 ports)
    - 82599EN (1 port)
    - i350AM2
- **Mellanox**
    - MT27520
- **SolarFlare**
    - SFN7122F

### NOT Recommended Network Adapters

- **D-Link**, **Realtek**: any models for consumer use only are not suitable for digital TV headend.
- **Intel**: Although we recommend Intel network cards, we do not recommend these models specifically. Only one queue and all data will be processed by only one CPU core:
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
- **Broadcom**
    - NetXtreme BCM5701
    - NetXtreme BCM5704
    - NetXtreme BCM5715
    - NetXtreme BCM5719 - periodically appear dropped / missed at 256 mbit/s.
    - NetXtreme BCM5721
    - NetXtreme BCM5722
    - NetXtreme II BCM5708
    - NetXtreme II BCM5709 - although there are multiple queues, RSS can only start working on one of them, creating a high load on a single running kernel
    - NetXtreme II BCM5716 , supports allocation of interrupts to available cores, but still leaves the bulk of packets on the core 0
- **Qualcomm**
    - Atheros AR8121/AR8113/AR8114 Gigabit or Fast Ethernet
    - Atheros AR8131 Gigabit Ethernet
    - Atheros AR8132 Fast Ethernet
    - Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
- **Others**
    - **VMware VMXNET3** - not suitable for UDP delivery, too many dropped packets
    - VIA Technologies, Inc. VT6105/VT6106S [Rhine-III] (rev 86)
    - 3Com Corporation 3c905C-TX/TX-M [Tornado]
    - RedHat Virtio network device
    - Marvell 88E8057 PCI-E Gigabit Ethernet Controller
    - Marvell 88E8050 PCI-E ASF Gigabit Ethernet Controller
    - QLogic Corp. cLOM8214 1/10GbE Controller (rev 54) - does not work changing the number of queues, by default 3 rx, 1 rx tx.
    - HP NC326i
    - NVidia Corporation MCP55 Ethernet (rev a3) - only one queue. As a result, even with a small amount of traffic gives a very high load on the processor core, which is engaged in processing traffic from this network card, which leads to unacceptably slow packet processing.

## DVB

### Recommended DVB Adapters

- **DigitalDevices**: All DVB adapters by [Digital Devices](https://www.digital-devices.eu) work well with Astra.
    - DD Max SX8 - 8 tuner S/S2 receiver + multiswitch
    - DD Max A8i - 8 tuner DVB-C2/T2 ISDB-T receiver
- **TBS**: DVB adapters by [TBS](https://www.tbsdtv.com) are one of the most popular solutions for receiving digital television.
    - TBS6904 - 4 tuner S/S2 receiver
    - TBS6909 - 8 tuner S/S2 receiver + multiswitch
    - TBS6205 - 4 tuner DVB-T2/T/C receiver
- **DVBSky**
    - T980CI - 1 tuner DVB-T/T2/C receiver with CI slot.
    - S950CI - 1 tuner DVB-S/S2 receiver with CI slot.
    - T9580 - 2 tuner S2/T2/T/C receiver with independent tuners.

Recommended DVB Modulators and CI interfaces:

- **DigitalDevices**
    - DD RESI DVB-C FSM - DVB-C modulator
    - DD Octopus Twin CI - 2 CI interfaces for channel descrambling
- **TBS**
    - TBS6004 DVB-C 4 QAM PCIe Card
    - TBS6900 - 2 CI interfaces for channel descrambling

### NOT Recommended DVB Adapters

- **DigitalDevices**
    - Digital Devices RESI SDR Modulator - DVB-T/ISDB-T (not supported. unpredictable behavior)
    - Digital Devices RESI SDR Modulator - PAL Modulator (not supported)
- **TBS**
    - TBS6104 DVB-T Quad Modulator Card - (unpredictable behavior)

### NOT Recommended DVB Adapters

- SkyStar 1 - old card, does not support a standard S2
- Mystique SaTiX-SX - old card, does not support a standard S2
- Any USB adapters

## Summary

Total RAM needed calculated as sum of the:

- General software operation
- Receiving
- Delivery
- Other software on your server
- RAM Reserve

### Example with DVB-C Broadcasting

In summary for 100 channels:

- General software operation: 2Gb
- Receiving: 1Gb
- Delivery with 4 transponders: 2Gb (256Mb per transponder, plus additional resources for mulpiplexing)
- Other software: 0
- RAM Reserver: (2 + 1 + 2) * 0.5 = 2.5Gb

Total (rounded up): 8Gb

### HLS

Due to HLS nature all clients connected directly to the server. For load balancing we recommend to use caching servers. Read more in [HLS Caching Proxy with Nginx](/en/articles/tools-and-utilities/hls-caching-proxy-with-nginx/)
