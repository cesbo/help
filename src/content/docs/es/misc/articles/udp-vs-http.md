---
title: "Comparación de los protocolos UDP, HTTP y HLS"
date: 2023-03-17
sidebar:
    order: 6
---

La transmisión de televisión digital emplea distintos protocolos para difundir contenidos multimedia, en concreto, el Protocolo de Datagramas de Usuario (UDP), el Protocolo de Transferencia de Hipertexto (HTTP) y el HTTP Live Streaming (HLS). Cada uno de estos protocolos posee características distintivas que afectan a su eficacia, fiabilidad y compatibilidad con diversos dispositivos y redes. La siguiente comparación profundizará en sus funciones básicas, ventajas e inconvenientes para proporcionar una comprensión clara de su uso en el panorama de la televisión digital.

## Multidifusión UDP[](/es/misc/articles/udp-vs-http#udp-multicast)

![Multidifusión UDP](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

La multidifusión del Protocolo de Datagramas de Usuario (UDP) funciona de uno a muchos. Esto significa que puede entregar paquetes de una sola fuente a múltiples suscriptores simultáneamente. Normalmente, la multidifusión UDP se utiliza principalmente en entornos de red locales debido a sus capacidades de difusión y a las limitaciones de la red.

La multidifusión UDP funciona en un rango IP de 224.0.0.0 a 239.255.255.255. Sin embargo, el rango de 224.0.0.0 a 224.255.255.255, generalmente se evita debido a una alta concentración de direcciones especializadas. Estas direcciones están reservadas para protocolos de red y su uso puede provocar conflictos.

El comportamiento de la multidifusión UDP puede compararse al de una catapulta que lanza mercancías. Una vez lanzada la carga útil, el emisor no controla ni supervisa su trayectoria. El operador no se preocupa por el estado del paquete una vez lanzado, lo que refleja la falta de garantías de entrega y comprobaciones de fiabilidad de UDP.

El control de acceso puede establecerse mediante dos métodos:

- encriptación de los flujos para una transmisión de datos segura
- gestión de los puertos del equipo de conmutación

## Unicast UDP[](/es/misc/articles/udp-vs-http#udp-unicast)

UDP unicast sirve como método de transmisión uno a uno. Suele utilizarse para enviar flujos entre distintos servidores de una cabecera. Un ejemplo sería la transmisión de flujos de un receptor a un transcodificador y, a continuación, del transcodificador a un multiplexor.

## HTTP MPEG-TS[](/es/misc/articles/udp-vs-http#http-mpeg-ts)

El protocolo HTTP MPEG-TS se basa en el protocolo HTTP y funciona como la descarga de un archivo infinito, enviando continuamente datos al receptor en un flujo constante. Este enfoque permite una buena compatibilidad con los descodificadores más antiguos que se diseñaron con este protocolo en mente.

Sin embargo, este protocolo es más susceptible a las conexiones inestables y es sensible a los retrasos. Cualquier interrupción o retraso puede dar lugar a problemas de reproducción, de forma parecida a como se detiene una cinta transportadora cuando hay un retraso.

En cuanto al control de acceso, HTTP MPEG-TS puede aprovechar los métodos HTTP estándar para la autorización, eliminando la necesidad de cifrado, aunque es posible el cifrado a través de Transport Layer Security (TLS) si se requiere para mayor seguridad.

## HLS[](/es/misc/articles/udp-vs-http#hls)

![Diagrama HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

HTTP Live Streaming (HLS) es un protocolo de transmisión de contenidos multimedia por Internet. Está diseñado para enviar grandes cantidades de datos a la vez, de forma similar a la entrega de contenedores de carga. Mientras un trozo (contenedor) es descargado y procesado por el cliente, el siguiente trozo ya está siendo preparado y enviado. Esto permite una gestión eficaz de los datos y ayuda a garantizar una reproducción más fluida y continua, incluso en condiciones de red fluctuantes.

HLS ofrece varias ventajas, como el streaming multibitrate, que permite al protocolo adaptar la calidad del vídeo a las condiciones de la red del espectador en tiempo real. También admite la entrega de trozos a través de una red de distribución de contenidos (CDN), lo que permite una distribución eficaz de los datos y una mejor escalabilidad, especialmente beneficiosa para manejar grandes volúmenes de espectadores simultáneos.

Control de acceso proporcionado con métodos HTTP como un HTTP MPEG-TS
