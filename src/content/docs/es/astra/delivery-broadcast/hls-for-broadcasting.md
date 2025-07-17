---
title: "HLS for Broadcasting"
sidebar:
    order: 12
---

Cuando envías transmisiones HLS a redes de difusión como satélite, cable o televisión terrestre, podrías encontrarte con problemas como video pixelado, desincronización de audio o sonidos de clic. Las mismas transmisiones funcionan bien en computadoras. Esto ocurre porque HLS y las redes de difusión manejan los datos de video de manera diferente.

## Codificación de Video

La codificación de video comprime los datos de video para hacer los archivos más pequeños.

### Fotogramas

Las transmisiones de video utilizan diferentes tipos de fotogramas:

- **Fotograma clave (I-frame)** - contiene una imagen completa
- **Fotogramas subsecuentes (P-frames y B-frames)** - solo almacenan cambios desde el fotograma anterior

### GOP (Grupo de Imágenes)

El GOP es una secuencia que comienza con un fotograma clave seguido de varios fotogramas subsecuentes. Por ejemplo, un GOP de 30 significa un fotograma clave seguido de 29 otros fotogramas. Tamaños de GOP más grandes significan menos fotogramas clave, lo que reduce el tamaño del archivo pero crea picos de bitrate mayores cuando aparecen los fotogramas clave.

## Bitrate de Transmisión

Las redes de difusión necesitan que los fotogramas de video se entreguen en momentos exactos para mantener el audio y el video sincronizados. Esto requiere un bitrate estable y predecible. Necesitas equilibrar el tamaño del GOP y la calidad del video para mantener un bitrate consistente para una transmisión fluida.

![Corriente codificada para transmisión](https://cdn.cesbo.com/help/astra/delivery/broadcasting/limitations-of-hls/broadcast.png)

HLS funciona de manera diferente. Envía video en fragmentos de varios segundos (generalmente más de 3 segundos), por lo que puede manejar mejor los cambios de bitrate. Esto permite a HLS usar tamaños de GOP más grandes y obtener mejor calidad de video con un bitrate promedio menor.

![Corriente codificada para HLS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/limitations-of-hls/ott.png)

El gráfico muestra que las transmisiones HLS promedian 2 Mbps, pero pueden alcanzar picos de 6 Mbps.

Esta flexibilidad causa problemas para las redes de difusión, que necesitan un ancho de banda consistente. Cuando usas transmisiones HLS con sistemas de transmisión, debes ajustar la codificación para que coincida con los requisitos de difusión.

## Picos de Bitrate y Transmisión UDP

Los picos de bitrate también causan problemas con la transmisión UDP. Los decodificadores de televisión y televisores tienen buffers de red pequeños. Cuando llegan demasiados paquetes de una vez durante los picos de bitrate, el buffer se desborda y se pierden paquetes.

## Solución

Astra no tiene capacidades de transcodificación integradas. Necesitas transcodificar la transmisión utilizando herramientas externas como FFmpeg. Prueba estas configuraciones:

- **Reduce el tamaño del GOP**: Usa alrededor de 30 fotogramas para una mejor calidad de movimiento y picos de bitrate más pequeños
- **Habilita entrelazado**: Proporciona un movimiento más uniforme, especialmente para transmisión
- **Usa CBR (Bitrate Constante)**: Esto llena los espacios de bitrate con paquetes nulos para lograr una tasa constante