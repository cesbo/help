---
title: "Отказоустойчивая конфигурация"
date: 2023-08-08
---

В конфигурации с отказоустойчивостью можно запустить второй сервер для замены основного в случае отказа.

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000"
```

Эта команда запустит Astra в ведомом режиме и соединит с первичным процессом на сервере по адресу 192.168.1.1. Как только соединение с первичным сервером будет потеряно, Astra выполнит конфигурацию и начнет работу.

По умолчанию Astra выполняет конфигурацию за 3 секунды. Однако можно установить меньшую или большую задержку с помощью параметра `delay` вариант:

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000#delay=10"
```
