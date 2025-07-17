---
title: Add profile
description: How add profile?
sidebar:
    order: 3
---

Puedes leer sobre el perfil [aquí](/en/senta/profiles)

Para agregar un perfil, ve a la pestaña **perfiles ffmpeg**

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Luego haz clic en `Add profile`

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

A continuación, configura el Nombre

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

Después, configura el comando. En este ejemplo, vamos a crear un comando que transmita continuamente un archivo estático (por ejemplo, para crear una tabla de prueba).

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

En este comando de ffmpeg, la secuencia de entrada ha sido reemplazada con la variable `${i}` y la secuencia de salida con `${o}`. Y guárdalo

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)El perfil se añadirá

![img](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)