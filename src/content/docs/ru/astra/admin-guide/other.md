---
title: "Другие методы API"
date: 2023-06-30
sidebar:
    order: 26
---

## Версия Astra[](/ru/astra/admin-guide/other#astra-version)

Запрос: `POST /control/`

```
{
    "cmd": "version"
}
```

## Перезапуск Astra[](/ru/astra/admin-guide/other#astra-restart)

Запрос: `POST /control/`

```
{
    "cmd": "restart"
}
```

## Конфигурация загрузки[](/ru/astra/admin-guide/other#download-configuration)

Запрос: `POST /control/`

```
{
    "cmd": "load"
}
```

В ответе будет находиться весь конфигурационный файл.

## Загрузка конфигурации[](/ru/astra/admin-guide/other#upload-configuration)

Запрос: `POST /control/`

```
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - весь конфигурационный файл

## Установить серийный номер[](/ru/astra/admin-guide/other#set-serial-number)

Запрос: `POST /control/`

```
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - серийный номер лицензии

## Установить изображение на плитку потока[](/ru/astra/admin-guide/other#set-image-to-the-stream-tile)

Запрос: `POST /control/`

```
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - идентификатор потока
- `url` - адрес изображения, а также может быть использован формат данных, например: `data:image/png;base64,...`

Этот метод используется в скрипте для установки скриншотов для плиток потока. Подробнее в разделе [Скриншоты каналов на Dashboard](/ru/astra/admin-guide/mosaic)
