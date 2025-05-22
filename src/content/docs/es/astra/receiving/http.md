---
title: "Recepción HTTP MPEG-TS"
date: 2023-08-10
sidebar:
    order: 10
---

Protocolo basado en HTTP para streaming de vídeo. Astra recibe flujo continuo del servidor en respuesta HTTP.

## Formato de la dirección[](https://help.cesbo.com/astra/receiving/ip/http#address-format)

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
- `timeout=N` - tiempo de espera para empezar a recibir contenido del servidor. Por defecto `10` segundos
- `debug` - cabeceras de respuesta del registro. La depuración también debe estar activada en la configuración del registro
- `buffer_time=N` - especifica el tamaño del búfer temporal para recibir el flujo y sincronizar la tasa de bits. Astra descarga los datos del flujo en el búfer a la máxima velocidad y, a continuación, envía los datos de manera uniforme para su procesamiento
- `no_sync` - es una opción corta para `buffer_time=0` desactiva la sincronización y descarga los datos del flujo sin límites

## Interfaz web[](https://help.cesbo.com/astra/receiving/ip/http#web-interface)

Para configurar la entrada HTTP MPEG-TS en Astra, sólo tienes que escribir la dirección de tu fuente en el campo Entrada.
