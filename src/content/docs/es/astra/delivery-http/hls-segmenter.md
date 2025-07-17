---
title: HLS Segmenter
sidebar:
    order: 13
---

HLS (HTTP Live Streaming) es uno de los protocolos de transmisión de medios más populares. Está diseñado para transmitir datos de audio y video sobre HTTP desde un servidor a clientes. El contenido multimedia podría ser distribuido a través de Redes de Entrega de Contenido (CDN) para mejorar la disponibilidad. En conjunto con la transmisión dinámica y adaptable, HLS ofrece la más alta calidad bajo condiciones de red variables.

![Diagrama HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/diagram.svg)

El Segmentador HLS es una característica de Astra que divide una transmisión continua de medios en segmentos HLS. Para proporcionar acceso a los segmentos HLS, Astra genera una Lista de Reproducción de Medios HLS.

Astra funciona específicamente como el segmentador HLS. Otras características, como la transcodificación y el almacenamiento en caché, requieren software adicional. Por ejemplo, se recomienda FFmpeg para la transcodificación, mientras que Nginx podría usarse para el almacenamiento en caché.

## Opciones del Segmentador HLS

En la Interfaz Web de Astra, las opciones de HLS están disponibles en Configuración → HLS

![Opciones del Segmentador HLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/hls-segmenter/options.png)

- `Duration` - duración del segmento HLS en segundos. Valor predeterminado: 3
- `Quantity` - número de segmentos en una Lista de Reproducción de Medios HLS. La configuración predeterminada es 4

### Nomenclatura de segmentos

Método de generación de nombres de archivo para segmentos HLS

- `PCR-hash` - valor predeterminado. Variante segura, Astra usa la marca de tiempo del flujo para el nombre de archivo
- `Sequence` - número secuencial como nombre de archivo

### Ruta de recursos

La ruta de recursos permite elegir la ruta a los recursos en la Lista de Reproducción de Medios HLS:

- `Absolute` - valor predeterminado. URL con origen y ruta completa al recurso. Por ejemplo: `https://example.com/play/channel-id/segment-001.ts`
- `Relative` - ruta relativa al recurso. Por ejemplo: `segment-001.ts`
- `Full` - ruta completa al recurso. Por ejemplo: `/play/channel-id/segment-001.ts`

### Otras opciones

- `Round duration value` - esta función redondea la duración de los segmentos del flujo de medios a valores enteros (no recomendado)
- `Use Expires header` - esta opción añade el encabezado Expires a la respuesta HTTP. Este encabezado es necesario para los servidores proxy de caché. Lea más en [HLS Caching Proxy con Nginx](/en/articles/tools-and-utilities/hls-caching-proxy-with-nginx)
- `Pass all data PIDs` - de forma predeterminada, solo se escriben paquetes de video y audio en los segmentos HLS. Esta opción permite escribir todos los paquetes de datos.

### Lista de Reproducción de Medios HLS

- `Use default headers for .m3u8` - con esta opción, Astra añade encabezados HTTP a la respuesta con la Lista de Reproducción de Medios HLS para el intercambio de recursos de origen cruzado. Activado por defecto

### Segmentos HLS

- `TS Extension` - esta opción permite personalizar la extensión de archivo para los segmentos HLS. El valor predeterminado es `ts`
- `TS mime type` - esta opción permite personalizar el tipo MIME para los segmentos HLS. El valor predeterminado es `video/MP2T`
- `Use default headers for .ts` - con esta opción, Astra añade encabezados HTTP a la respuesta con el Segmento HLS para el intercambio de recursos de origen cruzado. Activado por defecto