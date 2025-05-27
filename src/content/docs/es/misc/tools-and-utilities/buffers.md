---
title: "Configuración de Buffers del Sistema y la Red"
date: 2024-09-23
sidebar:
    order: 4
---

Para enviar o recibir datos de manera eficiente a través de UDP, es necesario configurar correctamente los tamaños de los buffers de su sistema operativo.

## Configuración de los Tamaños de Buffer

Debe agregar las configuraciones de tamaño de buffer al archivo `/etc/sysctl.conf`.

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

Para aplicar estas configuraciones, puede reiniciar su sistema o ejecutar:

```
sysctl -p
```

Puede verificar los valores actuales de los buffers con este comando:

```
sysctl \
    net.core.rmem_default \
    net.core.rmem_max \
    net.core.wmem_default \
    net.core.wmem_max \
    net.ipv4.udp_mem \
    net.ipv4.tcp_wmem
```

## Buffers de la Tarjeta de Red

Si está ejecutando un servidor de alta carga, también debe configurar el buffer de su tarjeta de red para evitar la pérdida de datos en el buffer del sistema.

Use este comando para ver las configuraciones actuales del buffer:

```
ethtool -g eth1
```

Verá el tamaño del buffer de recepción (rx-buffer), que ya podría estar configurado al máximo. Encontrar el mejor valor puede ser un desafío. Generalmente, un valor promedio funciona bien. Sin embargo, si tiene un procesador multinúcleo de alta frecuencia (más de 3 GHz), podría obtener mejores resultados con el tamaño máximo del buffer.

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

Para aumentar el tamaño del buffer de la tarjeta de red, ejecute:

```
ethtool -G eth1 rx 2048
```

Al configurar estos ajustes, puede optimizar la transferencia de datos UDP y reducir la posibilidad de pérdida de datos debido a desbordamientos de buffer.
