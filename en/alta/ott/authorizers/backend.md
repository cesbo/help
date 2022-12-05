# Backend

Backend Authorization is an extensible system to verify client request with external HTTP service.
HTTP service verifies client request by the own rules and return response to Alta.
Response status **200** allows access to the content. Any other response denies access.

## Request to Backend

Request to Backend is a HTTP GET request with following headers:

- **X-Session-Id** - unique session number
- **X-Real-Ip** - client IP address
- **X-Real-Path** - path to the requested content
- **X-Real-Origin** - request origin with scheme, host, and port
- **X-Real-Ua** - client User-Agent

For example:

1. Your Backend URL is: `http://127.0.0.1:6000/auth`
2. Client started channel: `https://live.example.com/channel-path/index.m3u8?token=123`
3. Full address to Backend will be: `http://127.0.0.1:6000/auth?token=123`
4. In headers will be:
    - `X-Real-Origin: https://live.example.com`
    - `X-Real-Path: /channel-path/index.m3u8`
    - other headers depends of the client request

## Middleware

<details class="marker" id="ministra">
<summary>Ministra / Stalker</summary>

<p>
TV Platform by <a href="https://www.infomir.eu/" target="_blank">Infomir</a>.
</p>

<p>Backend URL:</p>

```
http://example.com/stalker_portal/server/api/chk_flussonic_tmp_link.php
```

<p>
In the Ministra / Stalker settings turn on option "Temporary URL - Flussonic support"
</p>

</details>

<details class="marker" id="iptvportal">
<summary>IPTVPORTAL</summary>

<p>
Platform for managing IPTV and OTT solutions by <a href="https://iptvportal.cloud/" target="_blank">IPTVPORTAL</a>.
</p>

<p>Backend URL:</p>

```
https://go.iptvportal.cloud/auth/arescrypt/
```

<p>In the portal settings open "Keys" menu and create a new key:</p>

<ul>
<li>Name: <code>Alta</code></li>
<li>Algorithm: <code>ARESSTREAM</code></li>
<li>Mode: <code>SM</code></li>
<li>Key Length: <code>1472 bit</code></li>
<li>Update Rate: <code>1:00:00</code></li>
</ul>

<p>In channel settings:</p>

<ul>
<li>Auth: <code>arescrypt</code></li>
<li>Encoded: <code>turn on</code></li>
<li>Key: <code>Alta</code></li>
</ul>

</details>

<details class="marker">
<summary>Microimpulse Smarty</summary>

<p>
Platform for creating an independent IPTV/OTT service by <a href="https://microimpulse.ru/en/" target="_blank">Microimpulse</a>.
</p>

<p>Backend URL:</p>

```
http://example.com/tvmiddleware/api/streamservice/token/check/
```

</details>

<details class="marker" id="selfmade-on-php">
<summary>Selfmade on PHP</summary>

<p>
You may create own backend on any programming language. For example in this guide we create extremally simple backend on PHP. It allows access if token is equal to <strong>123</strong>.
</p>

<p>Create new file <code>auth.php</code> with the following code:</p>

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

<p>Launch backend on the server with Alta:</p>

```
php -S 127.0.0.1:6000 auth.php
```

<p>Backend URL:</p>

```
http://127.0.0.1:6000
```

<p>For production you may use nginx with php-fpm or any other solution.</p>

</details>

## Troubleshooting

### Unexpected access

If you get access to the channel without authorization, probably your HTTP backend is unavailable. You can check it with `curl` command. Open console on your server with Astra. And try to send request to the HTTP backend manually:

```
curl -v "http://127.0.0.1:6000?token=123"
```

Of course address should be same as in your settings.

If you see something like `Connection refused` or connection is stuck without any response, then issue with access to the backend.

### No access
