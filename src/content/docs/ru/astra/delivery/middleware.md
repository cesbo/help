---
title: "Авторизация через Middleware"
data: 2023-06-19
sidebar:
    order: 15
---

Авторизация Middleware - это авторизация клиента на стороннем сервисе, известном как Middleware.

## Процесс[](/ru/astra/delivery/http-hls-auth/middleware#process)

![HTTP Backend](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/http-backend.svg)

1. Клиент инициирует запрос на доступ к телевизионному каналу. Этот запрос содержит идентификационные данные, такие как токен, идентификатор клиента или другие.
2. Astra посылает запрос HTTP GET к Middleware. Этот запрос содержит идентификационные данные и информацию о сессии
3. Среднее программное обеспечение проверяет запрос и отправляет ответный статус
4. Если Middleware разрешает доступ, то Astra предоставляет доступ к запрашиваемому телеканалу

## Конфигурация[](/ru/astra/delivery/http-hls-auth/middleware#configuration)

Для настройки Middleware Authorization откройте `Settings` -> `HTTP Auth`. Затем выберите нужный тип "Backend Type" и введите соответствующий "Backend Address" в зависимости от выбранного типа.

### Ministra/Stalker

Backend Address:

```
http://example.com/stalker_portal
```

В настройках Ministra/Stalker включите опцию `Temporary URL` -> `Flussonic support`

### IPTVportal

Backend Address для облачной платформы:

```
https://go.iptvportal.cloud
```

Для локальной платформы это будет адрес вашего сервера.

В настройках портала откройте `Keys` меню и создайте новый ключ:

- `Name`: Astra
- `Algorithm`: ARESSTREAM
- `Mode`: SM
- `Key Length`: 1472 бит
- `Update Rate`: 1:00:00

В настройках канала в портале:

- `Auth`: arescrypt
- `Encoded`: включить
- `Key`: Astra

### Microimpulse Smarty

Backend Address:

```
http://example.com
```

### HTTP-запрос

Если вам необходимо реализовать пользовательскую логику аутентификации, вы можете создать свой собственный бэкэнд. Выберите `HTTP Request` в `Backend Type` и укажите URL-адрес конечной точки Middleware.

Astra отправляет HTTP GET-запрос на конечную точку Middleware, добавляя все параметры запроса из исходного запроса и информацию о сессии в HTTP-заголовках:

- `X-Session-ID` - уникальный номер сессии
- `X-Channel-ID` - уникальный идентификатор канала
- `X-Real-IP` - IP-адрес клиента
- `X-Real-Path` - путь запроса клиента
- `X-Real-UA` - User-Agent клиента
- `X-Real-Host` - запрос хоста клиента

В ответ бэкенд может передать следующие HTTP-заголовки:

- `X-Session-Name` - логин клиента или любое другое имя для сеанса

Например:

1. Ваш внутренний адрес: `https://auth.example.com/check`
2. Клиент пытается запустить канал: `https://live.example.com/play/a001/index.m3u8?token=123`
3. Полный адрес HTTP-бэкенда будет: `https://auth.example.com/check?token=123`
4. В заголовках будет `X-Real-Path: /play/a001/index.m3u8` и другие заголовки в зависимости от запроса клиента

## Действие по умолчанию[](/ru/astra/delivery/http-hls-auth/middleware#default-action)

Если бэкенд недоступен, то Astra разрешает доступ.

## Поиск и устранение неисправностей[](/ru/astra/delivery/http-hls-auth/middleware#troubleshooting)

### Неожиданный доступ

Если вы получаете доступ к каналу без авторизации, то, вероятно, ваш HTTP-бэкенд недоступен. Проверить это можно с помощью `curl` команда. Откройте консоль на вашем сервере с помощью Astra. И попробуйте отправить запрос к HTTP-бэкенду вручную:

```
curl -v "https://auth.example.com/check"
```

Разумеется, адрес должен быть таким же, как в настройках.

Если вы видите что-то вроде `Connection refused` или соединение задерживается без ответа, то возникает проблема с доступом к бэкенду.

### Нет доступа
