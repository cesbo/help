---
title: System Tune
sidebar:
    order: 100
---

Broadcasting TV is a resource-intensive task that demands maximum performance and minimal latency from your server. To meet these critical needs, system optimization is key.

This script is designed to optimize network performance, enhance CPU efficiency, and fine-tune various system parameters. By setting advanced system configurations automatically, it reduces overhead, allowing your processes to run more smoothly and operate at the peak of their capabilities.


## Install script

Download script for tuning your Linux settings:

```bash
curl -Lo /opt/tune.sh https://cdn.cesbo.com/astra/scripts/tune.sh
chmod +x /opt/tune.sh
```

Register script as a system service:

```bash
/opt/tune.sh install
```

Reboot your server to apply changes.

## Uninstall script

Remove script from your system:

```bash
/opt/tune.sh uninstall
```

Delete script file:

```bash
rm -f /opt/tune.sh
```
