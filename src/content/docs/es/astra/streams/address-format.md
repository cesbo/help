---
title: Media Address Format
sidebar:
    order: 30
---

En Astra, la fuente o destino de los medios se describe utilizando una dirección de medios que se asemeja a una URL típica. Este formato facilita a los usuarios la comprensión y el manejo de los diferentes componentes involucrados en la gestión de flujos de medios.

## Comprendiendo el Formato de la Dirección de Medios

El formato de la dirección de medios consta de tres componentes principales: tipo, dirección y opciones. Sigue la estructura:

```
type://address#options
```

- `type`: representa el protocolo o método utilizado para recibir o transmitir flujos de medios.
- `address`: es una cadena específica del tipo que indica la fuente o destino del flujo de medios. Esto puede variar dependiendo del protocolo que se esté utilizando.
- `options`: configuraciones generales y específicas del protocolo que afectan el comportamiento del flujo de medios. Las opciones están separadas por un símbolo '&'.

Echemos un vistazo más cercano a cada uno de estos componentes y sus respectivos roles en el formato de dirección.

## Tipos de Recepción de Medios

- `dvb`: fuente de medios recibida a través de un sintonizador DVB o adaptador virtual. [Introducción a la Sintonización de Adaptadores DVB](/en/astra/adapters/)
- `udp`: [multicast o unicast UDP](/en/astra/receiving-udp/)
- `rtp`: [multicast o unicast RTP](/en/astra/receiving-udp/)
- `http`: protocolos basados en HTTP: [HTTP MPEG-TS](/en/astra/receiving-http/http/) o [HLS](/en/astra/receiving-http/hls/)
- `srt`: [protocolo SRT](/en/astra/receiving/srt/)
- `rtsp`: [protocolo RTSP](/en/astra/receiving/rtsp/), comúnmente utilizado para recibir flujos de cámaras IP
- `file`: archivo MPEG-TS en el servidor

## Tipos de Transmisión de Medios

- `udp`: [multicast o unicast UDP](/en/astra/delivery-udp/)
- `rtp`: multicast o unicast RTP
- `srt`: protocolo SRT
- `http`: protocolos basados en HTTP, por defecto HTTP MPEG-TS, o HLS si la dirección de medios termina con la extensión `.m3u8`
- `resi`: [modulador DVB-C por DigitalDevices](/en/astra/delivery-broadcast/resi-dvb-c-modulator/)
- `tbs`: [modulador DVB-C por TBS](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)
- `it950x`: [modulador DVB-T por HiDes](/en/astra/delivery-broadcast/hides-dvb-t-modulator/)
- `file`: guardar flujo en el archivo MPEG-TS, o directorio en el servidor
- `np`: (NetworkPush) protocolo basado en HTTP, utilizado para enviar flujos desde Astra hacia el servidor remoto

## Direcciones Específicas del Tipo

En el formato de dirección de medios, el componente de dirección específica del tipo determina la fuente o destino del flujo de medios basado en el protocolo elegido. Para aprender más sobre los formatos de dirección para cada tipo de medio, por favor consulta los enlaces de los artículos arriba.

## Introducción a Opciones Generales de Entrada

Las opciones generales de entrada juegan un papel crítico en el ajuste fino de la recepción y procesamiento de flujos de medios. Estas opciones te permiten modificar varios parámetros que afectan el comportamiento del flujo de medios, tales como filtrar, analizar y modificar.

Opciones más comunes:

- `pnr=PNR`: el número de programa/SID (ID de Servicio) recupera el canal con el número especificado del flujo. Lee más en [Demultiplexación MPEG-TS](/en/astra/streams/demux/)
- `set_pnr=PNR`: para cambiar el PNR. El valor debe estar entre 1 y 65535
- `filter=N,...`: filtrado de flujo, utilizado para eliminar el PID especificado. Los identificadores están separados por comas. Lee más en [Filtrado de PIDs de Flujo](/en/astra/streams/filter/)
- `filter~=N,...`: filtrado de flujo, utilizado para eliminar todos los datos excepto el PID y tablas de servicio especificados. Los identificadores están separados por comas
- `order`: ordenar PID en la tabla PMT. A menudo se utiliza con el parámetro lang para seleccionar una pista de audio prioritaria. Lee más en [Reordenar flujos de audio](/en/astra/streams/order/)
- `lang`: establece el código de idioma para la pista de audio. Ejemplo: `lang.1241=eng` donde: `1241` - pid, `eng` - código de idioma

Otras opciones:

- `set_tsid=TSID`: para cambiar el TSID (ID de Flujo de Transporte)
- `biss=1122330044556600`: usar clave BISS para descifrar el flujo. Lee más: [Descifrar flujos con BISS CAS](/en/astra/streams/decrypt-biss/)
- `cam`: usar DVB-CI para descifrar el flujo
- `cam=CAM-ID`: usar Cliente CAM para descifrar el flujo
- `ecm_pid=PID`: definir ECM PID para Cliente CAM (no recomendado)
- `cas`: omitir datos de servicio sobre sistemas de acceso condicional. Usado para transmitir un flujo cifrado
- `map.SRC=DST`: cambiar PID a los valores especificados. SRC - el identificador original o tipo de dato. Tipos posibles: pmt, video, audio, ait, código de idioma. DST - identificador requerido. El valor puede estar entre 32 y 8190. Lee más en [Reasignación de PIDs de Flujo](/en/astra/streams/remap/)
- `no_sdt`: para borrar información del canal: nombre del canal, nombre del operador (Tabla de Descripción del Servicio SDT)
- `pass_sdt`: transferencia SDT sin procesamiento. Por defecto, si se establece pnr, Astra transmite información solo sobre el flujo seleccionado
- `no_eit`: borrar información de eventos EPG (EIT - Tabla de Información de Eventos)
- `pass_eit`: transmisión EIT sin procesamiento. Por defecto, si se establece pnr, Astra transmite información solo sobre el flujo seleccionado
- `no_analyze`: desactiva la comprobación de cambios en el flujo
- `cc_limit=N`: establecer límite de errores de CC. Si el número de errores de CC excede el límite establecido, Astra cambiará a la fuente de respaldo (si está disponible). Por defecto: no se establece límite
- `bitrate_limit=RATE`: establecer el bitrate mínimo para el analizador en Kbit/s. La fuente se considerará no operativa si el bitrate del flujo es menor al valor especificado. Por defecto: `16 Kbit/s` para flujo sin datos de video y `128 Kbit/s` para flujo con datos de video
- `pass_data`: retener paquetes con los datos privados (data-pid). Lee más en [Demultiplexación MPEG-TS](/en/astra/streams/demux/)