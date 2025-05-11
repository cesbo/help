---
title: "API сеанса"
date: 2023-08-03
---

Sessions - это список активных соединений с выходами HTTP MPEG-TS или HLS.

## Получить список сессий[](https://help.cesbo.com/astra/admin-guide/api/session#get-session-list)

```
{
     "cmd": "sessions"
}
```

В ответ будет получен массив активных сессий:

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

- `client_id` - уникальный идентификатор сессии
- `channel_id` - уникальный идентификатор канала
- `channel_name` - название канала
- `addr` - IP-адрес клиента
- `uptime` - время в секундах, в течение которого выполняется сессия

## Закрыть сессию[](https://help.cesbo.com/astra/admin-guide/api/session#close-session)

```
{
    "cmd": "close-session",
    "id": "..."
}
```

- `id` - идентификатор сессии
