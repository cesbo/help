---
title: UDP/RTP Overview
sidebar:
    order: 1
---

UDP (Protocolo de Datagramas de Usuario) es el protocolo más popular para la transmisión de TV digital en redes locales, incluidas las de organizaciones de hospitalidad y redes urbanas de proveedores de internet. Como protocolo sin conexión, UDP no ofrece mecanismos de verificación o corrección de errores. Esto lo convierte en un protocolo más rápido y liviano que TCP.

## Formato de Dirección de Medios

La dirección UDP se utiliza para identificar la ubicación del flujo de medios que se está transmitiendo a través de la red

```
udp://address
udp://address:port
udp://interface@address:port#options
```

- `interface` - nombre de la interfaz de red, como `eth0`, para recibir el flujo UDP. Si no se define, el flujo UDP se recibirá de acuerdo con las rutas del sistema
- `address` - dirección IPv4 del flujo UDP, podría ser un grupo de multidifusión o una dirección IP de interfaz local para recibir flujos unicast
- `port` - puerto de red para recibir el flujo UDP. Si no se especifica, el valor por defecto es `1234`

Opciones adicionales:

- `src=IP` - dirección de origen de multidifusión UDP para IGMPv3. Debe estar habilitada la IGMPv3 en la configuración de linux: [Configurar versión IGMP](/en/articles/system/configure-igmp-version/). Disponible desde la versión 230303 y posteriores
- `sync` - recibe UDP en un hilo separado con sincronización de bitrate
- `no_sync` - deshabilita la sincronización de bitrate si está habilitada globalmente
- `renew=seconds` - intervalo para renovar la suscripción de multidifusión. Por lo general, la operación renueva la suscripción IGMP automáticamente
- `socket_size=bytes` - tamaño del socket del sistema, con el valor por defecto tomado de: `sysctl net.core.rmem_default`

Ejemplos de direcciones UDP:

- `udp://127.0.0.1:10001` - recibe el flujo en localhost usando el puerto 10001. Esto puede ser útil para transferir flujos entre diferentes servicios, como recibir un flujo transcodificado de FFmpeg
- `udp://eth0@239.255.1.1#pnr=100` - recibe el grupo de multidifusión 239.255.1.1 en la interfaz eth0. La opción `pnr` habilita la demultiplexación de flujos y selecciona el número de programa 100

## Interfaz Web

Para configurar una nueva entrada UDP usando la Interfaz Web, comience seleccionando "Nuevo Flujo" desde el menú principal. Luego, en la Lista de Entradas, haga clic en el icono de engranaje y establezca el "Tipo de Entrada" en UDP. Alternativamente, puede modificar un flujo existente abriendo su configuración, agregando una Nueva Entrada y haciendo clic en el icono de engranaje correspondiente.

![Opciones UDP](https://cdn.cesbo.com/help/astra/receiving/ip/udp/options.png)

La mayoría de las opciones presentadas en la interfaz web corresponden directamente a los componentes de la dirección UDP, como se describe en la sección "Formato de Dirección de Medios". Sin embargo, también hay algunas opciones adicionales que pueden ser útiles:

- `PNR` - número de programa para flujos MPTS. Cuando se define, habilita la demultiplexación de flujo y selecciona el programa con el número especificado
- `DD-CI CAM` - esta opción ahora está obsoleta y ha sido reemplazada por adaptadores virtuales. Puedes encontrar más información en ...
- `Softcam` - selecciona un descramblador para el Cliente CAM. Puedes aprender más sobre esto en ...
- `BISS Key` - clave para el descramblador BISS CAS. Se pueden encontrar más detalles en [Desencriptar flujos con BISS CAS](/en/astra/streams/decrypt-biss/)

También hay opciones avanzadas disponibles para una mayor personalización:

![Opciones Avanzadas](https://cdn.cesbo.com/help/astra/receiving/ip/udp/advanced.png)

Por favor, use las opciones avanzadas solo si comprende sus implicaciones

## Solución de Problemas

Encuentre más información en [Solución de problemas de recepción UDP](/en/astra/receiving-udp/troubleshooting/)