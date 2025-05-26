---
title: "Resolución de problemas de recepción UDP"
date: 2023-03-04
sidebar:
    order: 1
---

UDP (User Datagram Protocol) - protocolo de comunicación en redes locales o Internet, con retrasos y estabilidad mínimos.

## Software para analizar su problema[](/es/misc/troubleshooting/udp#software-to-analyze-your-issue)

### Analizar UDP con Astra MPEG-TS Analyzer

Con Astra puedes analizar cualquier fuente soportada. Basta con lanzar en consola el siguiente comando:

```
astra --analyze "udp://eth0@239.255.1.1:1234"
```

Para detener el analizador Astra, pulsa Ctrl+C. Más información sobre el analizador Astra [MPEG-TS](/es/misc/tools-and-utilities/astra-mpeg-ts-analyzer)

### Analizar UDP con Tcpdump

Tcpdump es una herramienta común para comprobar el tráfico de red. Por ejemplo, comando para comprobar la recepción de multidifusión UDP al grupo 239.255.1.1 en la interfaz eth0:

```
tcpdump -pnni eth0 udp and host 239.255.1.1
```

Si no conoce la interfaz real, puede encontrarla con un comando:

```
ip route get 239.255.1.1
```

La salida de tcpdump tiene el aspecto de muchas líneas con información sobre el origen, el destino y la longitud de los paquetes. Por ejemplo:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
```

Para detener tcpdump pulse Ctrl+C

## UDP No funciona en absoluto[](/es/misc/troubleshooting/udp#udp-not-working-at-all)

No funciona significa una tasa de bits cero en la salida del analizador Astra MPEG-TS. Por ejemplo:

```
Jan 27 09:00:00: INFO: Bitrate: 0 Kbit/s
Jan 27 09:00:01: INFO: Bitrate: 0 Kbit/s
```

### No hay paquetes UDP en la interfaz

En primer lugar, compruebe el tráfico en la interfaz de red con la herramienta tcpdump. Si no hay información sobre los paquetes entrantes, entonces es necesario comprobar la configuración de red o la configuración de origen.

1. Configuración de rutas inválida. Si tiene varias interfaces, por favor, compruebe que la ruta al grupo multicast está configurada correctamente o defina el nombre de la interfaz en la dirección udp.
2. Problemas de conectividad. Compruebe que el servidor conectado a Ethernet o interfaz vlan creado
3. Versión IGMP incompatible. Por ejemplo, su servidor utiliza IGMPv3, pero el equipo de red sólo admite IGMPv2: [Configurar versión IGMP](/es/misc/tools-and-utilities/configure-igmp-version)

### El software no puede recibir paquetes UDP

Si tcpdump muestra información sobre paquetes UDP, podría haber problemas a continuación:

1. UDP descartado por las reglas del cortafuegos. Compruebe la configuración de su cortafuegos
2. Si su servidor tiene interfaces multiplay entonces añada la ruta al grupo multicast o configure el Filtro RP: [Filtro RP y recepción multicast en Linux](/es/misc/tools-and-utilities/rp-filter)

## Demasiados errores al recibir UDP[](/es/misc/troubleshooting/udp#too-many-errors-on-receiving-udp)

Los errores CC (Contador de Continuidad) indican que la continuidad de los paquetes está dañada. El error puede deberse a la pérdida o exceso de paquetes. Ejemplo de salida con errores CC en el analizador Astra MPEG-TS:

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

Hay dos problemas comunes: pérdida o exceso de paquetes.

### Exceso de paquetes

El exceso de paquetes se ve en la salida de tcpdump como paquetes de diferentes fuentes al mismo destino:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.24081 > 239.255.1.1.1234: UDP, length 1316
```

Podría deberse a dos causas:

- Si la dirección de origen es la misma pero los puertos son diferentes (en el ejemplo 33610 y 24081) entonces el servidor de origen envía el mismo canal dos veces.
- Si las direcciones de origen son diferentes, entonces más de un servidor envía paquetes al mismo grupo

En ambos casos es necesario comprobar la configuración del servidor remoto. Si esto no es posible o como solución temporal puede dejar caer los paquetes de la segunda fuente con firewall.

### Pérdida de paquetes

En primer lugar es necesario comprobar las pérdidas y errores en la interfaz de red:

```
ip -s link show eth0
```

Hay que mirar en Errores RX. Algunas tarjetas de red proporcionan información más detallada sobre la naturaleza de la pérdida:

```
ethtool -S eth1
```

Las pérdidas pueden estar no sólo en las tarjetas de red de su servidor. También pueden estar en el puerto del equipo de red. Puedes encontrar la información de como verlo en la documentación del fabricante del equipo de red. Donde eth0 es un nombre de interfaz. Después de la fila RX habrá una fila con números. El tercer número es un error de recepción UDP.
