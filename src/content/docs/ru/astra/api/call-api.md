---
title: "How to call API methods in Astra?"
date: 2023-03-23
sidebar:
    order: 1
---

API (Интерфейс прикладного программирования) – это методы доступа к данным и взаимодействия с программными компонентами.

## Вызов методов GET с использованием curl

Вы можете использовать `curl` в консоли для вызова метода API. Например, чтобы получить сводный статус процесса и системы:

```sh
curl \
    --user login:password \
    http://server:8000/api/system-status
```

- `login:password` - логин и пароль администратора
- `server:8000` - адрес сервера и основной порт
- `/api/system-status` - путь к методу API

## Вызов метода POST с использованием curl

Методы POST используются для изменения конфигурации Astra. Например, вы можете переключить пользователя из консоли:

```sh
curl \
    -X POST \
    --user login:password \
    -d '{"cmd":"toggle-user","id":"login"}' \
    http://server:8000/control/
```

- `login:password` - логин и пароль администратора
- `-d '{...}'` - содержимое запроса в формате JSON
- `server:8000` - адрес сервера и основной порт

Другой способ выполнения `curl`, когда файл конфигурации передается на стандартный ввод:

```sh
curl -X POST --user login -d @- http://server:8000/control/ <<END
{
"cmd":"toogle-user",
"id":"login"
}
END
```

После запуска curl запрашивает пароль.

## Вызов API с использованием PHP

Вы можете использовать любой язык программирования для управления Astra. Например, простой скрипт на PHP для переключения пользователя:

```php
$req = json_encode(array(
    'cmd' => 'toggle-user',
    'id' => 'login',
));
$ch = curl_init("http://server:8000/control/");
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_USERPWD, "login:password");
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$res = curl_exec($ch);
curl_close($ch);
```