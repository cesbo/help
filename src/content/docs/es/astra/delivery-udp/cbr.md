---
title: Constant Bitrate (CBR)
---

La velocidad constante de bits (CBR, por sus siglas en inglés) es un método que llena los espacios de bitrate con paquetes nulos para lograr una tasa constante, lo cual es requerido para los moduladores DVB.

El diagrama a continuación muestra un flujo sin CBR, donde el bitrate varía y presenta huecos:

![Diagrama VBR](https://cdn.cesbo.com/help/astra/delivery/udp/vbr.png)

Cuando el CBR está habilitado, el flujo se llena con paquetes nulos para mantener un bitrate constante, como se muestra en el diagrama a continuación:

![Diagrama CBR](https://cdn.cesbo.com/help/astra/delivery/udp/cbr.png)

## Cómo configurar CBR

Para configurar el CBR en Astra, necesitas añadir el parámetro `cbr` a tu dirección de salida UDP. El parámetro `cbr` solo está disponible para salidas UDP. Por ejemplo:

`udp://239.255.1.1#cbr=4000`

Esto habilitará el CBR con un bitrate objetivo de 4000 Kbps. Puedes ajustar el valor del bitrate según tus necesidades.

:::note
CBR no reduce el bitrate. Si el bitrate de tu flujo excede el límite de CBR, todos los paquetes en exceso serán descartados.
:::

## Cómo reducir el bitrate

La opción cbr en Astra no reduce el bitrate del flujo. Solo llena los huecos de bitrate con paquetes nulos para lograr una tasa constante. Para reducir realmente el bitrate, necesitas transcodificar el flujo. Esto se puede hacer usando una herramienta como [Senta](https://senta.tv) o FFmpeg.