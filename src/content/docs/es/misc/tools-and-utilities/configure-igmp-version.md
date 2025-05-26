---
title: "Configurar versión IGMP"
date: 2023-03-02
sidebar:
    order: 5
---

IGMP (Internet Group Management Protocol) es un protocolo de comunicación utilizado por los dispositivos de una red para entrar y salir de grupos multidifusión. IGMP tiene varias versiones, entre ellas IGMPv2 e IGMPv3, que ofrecen diferentes características y mejoras.

Es posible que algunos equipos de red, como conmutadores o enrutadores, sólo admitan IGMPv2, lo que puede causar problemas si el servidor intenta unirse a un grupo multidifusión utilizando IGMPv3. Por lo tanto, puede ser necesario cambiar la versión de IGMP utilizada por el servidor.

## Configuración[](/es/misc/tools-and-utilities/configure-igmp-version#configuration)

Para cambiar la versión de IGMP en su servidor, puede modificar la directiva `/etc/sysctl.conf` archivo. En primer lugar, determine la interfaz que necesita utilizar una versión IGMP diferente (por ejemplo, eth0). A continuación, añada la siguiente línea al archivo `/etc/sysctl.conf` archivo:

```
net.ipv4.conf.eth0.force_igmp_version=2
```

Esta línea fuerza a su servidor a utilizar IGMPv2 en la interfaz especificada. Para aplicar los cambios, guarde el archivo y ejecute el siguiente comando:

```
sudo sysctl -p
```

## Comprobar versión IGMP[](/es/misc/tools-and-utilities/configure-igmp-version#check-igmp-version)

Para confirmar que la versión IGMP se ha cambiado correctamente, puede utilizar el comando tcpdump para capturar el tráfico de red en la interfaz especificada. Por ejemplo, para capturar el tráfico IGMP en eth0, ejecute el siguiente comando:

```
sudo tcpdump -i eth1 igmp
```

A continuación, intente suscribirse al flujo multidifusión. Por ejemplo:

```
astra --analyze udp://eth1@239.255.1.1:1234
```

Esto mostrará cualquier paquete IGMP en la interfaz. Compruebe la salida para confirmar que la versión IGMP que se está utilizando es ahora IGMPv2.
