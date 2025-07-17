---
title: Updating Astra
description: Download and install the latest version of Astra with proper backup procedures
sidebar:
    order: 12
---

Instalar nueva versión en su servidor

:::danger
Antes de actualizar, por favor [Haga un Respaldo](/en/astra/getting-started/backup/)!
:::

## Instalar actualización

Descargue el último archivo binario:

```sh
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Reinicie Astra después de la actualización:

```sh
systemctl restart astra
```