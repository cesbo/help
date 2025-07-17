---
title: How to Reorder PIDs
sidebar:
    order: 34
---

En este artículo, exploraremos cómo cambiar el orden de los flujos de audio en un canal utilizando Astra. Al transmitir un canal con múltiples flujos de audio, el orden de los flujos puede ser crucial para la comodidad de los espectadores. La mayoría de los televisores y otros reproductores multimedia seleccionan automáticamente el primer flujo de audio por defecto. Al reordenar los flujos de audio, puedes asegurarte de que tu idioma preferido esté configurado como la opción predeterminada.

## Analizar Canal

El primer paso para reordenar los flujos de audio es analizar el canal y recopilar información sobre los flujos de audio disponibles y sus respectivos Identificadores de Paquetes (PIDs). Esto te ayudará a identificar el orden actual de los flujos de audio en tu canal y realizar los cambios necesarios en consecuencia.

Para analizar el canal, sigue estos pasos:

1. Abre la configuración del canal en la Interfaz Web de Astra.
2. Dentro de la configuración del canal, haz clic en el botón `Analyze`. Esto iniciará el proceso de análisis del canal.
3. Después de un breve momento, el analizador mostrará información detallada sobre el canal, incluyendo los flujos de audio disponibles y sus PIDs.

![Información del Canal](https://cdn.cesbo.com/help/astra/processing/utilities/order/analyze.png)

En la captura de pantalla proporcionada, podemos ver que hay un flujo de video y dos flujos de audio presentes:

1. VIDEO PID: `331`
2. AUDIO PID: `332`, Idioma: `eng` (Inglés)
3. AUDIO PID: `333`, Idioma: `bul` (Búlgaro)

Toma nota de los PIDs de los flujos, ya que necesitarás esta información para reordenar los flujos de audio en el siguiente paso.

## Reordenar Flujos de Audio

El paso final para reordenar los flujos de audio es modificar la configuración del canal. Cierra el analizador del canal haciendo clic en el botón `Close`. Esto te devolverá a la configuración del canal.

Para reordenar los flujos de audio, sigue estos pasos:

1. En la configuración del canal, localiza la sección `Input`. Aquí es donde encontrarás la dirección de entrada de tu canal.
2. Para cambiar el orden de los flujos de audio, añade la siguiente opción a la dirección de entrada: `order=331,333,332`. El parámetro de orden debe incluir primero los PIDs del flujo de video, seguido por el flujo de audio predeterminado, y luego cualquier flujo de audio adicional. En este ejemplo, el nuevo orden será: Video (331), audio en búlgaro (333), y audio en inglés (332).
3. Guarda los cambios haciendo clic en el botón `Apply` en la parte inferior de la página de configuración del canal.

![Configuración del Canal](https://cdn.cesbo.com/help/astra/processing/utilities/order/channel-settings.png)

:::tip
Las opciones de entrada están separadas por el símbolo `&`, como se muestra en el ejemplo de captura de pantalla. El símbolo `#` marca el comienzo de las opciones. Por ejemplo, si tu dirección no tiene opciones, la dirección completa con las opciones de orden sería `udp://239.255.1.1:1234#order=331,333,332`
:::