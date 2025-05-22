---
title: "API DVB-адаптеров"
date: 2023-03-23
sidebar:
    order: 23
---

В интерфейсе Astra можно управлять конфигурациями DVB-адаптеров и контролировать их состояние с помощью методов HTTP API.

## Конфигурация адаптера[](https://help.cesbo.com/astra/admin-guide/api/dvb#adapter-configuration)

```
{
    "id": "...",
    "name": "...",
    "type": "...",
    "enable": true,
    "adapter": 0,
    "device": 0
}
```

- `name` - имя адаптера;
- `type` - тип адаптера: `S`, `S2`, `T`, `T2`, `ATSC`, `ISDB-T`, `C`, `C/A`, `C/B`, `C/C`;
- `enable` - `true` если адаптер включен;
- `adapter` - количество адаптеров в системе: `/dev/dvb/adapter0`
- `device` - номер устройства в адаптере: `/dev/dvb/adapter0/frontend0`
- Другие опции зависят от конфигурации адаптера

## Получение конфигурации адаптера[](https://help.cesbo.com/astra/admin-guide/api/dvb#obtain-adapter-configuration)

:::note Версия: 2021-04-12 или более поздняя ::

Запрос: `GET /api/adapter-info/{id}`

- `id` - уникальный идентификатор адаптера

В ответ будет получен JSON с конфигурацией адаптера

## Изменение конфигурации адаптера[](https://help.cesbo.com/astra/admin-guide/api/dvb#modify-adapter-configuration)

Запрос: `POST /control/`

```
{
    "cmd": "set-adapter",
    "id": "...",
    "adapter": {...}
}
```

- `id` - уникальный идентификатор адаптера
- `adapter` - конфигурация адаптера

## Перезапустить адаптер[](https://help.cesbo.com/astra/admin-guide/api/dvb#restart-adapter)

Запрос: `POST /control/`

```
{
    "cmd": "restart-adapter",
    "id": "..."
}
```

- `id` - уникальный идентификатор адаптера

## Снимите адаптер[](https://help.cesbo.com/astra/admin-guide/api/dvb#remove-adapter)

:::note **Внимание!** Этот метод удаляет адаптер и все связанные с ним потоки ::

Запрос: `POST /control/`

```
{
    "cmd": "set-adapter",
    "id": "...",
    "adapter": {
        "remove": true
    }
}
```

- `id` - уникальный идентификатор адаптера

## Получение статуса адаптера[](https://help.cesbo.com/astra/admin-guide/api/dvb#obtain-adapter-status)

:::note Версия: 2021-04-12 или более поздняя ::

Запрос: `GET /api/adapter-status/{id}`

- `id` - уникальный идентификатор адаптера

Необязательные параметры запроса: `GET /api/adapter-status/{id}?t={time}`

- `time` - по умолчанию `1` - статистика для последней минуты, `0` - статистика за последнюю секунду (текущее состояние адаптера)

Ответ:

```
{
    "timestamp": 0,
    "instance": "...",
    "name": "...",
    "lock": true,
    "signal": 0,
    "signal_db": 0,
    "snr": 0,
    "snr_db": 0,
    "ber": 0,
    "unc": 0,
    "bitrate": 0
}
```

- `timestamp` - время отчета, для `t=0` является текущим временем;
- `instance` - имя экземпляра, если оно определено в меню Settings -> General -> Instance Name;
- `name` - название потока;
- `lock` - `true` если тюнер заблокирован и может принимать данные;
- `signal` - приблизительный уровень сигнала в процентах;
- `signal_db` - уровень сигнала в дБм, умноженный на 100;
- `snr` - приблизительное отношение сигнал/шум в процентах;
- `snr_db` - отношение сигнал/шум в дБ, умноженное на 100;
- `ber` - счетчик битовых ошибок;
- `unc` - счетчик ошибок блока;
- `bitrate` - суммарный битрейт в Кбит/с.
