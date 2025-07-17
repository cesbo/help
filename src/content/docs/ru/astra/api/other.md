---
title: Other API Methods
---

## Версия Astra

Запрос: `POST /control/`

```json
{
    "cmd": "version"
}
```

## Перезапуск Astra

Запрос: `POST /control/`

```json
{
    "cmd": "restart"
}
```

## Загрузка конфигурации

Запрос: `POST /control/`

```json
{
    "cmd": "load"
}
```

Ответ будет содержать весь файл конфигурации.

## Выгрузка конфигурации

Запрос: `POST /control/`

```json
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - весь файл конфигурации

## Установка серийного номера

Запрос: `POST /control/`

```json
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - серийный номер лицензии

## Установка изображения на плитку потока

Запрос: `POST /control/`

```json
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - идентификатор потока
- `url` - адрес изображения, также может использоваться формат данных, например: `data:image/png;base64,...`

Этот метод используется в скрипте для установки скриншотов для плиток потоков. Подробнее читайте в разделе [Скриншоты каналов на панели управления](/en/articles/tools-and-utilities/mosaic/)