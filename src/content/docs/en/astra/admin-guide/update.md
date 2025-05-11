---
title: Update
date: 2023-02-21
sidebar:
    order: 1
---

Install new version on your server

:::danger
Before update please [Make a Backup](../../admin-guide/administration/backup)!
:::

## Install update

Download latest binary file:

```sh
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Restart Astra after update:

```sh
systemctl restart astra
```
