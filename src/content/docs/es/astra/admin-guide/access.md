---
title: "Registros de acceso HTTP"
date: 2023-08-10
sidebar:
    order: 21
---

Los registros de acceso HTTP contienen información sobre las solicitudes procesadas por el servidor HTTP integrado de Astra.

## Configuración[](https://help.cesbo.com/astra/admin-guide/log/access#configuration)

Los registros de acceso HTTP están desactivados por defecto, puede activarlos en Configuración -> General, establezca la ruta completa al archivo de registro en el campo "Registro de acceso HTTP". Por ejemplo `/var/log/astra-access.log`

## Campos de registro[](https://help.cesbo.com/astra/admin-guide/log/access#log-fields)

```
192.168.88.100 - - [11/Aug/2023:07:03:07 +0000] "GET / HTTP/1.1" 200 0
192.168.88.100 - admin [11/Aug/2023:07:03:07 +0000] "POST /control/ HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/71545838.m3u8 HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/113900585_92b9.ts HTTP/1.1" 200 0
```

El registro de acceso tiene el mismo formato que la mayoría de los servidores HTTP:

```
remote_addr - remote_user [time] "request" status bytes_sent
```

## Rotación de troncos[](https://help.cesbo.com/astra/admin-guide/log/access#log-rotation)

::alert 
Utilice la rotación de registros para ahorrar espacio en disco y garantizar que sus registros se mantengan en buen estado.
::

Logrotate es una utilidad del sistema que gestiona la rotación y compresión automáticas de los archivos de registro. Para utilizarla, cree un nuevo archivo de configuración en `/etc/logrotate.d/astra`:

```
/var/log/astra-access.log {
    daily
    rotate 10
    missingok
    notifempty
    compress
    delaycompress
    sharedscripts
    postrotate
        systemctl reload astra || true
    endscript
}
```

- `/var/log/astra-access.log` - ruta completa al archivo de registro. Puede definir varios archivos separados por espacios
- `daily` - rotación diaria. Cada fichero de archivo de registro contendrá los registros de un solo día
- `rotate 10` - sólo se conservan los 10 últimos archivos de registro. Para una rotación diaria, esto equivale a 10 días de archivos.
- `missingok` - ignorar el error si no se encuentra el archivo de registro definido
- `notifempty` - el registro no se girará si está vacío
- `compress` - comprimir los archivos de registro con gzip
- `delaycompress` - El nuevo archivo de registro se comprimirá al día siguiente. Como Astra sigue escribiendo registros en el nuevo archivo de registro hasta el `postrotate` esta opción es necesaria para evitar la pérdida de los últimos mensajes.
- `sharedscripts` - ejecutar la `postrotate` script una vez para todos los archivos de registro
- `postrotate` - se ejecuta después de rotar el archivo de registro. Astra recibe una señal para empezar a escribir en el nuevo archivo vacío
