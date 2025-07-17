---
title: Backup
description: Create and restore backups of Astra binary and configuration files
sidebar:
    order: 11
---

¡Las copias de seguridad son una parte importante de la administración del sistema!

## Crear

Guarda el archivo binario y los archivos de configuración en un archivo:

```sh
tar -Pzcf ~/astra-backup.tar.gz /usr/bin/astra /etc/astra
```

## Restaurar

Para extraer la copia de seguridad, ejecuta los siguientes comandos:

```sh
rm -f /usr/bin/astra
tar -Pxf ~/astra-backup.tar.gz
```