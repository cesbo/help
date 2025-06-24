---
title: Backup
description: Create and restore backups of Astra binary and configuration files
sidebar:
    order: 11
---

Backups are an important part of system administration!

## Create

Save binary file and configuration files to archive:

```sh
tar -Pzcf ~/astra-backup.tar.gz /usr/bin/astra /etc/astra
```

## Restore

To extract backup launch next commands:

```sh
rm -f /usr/bin/astra
tar -Pxf ~/astra-backup.tar.gz
```
