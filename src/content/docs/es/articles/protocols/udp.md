---
title: UDP
sidebar:
    order: 7
---

UDP (Protocolo de Datagramas de Usuario) es un protocolo de comunicación utilizado en redes locales o en Internet, conocido por sus mínimos retrasos y una estabilidad inferior a la óptima. UDP proporciona el intercambio de mensajes entre programas de aplicación y receptores, utilizando sumas de verificación para mantener la integridad de los datos y números de puerto para abordar diversas funciones en la fuente y destino del datagrama.

Descripción detallada disponible en el estándar [RFC768](https://www.rfc-editor.org/rfc/rfc768){target="_blank"}.

## Multicast

En redes informáticas, multicast se refiere a la comunicación en grupo en la que la transmisión de datos ocurre simultáneamente a un grupo de receptores de destino. Multicast es especialmente efectivo en casos de múltiples receptores, ya que puede utilizar el ancho de banda de manera eficiente enviando una sola copia de los datos a través del backbone de la red. Esta capacidad lo convierte en un protocolo ideal para la transmisión de Televisión Digital.

![UDP Multicast](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

## Broadcast

**¡Nunca lo utilices para la Televisión Digital!** El broadcast es un método de transferir un mensaje a todos los receptores simultáneamente.

## Unicast

Unicast, una transmisión de uno a uno, es frecuentemente utilizado en protocolos de capa superior como RTSP y SRT. También puede servir para transmitir Televisión Digital entre diferentes servidores dentro de un localhost o una red local - por ejemplo, desde un receptor hacia un transcodificador, y luego al segmentador HLS.