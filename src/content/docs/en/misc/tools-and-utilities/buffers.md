---
title: "Configuring System and Network Buffers"
date: 2024-09-23
sidebar:
    order: 4
---

To efficiently send or receive data over UDP, you need to set up your operating system’s buffer sizes correctly.

## Configuring Buffer Sizes

You should add the buffer size settings to the `/etc/sysctl.conf` file.

Recommended settings for 1G Ethernet Adapters:

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

Recommended settings for 10G Ethernet Adapters:

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

Recommended settings for 40G Ethernet Adapters:

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

To apply these settings, you can either restart your system or run:

```
sysctl -p
```

You can verify the current buffer values with this command:

```
sysctl \
    net.core.rmem_default \
    net.core.rmem_max \
    net.core.wmem_default \
    net.core.wmem_max \
    net.ipv4.udp_mem \
    net.ipv4.tcp_wmem
```

## Network Card Buffers

If you’re running a high-load server, you should also configure your network card’s buffer to prevent data loss in the system buffer.

Use this command to see the current buffer settings:

```
ethtool -g eth1
```

You’ll see the rx-buffer size, which might already be set to the maximum. Finding the best value can be challenging. Generally, an average value works well. However, if you have a high-frequency, multi-core processor (over 3 GHz), you might get better results with the maximum buffer size.

```
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

To increase the network card’s buffer size, run:

```
ethtool -G eth1 rx 2048
```

By configuring these settings, you can optimize UDP data transfer and reduce the chance of data loss due to buffer overflows.
