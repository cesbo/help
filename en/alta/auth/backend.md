# Backend

Backend Authorization is an extensible system to verify client request with external service.

## Backend

Backend is a HTTP service to verify client's request by the own rules and return response to Alta.
Response status could be `200` - allow access or any other to deny access.

## Configuration

```
"auth": {
    "backend": [
        "http://127.0.0.1:6000"
    ],
    "default": "allow"
}
```

- `backend` - list of URL addresses to backend;
- `default` - default action if backend is not available. Could be `allow` or `deny`.

## Session information

Alta sends next HTTP headers to the backend:

- `X-Session-Id` - unique session number;
- `X-Real-Ip` - client IP address;
- `X-Real-Path` - path to the requested content;
- `X-Real-Origin` - request origin with scheme, host, and port.
- `X-Real-Ua` - client User-Agent;

## Query string

Query string is a part of address after `?` symbol. Alta pass query from request to the backend.

## Example

For example:

1. Your backend address is: `http://127.0.0.1:6000/auth`;
2. Client tries to start channel: `https://live.example.com/channel-path/index.m3u8?token=123`;
3. Full address to HTTP Backend will be: `http://127.0.0.1:6000/auth?token=123`;
4. In headers will be:
    - `X-Real-Origin: https://live.example.com`;
    - `X-Real-Path: /channel-path/index.m3u8`;
    - other headers depends of the client request.

## Ministra/Stalker

TV Platform by [Infomir](https://www.infomir.eu/). Backend URL:

```
http://example.com/stalker_portal/server/api/chk_flussonic_tmp_link.php
```

In the Ministra/Stalker settings turn on option "Temporary URL - Flussonic support"

## IPTVPORTAL

Platform for managing IPTV and OTT solutions by [IptvPortal](https://iptvportal.cloud/). Backend URL:

```
https://go.iptvportal.cloud/auth/arescrypt/
```

In the portal settings open "Keys" menu and create a new key:

- Name: `Alta`
- Algorithm: `ARESSTREAM`
- Mode: `SM`
- Key Length: `1472 bit`
- Update Rate: `1:00:00`

In channel settings:

- Auth: `arescrypt`
- Encoded: turn on
- Key: `Alta`

## Microimpulse Smarty

Platform for creating an independent IPTV/OTT service by [Microimpulse](https://microimpulse.ru/en/). Backend URL:

```
http://example.com/tvmiddleware/api/streamservice/token/check/
```

## Simple Backend with PHP

PHP script that validate token and allows access if token is equal to `123`.

<details class="marker">
<summary>Script</summary>

Create new file `auth.php` with the following code:

```php
<?php

// Get token from query string
$token = $_GET['token'];

// Check token
if ($token == '123') {
    // Write headers to console and allow access
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
    // Deny access
    http_response_code(403);
}
```

Launch backend: `php -S 127.0.0.1:6000 auth.php`. For production you may use `nginx` with `php-fpm` or any other solution.

</details>

Backend URL:

```
http://127.0.0.1:6000
```

## Troubleshooting

### Unexpected access

If you get access to the channel without authorization, probably your HTTP backend is unavailable. You can check it with `curl` command. Open console on your server with Astra. And try to send request to the HTTP backend manually:

```
curl -v "http://127.0.0.1:6000?token=123"
```

Of course address should be same as in your settings.

If you see something like `Connection refused` or connection is stuck without any response, then issue with access to the backend.

### No access
