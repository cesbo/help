---
title: "Recepción RSTP"
date: 2023-03-23
sidebar:
    order: 12
---

El RSTP es un protocolo muy utilizado para la transmisión de contenidos multimedia a través de redes IP y se suele emplear en cámaras IP por su baja latencia y su capacidad de transmisión de vídeo de alta calidad.

## Formato de la dirección[](https://help.cesbo.com/astra/receiving/ip/rtsp#address-format)

Las direcciones RSTP se utilizan para identificar la ubicación del flujo de medios que se está transmitiendo por la red

```
rtsp://address
rtsp://address:port/path
rtsp://login:password@address:port/path#options
```

- `login:password` - nombre de usuario y contraseña para la autenticación RTSP. Admite los métodos de autenticación Basic y Digest.
- `address` - Dirección IPv4 del servidor o nombre de dominio
- `port` - número de puerto. Por defecto: `554`
- `path` - la ruta al recurso. Por defecto: `/`

Opciones:

- `tcp` - modo intercalado. flujo de recepción a través de TCP en lugar de UDP
- `ua=Name` - cabecera User-Agent personalizada

## Interfaz web[](https://help.cesbo.com/astra/receiving/ip/rtsp#web-interface)

Para configurar una entrada RSTP en Astra, puede introducir la dirección de origen directamente en el campo `Input address` en la configuración del flujo o utilice el formulario de configuración de entrada al que se accede haciendo clic en el formulario con el icono del engranaje:

![Opciones RTSP](https://cdn.cesbo.com/help/astra/receiving/ip/rtsp/options.png)

- `RSTP address` - dirección de origen del flujo RSTP
- `Interleaved mode` - por defecto Astra utiliza UDP para recibir datos multimedia de la cámara, el modo intercalado fuerza a la cámara a enviar datos a través de TCP

## Solución de problemas[](https://help.cesbo.com/astra/receiving/ip/rtsp#troubleshooting)

### h.265 no funciona

La versión actual de Astra sólo soporta H.264

### Errores de tiempo de espera

Los mensajes de error pueden incluir `Connection timeout` o `Response timeout`que sugieren que la cámara no está respondiendo a las peticiones de Astra. Una posible causa de este problema es cuando la cámara se bloquea y no puede responder a las peticiones

### Autenticación fallida

Nombre de usuario o contraseña no válidos para el flujo RTSP

### Formato de codificación desconocido

Esto puede indicar que el formato de datos del flujo no es reconocido por Astra. Este error puede producirse cuando el flujo RSTP utiliza un formato de datos o un método de codificación no admitidos
