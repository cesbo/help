---
title: RSTP
sidebar:
    order: 12
---

RSTP es un protocolo popular para la transmisión de medios a través de redes IP y se utiliza comúnmente en cámaras IP debido a sus capacidades de transmisión de video de baja latencia y alta calidad.

## Formato de dirección

Las direcciones RSTP se utilizan para identificar la ubicación del flujo de medios que se está transmitiendo a través de la red.

```
rtsp://address
rtsp://address:port/path
rtsp://login:password@address:port/path#options
```

- `login:password` – inicio de sesión y contraseña para la autenticación RTSP. Admite métodos de autenticación Basic y Digest.
- `address` – dirección del servidor IPv4 o nombre de dominio.
- `port` – número de puerto. Predeterminado: `554`.
- `path` – la ruta al recurso. Predeterminado: `/`.

Opciones:

- `tcp` – modo entrelazado. recibir flujo a través de TCP en lugar de UDP.
- `ua=Name` – cabecera User-Agent personalizada.

## Interfaz web

Para configurar una entrada RSTP en Astra, puedes introducir la dirección fuente directamente en el campo `Input address` en la configuración de flujo o usar el formulario de configuración de entrada al que se accede haciendo clic en el icono de engranaje:

![Opciones RTSP](https://cdn.cesbo.com/help/astra/receiving/ip/rtsp/options.png)

- `RSTP address` - dirección fuente del flujo RSTP.
- `Interleaved mode` - por defecto, Astra usa UDP para recibir datos de medios desde la cámara, el modo entrelazado fuerza a la cámara a enviar datos a través de TCP.

## Solución de problemas

### h.265 no funciona

La versión actual de Astra solo admite H.264.

### Errores de tiempo de espera

Los mensajes de error pueden incluir `Connection timeout` o `Response timeout`, lo que sugiere que la cámara no está respondiendo a las solicitudes de Astra. Una posible causa de este problema es cuando la cámara está atascada y no puede responder a las solicitudes.

### Autenticación fallida

Inicio de sesión o contraseña inválidos para el flujo RTSP.

### Formato de codificación desconocido

Esto puede indicar que el formato de datos del flujo no es reconocido por Astra. Este error puede ocurrir cuando el flujo RSTP utiliza un formato de datos o un método de codificación no soportado.