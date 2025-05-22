---
title: "Sesión API"
date: 2023-08-03
sidebar:
    order: 28
---

Sesiones es una lista de conexiones activas a salidas HTTP MPEG-TS o HLS.

## Obtener lista de sesiones[](https://help.cesbo.com/astra/admin-guide/api/session#get-session-list)

```
{
     "cmd": "sessions"
}
```

En respuesta será matriz de sesiones activas:

```
{
    "sessions": [
        {
            "client_id": "...",
            "channel_id": "...",
            "channel_name": "...",
            "addr": "...",
            "uptime": N
        }
    ]
}
```

- `client_id` - identificador único de sesión
- `channel_id` - identificador único de canal
- `channel_name` - nombre del canal
- `addr` - dirección IP del cliente
- `uptime` - el tiempo en segundos durante el que se ha estado ejecutando la sesión

## Cerrar la sesión[](https://help.cesbo.com/astra/admin-guide/api/session#close-session)

```
{
    "cmd": "close-session",
    "id": "..."
}
```

- `id` - identificador de sesión
