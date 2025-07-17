---
title: "Auth: Securetoken"
sidebar:
    order: 23
---

El middleware genera un token único para cada canal utilizando algoritmos criptográficos y securetoken. A cada dirección de canal, el middleware agrega información cuando se concede el acceso, tiempo de expiración y token para validar los datos proporcionados.

Astra utiliza los mismos algoritmos criptográficos y el mismo securetoken para verificar los datos proporcionados y otorgar acceso al canal.

## Token

El token temporal se calcula en el middleware en el lado del servidor cuando el cliente solicita la lista de reproducción. El token contiene las siguientes partes:

1. Hash: hash calculado en el servidor con el algoritmo SHA1
2. Salt: palabra aleatoria para mayor seguridad
3. Hora de finalización: tiempo de expiración del token en formato unix-timestamp
4. Hora de inicio: tiempo de creación del token en formato unix-timestamp

Todas las partes deben estar separadas por un signo menos y añadirse a la dirección del canal. Por ejemplo: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash

El hash debe calcularse en el middleware con el algoritmo SHA1 a partir de una cadena concatenada con las siguientes partes:

- ID del Canal: identificador único del canal de la configuración de Astra
- Dirección IP del Cliente
- Hora de inicio: unix-timestamp como número decimal
- Hora de finalización: unix-timestamp como número decimal
- Securetoken: definido en la configuración de Astra
- Salt: palabra aleatoria para mayor seguridad

## Ejemplo en PHP

Cree un archivo `securetoken.php` con el siguiente código:

```php
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

Ejecute el script:

```
php securetoken.php
```

Verás la línea del primer ejemplo. Por favor, ten en cuenta, este script es solo un ejemplo.