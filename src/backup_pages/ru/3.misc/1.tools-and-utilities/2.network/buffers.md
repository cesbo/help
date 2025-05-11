---
title: "Настройка буферов системы и сети"
date: 2024-09-23
---

Для эфективной отправки и приёма данных по UDP необходимо правильно настроить размеры буферов операционной системы.

## Настройка размеров буферов

Рекомендуется добавить настройки размеров буферов в файл `/etc/sysctl.conf`.

Рекомендуемые настройки для 1G Ethernet адаптеров:

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

Рекомендуемые настройки для 10G Ethernet адаптеров:

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

Рекомендуемые настройки для 40G Ethernet адаптеров:

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

Чтобы применить эти настройки, можно перезагрузить систему или выполнить:

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

## Настройка буферов сетевой карты

Если вы работаете на сервере с высокой нагрузкой, вы также должны настроить буфер сетевой карты, чтобы предотвратить потерю данных в буфере системы.

Используйте эту команду, чтобы увидеть текущие настройки буфера:

```
ethtool -g eth1
```

Вы увидите размер буфера rx, который может уже быть установлен в максимум. Найти лучшее значение может быть сложно. Обычно хорошо работает среднее значение. Однако, если у вас высокочастотный многоядерный процессор (более 3 ГГц), вы можете получить лучшие результаты с максимальным размером буфера.

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

Для увеличения размера буфера сетевой карты выполните:

```
ethtool -G eth1 rx 2048
```

Эти настройки позволяют оптимизировать передачу данных по UDP и уменьшить вероятность потери данных из-за переполнения буфера.
