---
title: Updating Astra
sidebar:
    order: 12
---

Install new version on your server

:::danger
Before update please [Make a Backup](/en/astra/getting-started/backup/)!
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
