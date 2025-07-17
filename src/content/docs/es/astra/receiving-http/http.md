---
title: HTTP MPEG-TS
sidebar:
    order: 2
---

Protocolo basado en HTTP para transmisión de video. Astra recibe un flujo continuo desde el servidor en la respuesta HTTP.

## Formato de dirección

```
http://direccion
http://direccion:puerto/ruta
http://usuario:contraseña@direccion:puerto/ruta#opciones
```

Esta es una dirección HTTP común. Astra también soporta https.

- `usuario:contraseña` – usuario y contraseña para la autenticación HTTP. Soporta métodos de autenticación Básica y Digestiva
- `direccion` – dirección del servidor IPv4 o nombre del dominio
- `puerto` – número de puerto. Por defecto: `80` para http y `443` para https
- `ruta` – la ruta al recurso. Por defecto: `/`

Opciones:

- `ua=Nombre` – encabezado de User-Agent personalizado
- `timeout=N` - tiempo de espera para comenzar a recibir contenido del servidor. Por defecto `10` segundos
- `debug` - registrar encabezados de respuesta. El modo de depuración también debe estar habilitado en la configuración del registro
- `buffer_time=N` - especifica el tamaño del búfer temporal para recibir el flujo y sincronizar la velocidad de bits. Astra descarga datos del flujo al búfer a la máxima velocidad, luego envía los datos de manera uniforme para procesamiento
- `no_sync` - es una opción corta para `buffer_time=0` que desactiva la sincronización y descarga datos del flujo sin ningún límite

## Interfaz Web

Para configurar la entrada HTTP MPEG-TS en Astra, simplemente escribe tu dirección de origen en el campo de Entrada.