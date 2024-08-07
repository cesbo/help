---
title: "Экспорт событий мониторинга"
date: 2023-03-01
---

Astra позволяет экспортировать события мониторинга со статусом входящих потоков или DVB-адаптеров.

## URL-адрес мониторинга[](https://help.cesbo.com/astra/monitoring/export/export-monitoring-events#monitoring-url)

Адрес сервера мониторинга может быть указан в веб-интерфейсе: Настройки -> Общие -> Мониторинг:

![Варианты мониторинга](https://cdn.cesbo.com/help/astra/monitoring/export/export-monitoring-events/options.png)

Адрес имеет следующие параметры:

- `interval=30` - этот параметр определяет интервал передачи статистики, измеряемый в секундах. По умолчанию значение этого параметра равно 30.
- `total=1` - этот параметр используется для получения сводной статистики из пакета данных

Например, с адресом `http://example.com/api#interval=60&total=1` astra отправляет HTTP POST-запрос на `http://example.com/api` ежеминутно, запрос, содержащий JSON со сводной статистикой за одну минуту мониторинга потока.

## Свойства потока[](https://help.cesbo.com/astra/monitoring/export/export-monitoring-events#stream-properties)

Свойства потока Astra передаются только один раз при запуске потока.

```
[
    {
        "channel": {
            "type": "spts",
            "name": "Channel Name",
            "id": "a002",
            ...
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `channel` - конфигурация всего потока
- `timestamp` - время события
- `hostname` - имя хоста сервера

## Состояние потока[](https://help.cesbo.com/astra/monitoring/export/export-monitoring-events#stream-status)

```
[
    {
        "count": 0,
        "timestamp": 1677687310,
        "channel_id": "a002",
        "input_id": 1,
        "current": true,
        "onair": false,
        "scrambled": false,
        "bitrate": 3013,
        "packets": 2005,
        "cc_error": 0,
        "sc_error": 0,
        "pes_error": 0,
        "pcr_error": 15
    }
]
```

В этом списке описаны параметры, предоставляющие информацию о потоковом рабочем процессе:

- `count` - только для сводных данных, указать количество секунд, прошедших с момента последнего сбора статистики
- `timestamp` - время события в формате Unix
- `channel_id` - уникальный идентификатор канала
- `input_id` - номер входного сигнала. Начинается с 1
- `current` - указывает на то, что статистика по текущему активному входу
- `onair` - статус потока, предоставляя быстрый способ проверить, работает ли он
- `scrambled` - указывает, зашифрован поток или нет
- `bitrate` - входной битрейт в Кбит/с
- `packets` - общее количество пакетов TS
- `cc_error` - общее количество возникших ошибок CC
- `pes_error` - общее количество возникших ошибок ПЭС

Эти данные передаются в формате JSON в виде массива из нескольких элементов, каждый из которых представляет собой одну секунду наблюдений. Количество элементов в массиве определяется частотой передачи статистики. Если включена агрегация статистики, то в массиве имеется только один элемент, который содержит общее количество ошибок и средний битрейт за период, равный частоте передачи статистики.

## Свойства адаптера[](https://help.cesbo.com/astra/monitoring/export/export-monitoring-events#adapter-properties)

Свойства адаптера Astra передаются только один раз при запуске адаптера.

```
[
    {
        "dvb": {
            "name": "11034V @ 13E",
            "id": "a001",
            ....
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `dvb` - при конфигурации адаптера
- `timestamp` - время события
- `hostname` - имя хоста сервера

## Состояние адаптера[](https://help.cesbo.com/astra/monitoring/export/export-monitoring-events#adapter-status)

```
[
    {
        "dvb_id": "a0dj",
        "timestamp": 1677687310,
        "status": 31,
        "signal": 76,
        "signal_db": -2488,
        "snr": 60,
        "snr_db": 902,
        "unc": 0,
        "ber": 0,
        "bitrate": 1938
    }
]
```

В этом списке описаны параметры, предоставляющие информацию о рабочем процессе адаптера:

- `dvb_id` - уникальный идентификатор адаптера
- `timestamp` - время события
- `status` - состояние сигнала
- `signal` - приблизительный уровень сигнала в процентах
- `signal_db` - уровень сигнала в `dBm * 100`
- `snr` - приблизительное отношение сигнал/шум в процентах
- `snr_db` - отношение сигнал/шум в `dB * 100`
- `ber` - счетчик битовых ошибок
- `unc` - счетчик ошибок блока
- `bitrate` - общий битрейт в Кбит/с

Состояние сигнала характеризует состояние тюнера, описываемое 5-битовым числом:

- `SIGNAL` - бит сигнала будет установлен, когда тюнер поймает сигнал
- `CARRIER` - устойчивый прием сигнала
- `FEC` - прием данных FEC (forward error correction)
- `SYNC` - полученная информация для синхронизации
- `LOCK` - тюнер настроен на прием сигнала.

Если тюнер настроен успешно и сигнал зафиксирован, то параметр status будет иметь значение 31
