---
title: "Mosaico: Capturas de pantalla de canales en el panel de control"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
sidebar:
    order: 7
---

Mosaic es un sencillo script para crear capturas de pantalla de canales con ffmpeg y ponerlas en Astra Dashboard usando Astra API.

Las capturas de pantalla de canales ayudan a evaluar visualmente la calidad de los canales.

![Panel de control con capturas de pantalla](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Requisitos[](/es/astra/admin-guide/mosaic#requirements)

- Astra con [HTTP Play](/es/astra/delivery/http-play) activado
- FFmpeg

## Instalar FFmpeg[](/es/astra/admin-guide/mosaic#install-ffmpeg)

Instala FFmpeg con el gestor de paquetes del sistema:

```
apt install ffmpeg
```

## Configurar HTTP Play[](/es/astra/admin-guide/mosaic#configure-http-play)

En su servidor cree un nuevo directorio para almacenar las imágenes de las capturas de pantalla:

```
mkdir -p /var/lib/astra/mosaic
```

A continuación, abra la interfaz web de Astra -> Configuración -> HTTP Play:

![Ajustes de reproducción HTTP](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Active HTTP Play si está desactivado y establezca la ruta al directorio de capturas de pantalla. Listo, HTTP Play ya está configurado y puede guardar los cambios.

También en la configuración de HTTP Play puede copiar enlace a la `playlist.m3u8`Este archivo contiene enlaces a todos los canales habilitados. Enlace a la lista de reproducción lookls como: `https://example.com:8000/playlist.m3u8`

Si utiliza Autorización HTTP, establezca un Token para el administrador. Abra la Interfaz Web de Astra -> Configuración -> Usuarios -> seleccione administrador, y establezca cualquier Token, por ejemplo: `c6017ac9`. Añada este token a la URL de la lista de reproducción: `https://example.com:8000/playlist.m3u8?token=c6017ac9`

## Descargar y configurar el script[](/es/astra/admin-guide/mosaic#download-and-configure-script)

[Descargue](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) el script y guárdelo en su servidor:

```
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

Abra el script con cualquier editor de texto y modifique las siguientes variables:

- `THREADS` - número de subprocesos para capturar simultáneamente varias pantallas. Menos subprocesos tardarán más tiempo en actualizar todas las imágenes, mientras que más subprocesos aumentarán el uso de la CPU. Puede establecer tantos subprocesos como núcleos de CPU tenga
- `PLAYLIST_URL` - URL a `playlist.m3u8` archivo del paso anterior
- `SCREENSHOT_PATH` - para almacenar las capturas de pantalla en su servidor: `/var/lib/astra/mosaic/`
- `API_PORT` - portar a Astra API
- `API_AUTH` - login y contraseña admin para acceder a la API de Astra

## Iniciar script con Systemd[](/es/astra/admin-guide/mosaic#start-script-with-systemd)

Para iniciar el script automáticamente puede añadirlo al systemd. Descargue el archivo de configuración para systemd y guárdelo en su servidor:

```
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

Los siguientes comandos pueden utilizarse para gestionar el script:

- Iniciar guión: `systemctl start mosaic`
- Detener guión: `systemctl stop mosaic`
- Activa la ejecución automática: `systemctl enable mosaic`
- Desactiva la ejecución automática: `systemctl disable mosaic`

Después del inicio compruebe que se están creando nuevos archivos png en el directorio de capturas de pantalla:

```
ls /var/lib/astra/mosaic
```
