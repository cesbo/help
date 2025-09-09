---
title: Common Issues with UDP Reception
---

UDP (User Datagram Protocol) - communication protocol in local networks or Internet, with minimal delays and minimal stability.

## System Tune

Before troubleshooting we recommend using our [System Tune](/en/articles/system/tune/) script to optimize your Linux settings.

## Software to analyze your issue

### Analyze UDP with Astra MPEG-TS Analyzer

With Astra you can analyze any supported source. Just launch in console next command:

```sh
astra --analyze "udp://eth0@239.255.1.1:1234"
```

To stop Astra analyzer press Ctrl+C. Read more about [Astra MPEG-TS Analyzer](/en/articles/tools-and-utilities/astra-mpeg-ts-analyzer/)

### Analyze UDP with Tcpdump

Tcpdump is a common tool to check network traffic. For example, command to check UDP multicast receiving to group 239.255.1.1 on the interface eth0:

```sh
tcpdump -pnni eth0 udp and host 239.255.1.1
```

If you don't know actual interface you may find it with command:

```sh
ip route get 239.255.1.1
```

The tcpdump output looks like many lines with information about packets source, destination, and length. For example:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
```

To stop tcpdump press Ctrl+C

## UDP Not working at all

Not working means a zero bitrate in the Astra MPEG-TS Analyzer output. For example:

```
Jan 27 09:00:00: INFO: Bitrate: 0 Kbit/s
Jan 27 09:00:01: INFO: Bitrate: 0 Kbit/s
```

### No UDP packets on interface

First of all check traffic on the network interface with tcpdump tool. If there is no information about incoming packets, then need to check network configuration or source configuration.

1. Invalid routes configuration. If you have has several interfaces, please, check that route to multicast group configured correctly or define interface name in the udp address
2. Connectivity issues. Check that you server connected to ethernet or vlan interface created
3. Incompatable IGMP Version. For example your server uses IGMPv3, but network equipment supports only IGMPv2: [Configure IGMP Version](/en/articles/system/configure-igmp-version/)

### Software unable to receive UDP packets

If tcpdump shows information about UDP packets, there is could be next issues:

1. UDP droped by firewall rulles. Check your firewall configuration
1. If you server has multiplay interfaces then append route to the multicast group or configure RP Filter: [RP Filter and Multicast receiving in Linux](/en/astra/receiving-udp/rp-filter/)

## CC Errors on receiving UDP

CC (Continuity Counter) errors indicates that packets continuity is corrupted. Error can be caused by packets loss or excess:

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

Read more about [CC Errors](/en/astra/logs/cc/).
