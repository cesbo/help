---
title: "Авторизация Securetoken"
date: 2023-06-19
sidebar:
    order: 16
---

Middleware генерирует уникальный токен для каждого канала с помощью криптоалгоритмов и securetoken. К адресу каждого канала Middleware добавляет информацию о разрешении доступа, сроке действия и токене для подтверждения предоставленных данных.

Для проверки предоставленных данных и предоставления доступа к каналу Astra использует те же криптоалгоритмы и тот же securetoken.

## Токен[](/ru/astra/delivery/http-hls-auth/securetoken#token)

Временный токен, вычисляемый middleware на стороне сервера при запросе клиентом списка воспроизведения. Токен содержит следующие части:

1. Hash - хэш, вычисляемый на сервере по алгоритму SHA1
2. Соль - случайное слово для большей надежности
3. End time - время истечения срока действия токена в формате unix-timestamp
4. Start time - время создания токена в формате unix-timestamp

Все части должны быть разделены знаком минус и добавлены к адресу канала. Например: `https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000`

## Hash[](/ru/astra/delivery/http-hls-auth/securetoken#hash)

Хэш должен быть вычислен на промежуточном ПО по алгоритму SHA1 из строки, конкатенированной из следующих частей:

- Channel ID - уникальный идентификатор канала из настроек Astra
- IP-адрес клиента
- Время начала - unix-timestamp в виде десятичного числа
- Время окончания - unix-timestamp в виде десятичного числа
- Securetoke - определяется в настройках Astra
- Соль - случайное слово для большей надежности

## Пример на PHP[](/ru/astra/delivery/http-hls-auth/securetoken#example-on-php)

Создать файл `securetoken.php` со следующим кодом:

```
<?php

$channel_path = '/tv/travel-channel/index.m3u8';
$channel_id = 'travel-channel';
$client_ip = '192.168.88.98';
$starttime = time() - 60;
$endtime = $starttime + 3600;
$securetoken = 'secret';
$salt = bin2hex(random_bytes(4));
$hash = sha1($channel_id . $client_ip . $starttime . $endtime . $securetoken . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo 'https://example.com:8100' . $channel_path . '?token=' . $token . PHP_EOL;
```

Сценарий запуска:

```
php securetoken.php
```

Вы увидите строку из первого примера. Обратите внимание, что этот скрипт приведен только для примера.
