---
title: "Auth: Users"
sidebar:
    order: 21
---

El método de Autorización de Usuario proporciona acceso al contenido sin software adicional.

Primero asegúrate de que la Autorización HTTP esté habilitada. Abre `Settings` → `HTTP Auth` y activa la opción `Enable built-in HTTP/HLS authentication`.

## Autorización por contraseña

El nombre de usuario y la contraseña se pueden agregar a la URL de la lista de reproducción, si usas HTTP Play:

```
https://example.com:8000/playlist.m3u8?auth=login:password
```

O a la URL del canal:

```
https://example.com:8000/channel-path/index.m3u8?auth=login:password
```

## Autorización por token

La autorización por token es un método más preferible que la autorización por contraseña. Un token único se puede definir en Settings → Users, abre las opciones del usuario:

![Opciones de Usuario](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/user.png)

El token se puede agregar a la URL de la lista de reproducción, si usas HTTP Play:

```
https://example.com:8000/playlist.m3u8?token=3e3db68b1486
```

O a la URL del canal:

```
https://example.com:8000/channel-path/index.m3u8?token=3e3db68b1486
```