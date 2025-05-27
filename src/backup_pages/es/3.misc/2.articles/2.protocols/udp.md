---
title: "UDP"
date: 2023-06-13
---

UDP (User Datagram Protocol) es un protocolo de comunicación utilizado en redes locales o en Internet, conocido por sus retrasos mínimos y su estabilidad poco óptima. UDP permite el intercambio de mensajes entre programas de aplicación y receptores, utilizando sumas de comprobación para mantener la integridad de los datos y números de puerto para direccionar diversas funciones en el origen y el destino del datagrama.

Descripción detallada disponible en la norma [RFC768](https://www.rfc-editor.org/rfc/rfc768){target="_blank"} 

## Multidifusión[](https://help.cesbo.com/misc/articles/protocols/udp#multicast)

En redes informáticas, la multidifusión se refiere a la comunicación de grupo en la que la transmisión de datos se produce simultáneamente a un grupo de receptores de destino. La multidifusión es especialmente eficaz en casos de múltiples receptores, ya que puede utilizar eficazmente el ancho de banda enviando una sola copia de los datos a través de la red troncal. Esta capacidad lo convierte en un protocolo ideal para la transmisión de TV digital.

![Multidifusión UDP](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

## Difusión[](https://help.cesbo.com/misc/articles/protocols/udp#broadcast)

**No lo utilice nunca para la televisión digital.** La radiodifusión es un método de transmisión de un mensaje a todos los destinatarios simultáneamente.

## Unicast[](https://help.cesbo.com/misc/articles/protocols/udp#unicast)

Unicast, una transmisión uno a uno, se utiliza frecuentemente en protocolos de capa superior como RTSP y SRT. También puede servir para transmitir TV Digital entre diferentes servidores dentro de un localhost o red local - por ejemplo, desde un receptor a un transcodificador, y luego al segmentador HLS.
