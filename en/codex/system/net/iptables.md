# iptables

iptables is a command-line firewall utility that uses policy chains to allow or block traffic.

## Limit requests rate

You can limit connections rate to your server by IP. All connections over the defined limit in defined period will be dropped.

In following example firewall blocks an IP that makes more than 100 connections in 60 seconds:

```
iptables -A INPUT -p tcp --dport 80 -i eth0 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 80 -i eth0 -m state --state NEW -m recent --update --seconds 60 --hitcount 100 -j DROP
```
