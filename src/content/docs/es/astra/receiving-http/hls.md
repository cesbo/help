---
title: HLS
sidebar:
    order: 1
---

HLS o HTTP Live Streaming es un protocolo de transmisión de video de tasa de bits adaptable basado en HTTP. Es el formato más popular para streaming a través de internet (servicios OTT). Lee más sobre el [Protocolo HLS](/en/articles/protocols/hls/)

## Formato de Dirección

```
http://address
http://address:port/path
http://login:password@address:port/path#options
```

Esta es una dirección HTTP común. Astra también soporta https.

- `login:password` – usuario y contraseña para la autenticación HTTP. Soporta métodos de autenticación Básica y Digest
- `address` – dirección del servidor IPv4 o nombre de dominio
- `port` – número de puerto. Por defecto: `80` para http y `443` para https
- `path` – la ruta al recurso. Por defecto: `/`

Opciones:

- `ua=Name` – cabecera User-Agent personalizada
- `timeout=N` - tiempo de espera para la carga de segmentos HLS. Por defecto, el tiempo de espera depende de la duración del segmento
- `debug` - registra las cabeceras de respuesta. También se debe activar el modo de depuración en los mensajes de registro
- `bandwidth=N` - selecciona el flujo con el ancho de banda definido. Por defecto, astra selecciona el flujo con el valor de ancho de banda máximo

## Interfaz Web

Para configurar la entrada HLS en Astra, simplemente escribe tu dirección de fuente en el campo de Entrada.