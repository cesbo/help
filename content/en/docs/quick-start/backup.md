---
title: Backup
weight: 3
---

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
