---
title: Update
description: Update Astra
weight: 4
---

Before update please make [backup]({{< relref "backup" >}})

## Install update

```sh
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Restart Astra after update:

```sh
systemctl restart astra
```

## Test versions

If you want to try some experimental version.
Just use in the `curl` command custom link instead of `https://cesbo.com/astra-latest`
