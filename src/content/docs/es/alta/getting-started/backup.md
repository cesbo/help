---
title: Backup
description: Create and restore backups of Alta binary and configuration files
sidebar:
    order: 11
---

¡Las copias de seguridad son una parte importante de la administración del sistema!

## Crear

Guardar el archivo binario y archivos de configuración en un archivo:

```sh
tar -Pzcf ~/alta-backup.tar.gz /usr/bin/alta /etc/alta
```

## Restaurar

Para extraer la copia de seguridad, ejecute los siguientes comandos:

```sh
rm -f /usr/bin/alta
tar -Pxf ~/alta-backup.tar.gz
```