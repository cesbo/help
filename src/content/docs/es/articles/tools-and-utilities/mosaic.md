---
title: "Mosaic: Channel Screenshots on Dashboard"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
---

Mosaic es un script sencillo para crear capturas de pantalla de canales con ffmpeg y configurarlas en el Panel de Astra utilizando la API de Astra.

Las capturas de pantalla de los canales ayudan a evaluar visualmente la calidad de los canales.

![Panel con Capturas de Pantalla](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Requisitos

- Astra con [HTTP Play](/en/astra/delivery-http/http-play/) habilitado
- FFmpeg

## Instalar FFmpeg

Instala FFmpeg con el gestor de paquetes del sistema:

```sh
apt install ffmpeg
```

## Configurar HTTP Play

En tu servidor, crea un nuevo directorio para almacenar las imágenes de las capturas de pantalla:

```sh
mkdir -p /var/lib/astra/mosaic
```

Luego abre la interfaz web de Astra -> Configuración -> HTTP Play:

![Configuración de HTTP Play](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Activa HTTP Play si está deshabilitado y establece la ruta al directorio de capturas de pantalla. Listo, HTTP Play ya está configurado y puedes guardar los cambios.

También en la configuración de HTTP Play puedes copiar el enlace al `playlist.m3u8`, este archivo contiene enlaces a todos los canales habilitados. El enlace al playlist se ve así: `https://example.com:8000/playlist.m3u8`

Si usas Autorización HTTP, establece un Token para el administrador. Abre la Interfaz Web de Astra -> Configuración -> Usuarios -> selecciona administrador, y establece cualquier Token, por ejemplo: `c6017ac9`. Añade este token a la URL del playlist: `https://example.com:8000/playlist.m3u8?token=c6017ac9`

## Descargar y Configurar el Script

[Descarga](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) el script y guárdalo en tu servidor:

```sh
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

Abre el script con cualquier editor de texto y modifica las siguientes variables:

- `THREADS` - número de hilos para capturar múltiples capturas de pantalla al mismo tiempo. Menos hilos tomarán más tiempo para actualizar todas las imágenes, mientras que más hilos aumentarán el uso de la CPU. Puedes establecer tantos hilos como núcleos de CPU tengas
- `PLAYLIST_URL` - URL al archivo `playlist.m3u8` del paso anterior
- `SCREENSHOT_PATH` - ruta para almacenar las capturas de pantalla en tu servidor: `/var/lib/astra/mosaic/`
- `API_PORT` - puerto para la API de Astra
- `API_AUTH` - inicio de sesión y contraseña de administrador para acceder a la API de Astra

## Iniciar el script con Systemd

Para iniciar el script automáticamente, puedes agregarlo al systemd. Descarga el archivo de configuración para systemd y guárdalo en tu servidor:

```sh
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

Los siguientes comandos pueden usarse para gestionar el script:

- Iniciar el script: `systemctl start mosaic`
- Detener el script: `systemctl stop mosaic`
- Habilitar inicio automático: `systemctl enable mosaic`
- Deshabilitar inicio automático: `systemctl disable mosaic`

Después de iniciar, verifica que se están creando nuevos archivos png en el directorio de capturas de pantalla:

```sh
ls /var/lib/astra/mosaic
```