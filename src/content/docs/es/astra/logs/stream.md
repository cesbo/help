---
title: Stream Logs
sidebar:
    order: 21
---

Los Stream Logs proporcionan información sobre la recepción y el procesamiento de flujos.

## Error de PES

Encabezado corrupto de los paquetes con datos de medios como video o audio.

- Problema con el descrifrado del flujo protegido, como una clave inválida, suscripción caducada, sobrecalentamiento del módulo de acceso condicional
- Problema con la señal DVB debido a la interferencia solar

## El canal no tiene entradas activas

El error ocurre si el canal no tiene fuentes disponibles para el cambio.
En la configuración del canal (flujo de programa único), puedes especificar múltiples fuentes (Entrada) para la reserva. Estas fuentes funcionan de manera secuencial: si la primera fuente falla, se cambia a la segunda fuente, y así sucesivamente. El error ocurre si al canal le faltan fuentes disponibles para cambiar.

## PAT: flujo con id no encontrado

No se encontró ningún canal con el número especificado (pnr) en el flujo. Para verificar los canales disponibles y sus números correspondientes, realiza un escaneo de la entrada con [Astra MPEG-TS Analyzer](/en/articles/tools-and-utilities/astra-mpeg-ts-analyzer/).