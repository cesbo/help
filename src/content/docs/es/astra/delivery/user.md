---
title: "Autorización de usuarios"
date: 2023-06-19
sidebar:
    order: 17
---

El método de autorización de usuarios permite acceder a los contenidos sin necesidad de software adicional.

En primer lugar, asegúrese de que la autorización HTTP está activada. Abra `Settings` -> `HTTP Auth` y active la opción `Enable built-in HTTP/HLS authentication`.

## Autorización de contraseña[](/es/astra/delivery/http-hls-auth/user#password-authorization)

El nombre de usuario y la contraseña podrían añadirse a la URL de la lista de reproducción, si utiliza HTTP Play:

```
https://example.com:8000/playlist.m3u8?auth=login:password
```

O a la URL del canal:

```
https://example.com:8000/channel-path/index.m3u8?auth=login:password
```

## Autorización de tokens[](/es/astra/delivery/http-hls-auth/user#token-authorization)

La autorización por token es más preferible que la autorización por contraseña. Se puede definir un token único en Configuración -> Usuarios, abrir opciones de usuario:

![Opciones de usuario](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/user.png)

El token podría añadirse a la URL de la lista de reproducción, si utiliza HTTP Play:

```
https://example.com:8000/playlist.m3u8?token=3e3db68b1486
```

O a la URL del canal:

```
https://example.com:8000/channel-path/index.m3u8?token=3e3db68b1486
```
