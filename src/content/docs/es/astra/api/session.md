---
title: Sessions API
---

Las sesiones son una lista de conexiones activas a salidas HTTP MPEG-TS o HLS.

## Obtener lista de sesiones

```
{
     "cmd": "sessions"
}
```

En respuesta se proporcionará un array de sesiones activas:

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

- `client_id` — identificador único de la sesión
- `channel_id` — identificador único del canal
- `channel_name` — nombre del canal
- `addr` — dirección IP del cliente
- `uptime` — el tiempo en segundos que la sesión ha estado activa

## Cerrar sesión

```
{
    "cmd": "close-session",
    "id": "..."
}
```

- `id` — identificador de la sesión