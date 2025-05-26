---
title: "Filtro RP y recepción multicast en Linux"
date: 2023-03-01
sidebar:
    order: 8
---

La tecnología rp\_filter es una herramienta útil para mejorar la seguridad y protección de los servidores que reciben tráfico UDP multicast, particularmente para servidores con múltiples interfaces de red. Cuando se configuran servidores para recibir tráfico UDP multicast, hay dos opciones disponibles: configurar el enrutamiento del sistema para grupos multicast o modificar la configuración de rp\_filter.

## Configurar el modo estricto para el filtro RP[](/es/misc/tools-and-utilities/rp-filter#configure-strict-mode-for-rp-filter)

Para modificar la configuración de rp\_filter, añada las siguientes líneas al archivo `/etc/sysctl.conf` archivo:

```
net.ipv4.conf.eth0.rp_filter = 2
```

Tenga en cuenta que `eth0` debe sustituirse por el nombre de la interfaz que se está utilizando. Para aplicar los cambios, reinicie el sistema o ejecute el siguiente comando:

```
sysctl -p
```

## Valores del filtro RP[](/es/misc/tools-and-utilities/rp-filter#rp-filter-values)

Hay tres valores posibles para el parámetro rp\_filter en Linux:

- `0` - desactiva por completo la función rp\_filter
- `1` - por defecto y activa el filtrado estricto de rutas inversas. En este modo, el kernel comprueba si los paquetes entrantes llegan a la interfaz esperada según la tabla de enrutamiento y descarta los paquetes que no lo hacen.
- `2` - esta opción activa el filtrado de ruta inversa flexible. Este modo es menos estricto que el filtrado de ruta inversa estricto y permite que los paquetes lleguen a otras interfaces, siempre que se puedan enrutar de vuelta a la dirección de origen en la interfaz desde la que se recibieron.

La elección del ajuste rp\_filter depende de la configuración de red específica y de los requisitos de seguridad del sistema. Es importante seleccionar el ajuste adecuado para garantizar una seguridad y un rendimiento óptimos de la red.
