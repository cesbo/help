---
title: Streams Overview
sidebar:
    order: 1
---

Flujos en Astra representan un canal o flujo de medios individual que recibe contenido de varias fuentes, lo procesa y lo entrega a los clientes.

## Crear Nuevo Flujo

Para crear un nuevo flujo:

1. Ve al panel de control principal
2. Haz clic en "Nuevo Flujo" en la esquina superior derecha

Se abrirá un cuadro de diálogo donde puedes elegir entre SPTS (Flujo de Programa Único) o MPTS (Flujo de Programas Múltiples).

## Opciones Generales

Configura ajustes básicos del flujo que controlan cómo se comporta y aparece en el sistema.

![Opciones Generales](https://cdn.cesbo.com/help/astra/admin-guide/stream/general.png)

- `Habilitar`: el nuevo flujo está habilitado por defecto, pero se puede desactivar si es necesario
- `Nombre`: nombre amigable del canal usado en paneles de control y registros
- `ID`: identificador único del flujo. Déjalo vacío para asignar un número secuencial a los nuevos canales o puedes definir el tuyo propio
- `Crear Flujo de Programas Múltiples`: cambiar a configuración de MPTS
- `Descripción`: descripción arbitraria del canal

### Lista de Entradas

Configura una o más entradas para recibir el contenido del flujo. Para configurar entradas, puedes usar el [Formato de Dirección de Medios](/en/astra/streams/address-format/) o el cuadro de diálogo de configuración.

Lee más información en nuestras guías para configuraciones específicas de cada protocolo:

- [HLS](/en/astra/receiving-http/hls/)
- [HTTP MPEG-TS](/en/astra/receiving-http/http/)
- [UDP/RTP](/en/astra/receiving-udp/)
- [SRT](/en/astra/receiving/srt/)
- [RTSP](/en/astra/receiving/rtsp/)
- [Cómo recibir MPTS vía UDP](/en/astra/receiving-udp/mpts-via-udp/)
- [Cómo configurar DVB, ATSC, ISDB-T, SAT>IP](/en/astra/adapters/)

### Lista de Salidas

Configura una o más salidas para proporcionar contenido a los clientes. Las salidas son opcionales. Puedes usar la función [HTTP Play](/en/astra/delivery-http/http-play/) para proporcionar acceso a los canales con HLS o HTTP MPEG-TS.

Lee más información en nuestras guías para configuraciones específicas de cada protocolo:

- [UDP](/en/astra/delivery-udp/)
- DVB con hardware de difusión, como: [HiDes DVB-T](/en/astra/delivery-broadcast/hides-dvb-t-modulator/), [RESI DVB-C](/en/astra/delivery-broadcast/resi-dvb-c-modulator/), [TBS DVB-C](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)

## Flujo de Programa Único

SPTS (Flujo de Programa Único) es el tipo de flujo por defecto para crear canales de TV individuales. Piénsalo como un canal llevando un programa, como CNN o ESPN.

SPTS cambia automáticamente entre múltiples entradas si una falla. Por ejemplo, si tienes dos señales satelitales para el mismo canal, SPTS monitorea ambas y cambia a la señal de respaldo cuando ocurren problemas.

También puedes procesar el flujo mediante:

- Filtrando contenido no deseado (como subtítulos que no necesitas)
- Cambiando detalles del flujo (nombre del canal, información del idioma)
- Quitando la encriptación de flujos protegidos
- Agregando encriptación para asegurar tus transmisiones

## Flujo de Programas Múltiples

MPTS (Flujo de Programas Múltiples) combina múltiples canales en un solo flujo de transmisión. Piénsalo como un paquete de TV por cable: en lugar de enviar canales por separado, los agrupas para transmitirlos juntos.

Por ejemplo, si tienes 10 canales de TV diferentes, MPTS los empaqueta todos en un solo flujo que los proveedores de cable o satélite pueden transmitir a los espectadores.

MPTS incluye características de transmisión como:

- Descripciones de canales e información de red
- Numeración de canales (para que los espectadores vean "Canal 5" en lugar de ID técnicos)
- Capacidades de búsqueda de red para que los receptores encuentren canales fácilmente
- Inserción de datos de EPG (Guía Electrónica de Programas) para mostrar horarios de TV a los espectadores

Lee más sobre [Configuraciones MPTS](/en/astra/streams/mpts/)