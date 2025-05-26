---
title: "Registros de flujos: Recepción y tratamiento"
date: 2023-08-10
sidebar:
    order: 20
---

Los registros de flujos proporcionan información sobre la recepción y el procesamiento de flujos.

## Error CC[](/es/astra/admin-guide/log/stream#cc-error)

Los errores CC (Contador de Continuidad) indican que la continuidad de los paquetes MPEG-TS está dañada. El error puede deberse a la pérdida o al exceso de paquetes MPEG-TS.

Este mensaje se imprime como mensaje de depuración en los registros de Astra y como mensaje de error en los registros del analizador Astra MPEG-TS.

Consulte más información en función del protocolo que utilice para recibir el flujo:

- UDP no garantiza la entrega de datos, por lo que los paquetes pueden perderse, duplicarse o llegar fuera de orden. [Solución de problemas UDP](/es/misc/troubleshooting/udp#too-many-errors-on-receiving-udp)
- DVB depende de la calidad de la señal, compruebe los errores en el adaptador DVB. [Errores comunes en la recepción DVB](/es/misc/troubleshooting/errors)

## Error PSE[](/es/astra/admin-guide/log/stream#pes-error)

Cabecera dañada de los paquetes con datos multimedia como vídeo o audio.

- Problema con la descodificación del flujo protegido, como clave no válida, suscripción caducada, sobrecalentamiento del módulo de acceso condicional.
- Problema de señal DVB debido a interferencias solares

## El canal no tiene entradas activas[](/es/astra/admin-guide/log/stream#channel-has-no-active-inputs)

El error se produce si el canal no tiene ninguna fuente disponible para conmutar. En los ajustes del canal (Flujo de programa único), puede especificar varias fuentes (Entrada) para la reserva. Estas fuentes funcionan en orden secuencial: si falla la primera fuente, se pasa a la segunda, y así sucesivamente. El error se produce si el canal carece de fuentes disponibles para la conmutación.

## PAT: no se encuentra el flujo con id[](/es/astra/admin-guide/log/stream#pat-stream-with-id-is-not-found)

No se ha encontrado ningún canal con el número especificado (pnr) en el flujo. Para comprobar los canales disponibles y sus números correspondientes, realiza un escaneo de la entrada con [Astra MPEG-TS Analyzer](/es/misc/tools-and-utilities/astra-mpeg-ts-analyzer).
