---
title: Static image
description: Streaming static image
sidebar:
    order: 1
---

Para agregar un perfil, dirígete a la pestaña **ffmpeg profiles**

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Luego haz clic en **add profile**

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

A continuación, configura el Nombre

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

Luego, configura el comando. En este ejemplo, estamos creando un comando que transmite continuamente un archivo estático (por ejemplo, para crear una tabla de prueba). En este comando de ffmpeg, el flujo de entrada ha sido reemplazado por la variable `${i}`, y el flujo de salida por `${o}`. Y guárdalo.

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)

El perfil será agregado

![](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)

A continuación, puedes agregar este perfil al flujo. Configura los parámetros de entrada y salida. En este ejemplo, descargamos un archivo ts al servidor y especificamos la ruta en el campo de entrada, luego configuramos un udp-stream como salida.

![](https://cesbo.b-cdn.net/senta/help/streamer/set-prof.png)

¡Puedes ver el resultado en VLC!

![](https://cesbo.b-cdn.net/senta/help/streamer/matras.png)