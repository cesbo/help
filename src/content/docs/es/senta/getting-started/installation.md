---
title: Installation
description: Get started with Senta streamer.
sidebar:
    order: 2
---

## Inicio Rápido

Antes de instalar senta-streamer, asegúrate de que [ffmpeg](https://ffmpeg.org/) esté instalado en tu servidor.

Para comenzar a usar senta-streamer, necesitas descargar la última versión. Después de descargarla, puedes instalarla en tu servidor.

Para iniciar la aplicación, necesitas inicializar la configuración:

```bash [terminal]
./senta init
```

Senta crea un archivo **config.json** en el mismo directorio en el que ejecutas este comando. Puedes editar este archivo y establecer los parámetros (por ejemplo, `username` y `password`).

Después de eso, puedes iniciar la aplicación con el comando:

```bash [terminal]
./senta config.json
```

La aplicación comenzará y podrás acceder a la interfaz web en `http://dirección_de_tu_servidor:8018` (puedes cambiar el puerto en el archivo config.json).

A continuación, puedes [convertir senta a un demonio](#set-as-demon) y configurar perfiles y streams.

## Convertir en demonio

Para crear un demonio (o servicio) en sistemas basados en Linux como Ubuntu, puedes utilizar la herramienta systemd. Aquí te mostramos cómo crear un servicio para tu aplicación:

Crea un nuevo archivo de configuración del servicio en el directorio `/etc/systemd/system/`. Por ejemplo, puedes nombrarlo `senta.service`.

Abre este archivo en un editor de texto y añade el siguiente contenido:

```toml
[Unit]
Description=Senta Application
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=5
User=root
WorkingDirectory=/root
ExecStart=/path/to/senta config.conf

[Install]
WantedBy=multi-user.target
```

Nota: `/path/to/senta` es la ruta para ejecutar el archivo binario de senta. `config.conf` es el archivo de configuración.

Guarda el archivo y cierra el editor de texto.

Actualiza la lista de servicios systemd para detectar tu nuevo servicio:

```bash [terminal]
sudo systemctl daemon-reload
```

Ahora puedes gestionar tu servicio usando el comando systemctl. Por ejemplo, para iniciar el servicio y configurarlo para que se inicie automáticamente al arrancar el sistema, ejecuta lo siguiente:

```bash [terminal]
sudo systemctl start senta
sudo systemctl enable senta
```

Ahora tu aplicación funcionará como un demonio, reiniciándose automáticamente en caso de fallo. Puedes usar los comandos systemctl para gestionar este servicio, como detener, reiniciar, estado, etc.