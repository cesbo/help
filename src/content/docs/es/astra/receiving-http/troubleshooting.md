---
title: Troubleshooting
sidebar:
    order: 100
---

## Códigos HTTP comunes

Los códigos de respuesta HTTP son indicadores numéricos de tres dígitos proporcionados por un servidor en respuesta a la solicitud HTTP de un cliente.

En una solicitud exitosa, el servidor devuelve el código 200 y el contenido de respuesta asociado, como una transmisión de medios o una lista de reproducción de medios HLS.

### 404 Not Found

Este código de estado significa que el servidor no puede localizar ninguna coincidencia para la URL solicitada. Posibles causas:

- dirección URL incompleta o error tipográfico
- el enlace temporal al canal ha expirado y ya no está disponible
- el canal ha sido deshabilitado en el servidor
- el servidor no puede retransmitir el canal debido a errores de recepción

### 403 Forbidden

Indica que el servidor entendió la solicitud del cliente, pero se niega a completarla. Posibles causas:

- el token temporal ha expirado o no ha sido proporcionado
- el acceso al canal está restringido según la dirección IP (ubicación GEO) o el encabezado User-Agent
- el acceso ha sido revocado por el administrador del servidor

### Tiempo de espera de conexión

Normalmente ocurre cuando la solicitud de un cliente a un servidor tarda demasiado tiempo. Posibles causas:

- problemas de red
- servidores sobrecargados o un límite de conexiones configurado
- restricción del lado del servidor sobre la duración permitida de la conexión
- restricciones de firewall en la conexión
- número de puerto o dirección de servidor incorrectos

## ¿Por qué la calidad de la transmisión es más baja después de la retransmisión?

Al trabajar con la recepción HLS, es posible encontrar problemas de calidad después de retransmitir una transmisión. Por ejemplo, una transmisión puede reproducirse en calidad HD en el reproductor VLC, pero después de la retransmisión, el video aparece en baja resolución. Este problema surge típicamente porque la transmisión HLS contiene variantes con diferentes resoluciones.

Para resolver este problema, descarga la lista de reproducción HLS y ábrela en un editor de texto. La lista de reproducción tendrá un contenido que se verá así:

```
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6221600,RESOLUTION=1920x1080
https://example.com/video/1080.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=246440,RESOLUTION=320x184
https://example.com/video/240.m3u8
```

Examina el contenido de la lista de reproducción y busca las líneas `#EXT-X-STREAM-INF` que definen los diferentes streams de calidad disponibles. En este ejemplo, hay dos streams disponibles: uno con una resolución de 1920x1080 y otro con una resolución de 320x184.

Selecciona la URL que corresponde a la calidad deseada. En la lista de reproducción de ejemplo, la URL del stream HD es `https://example.com/video/1080.m3u8`

Utiliza esta URL en la configuración de entrada.