---
title: "Comparing UDP, HTTP & HLS Protocols"
sidebar:
    order: 6
---

La transmisión de TV digital utiliza diferentes protocolos para la transmisión de contenido multimedia, específicamente el Protocolo de Datagramas de Usuario (UDP), el Protocolo de Transferencia de Hipertexto (HTTP) y el Streaming en Vivo por HTTP (HLS). Estos protocolos poseen características distintivas que afectan su eficiencia, fiabilidad y compatibilidad con varios dispositivos y redes. La siguiente comparación analizará sus funciones principales, beneficios y desventajas para proporcionar una comprensión clara de su uso en el ámbito de la televisión digital.

## Multidifusión UDP

![Multidifusión UDP](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

El Protocolo de Datagramas de Usuario (UDP) en multidifusión opera de manera uno-a-muchos. Esto significa que puede entregar paquetes desde una única fuente a múltiples suscriptores simultáneamente. Normalmente, la multidifusión UDP se utiliza principalmente dentro de entornos de red local debido a sus capacidades de transmisión y limitaciones de red.

La multidifusión UDP funciona dentro de un rango de IP desde 224.0.0.0 hasta 239.255.255.255. Sin embargo, el rango de 224.0.0.0 a 224.255.255.255 generalmente se evita debido a una alta concentración de direcciones especializadas. Estas direcciones están reservadas para protocolos de red, y su uso puede llevar a conflictos.

El comportamiento de la multidifusión UDP se puede comparar con una catapulta lanzando mercancías. Una vez que el paquete es lanzado, el remitente no controla ni monitorea su trayectoria. El operador no se preocupa por el estado del paquete después de haber sido lanzado, reflejando la falta de garantías de entrega y verificación de fiabilidad de UDP.

El control de acceso se puede establecer a través de dos métodos:

- cifrado de las corrientes para la transmisión segura de datos
- gestión de puertos en el equipo de conmutación

## Unidifusión UDP

La unidifusión UDP sirve como un método de transmisión uno-a-uno. Se utiliza típicamente para enviar corrientes entre diferentes servidores en un cabecera. Un ejemplo de esto sería transmitir corrientes desde un receptor a un transcodificador, y luego desde el transcodificador a un multiplexor.

## HTTP MPEG-TS

El protocolo HTTP MPEG-TS se basa en el protocolo HTTP y funciona como la descarga de un archivo infinito, enviando continuamente datos al receptor en una corriente constante. Este enfoque permite una buena compatibilidad con cajas decodificadoras antiguas que fueron diseñadas con este protocolo en mente.

Sin embargo, este protocolo es más susceptible a conexiones inestables y es sensible a los retrasos. Cualquier interrupción o demora puede resultar en problemas de reproducción, similar a cómo una cinta transportadora entregando mercancías se detendría cada vez que hay un retraso.

En cuanto al control de acceso, HTTP MPEG-TS puede aprovechar los métodos estándar de HTTP para la autorización, eliminando la necesidad de cifrado, aunque el cifrado es posible a través de Seguridad de la Capa de Transporte (TLS) si se requiere seguridad adicional.

## HLS

![Diagrama HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

El Streaming en Vivo por HTTP (HLS) es un protocolo para transmitir contenido multimedia por internet. Está diseñado para entregar grandes bloques de datos a la vez, similar a la entrega de contenedores de carga. Mientras un bloque (contenedor) está siendo descargado y procesado por el cliente, el siguiente bloque ya está siendo preparado y enviado. Esto permite un manejo eficiente de datos y ayuda a asegurar una reproducción más fluida y continua, incluso en condiciones de red fluctuantes.

HLS ofrece varias ventajas, incluido el streaming multibitrate, que permite al protocolo adaptar la calidad del video a las condiciones de la red del espectador en tiempo real. También soporta la entrega de bloques a través de una Red de Distribución de Contenido (CDN), permitiendo una distribución eficiente de datos y mejorando la escalabilidad, lo cual es particularmente beneficioso para manejar grandes volúmenes de espectadores simultáneos.

El control de acceso se proporciona con métodos HTTP similares al HTTP MPEG-TS.