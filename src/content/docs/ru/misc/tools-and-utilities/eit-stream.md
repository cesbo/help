---
title: "EIT поток"
date: 2023-03-17
sidebar:
    order: 3
---

EIT Stream - это инструмент для преобразования [файлов XMLTV](/ru/misc/articles/format/xmltv) в поток MPEG-TS с информационными таблицами событий (EIT) для таких сетей вещания, как DVB, ATSC, ISDB.

## Установка[](/ru/misc/tools-and-utilities/tv-and-media/eit-stream#installation)

Достаточно загрузить один двоичный файл и установить разрешение на выполнение:

```
curl -Lo /usr/bin/eit-stream http://cesbo.com/and/eit-stream
chmod +x /usr/bin/eit-stream
```

## Конфигурация[](/ru/misc/tools-and-utilities/tv-and-media/eit-stream#configuration)

Создание файла конфигурации `/etc/eit-stream.conf` с помощью любого текстового редактора. Пример:

```
xmltv = /opt/xmltv.xml
output = udp://lo@239.0.0.1:1234
onid = 8000
codepage = 5
eit-days = 1
eit-rate = 1500

[tdt-tot]
country = EST
offset = +120

# First multiplex

[multiplex]
tsid = 1

[multiplex/service]
pnr = 101
xmltv-id = discovery

[multiplex/service]
pnr = 102
xmltv-id = history

# Second multiplex

[multiplex]
tsid = 2
xmltv = /opt/xmltv-2.xml

[multiplex/service]
pnr = 201
xmltv-id = euronews
```

Строки, начинающиеся с символа `#` является комментарием и игнорируется.

### Общие опции

- `xmltv` - путь к локальному файлу xmltv. или http/https ссылка на файл xmltv или gzip xmltv. Эта опция может быть переопределена в `[multiplex]` или в `[multiplex/service]`
- `output` - UDP-адрес назначения
- `onid` - исходный идентификатор сети
- `codepage` - codepage. Эта опция может быть переопределена в `[multiplex]` или в `[multiplex/service]`
- `eit-days` - количество дней в epg. по умолчанию 3
- `eit-rate` - битрейт в кбит/с. по умолчанию 15 кбит/с на каждую услугу

### Поддерживаемые кодовые страницы

Следующие кодовые страницы, доступные для кодирования текста:

- `0` - По умолчанию. Латинский (ISO 6937)
- `1` - Западноевропейский (ISO 8859-1)
- `2` - Центрально-европейский (ISO 8859-2)
- `3` - Южно-европейский (ISO 8859-3)
- `4` - Североевропейский (ISO 8859-4)
- `5` - Кириллица (ISO 8859-5)
- `6` - Арабский язык (ISO 8859-6)
- `7` - Греческий язык (ISO 8859-7)
- `8` - Иврит (ISO 8859-8)
- `9` - Турецкий язык (ISO 8859-9)
- `10` - Nordic (ISO 8859-10)
- `11` - Тайский язык (ISO 8859-11)
- `13` - Балтийское кольцо (ISO 8859-13)
- `14` - Кельтский (ISO 8859-14)
- `15` - Западноевропейский (ISO 8859-15)
- `21` - UTF-8

### Параметры времени и даты

Раздел `[tdt-tot]`:

- `country` - код страны в формате ISO 3166-1 alpha-3
- `offset` - подписанное смещение времени в минутах от GMT. Например, +120 - GMT+2 или -300 - GMT-5

### Варианты мультиплексов

Раздел `[multiplex]`

- `tsid` - идентификатор мультиплексного транспортного потока
- `name` - необязательное поле для описания мультиплекса

### Варианты обслуживания

Раздел `[multiplex/service]`

- `pnr` - номер канала/пнр
- `xmltv-id` - идентификатор канала в xmltv
- `parental-rating` - возрастное ограничение. Значение определяется парами: страна и возраст. Например: `parental-rating = EST 16 USA 14`. Код страны в формате ISO 3166-1 alpha-3 (3 буквы). Возраст от 4 до 18 лет (включительно), 0 - без ограничений.

## Добавление EIT в MPTS[](/ru/misc/tools-and-utilities/tv-and-media/eit-stream#mux-stream-with-eit-to-mpts)

С помощью Astra можно добавлять в MPTS UDP-поток с EIT. В настройках MPTS добавьте вход и задайте UDP-адрес, например, в приведенной выше конфигурации адрес `udp://lo@239.0.0.1:1234`. В дополнительных настройках MPTS включите опцию "Проходить EIT".

## Автозапуск[](/ru/misc/tools-and-utilities/tv-and-media/eit-stream#autostart)

Зарегистрируйте сервис в systemd для запуска службы в фоновом режиме и автозапуска при старте системы. Создайте файл `/etc/systemd/system/eit-stream.service`:

```
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

Следующая команда может быть использована для управления сервисом:

- запустить сервис: `systemctl start eit-stream`
- остановить сервис: `systemctl stop eit-stream`
- включить автозапуск: `systemctl enable eit-stream`
- отключить автозапуск: `systemctl disable eit-stream`

## Перезагрузка[](/ru/misc/tools-and-utilities/tv-and-media/eit-stream#reload)

Чтобы перезапускать службу один раз ночью, добавьте в /etc/crontab следующую строку:

```
0   2   *   *   *   root systemctl restart eit-stream
```
