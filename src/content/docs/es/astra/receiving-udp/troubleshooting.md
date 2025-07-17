---
title: Troubleshooting
sidebar:
    order: 90
---

UDP (Protocolo de Datagrama de Usuario) - protocolo de comunicación en redes locales o en Internet, con mínimos retrasos y estabilidad mínima.

## Software para analizar tu problema

### Analizar UDP con Astra MPEG-TS Analyzer

Con Astra puedes analizar cualquier fuente compatible. Simplemente ejecuta el siguiente comando en la consola:

```sh
astra --analyze "udp://eth0@239.255.1.1:1234"
```

Para detener el analizador de Astra presiona Ctrl+C. Lee más sobre [Astra MPEG-TS Analyzer](/en/articles/tools-and-utilities/astra-mpeg-ts-analyzer/).

### Analizar UDP con Tcpdump

Tcpdump es una herramienta común para verificar el tráfico de red. Por ejemplo, un comando para verificar la recepción de multicast UDP al grupo 239.255.1.1 en la interfaz eth0:

```sh
tcpdump -pnni eth0 udp and host 239.255.1.1
```

Si no conoces la interfaz actual, puedes encontrarla con el comando:

```sh
ip route get 239.255.1.1
```

La salida de tcpdump se ve como muchas líneas con información sobre el origen, destino y longitud de los paquetes. Por ejemplo:

```
21:38:42.143839 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
21:38:42.143868 IP 192.168.88.100.33610 > 239.255.1.1.1234: UDP, length 1316
```

Para detener tcpdump presiona Ctrl+C.

## UDP no funciona en absoluto

No funcionar significa un bitrate cero en la salida del Astra MPEG-TS Analyzer. Por ejemplo:

```
Jan 27 09:00:00: INFO: Bitrate: 0 Kbit/s
Jan 27 09:00:01: INFO: Bitrate: 0 Kbit/s
```

### No hay paquetes UDP en la interfaz

Primero verifica el tráfico en la interfaz de red con la herramienta tcpdump. Si no hay información sobre paquetes entrantes, entonces necesitas verificar la configuración de la red o de la fuente.

1. Configuración de rutas inválidas. Si tienes varias interfaces, por favor, verifica que la ruta al grupo multicast esté configurada correctamente o define el nombre de la interfaz en la dirección udp.
2. Problemas de conectividad. Verifica que tu servidor esté conectado a la interfaz ethernet o que la interfaz vlan esté creada.
3. Versión IGMP incompatible. Por ejemplo, tu servidor usa IGMPv3, pero el equipo de red solo admite IGMPv2: [Configurar la Versión IGMP](/en/articles/system/configure-igmp-version/).

### Software incapaz de recibir paquetes UDP

Si tcpdump muestra información sobre paquetes UDP, podría haber los siguientes problemas:

1. UDP bloqueado por reglas del firewall. Verifica la configuración de tu firewall.
2. Si tu servidor tiene múltiples interfaces, entonces agrega una ruta al grupo multicast o configura el Filtro RP: [Filtro RP y recepción de Multicast en Linux](/en/astra/receiving-udp/rp-filter/).

## Errores CC al recibir UDP

Los errores CC (Contador de Continuidad) indican que la continuidad de los paquetes está corrompida. El error puede ser causado por pérdida o exceso de paquetes:

```
Jan 27 09:00:00: INFO: Bitrate: 13259 Kbit/s
Jan 27 09:00:00: ERROR: CC: PID:18=3 PID:20=3 PID:256=24
Jan 27 09:00:01: INFO: Bitrate: 13261 Kbit/s
Jan 27 09:00:01: ERROR: CC: PID:18=5 PID:20=2
```

Lee más sobre [Errores CC](/en/astra/logs/cc/).