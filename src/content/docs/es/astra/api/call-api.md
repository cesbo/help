---
title: "How to call API methods in Astra?"
date: 2023-03-23
sidebar:
    order: 1
---

La API (Interfaz de Programación de Aplicaciones) es un método para acceder a datos e interactuar con componentes de software.

## Llamar métodos GET con curl

Puedes usar `curl` en la consola para llamar a un método de API. Por ejemplo, puedes obtener un resumen del estado del proceso y del sistema:

```sh
curl \
    --user login:password \
    http://server:8000/api/system-status
```

- `login:password` - es un usuario y contraseña de administrador
- `server:8000` - dirección del servidor y puerto principal
- `/api/system-status` - ruta al método de la API

## Llamar método POST con curl

Se utilizan métodos POST para modificar la configuración de Astra. Por ejemplo, puedes alternar un usuario desde la consola:

```sh
curl \
    -X POST \
    --user login:password \
    -d '{"cmd":"toggle-user","id":"login"}' \
    http://server:8000/control/
```

- `login:password` - es un usuario y contraseña de administrador
- `-d '{...}'` - contenido de la solicitud en formato JSON
- `server:8000` - dirección del servidor y puerto principal

Otro método para ejecutar `curl` donde el archivo de configuración se pasa a la entrada estándar:

```sh
curl -X POST --user login -d @- http://server:8000/control/ <<END
{
"cmd":"toogle-user",
"id":"login"
}
END
```

Después del lanzamiento, curl solicita la contraseña.

## Llamar a la API con PHP

Puedes usar cualquier lenguaje de programación para controlar Astra. Por ejemplo, un simple script en PHP para alternar un usuario:

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