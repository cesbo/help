---
title: "Segmentador HLS"
date: 2023-05-26
sidebar:
    order: 11
---

HLS (HTTP Live Streaming) es uno de los protocolos de streaming multimedia más populares. Está diseñado para transmitir datos de audio y vídeo a través de HTTP desde un servidor a los clientes. Los contenidos pueden distribuirse a través de redes de distribución de contenidos (CDN) para aumentar su disponibilidad. Junto con el streaming dinámico y adaptable, HLS ofrece la máxima calidad en condiciones de red variables.

![Diagrama HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

El Segmentador HLS es una función de Astra para dividir el flujo continuo de media en segmentos HLS. Para facilitar el acceso a los segmentos HLS, Astra genera listas de reproducción HLS.

Astra funciona específicamente como segmentador HLS. Otras funciones, como la transcodificación y el almacenamiento en caché, requieren software adicional. Por ejemplo, se recomienda FFmpeg para la transcodificación, mientras que Nginx podría utilizarse para el almacenamiento en caché.

## Opciones del segmentador HLS[](/es/astra/delivery/http-hls/hls-segmenter#hls-segmenter-options)

En la Interfaz Web de Astra las opciones HLS están disponibles en Ajustes -> HLS

![Opciones del segmentador HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/options.png)

- `Duration` - Duración del segmento HLS en segundos. Predeterminado: 3
- `Quantity` - Número de segmentos en una lista de reproducción multimedia HLS. El valor predeterminado es 4

### Denominación de los segmentos

Método de generación del nombre de archivo para los segmentos HLS

- `PCR-hash` - valor por defecto. Variante segura, Astra utiliza la marca de tiempo del flujo para el nombre del archivo
- `Sequence` - número secuencial como nombre de archivo

### Ruta de recursos

La ruta del recurso permite elegir la ruta a los recursos de la lista de reproducción multimedia HLS:

- `Absolute` - valor por defecto. URL con origen y ruta completa al recurso. Por ejemplo: `https://example.com/play/channel-id/segment-001.ts`
- `Relative` - ruta relativa al recurso. Por ejemplo: `segment-001.ts`
- `Full` - ruta completa al recurso. Por ejemplo: `/play/channel-id/segment-001.ts`

### Otras opciones

- `Round duration value` - esta función redondea la duración de los segmentos del flujo multimedia a valores enteros (no recomendado)
- `Use Expires header` - esta opción añade la cabecera Expires a la respuesta HTTP. Esta cabecera es necesaria para los proxies de caché. Más información en [Proxy de caché HLS con Nginx](/es/misc/tools-and-utilities/hls-caching-proxy-with-nginx)
- `Pass all data PIDs` - Por defecto, sólo los paquetes de vídeo y audio se escriben en los segmentos HLS. Esta opción permite escribir todos los paquetes de datos.

### Lista de reproducción multimedia HLS

- `Use default headers for .m3u8` - con esta opción Astra añade cabeceras HTTP a la respuesta con HLS Media Playlist for Cross-Origin Resource Sharing. Activado por defecto

### Segmentos HLS

- `TS Extension` - esta opción permite personalizar la extensión del archivo para los Segmentos HLS. Por defecto es `ts`
- `TS mime type` - esta opción permite personalizar el tipo MIME para los segmentos HLS. Por defecto es `video/MP2T`
- `Use default headers for .ts` - con esta opción Astra añade cabeceras HTTP a la respuesta con HLS Segment for Cross-Origin Resource Sharing. Activado por defecto
