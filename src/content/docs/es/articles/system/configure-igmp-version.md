---
title: "Configure IGMP Version"
date: 2023-03-02
sidebar:
    order: 5
---

IGMP (Protocolo de Administración de Grupos de Internet) es un protocolo de comunicación utilizado por dispositivos en una red para unirse y abandonar grupos multicast. IGMP tiene varias versiones, incluidas IGMPv2 e IGMPv3, que ofrecen diferentes características y mejoras.

Algunos equipos de red, como switches o routers, pueden soportar solo IGMPv2, lo que puede causar problemas si tu servidor intenta unirse a un grupo multicast utilizando IGMPv3. Por lo tanto, puede ser necesario cambiar la versión de IGMP utilizada por el servidor.

## Configuración

Para cambiar la versión de IGMP en tu servidor, puedes modificar el archivo `/etc/sysctl.conf`. Primero, determina la interfaz que necesita usar una versión diferente de IGMP (por ejemplo, eth0). Luego, agrega la siguiente línea al archivo `/etc/sysctl.conf`:

```
net.ipv4.conf.eth0.force_igmp_version=2
```

Esta línea fuerza a tu servidor a usar IGMPv2 en la interfaz especificada. Para aplicar los cambios, guarda el archivo y ejecuta el siguiente comando:

```
sudo sysctl -p
```

## Verificar la versión de IGMP

Para confirmar que la versión de IGMP ha sido cambiada exitosamente, puedes usar el comando tcpdump para capturar el tráfico de red en la interfaz especificada. Por ejemplo, para capturar tráfico IGMP en eth0, ejecuta el siguiente comando:

```
sudo tcpdump -i eth1 igmp
```

Luego intenta suscribirte al flujo multicast. Por ejemplo:

```
astra --analyze udp://eth1@239.255.1.1:1234
```

Esto mostrará cualquier paquete IGMP en la interfaz. Verifica la salida para confirmar que la versión de IGMP que se está utilizando ahora es IGMPv2.