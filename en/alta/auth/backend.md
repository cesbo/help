# HTTP Backend

HTTP Backend implements client authorization with a request to the backend.

## Backend

Backend is a simple HTTP server checks request from Alta and returns a response.
Response status could be `200` - allow access or `403` - deny access.

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
- `default` - default action if backend is not available.

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

1. Your backend address is: `http://127.0.0.1:6000`;
2. Client tries to start channel: `https://live.example.com/channel-path/index.m3u8?token=123`;
3. Full address to HTTP backend will be: `http://127.0.0.1:6000?token=123`;
4. In headers will be `X-Real-Path: /play/a001/index.m3u8` and other headers depending of the client request.

## Backend example with PHP

Create a file `auth.php` with the following code:

```php
<?php

// Get token from query string
$token = $_GET['token'];

// Check token
if ($token == '123') {
    // Write headers to console and allow access
    error_log(
        "\n" .
        " Session ID: " . $_SERVER['HTTP_X_SESSION_ID'] . "\n" .
        "    Real IP: " . $_SERVER['HTTP_X_REAL_IP'] . "\n" .
        "  Real Path: " . $_SERVER['HTTP_X_REAL_PATH'] . "\n" .
        "Real Origin: " . $_SERVER['HTTP_X_REAL_ORIGIN'] . "\n" .
        "    Real UA: " . $_SERVER['HTTP_X_REAL_UA']
    );
    http_response_code(200);
} else {
    // Deny access
    http_response_code(403);
}
```

Launch backend with `php -S 127.0.0.1:6000 auth.php`

## Troubleshooting

### Unexpected access

If you get access to the channel without authorization, probably your HTTP backend is unavailable. You can check it with `curl` command. Open console on your server with Astra. And try to send request to the HTTP backend manually:

```
curl -v "http://127.0.0.1:6000?token=123"
```

Of course address should be same as in your settings.

If you see something like `Connection refused` or connection is stuck without any response, then issue with access to the backend.

### No access
