---
title: HTTP Access Log
sidebar:
    order: 3
---

Los registros de acceso HTTP son información sobre las solicitudes procesadas por el servidor HTTP incorporado de Astra.

## Configuración

Los registros de acceso HTTP están desactivados por defecto; puedes activarlos en Configuración → General, estableciendo la ruta completa al archivo de registro en el campo "Registro de Acceso HTTP". Por ejemplo: `/var/log/astra-access.log`

## Campos del Registro

```
192.168.88.100 - - [11/Aug/2023:07:03:07 +0000] "GET / HTTP/1.1" 200 0
192.168.88.100 - admin [11/Aug/2023:07:03:07 +0000] "POST /control/ HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/71545838.m3u8 HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/113900585_92b9.ts HTTP/1.1" 200 0
```

El registro de acceso tiene un formato como la mayoría de los servidores HTTP:

```
remote_addr - remote_user [time] "request" status bytes_sent
```

## Rotación de Registros

:::caution
Por favor, usa la rotación de registros para ahorrar espacio en disco y asegurar que tus registros se mantengan en buenas condiciones
:::

Logrotate es una utilidad del sistema que gestiona la rotación y compresión automática de archivos de registro. Para usarla, crea un nuevo archivo de configuración en `/etc/logrotate.d/astra`:

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

- `/var/log/astra-access.log` - ruta completa al archivo de registro. Puedes definir varios archivos separados por espacios
- `daily` - rotación diaria. Cada archivo de archivo de registro contendrá registros de un solo día
- `rotate 10` - solo se mantienen los últimos 10 archivos de archivo de registro. Para rotación diaria, esto equivale a 10 días de archivos
- `missingok` - ignora el error si no se encuentra el archivo de registro definido
- `notifempty` - el registro no se rotará si está vacío
- `compress` - comprime los archivos de archivo de registro con gzip
- `delaycompress` - el nuevo archivo de archivo de registro se comprimirá al día siguiente. Como Astra continúa escribiendo registros en el nuevo archivo de archivo hasta que se ejecuta el script `postrotate`, esta opción es necesaria para evitar la pérdida de los últimos mensajes
- `sharedscripts` - ejecuta el script `postrotate` una vez para todos los archivos de registro
- `postrotate` - se ejecuta el comando después de que el archivo de registro es rotado. Astra recibe una señal para comenzar a escribir en el nuevo archivo vacío