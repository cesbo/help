# UDP

UDP is a low latency protocol for local networks. [Read more](/en/codex/#/protocols/udp)

## Address format

```
udp://[interface@]address[:port][#options]
```

- `interface` – name of the local interface. The system routing table used by the default;
- `address` – IPv4 address of the stream. Multicast or unicast;
- `port` – port number. Default: **1234**.

Options:

- `sync` – receives UDP in separate thread with bitrate syncing
- `renew=Seconds` – renewing multicast group subscription after a specified time
- `socket_size=Bytes` – size of the system socket. Default: `sysctl net.core.rmem_default`

## Troubleshooting

In most cases issue cause is a system or network configuration. To find a solution needed:

<details>
<summary>Astra MPEG-TS analyzer</summary>

With Astra you can analyze any supported source. Just launch in console next command:

```
astra --analyze "udp://eth0@239.255.1.1:1234"
```

To stop `astra` press `Ctrl+C`

</details>

<details>
<summary>TCPDUMP</summary>

`tcpdump` is a common tool to check network traffic. For example, command to check UDP multicast receiving to group `239.255.1.1` on the interface `eth0`:

```
tcpdump -pnni eth0 udp and host 239.255.1.1
```

!> If you don't know actual interface you may find it with command:
`ip route get 239.255.1.1`

The `tcpdump` output looks like many lines with information about packets source, destination, and length. For example:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
```

To stop `tcpdump` press `Ctrl+C`

</details>

### UDP Input is not working

First of all check traffic on the network interface with `tcpdump` tool. If there is no information about incoming packets need to check network configuration or source configuration.

<details>
<summary>UDP Input is not working (IGMP version)</summary>

Many operating systems send a subscription request to the multicast group with IGMPv3 protocol.

If the network switch cannot work with this protocol, or the protocol is not configured - the attempt to subscribe to the multicast group will fail. IGMPv2 is supported by most switches:

Append to the file `/etc/sysctl.conf` next line:

```
net.ipv4.conf.eth0.force_igmp_version=2
```

Where `eth0` is an interface name and `2` is a IGMP version. To apply changes restart system or launch:

```
sysctl -p
```

You can verify IGMP version with tcpdump:

```
tcpdump -i eth1 igmp
```

</details>

<details>
<summary>UDP Input is not working (Firewall)</summary>

If `tcpdump` shows information about packets need to check **Firewall** configuration. Firewall depend of your Linux Distribution and better to check manual to your operation system.

</details>

<details>
<summary>UDP Input is not working (RP Filter)</summary>

If firewall is configured correctly or turned off need to check **RP filter**.

**RP filter** - is a technology that provides protection and security of the server when using multicast mailings. If your server has several network interfaces, recommend to set routes for multicast groups. If this is not possible, change the RP filter settings:

Append to the file `/etc/sysctl.conf` next line:

```
net.ipv4.conf.eth0.rp_filter = 2
```

Where `eth0` is an interface name. To apply changes restart system or launch:

```
sysctl -p
```

</details>

### Too many errors on receiving UDP

!> CC (Continuity Counter) error. Indicates that packets continuity is corrupted. Can be caused by packets loss or excess

<details>
<summary>Too many errors on receiving UDP (packets excess)</summary>

On excess packets you will see in the `tcpdump` output packets from different sources. For example:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.24081 > 239.255.1.1.1234: UDP, length 1316
```

There is could be two causes:

- If source address is same but ports are different (in example is 33610 and 24081) then source server sends same channel twice
- If source addresses are different then more than one server sends packets into the same group

In both cases need to check remote server configuration. If this is not possible or as temporary solution you can drop packets from second source with firewall.

</details>

<details>
<summary>Too many errors on receiving UDP (packets loss)</summary>

First of all need to check losses and errors on the network interface:

```
ip -s link show eth0
```

Where `eth0` is an interface name. After the RX-row will be row with numbers. Third number is an UDP receiving errors.

</details>
