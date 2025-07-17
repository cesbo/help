---
title: "Configuring System and Network Buffers"
date: 2024-09-23
sidebar:
    order: 4
---

Para enviar o recibir datos de manera eficiente a través de UDP, es necesario configurar correctamente los tamaños de los búferes de tu sistema operativo.

:::note
Puedes usar nuestro script Tune para configurar estos ajustes automáticamente. [Leer más](/en/articles/system/tune/)
:::

## Configuración de los Tamaños de los Búferes

Debes añadir los ajustes de tamaño del búfer al archivo `/etc/sysctl.conf`.

Configuraciones recomendadas para Adaptadores Ethernet de 1G:

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

Configuraciones recomendadas para Adaptadores Ethernet de 10G:

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

Configuraciones recomendadas para Adaptadores Ethernet de 40G:

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

Para aplicar estos ajustes, puedes reiniciar tu sistema o ejecutar:

```
sysctl -p
```

Puedes verificar los valores actuales del búfer con este comando:

```
sysctl \
    net.core.rmem_default \
    net.core.rmem_max \
    net.core.wmem_default \
    net.core.wmem_max \
    net.ipv4.udp_mem \
    net.ipv4.tcp_wmem
```

## Búferes de la Tarjeta de Red

Si ejecutas un servidor de alta carga, también deberías configurar el búfer de tu tarjeta de red para evitar la pérdida de datos en el búfer del sistema.

Usa este comando para ver la configuración actual del búfer:

```
ethtool -g eth1
```

Verás el tamaño del búfer rx, que podría estar ya configurado al máximo. Encontrar el mejor valor puede ser un desafío. Generalmente, un valor promedio funciona bien. Sin embargo, si tienes un procesador multinúcleo de alta frecuencia (más de 3 GHz), podrías obtener mejores resultados con el tamaño máximo del búfer.

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

Para aumentar el tamaño del búfer de la tarjeta de red, ejecuta:

```
ethtool -G eth1 rx 2048
```

Al configurar estos ajustes, puedes optimizar la transferencia de datos UDP y reducir la posibilidad de pérdida de datos debido a desbordamientos de búfer.