---
title: Uninstall
date: 2023-02-21
sidebar:
    order: 4
---

If Astra is not needed anymore you can remove it completely from your server.

:::danger
Before uninstall please [Make a Backup](../../admin-guide/administration/backup)!
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
