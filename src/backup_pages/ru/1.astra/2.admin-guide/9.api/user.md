---
title: "API пользователей"
date: 2023-06-30
---

Пользователи, используемые для управления доступом к веб-интерфейсу Astra, а также доступом к выходам HTTP MPEG-TS и HLS

## Конфигурация пользователя[](https://help.cesbo.com/astra/admin-guide/api/user#user-configuration)

```
{
    "enable": true,
    "type": 0,
    "comment": "...",

    "token": "...",
    "ip": "...",
    "expire": 0,
    "conlimit": 0
}
```

- `enable` - включена учетная запись или нет
- `type` - тип пользователя
    - `1` - admin. полный доступ к веб-интерфейсу Astra
    - `2` - Наблюдатель. доступ к веб-интерфейсу Astra только для чтения
    - `3` - обычный пользователь. без доступа к веб-интерфейсу Astra
- `comment` - необязательное поле для описания пользователя

Дополнительные поля для встроенной авторизации доступа к каналам HLS или HTTP MPEG-TS:

- `token` - токен, используемый в HTTP-запросах. Например: `http://server:8000/play/a001/index.m3u8?token=secret`
- `ip` - разрешить доступ к каналам по IP-адресу клиента
- `expire` - дата в формате unix timestamp, когда доступ к каналам будет ограничен
- `connlimit` - ограничение подключений к каналам

## Получить пользователя[](https://help.cesbo.com/astra/admin-guide/api/user#get-user)

Запрос: `POST /control/`

```
{
    "cmd": "get-user",
    "id": "..."
}
```

- `id` - вход пользователя в систему

В ответ будет получен JSON с конфигурацией пользователя

## Создание или обновление пользователя[](https://help.cesbo.com/astra/admin-guide/api/user#create-or-update-user)

Запрос: `POST /control/`

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "enable": true,
        "type": 0,
        "password": "..."
    }
}
```

- `id` - вход пользователя в систему
- `user` - конфигурация пользователя
- `password` - обычный пароль, в конфигурации будет сохранен хэш пароля

::spoiler{title="Пример"} Создать нового пользователя можно, выполнив следующую команду:

```
curl -X POST -user login -d @- http://server:8000/control/ <<END
{
  "cmd": "set-user",
  "id": "new-admin",
  "user": {
    "enable": true,
    "type": 1,
    "password": "secret"
  }
}
END
```

при успешном возврате Astra:

```
{ "set-user": "ok" }
``` 
::

## Удалить пользователя[](https://help.cesbo.com/astra/admin-guide/api/user#remove-user)

Запрос: `POST /control/`

```
{
    "cmd": "set-user",
    "id": "...",
    "user": {
        "remove": true
    }
}
```

## Переключить пользователя[](https://help.cesbo.com/astra/admin-guide/api/user#toggle-user)

Запрос: `POST /control/`

Включить или выключить пользователя:

```
{
    "cmd": "toggle-user",
    "id": "..."
}
```

- `id` - вход пользователя в систему

::spoiler{title="Пример"} Включить или отключить пользователя можно, выполнив следующую команду:

```
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-user", "id":"login"}' \
    http://server:8000/control/
```

при успешном возврате Astra:

```
{ "toggle-user": "ok" }
```
::
