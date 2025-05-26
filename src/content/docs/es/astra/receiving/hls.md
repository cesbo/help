---
title: "Recepción de HLS"
date: 2023-08-10
sidebar:
    order: 9
---

HLS o HTTP Live Streaming es un protocolo de streaming de vídeo con bitrate adaptativo basado en HTTP. Es el formato más popular para streaming a través de Internet (servicios OTT). Más información sobre el [protocolo HLS](/es/misc/articles/hls)

## Formato de la dirección[](/es/astra/receiving/ip/hls#address-format)

```
http://address
http://address:port/path
http://login:password@address:port/path#options
```

Esta es una dirección HTTP común. Astra también soporta https.

- `login:password` - nombre de usuario y contraseña para la autenticación HTTP. Admite los métodos de autenticación Basic y Digest.
- `address` - Dirección IPv4 del servidor o nombre de dominio
- `port` - número de puerto. Por defecto: `80` para http y `443` para https
- `path` - la ruta al recurso. Por defecto: `/`

Opciones:

- `ua=Name` - cabecera User-Agent personalizada
- `timeout=N` - tiempo de espera para la carga de segmentos HLS. Por defecto, el tiempo de espera depende de la duración del segmento
- `debug` - cabeceras de respuesta de registro. También se debe activar la depuración en los mensajes de registro
- `bandwidth=N` - seleccionar flujo con ancho de banda definido. Por defecto, astra selecciona el flujo con el valor máximo de ancho de banda.

## Interfaz web[](/es/astra/receiving/ip/hls#web-interface)

Para configurar la entrada HLS en Astra, basta con escribir la dirección de origen en el campo Entrada.
