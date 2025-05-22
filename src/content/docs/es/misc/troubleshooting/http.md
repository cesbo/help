---
title: "Resolución de problemas de recepción HTTP/HLS"
date: 2023-04-05
sidebar:
    order: 2
---

## Códigos HTTP comunes[](https://help.cesbo.com/misc/troubleshooting/receiving/http#common-http-codes)

Los códigos de respuesta HTTP son indicadores numéricos de tres dígitos que da un servidor en respuesta a la solicitud HTTP de un cliente.

Si la solicitud tiene éxito, el servidor devuelve el código 200 y el contenido de respuesta asociado, como un flujo multimedia o una lista de reproducción multimedia HLS.

### 404 no encontrado

Este código de estado significa que el servidor no puede localizar ninguna coincidencia para la URL solicitada. Posibles causas:

- dirección URL incompleta o error tipográfico
- el enlace temporal al canal ha caducado y ya no está disponible
- se ha desactivado el canal en el servidor
- el servidor no puede retransmitir el canal debido a errores de recepción

### 403 Prohibido

Indica que el servidor ha entendido la solicitud del cliente, pero se niega a completarla. Posibles causas:

- el token temporal ha caducado o no se ha proporcionado
- el acceso al canal está restringido en función de la dirección IP (localización GEO) o del encabezado User-Agent
- el acceso ha sido revocado por el administrador del servidor

### Tiempo de espera de la conexión

Suele ocurrir cuando la petición de un cliente a un servidor tarda demasiado tiempo. Posibles causas:

- problemas de red
- servidores sobrecargados o un límite de conexión configurado
- restricción en el servidor de la duración permitida de la conexión
- restricciones del cortafuegos en la conexión
- número de puerto o dirección de servidor incorrectos

## ¿Por qué la calidad del flujo es inferior tras la retransmisión?[](https://help.cesbo.com/misc/troubleshooting/receiving/http#why-is-the-stream-quality-lower-after-retransmission)

Cuando se trabaja con recepción HLS, es posible encontrar problemas de calidad después de retransmitir un flujo. Por ejemplo, un flujo puede reproducirse en calidad HD en el reproductor VLC, pero tras la retransmisión, el vídeo aparece en baja resolución. Este problema suele producirse porque el flujo HLS contiene variantes con resoluciones diferentes.

Para resolver este problema, descargue la lista de reproducción HLS y ábrala en un editor de texto: La lista de reproducción tendrá un contenido similar al siguiente:

```
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6221600,RESOLUTION=1920x1080
https://example.com/video/1080.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=246440,RESOLUTION=320x184
https://example.com/video/240.m3u8
```

Examine el contenido de la lista de reproducción y busque el icono `#EXT-X-STREAM-INF` líneas que definen los diferentes flujos de calidad disponibles. En este ejemplo, hay dos flujos disponibles: uno con una resolución de 1920x1080 y otro con una resolución de 320x184.

Seleccione la URL correspondiente a la calidad deseada. En la lista de reproducción de ejemplo, la URL del flujo HD es `https://example.com/video/1080.m3u8`

Utilice esta URL en los ajustes de entrada
