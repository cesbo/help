---
title: "Reasignación de PID de flujo"
date: 2023-07-17
sidebar:
    order: 4
---

La función Remap de Astra permite modificar el identificador de paquetes (PID) de los flujos elementales MPEG-TS.

## Casos prácticos[](/es/astra/processing/remap#use-cases)

La reasignación de los PID de flujo es beneficiosa en varios escenarios:

- Redundancia de entrada suave: Si las entradas primaria y de reserva tienen PID distintos para los flujos elementales de vídeo y audio, el cambio a la entrada de reserva puede provocar una interrupción temporal de la reproducción. Si se reasignan los PID para garantizar la uniformidad entre las entradas primaria y de reserva, la transición puede realizarse sin problemas.
- Preparación de flujos multiprograma (MPTS): Al preparar un canal para su inclusión en una emisión MPTS, cada flujo elemental dentro del canal debe poseer un PID único. La reasignación garantiza la unicidad de estos PID, lo que permite añadir sin problemas el canal al MPTS.

## Analizar el canal[](/es/astra/processing/remap#analyze-channel)

Para identificar los flujos elementales disponibles y sus PID, es necesario analizar el canal. Para ello, inicia el analizador MPEG-TS integrado desde el menú del canal o directamente desde los ajustes del canal.

![Analizar el flujo original](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-original.png)

En la captura de pantalla proporcionada, podemos ver los siguientes flujos elementales:

1. Tabla de mapas de programa (PMT) - PID: `374`
2. Vídeo - PID: `371`
3. Audio - PID: `376`Idioma: `eng` (inglés)

Cada flujo elemental está representado por un identificador de paquete (PID) único, que puede utilizarse para la reasignación de flujos en Astra.

## Limitaciones[](/es/astra/processing/remap#limitations)

Tenga en cuenta que el valor del PID puede estar comprendido entre 32 y 8190.

## Reasignación de entradas[](/es/astra/processing/remap#input-remapping)

Para realizar la reasignación del flujo, cambiaremos el PID del PMT a 100, el PID del flujo de vídeo a 101, y el PID del flujo de audio a 102. Esta operación se puede realizar añadiendo el parámetro `map.pmt=100&map.video=101&map.audio.eng=102` a la dirección de entrada

![Opción de entrada](https://cdn.cesbo.com/help/astra/processing/utilities/remap/input-options.png)

## Reasignación de todas las entradas[](/es/astra/processing/remap#remapping-for-all-inputs)

Para la reasignación de flujos en todas las entradas, la función `Remap` en los ajustes del canal.

![Opciones de reasignación](https://cdn.cesbo.com/help/astra/processing/utilities/remap/remap-options.png)

En el campo "Mapear PIDs", `pmt=100, video=101, audio.eng=102` se ha configurado. Esto altera los PID de los flujos de vídeo y audio en inglés a 101 y 102, respectivamente, en todas las entradas.

Para comprobar los resultados del filtro de flujo aplicado, haga clic en "Aplicar" para guardar los cambios. A continuación, inicie de nuevo el analizador MPEG-TS integrado. Así podrá comprobar si se han filtrado correctamente los flujos innecesarios.

![Analizar el flujo reasignado](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-remapped.png)

## Selectores[](/es/astra/processing/remap#selectors)

El selector determina qué PID debe cambiarse al nuevo valor

- `pmt` - PID para tabla de mapas de programas (PMT)
- `video` - flujo de vídeo
- `audio` - cualquier flujo de audio. Puede definir esta opción dos veces si tiene varios flujos de audio, por ejemplo: `video=101, audio=102, audio=103`
- `audio.eng` - flujo de audio con código de idioma definido
- `ac3` - AC3. La dirección `audio` El selector podría utilizarse también para secuencias AC3.
- `aac` - flujo de audio AAC. La dirección `audio` podría utilizarse también para los flujos ACC
- `371` - PID original
- `pcr` - PID para paquetes con PCR. Normalmente la marca de tiempo PCR entregada con paquetes de flujo de vídeo.
- `sub` - flujo de subtítulos
- `ttx` - flujo de teletexto
- `ait` - PID para la tabla de información de la aplicación (AIT)
