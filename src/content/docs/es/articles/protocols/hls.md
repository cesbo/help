---
title: HLS
sidebar:
    order: 3
---

HLS (HTTP Live Streaming) es un protocolo de comunicaciones de transmisión adaptativa basado en HTTP. Funciona dividiendo un archivo multimedia en múltiples fragmentos, lo que permite a los usuarios acceder al archivo pieza por pieza en tiempo real.

Para una descripción detallada, consulte el estándar [RFC8216](https://www.rfc-editor.org/rfc/rfc8216){target="_blank"}.

## Arquitectura de HLS

La arquitectura de HLS (HTTP Live Streaming) está diseñada para facilitar la transmisión eficiente y en tiempo real de contenido multimedia. A continuación se presenta un desglose general de los componentes involucrados en la transmisión HLS, avanzando desde el origen de la transmisión hasta el usuario final:

![Diagrama de HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

1. Fuentes de transmisión - estas son las fuentes originales del contenido multimedia a transmitir. Podrían ser transmisiones de video en vivo, archivos de video pregrabados u otros tipos de medios
2. Segmentador HLS - divide los datos de las fuentes de transmisión en "fragmentos" de datos cortos y manejables. Estos fragmentos suelen tener entre 2 y 10 segundos de duración
3. Transcodificadores - transcodifican la transmisión segmentada en varios bitrates. Este proceso crea múltiples versiones del mismo contenido en diferentes niveles de calidad. La disponibilidad de múltiples bitrates permite que el reproductor HLS ajuste dinámicamente la calidad de la transmisión según las condiciones de la red del espectador, proporcionando una experiencia de visualización óptima
4. Servidores de caché (CDN) - fragmentos de datos distribuidos a servidores de caché, que son parte de una Red de Entrega de Contenido (CDN). Estos servidores están ubicados estratégicamente para reducir la latencia y asegurar la entrega fluida de contenido a los usuarios finales
5. Usuarios - los usuarios finales o clientes solicitan y reciben los fragmentos de medios del servidor CDN más cercano. El reproductor HLS del cliente ensambla estos fragmentos en una transmisión continua para su visualización

Esta estructura permite que HLS ofrezca un rendimiento de transmisión robusto y adaptable, capaz de entregar contenido de alta calidad a una amplia variedad de dispositivos bajo diversas condiciones de red.