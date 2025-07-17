---
title: Uninstall
date: 2023-02-24
sidebar:
    order: 4
---

Si ya no necesitas Alta, puedes eliminarla completamente de tu servidor.

:::caution
Antes de desinstalar, por favor [Hacer una Copia de Seguridad](/en/alta/getting-started/backup/)!
:::

## Eliminar servicio

Si utilizas Systemd, primero detén tu servicio:

```sh
systemctl stop alta
```

Desactiva el inicio automático:

```sh
systemctl disable alta
```

Y elimina el archivo de servicio:

```sh
rm /etc/systemd/system/alta.service
```

## Limpieza

Elimina el archivo binario y los archivos de configuración:

```sh
rm -rf /usr/bin/alta /etc/alta
```