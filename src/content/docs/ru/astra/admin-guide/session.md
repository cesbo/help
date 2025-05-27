---
title: "API сеанса"
date: 2023-08-03
sidebar:
    order: 28
---

Sessions - это список активных соединений с выходами HTTP MPEG-TS или HLS.

## Получить список сессий[](/ru/astra/admin-guide/session#get-session-list)

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

## Закрыть сессию[](/ru/astra/admin-guide/session#close-session)

```
{
    "cmd": "close-session",
    "id": "..."
}
```

- `id` - идентификатор сессии
