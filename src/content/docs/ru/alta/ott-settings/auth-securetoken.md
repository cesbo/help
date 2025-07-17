---
title: "Auth: Securetoken"
sidebar:
    order: 6
---

Защита от несанкционированного доступа к контенту с помощью временных токенов

![Securetoken Authorization](https://cdn.cesbo.com/help/alta/ott-settings/authorization/securetoken/options.png)

## Как это работает

1. Клиент запрашивает плейлист у middleware.
2. Middleware генерирует временный токен для каждого канала.
3. Клиент запрашивает канал с использованием токена.
4. Alta проверяет токен; доступ разрешен, если токен действителен.

## Токен

Временный токен вычисляется middleware на стороне сервера при запросе клиентом плейлиста. Токен имеет следующие компоненты:

- `Hash`: SHA1-хэш, вычисляемый на стороне сервера.
- `Salt`: Случайная строка для дополнительной безопасности.
- `End time`: Время истечения токена (UNIX timestamp).
- `Start time`: Время создания токена (UNIX timestamp).

Все части должны быть разделены знаком минус и добавлены к адресу канала. Например: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Хэш

Конкатенируйте и хэшируйте с помощью SHA1 в следующем порядке:

- Путь канала (например, `/tv/travel-channel/index.m3u8`)
- IP-адрес клиента
- Время начала (UNIX timestamp)
- Время окончания (UNIX timestamp)
- Securetoken - определённый в настройках Alta
- Salt

Формула:

```
sha1(channel_path + client_ip + start_time + end_time + securetoken + salt)
```

## Встроенный генератор защищенных ссылок

Встроенный генератор защищенных ссылок полезен для создания безопасных ссылок для тестов на любом канале.
Если у вас есть канал с включённым securetoken, вы можете сгенерировать защищённую ссылку в администраторской панели:

1. Перейдите в настройки канала.
2. Нажмите на кнопку "Secure Link", чтобы открыть диалог "Generate Channel Secure Link".
3. Заполните следующие поля:
   - **IP**: IP-адрес клиента.
   - **Start / End**: Период действия токена.
4. Нажмите **Generate**, чтобы создать защищённую токенизированную ссылку.

## Пример на PHP

Создайте файл `securetoken.php` с следующим кодом:

```php
<?php

$channel = '/tv/travel-channel/index.m3u8';
$client = '192.168.88.98';
$starttime = 1669810000;
$endtime = 1669890000;
$securetoken = 'secret';
$salt = 'a5cd6c00';

$hash = sha1($channel . $client . $starttime . $endtime . $securetoken . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo 'https://example.com:8100' . $stream . '?token=' . $token . PHP_EOL;
```

Запуск скрипта:

```
php securetoken.php
```

Вы увидите строку из первого примера. Пожалуйста, обратите внимание, этот скрипт используется только для примера.