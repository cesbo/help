---
title: "Filtrado de flujos PID"
date: 2023-07-17
---

El filtrado de secuencias elimina paquetes específicos dentro de la secuencia MPEG-TS en función de sus PID. Además, el proceso modifica las correspondientes tablas de información específicas del programa, como la tabla de asociación de programas (PAT) y la tabla de mapas de programas (PMT), para reflejar la eliminación de los paquetes identificados.

## Analizar el canal[](https://help.cesbo.com/astra/processing/mpegts/filter#analyze-channel)

Para identificar los flujos elementales disponibles y sus PID, es necesario analizar el canal. Para ello, inicia el analizador MPEG-TS integrado desde el menú del canal o directamente desde los ajustes del canal.

![Analizar el flujo original](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-original.png)

En la captura de pantalla proporcionada, podemos ver los siguientes flujos elementales:

1. Vídeo - PID: `1331`
2. Subtítulo - PID: `1335`Idioma: `bul` (búlgaro)
3. Audio - PID: `1332`Idioma: `bul` (búlgaro)
4. Audio - PID: `1336`Idioma: `eng` (inglés)

Cada flujo elemental está representado por un identificador de paquete (PID) único, que puede utilizarse para el filtrado de flujos en Astra.

## Filtrado de entrada[](https://help.cesbo.com/astra/processing/mpegts/filter#input-filtering)

Para poder realizar el filtrado del flujo, eliminaremos el flujo con PID 1336. Esta operación se puede realizar añadiendo el comando `filter=1336` a la dirección de entrada

![Opción de entrada](https://cdn.cesbo.com/help/astra/processing/utilities/filter/input-options.png)

## Filtrado de entrada inverso[](https://help.cesbo.com/astra/processing/mpegts/filter#inverse-input-filtering)

Para realizar un filtrado inverso y eliminar todos los flujos excepto los especificados, puede utilizar el símbolo de la tilde (`~`) junto con la opción de filtro. Por ejemplo, para conservar sólo el flujo de vídeo y el flujo de audio en inglés (PIDs 1331 y 1336), se añadiría el parámetro `filter~=1331,1336` a la dirección de entrada. Esto eliminará todos los demás flujos, dejando sólo los flujos definidos.

Para comprobar los resultados del filtro de flujo aplicado, haga clic en "Aplicar" para guardar los cambios. A continuación, inicie de nuevo el analizador MPEG-TS integrado. Así podrá comprobar si se han filtrado correctamente los flujos innecesarios.

![Analizar el flujo filtrado](https://cdn.cesbo.com/help/astra/processing/utilities/filter/analyze-filtered.png)

## Filtrado de todas las entradas[](https://help.cesbo.com/astra/processing/mpegts/filter#filtering-for-all-inputs)

Para el filtrado de flujos en todas las entradas, el `Remap` en los ajustes del canal. Este método es adecuado con la función de reasignación.

![Opciones de reasignación](https://cdn.cesbo.com/help/astra/processing/utilities/filter/remap-options.png)

En el `Map PIDs` campo, `video=101, audio.eng=102` se ha configurado. Esto altera los PID de los flujos de vídeo y audio en inglés a 101 y 102, respectivamente, en todas las entradas.

Posteriormente, en el `Filter PID` campo, `101, 102` se ha especificado. Esto implica que sólo los flujos con estos PID se mantendrán en la salida, mientras que todos los demás flujos elementales se filtrarán.

Más información: [Reasignar PID](https://help.cesbo.com/astra/processing/mpegts/remap)
