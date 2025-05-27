---
title: Системные требования
date: 2023-09-12
sidebar:
    order: 3
---

Цифровое телевидение является высоконагруженным сервисом и требует определенных ресурсов. Astra не имеет ограничений на количество каналов и клиентов. Однако выбранные протоколы и доступные ресурсы могут влиять на эти параметры.

## Работа программного обеспечения[](/ru/astra/getting-started/requirements#software-operation)

Избегайте использования оборудования потребительского класса или устаревшего оборудования.

Для работы системы и общего программного обеспечения рекомендуется не менее 2 Гб оперативной памяти. Для резерва - не менее 20%.

## UDP Multicast или DVB вещание[](/ru/astra/getting-started/requirements#udp-multicast-or-dvb-broadcast)

Доставка контента по сетям UDP Multicast или DVB вещание требует минимальных системных требований. Всего один сервер может подготовить все каналы и распределить их по сети.

### CPU

Рекомендуется использовать процессор с максимальной доступной частотой. Убедитесь, что процессор работает в режиме производительности, а режим энергосбережения отключен.

Количество необходимых процессорных ядер зависит от числа каналов, по которым будет осуществляться доставка. Хорошим эмпирическим правилом является одно ядро на 30 каналов. Таким образом, для 100 каналов хорошим выбором будет процессор с 4 ядрами.

### RAM

- Для DVB-модуляторов, таких как TBS, DigitalDevices или HiDes, Astra выделяет 256 Мб на транспондер.
- Для UDP-каналов с синхронизацией битрейта Astra выделяет около 12 Мб на канал. Без синхронизации на канал выделяется только 1Мб, но это, как правило, не рекомендуется

Для доставки 100 каналов достаточно около 2 Гб оперативной памяти.

### Работа в сети

Избегайте использования VLAN, Bonding и сетевых адаптеров потребительского класса.

## [HLS](/ru/astra/getting-started/requirements#hls)

Доставка контента по протоколу HLS является наиболее сложным и ресурсоемким процессом, что обусловлено самой природой протокола.

### CPU

Частота процессора не имеет решающего значения для HLS. Убедитесь, что процессор находится в режиме производительности, а режим энергосбережения выключен.

Необходимое количество ядер процессора зависит от количества очередей Rx/Tx в сетевом адаптере. Поэтому для Intel 82599 с очередями 128Tx следует использовать процессор с максимально возможным количеством ядер.

### RAM

Использование оперативной памяти зависит от настроек HLS. По умолчанию Astra готовит 4 сегмента, каждый длиной до 3 секунд. Для HD-канала с битрейтом 10 Мбит/с будет выделено около 15 Мбайт (расчет 4 \* 3 \* 10 / 8), помимо фиксированных 2 Мбайт на канал, которые не зависят от битрейта канала.

Каждая активная сессия требует около 2 Мб оперативной памяти.

### Работа в сети

Используйте сетевые адаптеры серверного класса с максимально возможным количеством очередей Tx

### Масштабирование

В силу особенностей HLS все клиенты подключаются непосредственно к серверу. Для балансировки нагрузки мы рекомендуем использовать кэширующие серверы. Подробнее в статье [Кэширующий прокси-сервер HLS с Nginx](/ru/misc/tools-and-utilities/hls-caching-proxy-with-nginx)

## Каналы приема[](/ru/astra/getting-started/requirements#receiving-channels)

Ресурсы для приема каналов не так важны, как для доставки. Около 1 Гб оперативной памяти на 100 каналов.

## Резюме[](/ru/astra/getting-started/requirements#summary)

Общая потребность в оперативной памяти рассчитывается как сумма:

- Общая работа с программным обеспечением
- Прием
- Доставка
- Другое программное обеспечение на вашем сервере
- Резерв оперативной памяти

### Пример с вещанием в формате DVB-C

В сумме на 100 каналов:

- Работа с общим программным обеспечением: 2 Гб
- Получение: 1 Гб
- Поставка с 4 транспондерами: 2 Гб (256 Мб на транспондер, плюс дополнительные ресурсы для мультиплексирования)
- Другое программное обеспечение: 0
- Резерв оперативной памяти: (2 + 1 + 2) \* 0,5 = 2,5 Гб

Итого (округленно): 8 Гб
Avoid using VLAN, Bonding and consumer-grade network adapters.

## HLS

Content delivery with the HLS protocol is the most complicated and resource-intensive process due to the nature of the protocol.

### CPU

CPU frequency is not crucial for HLS. Make sure the CPU is in performance mode and power-saving mode is turned off.

The number of CPU cores needed depends on the number of Rx/Tx queues in the network adapter. Therefore, for Intel 82599 with 128Tx queues use CPU with as many cores as possible.

### RAM

RAM usage depends on the HLS settings. By default, Astra prepares 4 segments, each up to 3 seconds long. For HD channel with a bitrate of 10Mbit per second, approximately 15Mb (calculated 4 * 3 * 10 / 8) will be allocated, in addition to a fixed 2Mb per channel, that doesn't depend of the channel bitrate.

Each active session requires about 2Mb of RAM.

### Networking

Use server-grade network adapters with as many Tx queues as possible

### Scaling

Due to HLS nature all clients connected directly to the server. For load balancing we recommend to use caching servers. Read more in [HLS Caching Proxy with Nginx](/ru/misc/tools-and-utilities/hls-caching-proxy-with-nginx)

## Receiving channels

Resources for channels receiving is not so important as delivery. About 1Gb of RAM per 100 channels.

## Summary

Total RAM needed calculated as sum of the:

- General software operation
- Receiving
- Delivery
- Other software on your server
- RAM Reserve

### Example with DVB-C Broadcasting

In summary for 100 channels:

- General software operation: 2Gb
- Receiving: 1Gb
- Delivery with 4 transponders: 2Gb (256Mb per transponder, plus additional resources for mulpiplexing)
- Other software: 0
- RAM Reserver: (2 + 1 + 2) * 0.5 = 2.5Gb

Total (rounded up): 8Gb
