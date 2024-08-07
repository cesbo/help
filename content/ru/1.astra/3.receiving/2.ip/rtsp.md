---
title: "Прием RSTP"
date: 2023-03-23
---

RSTP является популярным протоколом для потоковой передачи мультимедиа по IP-сетям и широко используется в IP-камерах благодаря возможности передачи видеопотока с низкой задержкой и высоким качеством.

## Формат адреса[](https://help.cesbo.com/astra/receiving/ip/rtsp#address-format)

Адреса RSTP используются для идентификации местоположения медиапотока, передаваемого по сети

```
rtsp://address
rtsp://address:port/path
rtsp://login:password@address:port/path#options
```

- `login:password` - логин и пароль для аутентификации по протоколу RTSP. Поддерживаются методы аутентификации Basic и Digest
- `address` - Адрес сервера IPv4 или доменное имя
- `port` - номер порта. По умолчанию: `554`
- `path` - путь к ресурсу. По умолчанию: `/`

Варианты:

- `tcp` - чередующийся режим. принимать поток по TCP вместо UDP
- `ua=Name` - пользовательский заголовок User-Agent

## Веб-интерфейс[](https://help.cesbo.com/astra/receiving/ip/rtsp#web-interface)

Для настройки входа RSTP в Astra можно либо ввести адрес источника непосредственно в `Input address` поле в настройках потока или воспользуйтесь формой настройки входа, доступ к которой осуществляется нажатием на значок шестеренки:

![Опции RTSP](https://cdn.cesbo.com/help/astra/receiving/ip/rtsp/options.png)

- `RSTP address` - адрес источника потока RSTP
- `Interleaved mode` - По умолчанию Astra использует UDP для получения медиаданных от камеры, режим чередования заставляет камеру передавать данные по TCP

## Поиск и устранение неисправностей[](https://help.cesbo.com/astra/receiving/ip/rtsp#troubleshooting)

### h.265 не работает

Текущая версия Astra поддерживает только H.264

### Ошибки таймаута

Сообщения об ошибках могут включать `Connection timeout` или `Response timeout`, что свидетельствует о том, что камера не отвечает на запросы от Astra. Одной из возможных причин этой проблемы является ситуация, когда камера застряла и не может ответить на запросы

### Не удалось выполнить аутентификацию

Неверный логин или пароль для входа в поток RTSP

### Неизвестный формат кодирования

Это может свидетельствовать о том, что формат данных потока не распознается компанией Astra. Эта ошибка может возникнуть, если в потоке RSTP используется неподдерживаемый формат данных или метод кодирования
