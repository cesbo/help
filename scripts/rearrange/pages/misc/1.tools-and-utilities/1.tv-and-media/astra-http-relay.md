---
title: "Astra HTTP Relay"
date: 2023-02-23
---

Astra HTTP Relay - это простой встроенный инструмент для ретрансляции данных из любого источника, поддерживаемого Astra, на HTTP-клиент.

## Использование[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-http-relay#usage)

```
astra --relay -p 8000
```

Аргументы командной строки:

- `-p 8000` - локальный порт для входящих соединений. По умолчанию: `8000`;
- `-a 0.0.0.0` - локальный IP-адрес для входящих соединений. По умолчанию `0.0.0.0` - принять запрос на любом интерфейсе;
- `-l 0.0.0.0` - IP-адрес локального интерфейса для приема UDP/RTP-потоков. По умолчанию `0.0.0.0` - получает потоки в соответствии с системной таблицей маршрутизации;
- `--pass login:password` - логин и пароль для базовой авторизации всех запросов;
- `--no-udp` - отключить доступ к источнику UDP/RTP;
- `--no-http` - отключить доступ к источнику HTTP;
- `--buffer-size 1024` - максимальный размер буфера в килобайтах для каждого клиента. По умолчанию 1024 Кб;
- `--buffer-fill 128` - определяет количество килобайт, которое необходимо заполнить в буфере перед началом передачи. По умолчанию 128 Кбайт;
- `--daemon` - запуск в режиме демона;
- `--log` /var/log/relay.log - полный путь к файлу журнала;
- `--channels /etc/astra/relay.lua` - полный путь к псевдонимам каналов.

## Формат адреса[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-http-relay#address-format)

Адрес запроса имеет следующий формат:

- `http://your-server-address:8000/udp/239.255.1.1:1234` - получает UDP-поток от многоадресной группы `239.255.1.1:1234`
- `http://your-server-address:8000/http/example.com/travel-channel` - получает HTTP-поток от `http://example.com/travel-channel`

## Псевдонимы каналов[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-http-relay#channel-aliases)

Канал aslias позволяет использовать короткое имя вместо полного адреса. Пример списка псевдонимов:

```
-- /etc/astra/relay.conf

channels = {
    ["demo"] = "udp://239.255.1.1:1234",
    ["travel-channel"] = "http://example.com/travel-channel"
}
```

Запуск реле с указанием пути к списку псевдонимов:

```
astra --relay -p 8000 --channels /etc/astra/relay.conf
```

Каналы из примера выше будут доступны на:

- `http://your-server-address:8000/demo` - UDP-поток
- `http://your-server-address:8000/travel-channel` - HTTP-поток

## Статистика[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-http-relay#statistics)

Статистика - это простая страница, на которой активные сессии содержат следующую информацию:

- IP-адрес клиента
- Путь запроса - псевдоним или полный адрес канала-источника
- Время работы
- Ссылка на закрытие сессии

Чтобы просмотреть статистику, откройте ее в браузере: `http://your-server-address:8000/stat/`
