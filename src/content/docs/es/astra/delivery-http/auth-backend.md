---
title: "Auth: HTTP Backend"
sidebar:
    order: 22
---

La autorización del Backend HTTP te permite usar tu sistema de gestión de usuarios existente (Middleware) para controlar el acceso a tus transmisiones. En lugar de gestionar usuarios en Astra, puedes conectarte a tu plataforma actual como Ministra, IPTVportal o un sistema personalizado.

## Cómo funciona

![HTTP Backend](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/http-backend.svg)

1. **El usuario solicita un canal**: El reproductor del espectador envía una solicitud con su token o credenciales.
2. **Astra consulta tu Middleware**: Astra reenvía los detalles de la solicitud a tu sistema de gestión de usuarios.
3. **El Middleware verifica los permisos**: Tu sistema verifica si el usuario puede acceder a este canal.
4. **Acceso permitido o denegado**: Si se aprueba, Astra transmite el contenido; si no, el acceso es bloqueado.

## Configuración

Ve a `Settings` → `HTTP Auth` en Astra. Elige tu "Tipo de Backend" e ingresa la "Dirección del Backend" para tu sistema.

### Ministra/Stalker

Dirección del Backend:

```
http://example.com/stalker_portal
```

En el panel de administración de Ministra/Stalker, habilita `Temporary URL` → `Flussonic support`.

### IPTVportal

**Para plataforma en la nube:**

```
https://go.iptvportal.cloud
```

**Para instalación local:** Usa la dirección de tu servidor (por ejemplo, `http://your-server.com`).

En la configuración del portal, abre el menú `Keys` y crea una nueva clave:

- `Name`: Astra
- `Algorithm`: ARESSTREAM
- `Mode`: SM
- `Key Length`: 1472 bit
- `Update Rate`: 1:00:00

En la configuración de canales del portal:

- `Auth`: arescrypt
- `Encoded`: activado
- `Key`: Astra

### Microimpulse Smarty

Dirección del Backend:

```
http://example.com
```

### Solicitud HTTP

Crea tu propio sistema de autenticación seleccionando `HTTP Request` como el Tipo de Backend y proporcionando tu URL de punto final personalizada.

Cuando un usuario solicita acceso, Astra envía una solicitud GET a tu punto final con:

- Parámetros de consulta: Todos los parámetros de la solicitud original del usuario
- Encabezados HTTP con detalles de la sesión:
    - `X-Session-ID`: número de sesión único
    - `X-Channel-ID`: identificador único del canal
    - `X-Real-IP`: dirección IP del cliente
    - `X-Real-Path`: ruta de la solicitud del cliente
    - `X-Real-UA`: User-Agent del cliente
    - `X-Real-Host`: Host de la solicitud del cliente

Tu backend puede responder con:

- `HTTP 200`: Acceso permitido
- `HTTP 403/401`: Acceso denegado
- Encabezado `X-Session-Name` - Nombre de usuario (opcional)

**Ejemplo de flujo de trabajo:**

1. Tu backend: `https://auth.example.com/check`
2. Solicitud del usuario: `https://live.example.com/play/a001/index.m3u8?token=123`
3. Llamada de Astra: `https://auth.example.com/check?token=123`
4. Encabezados incluyen: `X-Real-Path: /play/a001/index.m3u8` más otros detalles de la solicitud

## Importante: Comportamiento por defecto

Si tu backend no está disponible, Astra permite el acceso por defecto. Esto evita que tu servicio se caiga si tu servidor de autenticación tiene problemas, pero significa que los usuarios obtienen acceso gratuito durante las interrupciones.

## Resolución de problemas

### Usuarios accediendo gratis

Si los usuarios pueden ver canales sin pagar, tu backend podría estar caído. Prueba la conexión de tu backend:

```sh
curl -v "https://auth.example.com/check"
```

Reemplaza la URL con la dirección real de tu backend desde la configuración de Astra.

**Problemas comunes:**

- `Connection refused`: El servidor del backend está caído
- La solicitud se cuelga: Problemas de conectividad de red
- URL incorrecta: Revisa la dirección de tu backend en la configuración

### Usuarios no pueden acceder a canales de pago

Si los usuarios legítimos son bloqueados:

1. Verifica los registros de tu backend: Busca errores de autenticación
2. Verifica los códigos de respuesta: Tu backend debe devolver HTTP 200 para usuarios válidos
3. Prueba manualmente: Usa curl con un token válido para probar tu punto final