---
title: "Autorización Securetoken"
date: 2023-06-19
sidebar:
    order: 16
---

El middleware genera un token único para cada canal con algoritmos criptográficos y con securetoken. A la dirección de cada canal, el middleware añade información sobre el acceso concedido, el tiempo de caducidad y el token para validar los datos proporcionados.

Astra utiliza los mismos algoritmos criptográficos y el mismo securetoken para verificar los datos proporcionados y conceder acceso al canal.

## Ficha[](https://help.cesbo.com/astra/delivery/http-hls-auth/securetoken#token)

Token temporal calculado por el middleware en el lado del servidor cuando el cliente solicita la lista de reproducción. El token contiene las siguientes partes:

1. Hash - hash calculado en el servidor con el algoritmo SHA1
2. Sal - palabra aleatoria para asegurar mejor
3. Hora de finalización - hora de caducidad del token en formato unix-timestamp
4. Hora de inicio - hora de creación del token en formato unix-timestamp

Todas las partes deben separarse con el signo menos y añadirse a la dirección del canal. Por ejemplo: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash[](https://help.cesbo.com/astra/delivery/http-hls-auth/securetoken#hash)

El hash debe calcularse en el middleware con el algoritmo SHA1 a partir de la cadena concatenada de las partes siguientes:

- ID de canal - identificador de canal único de la configuración de Astra
- Dirección IP del cliente
- Hora de inicio - unix-timestamp como número decimal
- Hora final - unix-timestamp como número decimal
- Securetoke - definido en la configuración de Astra
- Sal - palabra aleatoria para asegurar mejor

## Ejemplo en PHP[](https://help.cesbo.com/astra/delivery/http-hls-auth/securetoken#example-on-php)

Crear un archivo `securetoken.php` con el siguiente código:

```
<?php

$channel_path = '/tv/travel-channel/index.m3u8';
$channel_id = 'travel-channel';
$client_ip = '192.168.88.98';
$starttime = time() - 60;
$endtime = $starttime + 3600;
$securetoken = 'secret';
$salt = bin2hex(random_bytes(4));
$hash = sha1($channel_id . $client_ip . $starttime . $endtime . $securetoken . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo 'https://example.com:8100' . $channel_path . '?token=' . $token . PHP_EOL;
```

Lanzar script:

```
php securetoken.php
```

Verá la línea del primer ejemplo. Por favor, tenga en cuenta, esta secuencia de comandos sólo para ejemplo.
