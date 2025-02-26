---
title: "Traffic Control"
date: 2023-03-02
---

Configuration of the Linux kernel packet scheduler

```sh
tc qdisc add dev eth0 root handle 1: cbq avpkt 1000 bandwidth 1000mbit
```

Assign base rule for the 1000Mbit interface

```sh
tc class add dev eth0 parent 1: classid 1:1 cbq rate 52mbit allot 1500 prio 5 bounded isolated
```

Append class with limited bandwidth - 52Mbit

```sh
tc filter add dev eth0 parent 1: protocol ip prio 16 u32 match ip dst 239.255.1.1 match ip dport 1234 0xffff flowid 1:1
```

Only packets with destination 239.255.1.1 and with port 1234 will be assinged to the class 1:1
