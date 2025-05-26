---
title: "¿Cómo llamar a métodos API en Astra?"
date: 2023-03-23
sidebar:
    order: 22
---

API (Application Programming Interface) es un método para acceder a datos e interactuar con componentes de software.

## Llamar a métodos GET con curl[](/es/astra/admin-guide/api/call-api#call-get-methods-with-curl)

Puede utilizar `curl` en la consola para llamar a un método de la API. Por ejemplo, puede obtener un estado resumido del proceso y del sistema:

```
curl \
    --user login:password \
    http://server:8000/api/system-status
```

- `login:password` - es un nombre de usuario y contraseña de administrador
- `server:8000` - dirección del servidor y puerto primario
- `/api/system-status` - ruta al método API

## Llamar al método POST con curl[](/es/astra/admin-guide/api/call-api#call-post-method-with-curl)

Métodos POST utilizados para modificar la configuración de Astra. Por ejemplo, puede cambiar el usuario desde la consola:

```
curl \
    -X POST \
    --user login:password \
    -d '{"cmd":"toggle-user","id":"login"}' \
    http://server:8000/control/
```

- `login:password` - es un nombre de usuario y contraseña de administrador
- `-d '{...}'` - contenido de la solicitud en formato JSON
- `server:8000` - dirección del servidor y puerto primario

Otro método para ejecutar `curl` donde el archivo de configuración se pasa a la entrada estándar:

```
curl -X POST --user login -d @- http://server:8000/control/ <<END
{
"cmd":"toogle-user",
"id":"login"
}
END
```

Después del lanzamiento curl pide contraseña.

## Llamar a la API con PHP[](/es/astra/admin-guide/api/call-api#call-api-with-php)

Puedes usar cualquier lenguaje de programación para controlar Astra. Por ejemplo, un simple script PHP para cambiar de usuario:

```
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
