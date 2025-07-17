---
title: "Configuring System and Network Buffers"
date: 2024-09-23
sidebar:
    order: 4
---

Для эффективной отправки или получения данных по UDP необходимо правильно настроить размеры буферов операционной системы.

:::note
Вы можете использовать наш скрипт Tune для автоматической настройки этих параметров. [Подробнее читайте здесь](/en/articles/system/tune/)
:::

## Настройка размеров буферов

Вам следует добавить настройки размера буферов в файл `/etc/sysctl.conf`.

Рекомендуемые настройки для Ethernet адаптеров 1G:

```
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.udp_mem = 8388608 12582912 16777216
net.ipv4.tcp_rmem = 4096 87380 8388608
net.ipv4.tcp_wmem = 4096 65536 8388608
net.core.wmem_default = 16777216
net.core.rmem_default = 16777216
net.ipv4.tcp_tw_reuse = 1
```

Рекомендуемые настройки для Ethernet адаптеров 10G:

```
net.core.rmem_max = 67108864
net.core.wmem_max = 67108864
net.ipv4.udp_mem = 8388608 16777216 33554432
net.ipv4.tcp_rmem = 4096 87380 33554432
net.ipv4.tcp_wmem = 4096 65536 33554432
net.core.wmem_default = 33554432
net.core.rmem_default = 33554432
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
net.ipv4.tcp_tw_reuse = 1
```

Рекомендуемые настройки для Ethernet адаптеров 40G:

```
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.ipv4.udp_mem = 8388608 33554432 67108864
net.ipv4.tcp_rmem = 4096 87380 67108864
net.ipv4.tcp_wmem = 4096 65536 67108864
net.core.wmem_default = 67108864
net.core.rmem_default = 67108864
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
net.ipv4.tcp_tw_reuse = 1
```

Чтобы применить эти настройки, вы можете перезагрузить систему или выполнить:

```
sysctl -p
```

Вы можете проверить текущие значения буферов с помощью этой команды:

```
sysctl \
    net.core.rmem_default \
    net.core.rmem_max \
    net.core.wmem_default \
    net.core.wmem_max \
    net.ipv4.udp_mem \
    net.ipv4.tcp_wmem
```

## Буферы сетевых карт

Если ваш сервер работает под высокой нагрузкой, вам также следует настроить буфер сетевой карты, чтобы предотвратить потерю данных в системном буфере.

Используйте эту команду, чтобы увидеть текущие настройки буферов:

```
ethtool -g eth1
```

Вы увидите размер rx-буфера, который, возможно, уже установлен на максимум. Найти наилучшее значение может быть сложно. Обычно среднее значение работает хорошо. Однако, если у вас высокочастотный многопоточный процессор (более 3 ГГц), вы можете добиться лучших результатов с максимальным размером буфера.

```
Ring parameters for eth1:
Pre-set maximums:
RX:     4096
RX Mini:    0
RX Jumbo:   0
TX:     4096
Current hardware settings:
RX:     4096
RX Mini:    0
RX Jumbo:   0
TX:     256
```

Чтобы увеличить размер буфера сетевой карты, выполните:

```
ethtool -G eth1 rx 2048
```

Настроив эти параметры, вы можете оптимизировать передачу данных UDP и снизить вероятность потерь данных из-за переполнения буферов.