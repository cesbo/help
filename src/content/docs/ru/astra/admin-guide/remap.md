---
title: "Настройки ремапирования потока"
date: 2023-08-14
sidebar:
    order: 12
---

Функция Remap позволяет изменять идентификаторы потоков и фильтровать нередактируемые пакеты

![Параметры ремапирования потока](https://cdn.cesbo.com/help/astra/admin-guide/stream/remap.png)

- `Map PID's` - модифицировать идентификатор пакета (PID) для элементарных потоков MPEG-TS. Подробнее в [Переопределение PID потоков](https://help.cesbo.com/astra/processing/mpegts/remap)
- `Filter PID's` - удаляет определенные пакеты в потоке MPEG-TS на основе их PID. Подробнее в [Фильтрация PID](https://help.cesbo.com/astra/processing/mpegts/filter)
- `Change PNR` - изменить номер программы. Номер программы может находиться в диапазоне от 1 до 65535
- `Change TSID` - изменение идентификатора транспортного потока
