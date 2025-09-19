---
title: RP Filter for UDP Reception
sidebar:
    order: 11
---

The rp_filter technology is a useful tool for enhancing the security and protection of servers that receive UDP multicast traffic, particularly for servers with multiple network interfaces. When configuring servers to receive UDP multicast traffic, there are two options available: configuring system routing for multicast groups or modifying the rp_filter setting.

## Configure strict mode for RP filter

To modify the rp_filter setting, add the following lines to the `/etc/sysctl.conf` file:

```
net.ipv4.conf.eth0.rp_filter = 2
```

Note that `eth0` should be replaced with the name of the interface being used. To apply the changes, either restart the system or execute the following command:

```
sysctl -p
```

## RP Filter values

There are three possible values for the rp_filter parameter in Linux:

- `0` - disables the rp_filter feature altogether
- `1` - default setting and enables strict reverse path filtering. In this mode, the kernel checks whether incoming packets arrive on the expected interface according to the routing table, and drops packets that do not
- `2` - this setting enables loose reverse path filtering. This mode is less strict than strict reverse path filtering and allows packets to arrive on other interfaces, provided that they can be routed back to the source address on the interface from which they were received

The choice of rp_filter setting depends on the specific network configuration and security requirements of the system. It is important to select the appropriate setting to ensure optimal security and performance of the network.

## System Tune

You can also use our [System Tune](/en/articles/system/tune/) script to optimize your Linux settings, including configuring the rp_filter parameter.
