---
title: "Recommended equipment"
date: 2023-06-23
---
## Introduction

We strongly recommend using server hardware to build the headend because of its high reliability and reservation.

Server components are designed to work 24/7. They are tested and have a much Mean time between failures.
Server systems typically have multiple power supplies, error correction systems, RAM with ECC, power supplies with surge protection, multiple redundant cooling systems, and more.
For example
If the data in one of the RAM modules is damaged, PC may hang, while the server disconnects the faulty module and continues to work. If one of the modules has a hidden failure-the computer can work unpredictably: hang, displays different errors and crash programs. The server and error-correcting code memory recover the data and indicate the module as faulty.
There are many other examples, that is why we recommend using server hardware. In addition, the prices of used servers are quite democratic:

## Network card:

### rx/tx buffer size

Less than 1024 is not recommended
2048-4096 - good
8192 - excellent

### Number of queues

Single-queue network cards are not recommended for use.
(only one processor core will handle all interrupts)

### An example of a good network cards:

**INTEL**
82599ES, 82599EB (2 ports)
82599EN (1 port)
i350AM2

**Mellanox**
MT27520

**SolarFlare**
SFN7122F

## Processors

**CPU frequency**
The optimal CPU frequency is 2.8 - 3GHz+, the higher - the better.

Processors with a large number of cores, but low frequency - 1.8 - 2.2 GHz are not suitable for low-latency tasks. Low frequency results in slow data processing, and does not scale with the number of cores. In other words, the number of cores cannot overcome delays in packet processing. It is better not to buy such processors, they are designed for other tasks. (for example , databases, web servers, and other multithreaded applications)

**Processors without L3 cache**
Processors with L2-only cache may not be so bad, but in 99% it signals that the rest of the equipment (motherboard, RAM) is old and not suitable for use.

### An example of a good processor:

Intel Xeon 10C E5-2680v2
Xeon 8C E5-2670
Intel Xeon 6C X5670
Core i5-9600K

## RAM

The frequency of RAM is also quite an important thing. Approximate figures for comparison:

```
DDR1 400 MHz - not suitable
DDR2 600 MHz - suitable for small configurations (for example - receiving 10-15 channels and broadcasting them in udp)
DDR3 1333-1600 MHz - suitable
DDR4 2133-2800 MHz - suitable
DDR4 2800-3400 Mhz - expensive and unnecessary
```

The amount of RAM is important only for storing HLS chunks (segments).
The average amount of RAM for 100 hls channels is 16Gb.

## Network cards that are NOT recommended:

### D-Link, Realtek

Main reason:

One queue per rx/tx, regardless of the number of processor cores available.
The inability to set the size parameters of the ring buffers of the network card (small buffer leads to losses)

### Intel

82541GI Gigabit Ethernet Controller (rev 05)
82541PI Gigabit Ethernet Controller (rev 05)
82574L Gigabit Network Connection
82540EM Gigabit Ethernet Controller (rev 03)
82545EM
82579LM
82571EB Gigabit Ethernet Controller (rev 06)
82573L Gigabit Ethernet Controller
82573E Gigabit Ethernet Controller (rev 03)
82578DC Gigabit Network Connection (rev 06)
82546EB Gigabit Ethernet Controller (rev 01)
82546GB Gigabit Ethernet Controller (rev 03)
I219-V (rev 31)
I217
Although we recommend Intel network cards, we do not recommend these models specifically.
Only one queue and all data will be processed by only one processor core.

### Broadcom

Broadcom Corporation NetXtreme BCM5701
Broadcom Corporation NetXtreme BCM5704
Broadcom Corporation NetXtreme BCM5715
Broadcom Corporation NetXtreme BCM5719 - periodically appear dropped / missed at 256 mbit/s.
Broadcom Corporation NetXtreme BCM5721
Broadcom Corporation NetXtreme BCM5722
Broadcom Corporation NetXtreme II BCM5708
Broadcom Corporation NetXtreme II BCM5709 - although there are multiple queues, RSS can only start working on one of them, creating a high load on a single running kernel
Broadcom Corporation NetXtreme II BCM5716 , supports allocation of interrupts to available cores, but still leaves the bulk of packets on the core 0

### Other network cards

VIA Technologies, Inc. VT6105/VT6106S [Rhine-III] (rev 86)
Qualcomm Atheros AR8121/AR8113/AR8114 Gigabit or Fast Ethernet
Qualcomm Atheros AR8131 Gigabit Ethernet
Qualcomm Atheros AR8132 Fast Ethernet
Qualcomm Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
3Com Corporation 3c905C-TX/TX-M [Tornado]
Red Hat, Inc Virtio network device
Marvell Technology Group Ltd. 88E8057 PCI-E Gigabit Ethernet Controller
Marvell Technology Group Ltd. 88E8050 PCI-E ASF Gigabit Ethernet Controller
QLogic Corp. cLOM8214 1/10GbE Controller (rev 54) - does not work changing the number of queues, by default 3 rx, 1 rx tx.
Network card NC326i

### NVIDIA

Corporation MCP55 Ethernet (rev a3)
Problems:

only one queues.
when specifying a range of cores, smp_affinity_list uses only the first kernel (bad driver)
there is no possibility to specify the coalesce options.
As a result, even with a small amount of traffic gives a very high load on the processor core, which is engaged in processing traffic from this network card, which leads to unacceptably slow packet processing.

---

## Recommended DVB-cards

### Digital Devices

All the dvb cards from this company work well with the astra.
DD Max S8 - 8 tuner S/S2 receiver + multiswitch
DD Max A8i - 8 tuner DVB-C2/T2 ISDB-T receiver

#### Additional equipment from DD

DD RESI DVB-C FSM - DVB-C modulator
DD Octopus Twin CI - 2 CI interfaces for channel decoding.

### TBS

TBS6904 - 4 tuner S/S2 receiver
TBS6909 - 8 tuner S/S2 receiver + multiswitch
TBS6205 - 4 tuner DVB-T2/T/C receiver

### DVBSky

T980CI - 1 tuner DVB-T/T2/C receiver with CI slot.
S950CI - 1 tuner DVB-S/S2 receiver with CI slot.
T9580 - 2 tuner S2/T2/T/C receiver with independent tuners.

#### NOT recommended:

SkyStar 1 - old card, does not support a standard S2
Mystique SaTiX-SX - old card, does not support a standard S2
USB tuner
DD RESI SDR Modulator - the software is a closed development, and therefore there is no support for this modulator.
