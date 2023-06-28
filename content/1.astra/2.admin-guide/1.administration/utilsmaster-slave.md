---
title: "Fault-tolerant configuration"
date: 2023-02-21
---

To ensure fault tolerance in case of failure of the server-it is possible to use several servers running in High-availability mode.

Consider the mode of operation of 2 servers with **slave mode** - adapters and channels remain inactive while the main process is running.
Set up 2 Astra servers to broadcast multicast. The channels and their output settings are the same between 192.168.1.1 and 192.168.1.2 servers.
On the server 192.168.1.2 run the Astra with these parameters:

```sh
astra -c /etc/astra/astra.conf -p 8000 --slave http://192.168.1.1:8000
```

This command will start Astra and will constantly monitor the process on the server 192.168.1.1
As soon as the connection with him will be lost - Astra to run all the channels to work.

If the master server appears on the network - the channels and the receiving process stops-and Astra goes into standby mode.
