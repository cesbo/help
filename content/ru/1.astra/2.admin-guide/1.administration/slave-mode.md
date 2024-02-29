---
title: "Fault-tolerant configuration"
date: 2023-08-08
---

With a fault-tolerant configuration, you can launch a second server to replace the primary in case of failure.

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000"
```

This command will start Astra in slave mode and will connect to the primary process on the server at 192.168.1.1. As soon as the connection with the primary server is lost, Astra will execute the configuration and begin operating.

By default, Astra executes the configuration in 3 seconds. However, you can set a shorter or longer delay with the `delay` option:

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000#delay=10"
```
