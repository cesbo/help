---
title: "Reordenar los flujos de audio"
date: 2023-04-01
sidebar:
    order: 3
---

En este artículo, exploraremos cómo cambiar el orden de los flujos de audio en un canal usando Astra. Cuando se emite un canal con múltiples flujos de audio, el orden de los flujos puede ser crucial para la comodidad de los espectadores. La mayoría de los reproductores de TV y otros reproductores multimedia seleccionan automáticamente el primer flujo de audio por defecto. Al reordenar los flujos de audio, puedes asegurarte de que tu idioma preferido sea la opción predeterminada.

## Analizar el canal[](/es/astra/processing/order#analyze-channel)

El primer paso para reordenar los flujos de audio es analizar el canal y reunir información sobre los flujos de audio disponibles y sus respectivos Identificadores de Paquetes (PIDs). Esto le ayudará a identificar el orden actual de los flujos de audio en su canal y realizar los cambios necesarios en consecuencia.

Para analizar el canal, sigue estos pasos:

1. Abrir la configuración del canal en la interfaz web de Astra
2. Dentro de la configuración del canal, haga clic en el botón `Analyze` botón . Esto iniciará el proceso de análisis del canal
3. Tras unos instantes, el analizador mostrará información detallada sobre el canal, incluidos los flujos de audio disponibles y sus PIDs.

![Información del canal](https://cdn.cesbo.com/help/astra/processing/utilities/order/analyze.png)

En la captura de pantalla proporcionada, podemos ver que hay vídeo y dos flujos de audio presentes:

1. VIDEO PID: `331`
2. AUDIO PID: `332`Idioma: `eng` (inglés)
3. AUDIO PID: `333`Idioma: `bul` (búlgaro)

Tome nota de los PID de los flujos, ya que necesitará esta información para reordenar los flujos de audio en el siguiente paso.

## Reordenar secuencias de audio[](/es/astra/processing/order#reorder-audio-streams)

El último paso para reordenar los flujos de audio es modificar la configuración de los canales. Cierre el analizador de canales pulsando el botón `Close` . Volverá a la configuración del canal.

Para reordenar los flujos de audio, sigue estos pasos:

1. En los ajustes del canal, localice el `Input` sección. Aquí encontrará la dirección de entrada de su canal
2. Para cambiar el orden de los flujos de audio, añada la siguiente opción a la dirección de entrada: `order=331,333,332`. El parámetro de orden debe incluir primero los PID del flujo de vídeo, seguido del flujo de audio predeterminado y, a continuación, cualquier flujo de audio adicional. En este ejemplo, el nuevo orden será: Vídeo (331), audio en búlgaro (333) y audio en inglés (332).
3. Guarde los cambios pulsando el botón `Apply` en la parte inferior de la página de configuración del canal

![Ajustes de canal](https://cdn.cesbo.com/help/astra/processing/utilities/order/channel-settings.png)

:::note
Las opciones de entrada están separadas por el símbolo `&` como se muestra en la captura de pantalla de ejemplo. La dirección `#` marca el inicio de las opciones. Por ejemplo, si su dirección no tiene opciones, la dirección completa con las opciones de pedido sería `udp://239.255.1.1:1234#order=331,333,332`
:::
