---
title: EIT Stream
date: 2023-03-17
sidebar:
    order: 3
---

EIT Stream — это инструмент для преобразования [файлов XMLTV](/en/articles/protocols/xmltv/) в поток MPEG-TS с таблицами информации о событиях (EIT) для трансляционных сетей, таких как DVB, ATSC, ISDB.

## Установка

Просто загрузите один исполняемый файл и установите права на выполнение:

```sh
curl -Lo /usr/bin/eit-stream http://cesbo.com/and/eit-stream
chmod +x /usr/bin/eit-stream
```

## Конфигурация

Создайте конфигурационный файл `/etc/eit-stream.conf` с помощью любого текстового редактора. Пример:

```ini
xmltv = /opt/xmltv.xml
output = udp://lo@239.0.0.1:1234
onid = 8000
codepage = 5
eit-days = 1
eit-rate = 1500

[tdt-tot]
country = EST
offset = +120

# Первый мультиплекс

[multiplex]
tsid = 1

[multiplex/service]
pnr = 101
xmltv-id = discovery

[multiplex/service]
pnr = 102
xmltv-id = history

# Второй мультиплекс

[multiplex]
tsid = 2
xmltv = /opt/xmltv-2.xml

[multiplex/service]
pnr = 201
xmltv-id = euronews
```

Строки, начинающиеся с символа `#`, являются комментариями и игнорируются.

### Основные параметры

- `xmltv` - путь к локальному файлу xmltv или http/https-ссылка на xmltv или gzip-файл xmltv. Этот параметр может быть переопределен в `[multiplex]` или в `[multiplex/service]`
- `output` - целевой UDP-адрес
- `onid` - идентификатор оригинальной сети
- `codepage` - кодовая страница. Этот параметр может быть переопределен в `[multiplex]` или в `[multiplex/service]`
- `eit-days` - количество дней в EPG. по умолчанию 3
- `eit-rate` - битрейт в кбит/с. по умолчанию 15 кбит/с на каждую службу

### Поддерживаемые кодовые страницы

Следующие кодовые страницы доступны для текстового кодирования:

- `0` - По умолчанию. Латинский (ISO 6937)
- `1` - Западноевропейский (ISO 8859-1)
- `2` - Центральноевропейский (ISO 8859-2)
- `3` - Южноевропейский (ISO 8859-3)
- `4` - Североевропейский (ISO 8859-4)
- `5` - Кириллический (ISO 8859-5)
- `6` - Арабский (ISO 8859-6)
- `7` - Греческий (ISO 8859-7)
- `8` - Иврит (ISO 8859-8)
- `9` - Турецкий (ISO 8859-9)
- `10` - Нордический (ISO 8859-10)
- `11` - Тайский (ISO 8859-11)
- `13` - Балтийский (ISO 8859-13)
- `14` - Кельтский (ISO 8859-14)
- `15` - Западноевропейский (ISO 8859-15)
- `21` - UTF-8

### Опции времени и даты

Секция `[tdt-tot]`:

- `country` - код страны в формате ISO 3166-1 alpha-3
- `offset` - присваиваемый временной сдвиг в минутах от GMT. Например, +120 это GMT+2 или -300 это GMT-5

### Опции мультиплекса

Секция `[multiplex]`

- `tsid` - идентификатор транспортного потока мультиплекса
- `name` - необязательное поле для описания мультиплекса

### Опции сервиса

Секция `[multiplex/service]`

- `pnr` - номер канала/PNR
- `xmltv-id` - идентификатор канала в xmltv
- `parental-rating` - возрастное ограничение. Значение определяется парами: страна и возраст. Например: `parental-rating = EST 16 USA 14`. Код страны в формате ISO 3166-1 alpha-3 (3 буквы). Возраст от 4 до 18 (включительно), 0 - без ограничений.

## Поток с EIT в MPTS

С помощью Astra вы можете добавить поток UDP с EIT в MPTS.
В настройках MPTS добавьте вход и задайте UDP-адрес, например в конфигурации выше адрес `udp://lo@239.0.0.1:1234`.
В расширенных настройках MPTS включите опцию "Pass EIT".

## Автозапуск

Зарегистрируйте службу в systemd для работы в фоновом режиме и автоматического запуска при старте системы. Создайте файл `/etc/systemd/system/eit-stream.service`:

```ini
[Unit]
Description=eit-stream service
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/eit-stream /etc/eit-stream.conf
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Следующие команды могут использоваться для управления службой:

- запустить службу: `systemctl start eit-stream`
- остановить службу: `systemctl stop eit-stream`
- включить авто-запуск: `systemctl enable eit-stream`
- отключить авто-запуск: `systemctl disable eit-stream`

## Перезагрузка

Чтобы перезапустить службу один раз за ночь, добавьте следующую строку в /etc/crontab:

```
0   2   *   *   *   root systemctl restart eit-stream
```