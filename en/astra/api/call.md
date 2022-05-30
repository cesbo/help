# Call API Methods

Application Programming Interface (API) is a methods to access data and interact with external software components.

## Call API with curl

You may use `curl` in the console to call an API method.

Call **GET** method:

GET method available only for versions since 2021-04-12 or later

```
curl \
    --user login:password \
    http://server:8000/api/status
```

- `login:password` - is an admin login and password
- `server:8000` - server address and primary port
- `/api/status` - path to API method

Call **POST** method:

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

## Call API with php

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
