---
title: "Configure IGMP Version"
date: 2023-03-02
---

IGMP (Internet Group Management Protocol) is a communication protocol used by devices on a network to join and leave multicast groups. IGMP has several versions, including IGMPv2 and IGMPv3, which offer different features and improvements.

Some network equipment, such as switches or routers, may only support IGMPv2, which can cause issues if your server attempts to join a multicast group using IGMPv3. Therefore, it may be necessary to change the IGMP version used by the server.

## Configuration

To change IGMP version on your server, you can modify the `/etc/sysctl.conf` file. First, determine the interface that needs to use a different IGMP version (e.g., eth0). Then, add the following line to the `/etc/sysctl.conf` file:

```
net.ipv4.conf.eth0.force_igmp_version=2
```

This line forces your server to use IGMPv2 on the specified interface. To apply the changes, save file and execute the following command:

```
sudo sysctl -p
```

## Check IGMP version

To confirm that the IGMP version has been changed successfully, you can use the tcpdump command to capture network traffic on the specified interface. For example, to capture IGMP traffic on eth0, execute the following command:

```
sudo tcpdump -i eth1 igmp
```

Then try to subscribe to the multicast stream. For example:

```
astra --analyze udp://eth1@239.255.1.1:1234
```

This will display any IGMP packets on the interface. Check the output to confirm that the IGMP version being used is now IGMPv2.
