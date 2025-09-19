---
title: Uninstall
sidebar:
    order: 100
---

If Astra is not needed anymore you can remove it completely from your server.

:::danger
Before uninstall please [Make a Backup](/en/astra/getting-started/backup/)!
:::

## Disable service

Stop service and turn autorun off:

```sh
systemctl stop astra
systemctl disable astra
```

## Remove service

Remove service from system:

```sh
astra remove
```

If you have several services on your server, then custom name should be specified:

```sh
astra remove astra-8001
```

## Cleanup

Finally remove binary file and configuration files:

```sh
rm -rf /usr/bin/astra /etc/astra
```
