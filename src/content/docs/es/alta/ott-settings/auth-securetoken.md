---
title: "Auth: Securetoken"
sidebar:
    order: 6
---

Protege el acceso no autorizado al contenido con tokens temporales

![Autorización de Securetoken](https://cdn.cesbo.com/help/alta/ott-settings/authorization/securetoken/options.png)

## Cómo funciona

1. El cliente solicita la lista de reproducción al middleware.
2. El middleware genera un token temporal para cada canal.
3. El cliente solicita el canal con el token.
4. Alta valida el token; el acceso está permitido si es válido.

## Token

Token temporal calculado por el middleware en el lado del servidor cuando el cliente solicita la lista de reproducción. El token tiene los siguientes componentes:

- `Hash`: Hash SHA1 calculado en el servidor.
- `Salt`: Cadena aleatoria para mayor seguridad.
- `Hora de finalización`: Expiración del token (timestamp UNIX).
- `Hora de inicio`: Hora de creación del token (timestamp UNIX).

Todas las partes deben estar separadas por un signo menos y agregarse a la dirección de los canales. Por ejemplo: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash

Concatenate y haga SHA1-hash de lo siguiente en orden:

- Ruta del canal (por ejemplo, `/tv/travel-channel/index.m3u8`)
- Dirección IP del cliente
- Hora de inicio (timestamp UNIX)
- Hora de finalización (timestamp UNIX)
- Securetoken - definido en la configuración de Alta
- Salt

Fórmula:

```
sha1(ruta_del_canal + ip_cliente + hora_de_inicio + hora_de_finalización + securetoken + salt)
```

## Generador de Enlaces Seguros Integrado

Generador de enlaces seguros integrado útil para generar enlaces seguros para pruebas en cualquier canal.
Si tienes un canal con securetoken habilitado, puedes generar un enlace seguro en el panel de administración:

1. Ir a la configuración del canal
2. Hacer clic en el botón "Enlace Seguro" para abrir el cuadro de diálogo "Generar Enlace Seguro del Canal".
3. Completar lo siguiente:
   - **IP**: Dirección IP del cliente.
   - **Inicio / Fin**: Período de validez del token.
4. Hacer clic en **Generar** para crear un enlace tokenizado

## Ejemplo en PHP

Crea un archivo `securetoken.php` con el siguiente código:

```php
<?php

$channel = '/tv/travel-channel/index.m3u8';
$client = '192.168.88.98';
$starttime = 1669810000;
$endtime = 1669890000;
$securetoken = 'secret';
$salt = 'a5cd6c00';

$hash = sha1($channel . $client . $starttime . $endtime . $securetoken . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo 'https://example.com:8100' . $stream . '?token=' . $token . PHP_EOL;
```

Ejecuta el script:

```
php securetoken.php
```

Verás una línea del primer ejemplo. Por favor, ten en cuenta, este script es solo para ejemplo.