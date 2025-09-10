---
title: CC Error
sidebar:
    order: 1
---

CC (Continuity Counter) errors indicates that MPEG-TS packets continuity is corrupted. Error can be caused by MPEG-TS packets loss or excess.

## CC Error in Logs

This message printed as debug message in Astra logs, and as error message in the Astra MPEG-TS Analyzer logs.

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

## CC Error on UDP Receiving

UDP does not guarantee data delivery, so packets can be lost, duplicated, or arrive out of order. There is two common issues: packets loss or packets excess.

We recommend using our [System Tune](/en/articles/system/tune/) script to optimize your Linux settings.


### Packets loss

First of all need to check losses and errors on the network interface:

```sh
ip -s link show eth0
```

You need to look at RX Errors. Some network cards provide more detailed information about the nature of the loss:

```sh
ethtool -S eth1
```

Losses can be not only on the network cards of your server. They can also be on the network equipment port. You can find the information how to see it in the documentation of the network equipment manufacturer.
Where eth0 is an interface name. After the RX-row will be row with numbers. Third number is an UDP receiving errors.

### QoS configuration

Quality of Service (QoS) settings on your network equipment can affect UDP traffic. Make sure that your QoS settings prioritize UDP traffic and do not limit its bandwidth.

### Packets excess

Excess packets looks as doubled bitrate in Astra MPEG-TS analyzer. Could be check with `tcpdump` where packets with same destination has different sources:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.24081 > 239.255.1.1.1234: UDP, length 1316
```

There is could be two causes:

- If source address is same but ports are different (in example is 33610 and 24081) then source server sends same channel twice
- If source addresses are different then more than one server sends packets into the same group

In both cases need to check remote server configuration. If this is not possible or as temporary solution you can drop packets from second source with firewall.

## CC Error on DVB Receiving

DVB depends of the signal quality, check errors on DVB adapter: [BER and UNC Errors](/en/astra/troubleshooting/ber-unc-error/)
