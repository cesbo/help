---
title: "Formato de dirección de medios"
date: 2023-03-23
sidebar:
    order: 1
---

En Astra, la fuente o destino de los medios se describe mediante una dirección de medios que se asemeja a una URL típica. Este formato facilita a los usuarios la comprensión y el trabajo con los distintos componentes que intervienen en la gestión de los flujos de medios.

## Comprender el formato de dirección de los medios[](/es/astra/receiving/address-format#understanding-the-media-address-format)

El formato de dirección del soporte consta de tres componentes principales: tipo, dirección y opciones. Sigue la siguiente estructura:

```
type://address#options
```

- `type` - representa el protocolo o método utilizado para recibir o transmitir flujos de medios
- `address` - es una cadena específica del tipo que indica el origen o el destino del flujo multimedia. Puede variar en función del protocolo utilizado
- `options` - ajustes generales y específicos del protocolo que afectan al comportamiento del flujo multimedia. Las opciones están separadas por el símbolo '&'.

Veamos con más detalle cada uno de estos componentes y sus respectivas funciones en el formato de dirección.

## Recepción de tipos de soporte[](/es/astra/receiving/address-format#receiving-media-types)

- `dvb` - fuente multimedia recibida a través de un sintonizador DVB o un adaptador virtual. [Introducción a la sintonización del adaptador DVB](/es/astra/receiving/intro)
- `udp` - [UDP multidifusión o unidifusión](/es/astra/receiving/udp)
- `rtp` - [RTP multidifusión o unidifusión](/es/astra/receiving/udp)
- `http` - Protocolos basados en HTTP: [HTTP MPEG-TS](/es/astra/receiving/http) o [HLS](/es/astra/receiving/hls)
- `srt` - [Protocolo SRT](/es/astra/receiving/srt)
- `rtsp` - [Protocolo RTSP](/es/astra/receiving/rtsp)comúnmente utilizado para recibir secuencias de cámaras IP
- `file` - Archivo MPEG-TS en el servidor

## Tipos de medios de transmisión[](/es/astra/receiving/address-format#transmitting-media-types)

- `udp` - [UDP multidifusión o unidifusión](/es/astra/delivery/udp)
- `rtp` - RTP multidifusión o unidifusión
- `srt` - Protocolo SRT
- `http` - Protocolos basados en HTTP, por defecto HTTP MPEG-TS, o HLS si la dirección del medio termina en `.m3u8` extensión
- `resi` - [Modulador DVB-C de DigitalDevices](/es/astra/delivery/resi-dvb-c-modulator)
- `tbs` - [Modulador DVB-C de TBS](/es/astra/delivery/tbs-dvb-c-modulator)
- `it950x` - [Modulador DVB-T de HiDes](/es/astra/delivery/hides-dvb-t-modulator)
- `file` - guardar el flujo en el archivo MPEG-TS, o directorio en el servidor
- `np` - (NetworkPush) el protocolo basado en HTTP, utilizado para enviar flujos desde Astra al servidor remoto.

## Direcciones específicas de tipo[](/es/astra/receiving/address-format#type-specific-addresses)

En el formato de dirección de medios, el componente de dirección específico del tipo determina el origen o el destino del flujo de medios en función del protocolo elegido. Para obtener más información sobre los formatos de dirección de cada tipo de medio, consulta los enlaces de los artículos anteriores.

## Introducción a las opciones generales de entrada[](/es/astra/receiving/address-format#introduction-to-general-input-options)

Las opciones generales de entrada desempeñan un papel fundamental a la hora de ajustar la recepción y el procesamiento de los flujos multimedia. Estas opciones permiten modificar diversos parámetros que afectan al comportamiento del flujo multimedia, como el filtrado, el análisis y la modificación.

Opciones más comunes:

- `pnr=PNR` - el número de programa/SID (Service ID) recupera del flujo el canal con el número especificado. Más información en [Desmultiplexación MPEG-TS](/es/astra/processing/demux)
- `set_pnr=PNR` - para cambiar el PNR. El valor debe estar comprendido entre 1 y 65535
- `filter=N,...` - Filtración de flujo, utilizada para eliminar el PID especificado. Los identificadores se separan por comas. Más información en [Filtrado de flujos PID](/es/astra/processing/filter)
- `filter~=N,...` - Filtrado de flujos, utilizado para eliminar todos los datos excepto los PID especificados y las tablas de servicios. Los identificadores se separan por comas
- `order` - ordenar PID en la tabla PMT. Suele utilizarse con el parámetro lang para seleccionar una pista de audio prioritaria. Más información en [Reordenar los flujos de audio](/es/astra/processing/order)
- `lang` - establece el código de idioma para la pista de audio. Ejemplo: `lang.1241=eng` donde: `1241` - pid, `eng` - código de idioma

Otras opciones:

- `set_tsid=TSID` - para cambiar TSID (Transport Stream ID)
- `biss=1122330044556600` - utilizar la clave BISS para descifrar el flujo. Más información: [Descifrar flujos con BISS CAS](/es/astra/processing/decrypt-biss)
- `cam` - utilizar DVB-CI para desencriptar el flujo
- `cam=CAM-ID` - utilizar CAM Client para descifrar el flujo
- `ecm_pid=PID` - definir ECM PID para el cliente CAM (no recomendado)
- `cas` - omitir datos de servicio sobre sistemas de acceso condicional. Se utiliza para transmitir un flujo cifrado
- `map.SRC=DST` - cambiar PID a los valores especificados. SRC - el identificador o tipo de datos original. Tipos posibles: pmt, vídeo, audio, ait, código de idioma. DST - identificador requerido. El valor puede estar comprendido entre 32 y 8190. Más información en [Reasignación de PID de flujo](/es/astra/processing/remap)
- `no_sdt` - borrar la información del canal: nombre del canal, nombre del operador (SDT Service Description Table)
- `pass_sdt` - Transferencia SDT sin procesamiento. Por defecto, si se establece pnr, Astra transmite información sólo en el flujo seleccionado
- `no_eit` - borrar la información de eventos de la EPG (EIT - Event Information Table)
- `pass_eit` - Transmisión de IET sin procesamiento. Por defecto, si pnr está configurado, Astra transmite información sólo sobre el flujo seleccionado
- `no_analyze` - desactiva la comprobación de cambios en el flujo
- `cc_limit=N` - Establece el límite de errores de CC. Si el número de errores de CC supera el límite establecido, Astra cambiará a la fuente de respaldo (si está disponible). Por defecto: no se establece límite
- `bitrate_limit=RATE` - establece el bitrate mínimo para el analizador en Kbit/s. Se considerará que la fuente no funciona si la tasa de bits del flujo es inferior al valor especificado. Valor por defecto: `16 Kbit/s` para el flujo sin datos de vídeo y `128 Kbit/s` para flujo con datos de vídeo
- `pass_data` - retener paquetes con los datos de pivote (data-pid). Más información en [Desmultiplexación MPEG-TS](/es/astra/processing/demux)
