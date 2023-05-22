---
title: "How to call API methods in Astra?"
date: 2023-03-23
---

API (Application Programming Interface) is a methods to access data and interact with software components.

## Call GET methods with curl

You may use `curl` in the console to call an API method. For example, you can obtain a summary status of the process and system:

```
curl \
    --user login:password \
    http://server:8000/api/system-status
```

- `login:password` - is an admin login and password
- `server:8000` - server address and primary port
- `/api/system-status` - path to API method

## Call POST method with curl

POST methods used to modify Astra configuration. For example you may toggle user from the console:

```
curl \
    -X POST
    --user login:password \
    -d '{"cmd":"toggle-user","id":"login"}'
    http://server:8000/control/
```

- `login:password` - is an admin login and password
- `-d '{...}'` - request content in JSON format
- `server:8000` - server address and primary port

## Call API with PHP

You may use any programming language to control Astra. For example, simple PHP script to toggle user:

```php
$req = json_encode(array(
    'cmd' => 'toggle-user',
    'id' => 'login',
));
$ch = curl_init("http://server:8000/control/");
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_USERPWD, "login:password");
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$res = curl_exec($ch);
curl_close($ch);
```
