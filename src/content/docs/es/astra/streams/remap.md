---
title: "How to Remap PIDs"
sidebar:
  order: 33
---

La reasignación de PIDs de flujo es beneficiosa en varios escenarios:

- Redundancia de Entrada Suave: Si las entradas primaria y de respaldo tienen PIDs diferentes para video y audio en los flujos elementales, al cambiar a la entrada de respaldo puede ocurrir una interrupción temporal en la reproducción. Al reasignar los PIDs para asegurar uniformidad entre las entradas primaria y de respaldo, la transición puede hacerse sin interrupciones.
- Preparación de un Flujo de Programa Múltiple (MPTS): Al preparar un canal para su inclusión en una transmisión MPTS, cada flujo elemental dentro del canal debe tener un PID único. La reasignación asegura esta unicidad de los PIDs, permitiendo una adición fluida del canal al MPTS.

## Analizar Canal

Para identificar los flujos elementales disponibles y sus PIDs, es necesario analizar el canal. Esto se puede lograr lanzando el analizador MPEG-TS incorporado, ya sea desde el menú del canal o directamente desde la configuración del canal.

![Analizar Flujo Original](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-original.png)

En la captura de pantalla proporcionada, podemos ver los siguientes flujos elementales:

1. Tabla de Mapas de Programa (PMT) - PID: `374`
2. Video - PID: `371`
3. Audio - PID: `376`, Idioma: `eng` (Inglés)

Cada flujo elemental está representado por un Identificador de Paquete único (PID), que se puede usar para la Reasignación de Flujos en Astra.

## Reasignación de entrada

Para realizar la reasignación de flujos, cambiaremos el PID de PMT a 100, el PID del flujo de video a 101, y el PID del flujo de audio a 102. Esta operación se puede realizar agregando la opción `map.pmt=100&map.video=101&map.audio.eng=102` a la dirección de entrada.

![Opción de Entrada](https://cdn.cesbo.com/help/astra/processing/utilities/remap/input-options.png)

## Reasignación para todas las entradas

Para la reasignación de flujos en todas las entradas, se puede usar la pestaña `Remap` en la configuración del canal.

![Opciones de Reasignación](https://cdn.cesbo.com/help/astra/processing/utilities/remap/remap-options.png)

En el campo "Map PIDs", se ha establecido `pmt=100, video=101, audio.eng=102`. Esto altera los PIDs de los flujos de video y audio en inglés a 101 y 102, respectivamente, en todas las entradas.

Para verificar los resultados del filtro de flujo aplicado, haga clic en "Apply" para guardar los cambios. Después, lance nuevamente el analizador MPEG-TS incorporado. Esto le permitirá comprobar si los flujos innecesarios han sido eliminados correctamente.

![Analizar Flujo Reasignado](https://cdn.cesbo.com/help/astra/processing/utilities/remap/analyze-remapped.png)

## Selectores

El selector determina qué PID debe cambiarse al nuevo valor:

- `371`: cualquier número como PID original
- `pmt`: PID para la Tabla de Mapas de Programa (PMT)
- `video`: flujo de video
- `audio`: cualquier flujo de audio. Puede definir esta opción dos veces si tiene varios flujos de audio, por ejemplo: `video=101, audio=102, audio=103`
- `audio.eng`: flujo de audio con código de idioma definido
- `ac3`: flujo de audio AC3. El selector `audio` también podría usarse para flujos AC3
- `aac`: flujo de audio AAC. El selector `audio` también podría usarse para flujos ACC
- `pcr`: PID para paquetes con PCR. Generalmente la marca de tiempo PCR se entrega con paquetes de flujo de video
- `sub`: flujo de subtítulos
- `ttx`: flujo de teletexto
- `ait`: PID para la Tabla de Información de Aplicación (AIT)