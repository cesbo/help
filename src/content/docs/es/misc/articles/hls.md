---
title: Protocolo HLS
date: 2023-06-13
sidebar:
    order: 3
---

HLS (HTTP Live Streaming) es un protocolo de comunicaciones de streaming con bitrate adaptativo basado en HTTP. Funciona dividiendo un archivo multimedia en múltiples trozos, lo que permite a los usuarios acceder al archivo multimedia trozo a trozo en tiempo real.

Para una descripción detallada, consulte la norma [RFC8216](https://www.rfc-editor.org/rfc/rfc8216){target="_blank"}

## Arquitectura HLS[](/es/misc/articles/hls#hls-architecture)

La arquitectura HLS (HTTP Live Streaming) está diseñada para facilitar la transmisión eficiente y en tiempo real de contenidos multimedia. A continuación se presenta un desglose general de los componentes que intervienen en el streaming HLS, desde el origen del flujo hasta el usuario final:

![Diagrama HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

1. Fuentes de transmisión: son las fuentes originales del contenido multimedia que se va a transmitir. Puede tratarse de fuentes de vídeo en directo, archivos de vídeo pregrabados u otros tipos de medios.
2. Segmentador HLS: divide los datos de las fuentes de flujo en "trozos" de datos cortos y manejables. Estos trozos suelen durar entre 2 y 10 segundos.
3. Transcodificadores: transcodifican el flujo segmentado en varias velocidades binarias. Este proceso crea múltiples versiones del mismo contenido con distintos niveles de calidad. La disponibilidad de múltiples tasas de bits permite al reproductor HLS ajustar dinámicamente la calidad del flujo en función de las condiciones de red del espectador, proporcionando una experiencia de visualización óptima.
4. Servidores caché (CDN): trozos de datos distribuidos a servidores caché, que forman parte de una red de distribución de contenidos (CDN). Estos servidores están estratégicamente situados para reducir la latencia y garantizar una entrega fluida de los contenidos a los usuarios finales.
5. Usuarios - los usuarios finales, o clientes, solicitan y reciben los fragmentos multimedia del servidor CDN más cercano. El reproductor HLS del cliente ensambla estos trozos en un flujo continuo para su visualización.

Esta estructura permite a HLS ofrecer un rendimiento de streaming sólido y adaptable, capaz de entregar contenidos de alta calidad a una amplia variedad de dispositivos en diversas condiciones de red.
