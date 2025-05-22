---
title: "Recepción UDP/RTP"
date: 2023-03-04
sidebar:
    order: 14
---

UDP (Protocolo de Datagramas de Usuario) es el protocolo más popular para la distribución de TV digital en redes locales, incluidas las de organizaciones de hostelería y redes urbanas de proveedores de Internet. Como protocolo sin conexión, UDP no proporciona mecanismos de comprobación o corrección de errores. Esto lo convierte en un protocolo más rápido y ligero que TCP.

## Formato de dirección de medios[](https://help.cesbo.com/astra/receiving/ip/udp#media-address-format)

La dirección UDP se utiliza para identificar la ubicación del flujo multimedia que se transmite por la red

```
udp://address
udp://address:port
udp://interface@address:port#options
```

- `interface` - nombre de la interfaz de red, por ejemplo `eth0`para recibir el flujo UDP. Si no se define, el flujo UDP se recibirá según las rutas del sistema.
- `address` - Dirección IPv4 del flujo UDP, puede ser un grupo multidifusión o una dirección IP de interfaz local para recibir flujos unidifusión.
- `port` - puerto de red para recibir el flujo UDP. Si no se especifica, el valor por defecto es `1234`

Opciones adicionales:

- `src=IP` - Dirección de origen de multidifusión UDP para IGMPv3. Debe estar habilitado IGMPv3 en la configuración de linux: [Configurar versión IGMP](https://help.cesbo.com/misc/tools-and-utilities/network/configure-igmp-version). Disponible a partir de la versión 230303
- `sync` - recibe UDP en un hilo separado con sincronización de bitrate
- `no_sync` - desactiva la sincronización del bitrate si está activada globalmente
- `renew=seconds` - intervalo para renovar la suscripción multicast. Normalmente la operación renueva la suscripción IGMP automáticamente
- `socket_size=bytes` - tamaño del socket del sistema, con el valor por defecto tomado de: `sysctl net.core.rmem_default`

Ejemplos de direcciones UDP:

- `udp://127.0.0.1:10001` - recibe el flujo en localhost usando el puerto 10001. Esto puede ser útil para transferir flujos entre diferentes servicios, como recibir un flujo transcodificado desde FFmpeg.
- `udp://eth0@239.255.1.1#pnr=100` - recibe el grupo multicast 239.255.1.1 en la interfaz eth0. La opción `pnr` activa la demultiplexación de flujos y selecciona el número de programa 100

## Interfaz web[](https://help.cesbo.com/astra/receiving/ip/udp#web-interface)

Para configurar una nueva entrada UDP utilizando la Interfaz Web, comience seleccionando "Nuevo flujo" en el menú principal. A continuación, en la Lista de Entradas, haga clic en el icono del engranaje y ajuste el "Tipo de Entrada" a UDP. Alternativamente, puede modificar un flujo existente abriendo su configuración, añadiendo una Nueva Entrada y haciendo clic en el icono del engranaje correspondiente.

![Opciones UDP](https://cdn.cesbo.com/help/astra/receiving/ip/udp/options.png)

La mayoría de las opciones presentadas en la interfaz web corresponden directamente a los componentes de la dirección UDP, tal y como se describe en la sección "Formato de dirección de medios". Sin embargo, también hay algunas opciones adicionales que te pueden resultar útiles:

- `PNR` - Número de programa para secuencias MPTS. Cuando se define, activa la demultiplexación de secuencias y selecciona el programa con el número especificado.
- `DD-CI CAM` - esta opción está obsoleta y ha sido sustituida por adaptadores virtuales. Más información en ...
- `Softcam` - selecciona un descodificador para el cliente CAM. Puede obtener más información en ...
- `BISS Key` - para el descodificador BISS CAS. Más información en [Descifrar flujos con BISS CAS](https://help.cesbo.com/astra/processing/cas/decrypt-biss)

También hay opciones avanzadas disponibles para una mayor personalización:

![Opciones avanzadas](https://cdn.cesbo.com/help/astra/receiving/ip/udp/advanced.png)

Utilice las opciones avanzadas sólo si comprende sus implicaciones

## Solución de problemas[](https://help.cesbo.com/astra/receiving/ip/udp#troubleshooting)

Más información en [Resolución de problemas de recepción UDP](https://help.cesbo.com/misc/troubleshooting/receiving/udp)
