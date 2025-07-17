---
title: "Auth: Securetoken"
sidebar:
    order: 6
---

Protects unauthorized access to content with temporary tokens

![Securetoken Authorization](https://cdn.cesbo.com/help/alta/ott-settings/authorization/securetoken/options.png)

## How it works

1. Client requests playlist from middleware.
2. Middleware generates a temporary token for each channel.
3. Client requests the channel with the token.
4. Alta validates the token; access is allowed if valid.

## Token

Temporary token calculated by the middleware on the server side when client requests playlist. Token has the following components:

- `Hash`: SHA1 hash computed server-side.
- `Salt`: Random string for added security.
- `End time`: Token expiration (UNIX timestamp).
- `Start time`: Token creation time (UNIX timestamp).

All parts should be separated by minus sign and addedd to the channels address. For example: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash

Concatenate and SHA1-hash the following in order:

- Channel path (e.g., `/tv/travel-channel/index.m3u8`)
- Client IP address
- Start time (UNIX timestamp)
- End time (UNIX timestamp)
- Securetoken - defined in the Alta settings
- Salt

Formula:

```
sha1(channel_path + client_ip + start_time + end_time + securetoken + salt)
```

## Built-in Secure Link Generator

Built-in secure link generator useful to generate secure links for tests on any channel.
If you have channel with securetoken enabled, you can generate secure link in the admin panel:

1. Go to channel settings
2. Click on the "Secure Link" button to open the "Generate Channel Secure Link" dialog.
3. Fill in the following:
   - **IP**: Client IP address.
   - **Start / End**: Token validity period.
4. Click **Generate** to create a tokenized link

## Example on PHP

Create a file `securetoken.php` with the following code:

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

Launch script:

```
php securetoken.php
```

You will see line from the first example. Please, note, this script only for example.
