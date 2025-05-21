---
title: "Переадресация портов с помощью socat"
date: 2023-02-28
sidebar:
    order: 9
---

Socat - это инструмент командной строки, обеспечивающий двунаправленную передачу данных между двумя потоками.

## Раскрытие локальных ресурсов[](https://help.cesbo.com/misc/tools-and-utilities/network/socat#exposing-local-resources)

Запрос получен на порт `11554` будет направлена в `192.168.88.100:554`

```
socat tcp-listen:11554,reuseaddr,fork tcp:192.168.88.100:554
```
