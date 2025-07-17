---
title: How to Filter PIDs
sidebar:
    order: 32
---

El Filtrado de Flujo elimina paquetes específicos dentro del flujo MPEG-TS basándose en sus PIDs. Además, el proceso modifica las tablas de información específica del programa correspondientes, como la Tabla de Asociación de Programas (PAT) y la Tabla de Mapas de Programas (PMT), para reflejar la eliminación de los paquetes identificados.

## Analizar el Canal

Para identificar los flujos elementales disponibles y sus PIDs, es necesario analizar el canal. Esto se puede lograr iniciando el analizador incorporado MPEG-TS, ya sea desde el menú del canal o directamente desde la configuración del canal.

![Analizar Flujo Original](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-original.png)

En la captura de pantalla proporcionada, podemos ver los siguientes flujos elementales:

1. Video - PID: `1331`
1. Subtítulo - PID: `1335`, Idioma: `bul` (Búlgaro)
1. Audio - PID: `1332`, Idioma: `bul` (Búlgaro)
1. Audio - PID: `1336`, Idioma: `eng` (Inglés)

Cada flujo elemental está representado por un Identificador de Paquete único (PID), que se puede usar para el Filtrado de Flujo en Astra.

## Filtrado de entrada

Para realizar el filtrado de flujo, eliminaremos el flujo con PID 1336. Esta operación se puede realizar añadiendo la opción `filter=1336` a la dirección de entrada.

![Opción de Entrada](https://cdn.cesbo.com/help/astra/processing/utilities/filter/input-options.png)

## Filtrado inverso de entrada

Para realizar un filtrado inverso y eliminar todos los flujos excepto los especificados, puedes usar el símbolo de tilde (`~`) junto con la opción de filtro. Por ejemplo, para mantener solo el flujo de video y el flujo de audio en inglés (PIDs 1331 y 1336), debes añadir la opción `filter~=1331,1336` a la dirección de entrada. Esto eliminará todos los demás flujos, dejando solo los flujos definidos.

Para verificar los resultados del filtro de flujo aplicado, haz clic en "Aplicar" para guardar los cambios. Luego, inicia nuevamente el analizador incorporado MPEG-TS. Esto te permitirá comprobar si los flujos innecesarios han sido filtrados exitosamente.

![Analizar Flujo Filtrado](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-filtered.png)

## Filtrado para todas las entradas

Para el filtrado de flujo en todas las entradas, se puede usar la pestaña `Remap` en la configuración del canal. Este método es adecuado con la función de remapeo.

![Opciones de Remapeo](https://cdn.cesbo.com/help/astra/processing/utilities/filter/remap-options.png)

En el campo `Map PIDs`, se ha establecido `video=101, audio.eng=102`. Esto altera los PIDs de los flujos de video y audio en inglés a 101 y 102, respectivamente, en todas las entradas.

Subsecuentemente, en el campo `Filter PID`, se ha especificado `101, 102`. Esto implica que solo los flujos con estos PIDs serán retenidos en la salida, mientras que todos los demás flujos elementales serán filtrados.

Lee más: [Remap PIDs](/en/astra/streams/remap/)