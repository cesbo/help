---
title: RP Filter for UDP Receiving
sidebar:
    order: 89
---

La tecnología rp_filter es una herramienta útil para mejorar la seguridad y protección de los servidores que reciben tráfico multicast UDP, especialmente para servidores con múltiples interfaces de red. Al configurar servidores para recibir tráfico multicast UDP, hay dos opciones disponibles: configurar el enrutamiento del sistema para grupos multicast o modificar la configuración del rp_filter.

## Configurar el modo estricto para el filtro RP

Para modificar la configuración de rp_filter, agrega las siguientes líneas al archivo `/etc/sysctl.conf`:

```
net.ipv4.conf.eth0.rp_filter = 2
```

Ten en cuenta que `eth0` debe ser reemplazado por el nombre de la interfaz que se está utilizando. Para aplicar los cambios, reinicia el sistema o ejecuta el siguiente comando:

```
sysctl -p
```

## Valores del Filtro RP

Existen tres valores posibles para el parámetro rp_filter en Linux:

- `0` - desactiva completamente la función rp_filter
- `1` - configuración predeterminada que habilita el filtrado de ruta inversa estricto. En este modo, el kernel verifica si los paquetes entrantes llegan a la interfaz esperada según la tabla de enrutamiento y descarta los paquetes que no cumplen
- `2` - este valor habilita el filtrado de ruta inversa laxo. Este modo es menos estricto que el filtrado de ruta inversa estricto y permite que los paquetes lleguen a otras interfaces, siempre que puedan ser enrutados de vuelta a la dirección de origen en la interfaz desde la que fueron recibidos

La elección de la configuración de rp_filter depende de la configuración específica de la red y de los requisitos de seguridad del sistema. Es importante seleccionar la configuración adecuada para garantizar la seguridad y el rendimiento óptimos de la red.