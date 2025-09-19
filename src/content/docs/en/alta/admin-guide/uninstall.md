---
title: Uninstall
date: 2023-02-24
sidebar:
    order: 4
---

If Alta is not needed anymore you can remove it completely from your server.

:::caution
Before uninstall please [Make a Backup](/en/alta/getting-started/backup/)!
:::

## Remove service

If you use Systemd, first of all stop your service:

```sh
systemctl stop alta
```

Disable autorun:

```sh
systemctl disable alta
```

And remove service file:

```sh
rm /etc/systemd/system/alta.service
```

## Cleanup

Remove binary file and configuration files:

```sh
rm -rf /usr/bin/alta /etc/alta
```
