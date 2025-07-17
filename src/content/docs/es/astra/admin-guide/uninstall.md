---
title: Uninstall
sidebar:
    order: 100
---

Si Astra ya no es necesario, puedes eliminarlo completamente de tu servidor.

:::danger
Antes de desinstalar, por favor [haz una copia de seguridad](/en/astra/getting-started/backup/)!
:::

## Desactivar el servicio

Detén el servicio y desactiva el inicio automático:

```sh
systemctl stop astra
systemctl disable astra
```

## Eliminar el servicio

Elimina el servicio del sistema:

```sh
astra remove
```

Si tienes varios servicios en tu servidor, entonces debes especificar un nombre personalizado:

```sh
astra remove astra-8001
```

## Limpieza

Finalmente, elimina el archivo binario y los archivos de configuración:

```sh
rm -rf /usr/bin/astra /etc/astra
```