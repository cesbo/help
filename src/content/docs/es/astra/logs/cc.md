---
title: CC Error
sidebar:
    order: 2
---

Los errores CC (Contador de Continuidad) indican que la continuidad de los paquetes MPEG-TS está corrompida. El error puede ser causado por la pérdida o el exceso de paquetes MPEG-TS.

## Error CC en los registros

Este mensaje se imprime como mensaje de depuración en los registros de Astra, y como mensaje de error en los registros del Analizador MPEG-TS de Astra.

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

## Error CC en la recepción UDP

UDP no garantiza la entrega de datos, por lo que los paquetes pueden perderse, duplicarse o llegar fuera de orden. Hay dos problemas comunes: pérdida de paquetes o exceso de paquetes.

### Pérdida de paquetes

Primero es necesario verificar las pérdidas y errores en la interfaz de red:

```sh
ip -s link show eth0
```

Necesitas observar los Errores RX. Algunas tarjetas de red proporcionan información más detallada sobre la naturaleza de la pérdida:

```sh
ethtool -S eth1
```

Las pérdidas pueden no solo ocurrir en las tarjetas de red de tu servidor. También pueden estar en el puerto del equipo de red. Puedes encontrar información sobre cómo ver esto en la documentación del fabricante del equipo de red.
Donde eth0 es un nombre de interfaz. Después de la fila RX habrá una fila con números. El tercer número son errores de recepción UDP.

### Configuración de QoS

La configuración de Calidad de Servicio (QoS) en tu equipo de red puede afectar el tráfico UDP. Asegúrate de que tu configuración de QoS priorice el tráfico UDP y no limite su ancho de banda.

### Exceso de paquetes

El exceso de paquetes se ve como un bitrate duplicado en el analizador MPEG-TS de Astra. Se puede verificar con `tcpdump` donde los paquetes con el mismo destino tienen diferentes fuentes:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.24081 > 239.255.1.1.1234: UDP, length 1316
```

Puede haber dos causas:

- Si la dirección de origen es la misma pero los puertos son diferentes (en el ejemplo son 33610 y 24081), entonces el servidor de origen envía el mismo canal dos veces.
- Si las direcciones de origen son diferentes, entonces más de un servidor está enviando paquetes al mismo grupo.

En ambos casos, es necesario verificar la configuración del servidor remoto. Si esto no es posible o como solución temporal, puedes descartar paquetes desde la segunda fuente con un firewall.

## Error CC en la recepción DVB

DVB depende de la calidad de la señal, verifica los errores en el adaptador DVB: [Errores BER y UNC](/en/astra/adapters/errors/)