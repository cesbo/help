---
title: Backup
date: 2023-02-24
sidebar:
    order: 3
---

:::tip
Backups is an important part of system administration!
:::

## Create

Save binary file and configuration files to archive:

```sh
tar -Pzcf ~/alta-backup.tar.gz /usr/bin/alta /etc/alta
```

## Restore

To extract backup launch next commands:

```sh
rm -f /usr/bin/alta
tar -Pxf ~/alta-backup.tar.gz
```
