---
title: "Crear nuevo flujo"
date: 2023-05-22
sidebar:
    order: 9
---

Un Stream es un aspecto central de la configuración de Astra, incluye una lista de Entradas para la recepción de medios y Salidas para distribuir o proporcionar acceso. Cada flujo también contiene opciones para el procesamiento de datos.

## Programa único[](https://help.cesbo.com/astra/admin-guide/stream/create#single-program-stream)

![Opciones de flujo de programa único](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/spts.png)

El flujo de programa único (SPTS, también conocido como canal o servicio) sirve como tipo de flujo por defecto en la configuración de Astra, utilizado habitualmente para formar canales de TV. Puede emplear múltiples entradas con fines de redundancia, lo que aumenta la fiabilidad del flujo. El analizador integrado supervisa continuamente la entrada activa y, si detecta un fallo, cambia inmediatamente a una entrada alternativa.

Además de la redundancia, SPTS ofrece diversas opciones de procesamiento. Entre ellas están el filtrado para transmitir sólo los datos de medios necesarios, la modificación de la información de los flujos, la descodificación para acceder a flujos protegidos y la codificación para salvaguardar los flujos transmitidos. Así, SPTS ofrece una solución versátil y segura para la formación de canales de TV.

Más información sobre la [configuración general de Stream](https://help.cesbo.com/astra/admin-guide/stream/general)

## Secuencia multiprograma[](https://help.cesbo.com/astra/admin-guide/stream/create#multi-program-stream)

![Opciones multiprograma](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/mpts.png)

El Multi Program Stream (MPTS, también conocido como Multiplex) es otro tipo de stream disponible en Astra, activado a través de una opción del mismo nombre dentro de los ajustes de stream. El MPTS toma todas las entradas proporcionadas y las multiplexa en un único flujo con fines de emisión.

Este tipo de flujo también ofrece varias funciones diseñadas para la radiodifusión. Entre ellas se incluyen opciones para definir la descripción del flujo, información de red, búsqueda de red y números de canal lógicos.

Más información sobre [los ajustes MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings)
