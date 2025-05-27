---
title: "Astra список DVB"
date: 2023-02-23
sidebar:
    order: 14
---

Astra DVB List - это простой встроенный инструмент для получения информации об установленных DVB-адаптерах.

## Использование[](/ru/misc/tools-and-utilities/dvb/dvbls#usage)

```
astra --dvbls [OPTIONS]
```

Возможные варианты:

- `-o FILE` - экспорт списка dvb в файл

После запуска программа выводит информацию об адаптерах на консоль.

Адаптер доступен для использования:

```
Nov 10 09:00:00: INFO: adapter = 3, device = 0
Nov 10 09:00:00: INFO:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: INFO:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: INFO:     type = S
```

Адаптер взят:

```
Nov 10 09:00:00: WARNING: adapter = 2, device = 0
Nov 10 09:00:00: WARNING:     adapter in use
Nov 10 09:00:00: WARNING:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: WARNING:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: WARNING:     type = S
```

При доступе к устройству произошла ошибка. Какой-то аппаратный сбой или требуется переустановка драйвера:

```
Nov 10 09:00:00: ERROR: adapter = 1, device = 0
Nov 10 09:00:00: ERROR:     failed to open [Bad file descriptor]
```

## Экспорт списка DVB в файл[](/ru/misc/tools-and-utilities/dvb/dvbls#export-dvb-list-to-the-file)

При запуске Astra получает информацию об установленных в системе DVB-адаптерах. В некоторых редких случаях эта операция может занять длительное время. Чтобы не обновлять эту информацию при каждом запуске, можно сохранить ее в файл.

Для этого выполните следующие действия:

Создать каталог для скриптов Astra:

```
mkdir -p /etc/astra/mod
```

Экспорт списка DVB в файл Lua:

```
astra --dvbls -o /etc/astra/mod/dvb.lua
```
