---
title: System of profiles
description: What is a Profile?
sidebar:
    order: 1
---

## ¿Qué es un perfil?

Un Perfil es una entidad en senta-streamer, que representa un comando para ejecutar el programa ffmpeg, donde los parámetros como los flujos de entrada y salida, así como otros parámetros definidos por el usuario, se reemplazan con variables.

Ejemplo:

```bash
ffmpeg -re -stream_loop -1 -i input.ts -vcodec mpeg4 -aspect 16:9 -f mpegts udp://bla-bla:1234
```

Este ejemplo inicia un flujo UDP con la transmisión estática del archivo `input.ts` a la dirección `udp://bla-bla:1234`.

Supongamos que queremos usar senta-streamer para transmitir un archivo estático. Podemos simplemente agregar una línea a los perfiles, o podemos reemplazar los flujos de entrada y salida con variables (`${i}` y `${o}` respectivamente), resultando en un perfil de transcodificación universal que puede escalarse a otros flujos. Como resultado, obtenemos:

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

## Estructura del perfil

Además del perfil habitual con variables estándar como `${i}` y `${o}`, puedes agregar algunas extensiones a tu perfil.

Puedes establecer un `NAME` para el perfil. Este nombre se usará cuando, por ejemplo, cargues el perfil en github. Es un campo opcional.

Ejemplo:

```bash
ffmpeg -y -hide_banner -i ${i} -map 0:0 -map 0:1 -c:v h264_nvenc -preset fast -profile:v main -filter:v yadif -forced-idr 1 -b:v 4M -c:a aac -b:a 128k -r 25 -g 8 -keyint_min 13 -f mpegts ${o}
NAME "HD h264"
```

A continuación, puedes agregar [variables](/en/senta/profiles/variables) personalizadas después de la palabra clave `WHERE`.

Ejemplo:

```bash
// Perfil de inicio simple para codificación HD h264
// Puedes cambiarlo, bifurcarlo y compartirlo con otros
ffmpeg -y -hide_banner -i ${i} -map 0:0 -map 0:1 -c:v h264_nvenc ${gpu} -preset fast -profile:v main -filter:v yadif -forced-idr 1 -b:v 4M -c:a aac -b:a 128k -r 25 -g 8 -keyint_min 13 -f mpegts ${o}
NAME "HD h264"
WHERE
[
 {
   "desc": "gpu",
   "data": {
    "name": "GPU",
    "description": "Seleccione la GPU que usará el flujo, déjelo vacío si no usa GPU",
    "command": "-gpu $value",
    "default": ""
   }
 }
]
```

**Nota:** puedes agregar líneas de comentarios a tu perfil que comiencen con `//`