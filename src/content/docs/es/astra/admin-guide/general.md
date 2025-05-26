---
title: "Ajustes generales del flujo"
date: 2023-08-14
sidebar:
    order: 10
---

El flujo de programa único (SPTS) se utiliza habitualmente para formar canales de televisión. Puede utilizar varias entradas con fines de redundancia, lo que aumenta la fiabilidad del flujo.

![Opciones de flujo de programa único](https://cdn.cesbo.com/help/astra/admin-guide/stream/general.png)

- `Enable` - el nuevo flujo está activado por defecto, pero puede desactivarse si es necesario
- `Name` - nombre de canal amigable utilizado en cuadros de mando y registros
- `ID` - identificador único, por defecto Astra asigna un número secuencial a los nuevos canales, pero usted puede definir su propio
- `Multi Program Stream` - cambiar a la configuración MPTS
- `Enable monitoring` - analizar el estado de los arroyos y enviar informes al sistema de vigilancia
- `Start stream on demand` - Astra esperará una petición entrante para iniciar el flujo. Este modo está desactivado para canales con salidas UDP o HLS.
- `Keep Active` - opción adicional para el modo bajo demanda. Por defecto, cuando el último cliente cierra la conexión, Astra apaga el canal. Esta opción permite que el canal permanezca activo durante algún tiempo
- `Channel Number` - opción utilizada para ordenar los canales en la lista de reproducción
- `Description` - descripción arbitraria del canal

## Lista de entradas[](/es/astra/admin-guide/general#input-list)

Configure una o varias entradas para recibir el contenido del flujo. Para configurar las entradas, puede utilizar el [Formato de dirección de medios](/es/astra/receiving/address-format) o el cuadro de diálogo de configuración.

Lea más información en nuestras guías para la configuración específica del protocolo:

- [HLS](/es/astra/receiving/hls)
- [HTTP MPEG-TS](/es/astra/receiving/http)
- [UDP/RTP](/es/astra/receiving/udp)
- [SRT](/es/astra/receiving/srt)
- [RSTP](/es/astra/receiving/rtsp)
- [Cómo recibir MPTS vía UDP](/es/astra/receiving/mpts-via-udp)
- [Cómo configurar DVB, ATSC, ISDB-T, SAT>IP](/es/astra/receiving/dvb)

## Lista de salida[](/es/astra/admin-guide/general#output-list)

Configure una o más salidas para proporcionar contenido a los clientes. Las salidas son opcionales. Puede utilizar la función [HTTP Play](/es/astra/delivery/http-play) para proporcionar acceso a canales con HLS o HTTP MPEG-TS.

Lea más información en nuestras guías para la configuración específica del protocolo:

- [UDP](/es/astra/delivery/udp)
- [DVB con hardware de radiodifusión](/es/astra/delivery/hardware)

## Guardar[](/es/astra/admin-guide/general#save)

Los ajustes del canal se guardan al pulsar el botón Aplicar.
