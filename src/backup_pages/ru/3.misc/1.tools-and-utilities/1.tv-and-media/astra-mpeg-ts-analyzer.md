---
title: "Astra MPEG-TS анализатор"
date: 2023-02-23
---

Astra MPEG-TS Analyzer - встроенный инструмент для анализа потоков MPEG-TS.

![Интерфейс анализатора Astra MPEG-TS](https://cdn.cesbo.com/help/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer/analyzer.png)

## Запуск с помощью веб-интерфейса[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer#launch-with-web-interface)

```
astra --analyze [OPTIONS] -p PORT
```

Варианты:

- `-p PORT` - укажите порт, который будет использоваться для веб-интерфейса;
- `-c FILE` - указывает путь к списку каналов, который будет создан автоматически. Данная опция позволяет сохранять проанализированные адреса;
- `--daemon` - запуск в режиме демона;
- `--log` /var/log/relay.log - полный путь к файлу журнала.

## Запуск в консоли[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer#launch-in-console)

```
astra --analyze [OPTIONS] ADDRESS
```

Варианты:

- `-n seconds` - остановка анализатора через заданное время
- `-o file` - сохранить полученный поток в файл

Astra регистрирует информацию непосредственно на консоли. Например:

```
> astra --analyze "udp://239.255.1.1:1234"

Nov 28 00:59:28: INFO: [main] Starting Astra (commit:b871b4e3 date:2022-01-12)
Nov 28 00:59:29: INFO: PAT tsid:1 version:1
Nov 28 00:59:29: INFO: PAT    PMT pid:115 pnr:1
Nov 28 00:59:29: INFO: PAT crc32:0x02575D2D
Nov 28 00:59:29: INFO: PMT pnr:1 version:1
Nov 28 00:59:29: INFO: PCR pid:215
Nov 28 00:59:29: INFO: VIDEO pid:215 type:0x1B
Nov 28 00:59:29: INFO: AUDIO pid:315 type:0x04
Nov 28 00:59:29: INFO: AUDIO    lang:eng
Nov 28 00:59:29: INFO: PMT crc32:0x9E87CF44
Nov 28 00:59:29: INFO: SDT tsid:1 version:3
Nov 28 00:59:29: INFO: SDT pnr:1
Nov 28 00:59:29: INFO: SDT    provider:Demo TV
Nov 28 00:59:29: INFO: SDT    service:Demo1
Nov 28 00:59:29: INFO: SDT crc32:0x9F98BF46
Nov 28 00:59:30: INFO: EIT tsid:1 onid:1 pnr:1 version:17
Nov 28 00:59:30: INFO: EIT    start:Wed Nov 28 00:10:00 2018
Nov 28 00:59:30: INFO: EIT    stop:Wed Nov 28 01:05:00 2018
Nov 28 00:59:30: INFO: EIT    lang:eng title:DOCUMENTARY
Nov 28 00:59:30: INFO: EIT crc32:0xC0BCCA18
Nov 28 00:59:30: INFO: Bitrate: 2323 Kbit/s
Nov 28 00:59:30: INFO: EIT tsid:1 onid:1 pnr:1 version:17
Nov 28 00:59:30: INFO: EIT    start:Wed Nov 28 01:05:00 2018
Nov 28 00:59:30: INFO: EIT    stop:Wed Nov 28 03:05:00 2018
Nov 28 00:59:30: INFO: EIT    lang:eng title:AUDIENCE (16+)
Nov 28 00:59:30: INFO: EIT crc32:0xE9257DFA
Nov 28 00:59:31: INFO: Bitrate: 2397 Kbit/s
Nov 28 00:59:32: INFO: Bitrate: 2755 Kbit/s
Nov 28 00:59:33: INFO: Bitrate: 4446 Kbit/s
```

## Формат адреса[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer#address-format)

Анализатор поддерживает любой формат приема, поддерживаемый Astra. Например:

- `udp://239.255.1.1:1234`
- `http://example.com/media.m3u8`
- `dvb://#adapter=0&type=s2&tp=11044:v:43200`

Более подробная информация описана в разделе Настройки Astra: Вход
