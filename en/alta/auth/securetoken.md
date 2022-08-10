# Securetoken

Protects unauthorized access to content with temporary token.
Token generated with:

- channel path
- client IP address
- start and end time
- random string
- secret key

## Configuration

```ini
[auth]
securetoken = SECRET-KEY
default = deny
```

## Backend example with PHP

Create a file `securetoken.php` with the following code:

```php
<?php

$server = 'http://example.com';
$key = 'SECRETKEY'; // Secret key for securetoken
$expire = 3 * 60 * 60; // +3h link expiration time
$stream = '/test/index.m3u8';
$ipaddr = '192.168.88.98';

$current = time();
$starttime = $current - 300;
$endtime = $current + $expire;
$salt = bin2hex(openssl_random_pseudo_bytes(4));
$hash = sha1($stream . $ipaddr . $starttime . $endtime . $key . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo $server.$stream.'?token=' . $token . PHP_EOL;
```

Launch script with: `php securetoken.php`

Script will return URL to the channel with token: `http://example.com/test/index.m3u8?token=b2e21fa7a49a1decee5cd90ebd2c4c48bef2495d-a5cd6c00-1657761115-1657750015`

Just play this URL in your player.
