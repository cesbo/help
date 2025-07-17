---
title: Adding logo
description: Make logo for stream
sidebar:
    order: 2
---

Para crear un logo para un stream, puedes usar el perfil de ffmpeg [Logo adding](https://github.com/cesbo/senta-streamer-profiles/blob/master/profiles/logo.profile). Aquí tienes un ejemplo de cómo agregar un logo a un stream:

Primero, necesitas agregar un perfil para el logo. Ve a la pestaña de [perfiles de ffmpeg](/en/senta/profiles) y haz clic en [cargar perfil desde github](/en/senta/profiles/loading-from-github). Luego, encontrarás el perfil `Logo adding` y lo agregarás.

A continuación, necesitas añadir este perfil al stream. Establece los parámetros de entrada y salida, así como las variables: X, Y - desplazamiento del logo desde la esquina superior derecha, logo - ruta del archivo del logo.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_1.png)En este ejemplo, obtenemos el stream de un stream rtsp y descargamos un archivo ts al servidor.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_2.png)Finalmente, puedes ver el resultado en VLC.

![](https://cesbo.b-cdn.net/senta/help/streamer/whith_logo.png)