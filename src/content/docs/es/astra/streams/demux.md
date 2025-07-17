---
title: MPEG-TS Demultiplexing
sidebar:
    order: 31
---

La desmultiplexación de MPEG-TS es el proceso de extraer los flujos individuales de audio, video y datos de una transmisión combinada MPEG-TS, también conocida como multiplext o MPTS.

## Extracción de un canal individual del múltiplex

En la transmisión de TV digital, el flujo recibido de fuentes como satélites, redes terrestres o de cable contiene múltiples canales. Para extraer un canal individual de este múltiplex, Astra proporciona una opción específica: `pnr`.

Por ejemplo, para recibir un flujo de un Adaptador DVB con el identificador `a001` y extraer el canal número `1`, utilizarías la siguiente dirección de entrada:

```
dvb://a001#pnr=1
```

Astra forma esta dirección automáticamente si escaneas el Adaptador DVB y agregas canales con la interfaz web. Lee más: [Escanear Adaptador DVB](/en/astra/adapters/scan/) y [Recepción de MPTS vía UDP](/en/astra/receiving-udp/mpts-via-udp/)

## Filtrar tablas de servicios

En algunos casos, puede que desees eliminar las tablas de servicios entregadas con el canal. Para hacerlo, Astra tiene opciones de entrada adicionales:

- `no_eit`: elimina la Tabla de Información de Eventos (EIT). EIT proporciona la Guía Electrónica de Programas (EPG)
- `no_sdt`: elimina la Tabla de Descripción del Servicio (SDT). SDT proporciona información sobre el canal y la red de entrega
- `no_tdt`: elimina la Tabla de Fecha y Hora (TDT). TDT proporciona la fecha y hora UTC actuales
- `no_tot`: elimina la Tabla de Desplazamiento Horario (TOT). TOT proporciona la fecha y hora UTC actuales con información de compensación de la zona horaria de la región actual

Ejemplo:

```
dvb://a001#pnr=1&no_sdt&no_eit
```

## Pasar tablas de servicios sin modificación

Durante el proceso de desmultiplexación, Astra mantiene en las tablas EIT y SDT información relacionada solo con el canal seleccionado. Si deseas pasar los paquetes tal cual, sin ningún cambio, puedes usar las siguientes opciones:

- `pass_eit`: pasar EIT sin cambios
- `pass_sdt`: pasar SDT sin cambios

No se recomienda usar estas opciones y son incompatibles con las opciones `set_pnr` y `set_tsid`.

## Paquetes con datos privados

Durante el proceso de desmultiplexación, Astra excluye los paquetes que contienen datos desconocidos y solo permite pasar flujos de Video y Audio. Si deseas retener datos privados, utiliza la opción `pass_data`:

```
dvb://a001#pnr=1&pass_data
```

## Paquetes con datos de acceso condicional

Durante el proceso de desmultiplexación, Astra descarta todos los paquetes e información asociada con el Sistema de Acceso Condicional (CAS). Si deseas retener estos datos, utiliza la opción `cas`:

```
dvb://a001#pnr=1&cas
```

Esta opción se vuelve esencial al descramblar flujos utilizando módulos CAM dedicados. Lee más en nuestro artículo: [Descodificación de canales con DVB-CI Externo](/en/astra/adapters/external-ci/)

## Cambiar el número de programa

Para personalizar el Número de Programa (PNR), utiliza la opción `set_pnr`:

```
dvb://a001#pnr=1&set_pnr=1000
```

El valor de PNR puede estar en el rango de 1 a 65535. Esta característica podría ser útil si deseas preparar el canal para un próximo multiplexado.