---
title: "Auth: Securetoken"
sidebar:
    order: 23
---

Middleware generates an unique token for every channel with crypto algorithms and with securetoken. To the each channel address Middleware appends information when access granted, expiration time, and token to validate provided data.

Astra uses same crypto algorithms and same securetoken to verify provided data and grant access to the channel.

## Token

Temporary token calculated by the middleware on the server side when client requests playlist. Token contains next parts:

1. Hash - hash calculated on the server with SHA1 algorithm
2. Salt - random word for better secure
3. End time - token expiration time in the unix-timestamp format
4. Start time - token creation time in the unix-timestamp format

All parts should be separated by minus sign and addedd to the channels address. For example: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash

Hash should be calculated on middleware with SHA1 algorithm from string concatenated from next parts:

- Channel ID - unique channel identifier from Astra settings
- Client IP address
- Start time - unix-timestamp as decimal number
- End time - unix-timestamp as decimal number
- Securetoke - defined in the Astra settings
- Salt - random word for better secure

## Example on PHP

Create a file `securetoken.php` with the following code:

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

Launch script:

```
php securetoken.php
```

You will see line from the first example. Please, note, this script only for example.
