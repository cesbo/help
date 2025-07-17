---
title: Users API
---

Los usuarios solían controlar el acceso a la Interfaz Web de Astra, así como el acceso a las salidas HTTP MPEG-TS y HLS.

## Configuración de usuario

```json
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

- `enable` – cuenta habilitada o no
- `type` – tipo de usuario
    - `1` - admin. acceso completo a la Interfaz Web de Astra
    - `2` - observador. solo acceso de lectura a la Interfaz Web de Astra
    - `3` - usuario regular. sin acceso a la Interfaz Web de Astra
- `comment` - campo opcional, para descripción del usuario

Campos opcionales para la autorización integrada para acceder a los canales HLS o HTTP MPEG-TS:

- `token` - token utilizado en las solicitudes HTTP. Por ejemplo: `http://server:8000/play/a001/index.m3u8?token=secret`
- `ip` - permitir acceso a los canales por la dirección IP del cliente
- `expire` - fecha en formato de marca de tiempo unix, cuando el acceso a los canales será restringido
- `connlimit` - limitar conexiones a los canales

## Obtener usuario

Solicitud: `POST /control/`

```json
{
    "cmd": "get-user",
    "id": "..."
}
```

- `id` - nombre de usuario

En respuesta será JSON con la configuración del usuario

## Crear o actualizar usuario

Solicitud: `POST /control/`

```json
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

- `id` – nombre de usuario
- `user` - configuración del usuario
- `password` - contraseña en texto plano, en la configuración se guardará el hash de la contraseña

<details>
<summary>Ejemplo</summary>

Puede crear un nuevo usuario ejecutando el siguiente comando:

```sh
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

en caso de éxito, Astra devuelve:

```json
{ "set-user": "ok" }
```
</details>

## Eliminar usuario

Solicitud: `POST /control/`

```json
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## Alternar usuario

Solicitud: `POST /control/`

Activar o desactivar usuario:

```json
{
    "cmd": "toggle-user",
    "id": "..."
}
```

- `id` - nombre de usuario

<details>
<summary>Ejemplo</summary>

Puede habilitar o deshabilitar un usuario ejecutando el siguiente comando:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-user", "id":"login"}' \
    http://server:8000/control/
```

en caso de éxito, Astra devuelve:

```json
{ "toggle-user": "ok" }
```
</details>