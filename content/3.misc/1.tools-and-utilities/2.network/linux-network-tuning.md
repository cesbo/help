---
title: "Linux. Network Tuning"
date: 2023-02-28
---

Tuning of the network options prevents data loss and maximizes bandwidth.

## System buffer

To send/receive data over UDP, you need to configure the operating system buffer.

<details><summary>How to configure</summary>

The buffer size options should be defined in the `/etc/sysctl.conf` file.
Recommended to use next values for 1G ethernet adapters:

```
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.udp_mem = 8388608 12582912 16777216
net.ipv4.tcp_rmem = 4096 87380 8388608
net.ipv4.tcp_wmem = 4096 65536 8388608
net.core.wmem_default = 16777216
net.core.rmem_default = 16777216
net.ipv4.tcp_tw_reuse = 1
```

For 10G ethernet adapters:

```
net.core.rmem_max = 67108864
net.core.wmem_max = 67108864
net.ipv4.udp_mem = 8388608 16777216 33554432
net.ipv4.tcp_rmem = 4096 87380 33554432
net.ipv4.tcp_wmem = 4096 65536 33554432
net.core.wmem_default = 33554432
net.core.rmem_default = 33554432
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
net.ipv4.tcp_tw_reuse = 1
```

For 40G ethernet adapters:

```
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.ipv4.udp_mem = 8388608 33554432 67108864
net.ipv4.tcp_rmem = 4096 87380 67108864
net.ipv4.tcp_wmem = 4096 65536 67108864
net.core.wmem_default = 67108864
net.core.rmem_default = 67108864
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
net.ipv4.tcp_tw_reuse = 1
```

To apply changes restart system or launch:

```sh
sysctl -p
```

You can verify the current values with next command:

```sh
sysctl \
    net.core.rmem_default \
    net.core.rmem_max \
    net.core.wmem_default \
    net.core.wmem_max \
    net.ipv4.udp_mem \
    net.ipv4.tcp_wmem
```

</details>

## Size of the network card buffer

For high-load servers, you must configure the network card buffer. This will avoid losses in the system buffer.

<details><summary>How to configure</summary>

```
[root@astra ~]# ethtool -g eth1
Ring parameters for eth1:
Pre-set maximums:
RX:     4096
RX Mini:    0
RX Jumbo:   0
TX:     4096
Current hardware settings:
RX:     4096
RX Mini:    0
RX Jumbo:   0
TX:     256
```

Here we can see the rx-buffer increased by the maximum. Usually it is quite difficult to find the correct value. The most optimal is average value. With a high-frequency and multi-core processor (>3GHz), you can get good results with maximum buffer size. An example command to increase the buffer:

```sh
ethtool -G eth1 rx 2048
```

</details>

## RP filter

**rp_filter** - is a technology that provides protection and security of the server when using multicast mailings.

If your server has several network interfaces, recommend to set routes for multicast groups. If this is not possible, you must change the rp_filter settings.

<details><summary>How to configure</summary>

Add to the `/etc/sysctl.conf` file next lines:

```
net.ipv4.conf.eth0.rp_filter = 2
```

Where `eth0` is the interface name.

To apply changes restart system or launch:

```sh
sysctl -p
```

</details>

## IGMP Version

Many operating systems send a subscription request to a multicast group in igmp v3 format.

If the network switch cannot work with this protocol, or the protocol is not configured - the attempt to subscribe to the multicast group will fail. Igmp v2 is supported by most switches.

<details><summary>How to configure</summary>

The IGMP version could be defined in the /etc/sysctl.conf file. For example setup IGMPv2 for eth1 interface:

```
net.ipv4.conf.eth1.force_igmp_version=2
```

To apply changes restart system or launch:

```sh
sysctl -p
```

You can verify IGMP version with tcpdump. Launch:

```sh
tcpdump -i eth1 igmp
```

Then try to subscribe to the multicast stream. For example:

```sh
astra --analyze udp://eth1@239.255.1.1:1234
```

</details>

<details><summary>How to check information about losses</summary>

Keywords: missed, dropped, fifo, error, rx.

```sh
ip -s -s link show eth1
```

You need to look at RX Errors. Some network cards provide more detailed information about the nature of the loss:

```sh
ethtool -S eth1
```

Losses can be not only on the network cards of your server. They can also be on the network equipment port. You can find the informaton how to see it in the documentation of the network equipment manufacturer.

</details>

## Setup and diagnostic network subsystem using netutils

