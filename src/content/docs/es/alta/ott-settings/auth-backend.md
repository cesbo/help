---
title: "Auth: HTTP Backend"
sidebar:
    order: 5
---

La Autorización del Backend es un sistema para verificar las solicitudes de los clientes con un servicio HTTP externo de una manera extensible.

![Autorización del Backend](https://cdn.cesbo.com/help/alta/ott-settings/authorization/http-backend/options.png)

La URL del backend depende del middleware que se esté utilizando. Cuando un cliente inicia un canal, Alta envía una solicitud al servicio de backend. El servicio de backend verifica la solicitud del cliente basándose en sus propias reglas y devuelve una respuesta a Alta. Un estado de respuesta de 200 indica que el acceso al contenido está permitido, mientras que cualquier otra respuesta niega el acceso. Si el servicio de backend no está disponible, Alta procesa una acción por defecto.

## Ministra / Stalker

URL del Backend:

```
http://example.com/stalker_portal/server/api/chk_flussonic_tmp_link.php
```

En la configuración de Ministra / Stalker activa la opción "URL Temporal - Soporte Flussonic"

## IPTVPORTAL

URL del Backend:

```
https://go.iptvportal.cloud/auth/arescrypt/
```

En la configuración del portal abre el menú "Keys" y crea una nueva clave:

- Nombre: Alta
- Algoritmo: ARESSTREAM
- Modo: SM
- Longitud de Clave: 1472 bits
- Frecuencia de Actualización: 1:00:00

En la configuración del canal:

- Autenticación: arescrypt
- Codificado: activado
- Clave: Alta

## Microimpulse Smarty

URL del Backend:

```
http://example.com/tvmiddleware/api/streamservice/token/check/
```

## Backend Personalizado

Si necesitas implementar lógica de autenticación personalizada, puedes crear tu propio backend.

Alta envía una solicitud HTTP GET al backend, añadiendo todos los parámetros de la URL de la solicitud original que se pasó a la URL del backend. Además de los parámetros de la URL, Alta también envía los siguientes encabezados HTTP al backend:

- `X-Session-Id` - identificador único de sesión
- `X-Real-Ip` - dirección IP del cliente
- `X-Real-Path` - ruta solicitada por el cliente
- `X-Real-Origin` - origen que es una combinación de protocolo (por ejemplo, http o https), nombre de host y puerto (si está especificado)
- `X-Real-Ua` - User-Agent de la solicitud original

En esta guía, proporcionamos un ejemplo de un backend PHP extremadamente simple que permite el acceso si el token es igual a `123`.

Crea un nuevo archivo `auth.php` con el siguiente código:

```php
<?php

// Obtener el token de la cadena de consulta
$token = $_GET['token'];

// Verificar el token
if ($token == '123') {
    // Escribir encabezados en la consola y permitir acceso
    error_log(
        "\n" .
        " Session ID: " . $_SERVER['HTTP_X_SESSION_ID']  . "\n" .
        "    Real IP: " . $_SERVER['HTTP_X_REAL_IP']     . "\n" .
        "  Real Path: " . $_SERVER['HTTP_X_REAL_PATH']   . "\n" .
        "Real Origin: " . $_SERVER['HTTP_X_REAL_ORIGIN'] . "\n" .
        "    Real UA: " . $_SERVER['HTTP_X_REAL_UA']
    );
    http_response_code(200);
} else {
    // Denegar acceso
    http_response_code(403);
}
```

Para lanzar el backend en el servidor con Alta, ejecuta el siguiente comando:

```sh
php -S 127.0.0.1:6000 auth.php
```

La URL del backend será:

```
http://127.0.0.1:6000
```

Para entornos de producción, puedes usar nginx con php-fpm o cualquier otra solución adecuada.

:::caution
Nota que esto es solo un ejemplo y deberías implementar la lógica de tu propio backend según tus requisitos específicos.
:::

## Resolución de Problemas

### Acceso inesperado

Si obtienes acceso al canal sin autorización, probablemente tu backend HTTP no esté disponible. Puedes verificarlo con el comando `curl`. Abre la consola en tu servidor con Astra e intenta enviar una solicitud al backend HTTP manualmente:

```sh
curl -v "http://127.0.0.1:6000?token=123"
```

Por supuesto, la dirección debe ser la misma que en tu configuración.

Si ves algo como **Connection refused** o la conexión se queda estancada sin ninguna respuesta, entonces hay un problema con el acceso al backend.