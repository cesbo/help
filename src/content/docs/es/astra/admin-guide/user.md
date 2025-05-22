---
title: "API de usuarios"
date: 2023-06-30
sidebar:
    order: 29
---

Usuarios utilizados para controlar el acceso a la interfaz web de Astra, así como el acceso a las salidas HTTP MPEG-TS y HLS.

## Configuración del usuario[](https://help.cesbo.com/astra/admin-guide/api/user#user-configuration)

```
{
    "enable": true,
    "type": 0,
    "comment": "...",

    "token": "...",
    "ip": "...",
    "expire": 0,
    "conlimit": 0
}
```

- `enable` - cuenta habilitada o no
- `type` - tipo de usuario
    - `1` - admin. acceso completo a la interfaz web de Astra
    - `2` - observador. acceso de sólo lectura a la interfaz web de Astra
    - `3` - usuario normal. sin acceso a la Interfaz Web de Astra
- `comment` - campo opcional, para la descripción del usuario

Campos opcionales para la autorización integrada de acceso a canales HLS o HTTP MPEG-TS:

- `token` - utilizado en las peticiones HTTP. Por ejemplo: `http://server:8000/play/a001/index.m3u8?token=secret`
- `ip` - permitir el acceso a los canales mediante la dirección IP del cliente
- `expire` - fecha en formato unix timestamp, en la que se restringirá el acceso a los canales
- `connlimit` - limitar las conexiones a los canales

## Obtener usuario[](https://help.cesbo.com/astra/admin-guide/api/user#get-user)

Petición: `POST /control/`

```
{
    "cmd": "get-user",
    "id": "..."
}
```

- `id` - inicio de sesión de usuario

En respuesta será JSON con la configuración del usuario

## Crear o actualizar usuario[](https://help.cesbo.com/astra/admin-guide/api/user#create-or-update-user)

Petición: `POST /control/`

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "enable": true,
        "type": 0,
        "password": "..."
    }
}
```

- `id` - inicio de sesión de usuario
- `user` - configuración de usuario
- `password` - contraseña simple, en la configuración se guardará el hash de la contraseña

::spoiler{title="Ejemplo"} Puede crear un nuevo usuario ejecutando el siguiente comando:

```
curl -X POST -user login -d @- http://server:8000/control/ <<END
{
  "cmd": "set-user",
  "id": "new-admin",
  "user": {
    "enable": true,
    "type": 1,
    "password": "secret"
  }
}
END
```

en caso de que Astra regrese con éxito:

```
{ "set-user": "ok" }
``` 
::

## Eliminar usuario[](https://help.cesbo.com/astra/admin-guide/api/user#remove-user)

Petición: `POST /control/`

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## Alternar usuario[](https://help.cesbo.com/astra/admin-guide/api/user#toggle-user)

Petición: `POST /control/`

Activar o desactivar el usuario:

```
{
    "cmd": "toggle-user",
    "id": "..."
}
```

- `id` - inicio de sesión de usuario

::spoiler{title="Ejemplo"} Puede activar o desactivar el usuario ejecutando el siguiente comando:

```
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-user", "id":"login"}' \
    http://server:8000/control/
```

en caso de que Astra regrese con éxito:

```
{ "toggle-user": "ok" }
```
::