This set of utilities allows to diagnose network losses, configure the network subsystem and perform other diagnostics.

<details><summary>See more:</summary>

### Install

```sh
yum install python3
pip3 install netutils-linux
```

### Network-top

![Image](https://cdn.cesbo.com/help/misc/tools-and-utilities/network/linux-network-tuning/net-top.gif)

This utility is needed to evaluate the applied settings and displays the uniformity of the load distribution (interrupts, softirqs, the number of packets per second per processor core) on the server resources, all kinds of packet processing errors. Values that exceed the thresholds are highlighted.

### RSS-ladder

```
# rss-ladder eth1 0
- distributing interrupts of eth1 (-TxRx) on socket 0:"
  - eth1: irq 67 eth1-TxRx-0 -> 0
  - eth1: irq 68 eth1-TxRx-1 -> 1
  - eth1: irq 69 eth1-TxRx-2 -> 2
  - eth1: irq 70 eth1-TxRx-3 -> 3
  - eth1: irq 71 eth1-TxRx-4 -> 8
  - eth1: irq 72 eth1-TxRx-5 -> 9
  - eth1: irq 73 eth1-TxRx-6 -> 10
  - eth1: irq 74 eth1-TxRx-7 -> 11
```

This utility distributes network card interrupts to the cores of the selected physical processor (default is 0).

### Server-info

```
# server-info --rate
cpu:
  BogoMIPS: 7
  CPU MHz: 7
  CPU(s): 1
  Core(s) per socket: 1
  L3 cache: 1
  Socket(s): 10
  Thread(s) per core: 10
  Vendor ID: 10
 disk:
   vda:
     size: 1
     type: 1
 memory:
   MemTotal: 1
   SwapTotal: 10
 net:
   eth1:
     buffers:
       cur: 5
       max: 10
     driver: 1
     queues: 1
 system:
   Hypervisor vendor: 1
   Virtualization type: 1
```

This utility allows you to do two things:

`server-info --show`: see what hardware is installed on the server. In General, it is similar to lshw, but with an emphasis on the parameters of interest to us.

`server-info --rate`: find bottlenecks in server hardware. In General, it is similar to the Windows performance index, but with an emphasis on the parameters of interest to us. The assessment is made on a scale from 1 to 10.

### Other utilities

```sh
rx-buffers-increase eth1
```

automatically increases the buffer of the selected network card to the optimal value.

```sh
maximize-cpu-freq
```

disables the floating frequency of the processor.

### Example 1. As simple as possible

 **Task** :

* Single processor with 4 cores.
* Single 1 Gbps network card (eth0) with 4 combined queues
* incoming traffic 600 Mbit/s, no outgoing traffic
* all queues hang on CPU0, a total of 55,000 interrupts and 350,000 packets per second, of which about 200 packets/sec are lost by the network card. The remaining 3 cores are idle

 **Decision** :

distribute the queues between the cores with the command `rss-ladder eth0`
increase buffer with command `rx-buffers-increase eth0`

### Example 2

 **Task** :

* Two processors with 8 cores
* Two NUMA-nodes
* Two dual-port 10 Gbps network cards (eth0, eth1, eth2, eth3), each port has 16 queues, all tied to node 0, incoming traffic volume: 3 Gbps per each
* Single 1 Gbps network card, 4 queues, tied to node 0, outgoing traffic: 100 Mbps.

 **Decision** :

1. put one of the 10 Gbit/s network cards to another PCI slot, bound to NUMA node 1.
2. Reduce the number of combined queues for 10 Gigabit ports to the number of cores per physical processor:

```
for dev in eth0 eth1 eth2 eth3; do
  ethtool -L $dev combined 8
done
```

3. Distribute interrupts of ports eth0, eth1 on the processor cores getting to NUMA node 0, and ports eth2, eth3 on the processor cores getting to NUMA node1:

```
rss-ladder eth0 0
rss-ladder eth1 0
rss-ladder eth2 1
rss-ladder eth3 1
```

4. Increase eth0, eth1, eth2, eth3 RX buffers:

```
for dev in eth0 eth1 eth2 eth3; do
  rx-buffers-increase $dev
done
```

### Reminder

In the case of network cards with a single queue, you can use RPS to distribute the load between the cores, but this does not eliminate the loss of copying packets into memory.

The distribution of interrupts is based on the calculation of the hash function (the remainder of the division) from the set of protocol, source and destination IP, and source and destination port. The technology is called: Receive-side scaling (RSS).

</details>
