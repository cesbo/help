---
title: "Autorización de middleware"
data: 2023-06-19
sidebar:
    order: 15
---

La autorización Middleware es una autorización de cliente en el servicio de terceros, conocido como Middleware.

## Proceso[](/es/astra/delivery/middleware#process)

![HTTP Backend](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/http-backend.svg)

1. El cliente inicia una solicitud para acceder a un canal de televisión. Esta solicitud contiene datos de identificación, como un token, un identificador de cliente u otros.
2. Astra envía una petición HTTP GET al Middleware. Esta solicitud incluye datos de identificación e información de la sesión
3. El middleware valida la solicitud y devuelve un estado de respuesta
4. Si el middleware concede el acceso, Astra proporciona acceso al canal de TV solicitado.

## Configuración[](/es/astra/delivery/middleware#configuration)

Para configurar Middleware Authorization abra `Settings` -> `HTTP Auth`. A partir de ahí, seleccione el "Tipo de backend" deseado e introduzca la "Dirección de backend" adecuada en función del tipo seleccionado.

### Ministra/Stalker

Dirección Backend:

```
http://example.com/stalker_portal
```

En los ajustes de Ministra / Stalker activa la opción `Temporary URL` -> `Flussonic support`

### IPTVportal

Backend Dirección para plataforma en nube:

```
https://go.iptvportal.cloud
```

Para la plataforma local será la dirección de su servidor.

En los ajustes del portal abra `Keys` y cree una nueva clave:

- `Name`: Astra
- `Algorithm`: ARESSTREAM
- `Mode`: SM
- `Key Length`: 1472 bit
- `Update Rate`: 1:00:00

En la configuración del canal del portal:

- `Auth`: arescrypt
- `Encoded`Encender
- `Key`: Astra

### Microimpulse Smarty

Dirección Backend:

```
http://example.com
```

### Solicitud HTTP

Si necesita implementar una lógica de autenticación personalizada, puede crear su propio backend. Seleccione `HTTP Request` en `Backend Type` y especifique la URL de su punto final Middleware.

Astra envía una solicitud HTTP GET al punto final del Middleware, añadiendo todos los parámetros de consulta de la solicitud original y la información de sesión en las cabeceras HTTP:

- `X-Session-ID` - número único de sesión
- `X-Channel-ID` - identificador único de canal
- `X-Real-IP` - dirección IP del cliente
- `X-Real-Path` - ruta de solicitud del cliente
- `X-Real-UA` - User-Agent del cliente
- `X-Real-Host` - Solicitud de host del cliente

En una respuesta el backend puede enviar las siguientes cabeceras HTTP:

- `X-Session-Name` - nombre de usuario del cliente o cualquier otro nombre para la sesión

Por ejemplo:

1. La dirección de tu backend es: `https://auth.example.com/check`
2. El cliente intenta iniciar el canal: `https://live.example.com/play/a001/index.m3u8?token=123`
3. La dirección completa al backend HTTP será: `https://auth.example.com/check?token=123`
4. En las cabeceras estarán `X-Real-Path: /play/a001/index.m3u8` y otras cabeceras en función de la solicitud del cliente

## Acción por defecto[](/es/astra/delivery/middleware#default-action)

Si el backend no está disponible, Astra permite el acceso.

## Solución de problemas[](/es/astra/delivery/middleware#troubleshooting)

### Acceso inesperado

Si obtienes acceso al canal sin autorización, probablemente tu backend HTTP no está disponible. Puede comprobarlo con `curl` comando. Abre la consola en tu servidor con Astra. E intente enviar la petición al backend HTTP manualmente:

```
curl -v "https://auth.example.com/check"
```

Por supuesto, la dirección debe ser la misma que en su configuración.

Si ve algo como `Connection refused` o la conexión se bloquea sin ninguna respuesta, entonces problema con el acceso al backend.

### Sin acceso
