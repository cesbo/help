---
title: "Прием HLS"
date: 2023-08-10
---

HLS или HTTP Live Streaming - это протокол потокового видео с адаптивным битрейтом, основанный на HTTP. Это наиболее популярный формат для потокового вещания через Интернет (OTT-сервисы). Подробнее о [протоколе HLS](https://help.cesbo.com/misc/articles/protocols/hls)

## Формат адреса[](https://help.cesbo.com/astra/receiving/ip/hls#address-format)

```
http://address
http://address:port/path
http://login:password@address:port/path#options
```

Это обычный HTTP-адрес. Astra также поддерживает https.

- `login:password` - логин и пароль для HTTP-аутентификации. Поддерживаются методы аутентификации Basic и Digest
- `address` - Адрес сервера IPv4 или доменное имя
- `port` - номер порта. По умолчанию: `80` для http и `443` для https
- `path` - путь к ресурсу. По умолчанию: `/`

Варианты:

- `ua=Name` - пользовательский заголовок User-Agent
- `timeout=N` - таймаут для загрузки сегментов HLS. По умолчанию таймаут зависит от длительности сегмента
- `debug` - заголовки ответов в журнале. Также следует включить отладку в сообщениях журнала
- `bandwidth=N` - выбрать поток с заданной пропускной способностью. По умолчанию astra выбирает поток с максимальным значением пропускной способности

## Веб-интерфейс[](https://help.cesbo.com/astra/receiving/ip/hls#web-interface)

Чтобы настроить HLS-ввод в Astra, достаточно написать адрес источника в поле Input.
