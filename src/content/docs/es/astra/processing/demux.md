---
title: "Desmultiplexación MPEG-TS"
date: 2023-08-28
sidebar:
    order: 1
---

La demultiplexación MPEG-TS es el proceso de extraer flujos individuales de audio, vídeo y datos de una emisión combinada MPEG-TS, también conocida como multiplext o MPTS.

## Extracción de un canal del múltiplex[](/es/astra/processing/mpegts/demux#extracting-single-channel-from-multiplex)

En la radiodifusión de televisión digital, el flujo recibido de fuentes como satélite, terrestre o redes de cable contiene múltiples canales. Para extraer un solo canal de este múltiplex, Astra ofrece una opción específica: `pnr`.

Por ejemplo, para recibir un flujo de un adaptador DVB con el identificador `a001` y extraer el número de canal `1`utilizaría la siguiente dirección de entrada:

```
dvb://a001#pnr=1
```

Astra forma esta dirección automáticamente si escaneas el adaptador DVB y añades canales con la interfaz web. Más información: Escanear adaptador [DVB](/es/astra/receiving/dvb/scan) y [recibir MPTS vía UDP](/es/astra/receiving/ip/mpts-via-udp)

## Filtrar mesas de servicio[](/es/astra/processing/mpegts/demux#filter-service-tables)

En algunos casos es posible que desee eliminar las tablas de servicio suministradas con el canal. Para ello Astra tiene opciones de entrada adicionales:

- `no_eit` - elimina la Mesa de Información de Eventos (EIT). La EIT proporciona la Guía Electrónica de Programas (EPG)
- `no_sdt` - elimina la tabla de descripción de servicios (SDT). SDT proporciona información sobre el canal y la red de entrega
- `no_tdt` - elimina la tabla de fecha y hora (TDT). La TDT proporciona la fecha y hora UTC actuales
- `no_tot` - elimina la tabla de desfase horario (TOT). La TOT proporciona la fecha y la hora UTC actuales con información sobre el desfase de la zona horaria de la región actual.

Ejemplo:

```
dvb://a001#pnr=1&no_sdt&no_eit
```

## Pasar mesas de servicio sin modificar[](/es/astra/processing/mpegts/demux#pass-service-tables-without-modification)

Durante el proceso de demultiplexado, Astra mantiene en las tablas EIT y SDT la información relacionada únicamente con el canal seleccionado. Si quieres pasar los paquetes tal cual, sin ningún cambio, puedes usar las siguientes opciones:

- `pass_eit` - pasar el IET sin cambios
- `pass_sdt` - aprobar el SDT sin cambios

No se recomienda utilizar estas opciones y son incompatibles con `set_pnr` y `set_tsid` opciones.

## Paquetes con datos privados[](/es/astra/processing/mpegts/demux#packets-with-private-data)

Durante el proceso de demultiplexado, Astra excluye los paquetes que contienen datos desconocidos y sólo permite el paso de los flujos de Vídeo y Audio. Si desea conservar datos privados, utilice la opción `pass_data`:

```
dvb://a001#pnr=1&pass_data
```

## Paquetes con datos de acceso condicional[](/es/astra/processing/mpegts/demux#packets-with-conditional-access-data)

Durante el proceso de demultiplexación, Astra descarta todos los paquetes y la información asociada relacionada con el Sistema de Acceso Condicional (CAS). Si desea conservar estos datos, utilice la opción `cas`:

```
dvb://a001#pnr=1&cas
```

Esta opción resulta esencial cuando se descodifican flujos utilizando módulos CAM dedicados. Más información en nuestro artículo: [Descodificación de canales con DVB-CI externo](/es/astra/receiving/dvb/external-ci)

## Cambiar el número de programa[](/es/astra/processing/mpegts/demux#change-program-number)

Para personalizar el número de programa (PNR), utilice la opción `set_pnr`:

```
dvb://a001#pnr=1&set_pnr=1000
```

El valor de PNR puede oscilar entre 1 y 65535. Esta función puede ser útil si desea preparar el canal para la siguiente multiplexación.
