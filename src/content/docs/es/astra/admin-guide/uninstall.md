---
title: "Desinstalar"
date: 2023-02-21
sidebar:
    order: 3
---

Si Astra ya no es necesario, puedes eliminarlo completamente de tu servidor.

:::note 
Antes de desinstalar por favor [Hacer una copia de seguridad](/es/astra/admin-guide/backup)!
:::

## Desactivar servicio[](/es/astra/admin-guide/uninstall#disable-service)

Detenga el servicio y desactive la ejecución automática:

```
systemctl stop astra
systemctl disable astra
```

## Eliminar servicio[](/es/astra/admin-guide/uninstall#remove-service)

Retire el servicio del sistema:

```
astra remove
```

Si tiene varios servicios en su servidor, deberá especificar un nombre personalizado:

```
astra remove astra-8001
```

## Limpieza[](/es/astra/admin-guide/uninstall#cleanup)

Por último, elimine el archivo binario y los archivos de configuración:

```
rm -rf /usr/bin/astra /etc/astra
```
