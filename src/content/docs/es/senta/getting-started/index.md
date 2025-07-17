---
title: Introduction
description: Welcome to Senta-streamer.
sidebar:
  order: 1
  label: Introduction
---

Senta-streamer es una solución sencilla para el procesamiento de transmisiones de video, esencialmente gestionando procesos de ffmpeg.

## Características

- Administra procesos de ffmpeg (iniciar, detener, reiniciar).
- Recoge registros para análisis posterior.
- Los perfiles de transcodificación permiten aplicar las mismas configuraciones a un grupo de transmisiones. También ofrecen a los usuarios experimentados de ffmpeg amplias opciones para un ajuste preciso, mientras que permiten a los usuarios menos experimentados configurar el procesamiento de video sin ahondar en las innumerables opciones de ffmpeg.
- Los perfiles de transcodificación también soportan la adición de variables, facilitando a los usuarios finales la personalización del procesamiento de transmisiones.

## Lógica de Senta-Streamer

Senta-Streamer es una aplicación de servidor responsable de gestionar los procesos de ffmpeg. No incluye la aplicación de ffmpeg en sí misma. Por lo tanto, es compatible con cualquier versión de ffmpeg.

La lógica de la aplicación se divide en dos niveles:

- Perfil de ffmpeg: describe la línea de comando para lanzar un proceso de ffmpeg, en el que se especifican parámetros como entrada, salida y otras opciones (por ejemplo, el códec).

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

- Proceso de ffmpeg, que utiliza un perfil de ffmpeg, estableciendo sus propias variables

```
{
    input: test.ts,
    output: udp://foo-boo:1245
}
```

El perfil de ffmpeg es una entidad editable; los usuarios finales pueden escribir sus propios perfiles de transcodificación o utilizar los ya hechos por la comunidad. También pueden convertir una línea de comando de ffmpeg con teclas en un perfil simplemente reemplazando la entrada y la salida con variables.