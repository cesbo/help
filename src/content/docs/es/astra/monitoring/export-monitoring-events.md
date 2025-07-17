---
title: Export Monitoring Events
sidebar:
    order: 1
---

Astra le permite exportar eventos de monitoreo con el estado de las transmisiones entrantes o adaptadores DVB.

## URL de Monitoreo

La dirección del servidor de monitoreo se puede especificar en la interfaz web: Configuración → General → Monitoreo:

![Opciones de Monitoreo](https://cdn.cesbo.com/help/astra/monitoring/export/export-monitoring-events/options.png)

La dirección tiene los siguientes parámetros:

- `interval=30` - este parámetro define el intervalo para transmitir estadísticas, medido en segundos. El valor predeterminado de este parámetro es 30.
- `total=1` - este parámetro se utiliza para obtener estadísticas resumidas del paquete de datos.

Por ejemplo, con la dirección `http://example.com/api#interval=60&total=1`, Astra envía una solicitud HTTP POST a `http://example.com/api` cada minuto, solicitud que contiene JSON con estadísticas resumidas para un minuto de monitoreo de la transmisión.

## Propiedades de la Transmisión

Astra envía las propiedades de la transmisión solo una vez al iniciar la transmisión.

```json
[
    {
        "channel": {
            "type": "spts",
            "name": "Channel Name",
            "id": "a002",
            ...
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `channel` - configuración completa de la transmisión
- `timestamp` - hora del evento
- `hostname` - nombre del host del servidor

## Estado de la Transmisión

```json
[
    {
        "count": 0,
        "timestamp": 1677687310,
        "channel_id": "a002",
        "input_id": 1,
        "current": true,
        "onair": false,
        "scrambled": false,
        "bitrate": 3013,
        "packets": 2005,
        "cc_error": 0,
        "sc_error": 0,
        "pes_error": 0,
        "pcr_error": 15
    }
]
```

Esta lista describe los parámetros que proporcionan información sobre el flujo de trabajo de la transmisión:

- `count` - solo para datos resumidos, proporciona la cantidad de segundos que han transcurrido desde la última recopilación de estadísticas
- `timestamp` - hora del evento en formato Unix
- `channel_id` - ID único del canal
- `input_id` - el número de entrada. Comienza con 1
- `current` - indica que las estadísticas son para la entrada activa actual 
- `onair` - estado de la transmisión, proporcionando una forma rápida de verificar si está funcionando
- `scrambled` - indica si la transmisión está cifrada o no
- `bitrate` - tasa de bits de entrada en Kbit/s
- `packets` - número total de paquetes TS
- `cc_error` - número total de errores CC ocurridos
- `pes_error` - número total de errores PES ocurridos

Estos datos se transmiten en formato JSON como un arreglo de varios elementos, con cada elemento representando un segundo de observaciones. El número de elementos en el arreglo está determinado por la frecuencia de transmisión de estadísticas. Si la agregación de estadísticas está habilitada, entonces solo hay un elemento en el arreglo, que contiene el número total de errores y la tasa de bits promedio para el periodo igual a la frecuencia de transmisión de estadísticas.

## Propiedades del Adaptador

Astra envía las propiedades del adaptador solo una vez al iniciar el adaptador.

```json
[
    {
        "dvb": {
            "name": "11034V @ 13E",
            "id": "a001",
            ....
        },
        "timestamp": 1677687308,
        "hostname": "astra"
    }
]
```

- `dvb` — mientras dure la configuración del adaptador
- `timestamp` — hora del evento
- `hostname` — nombre del host del servidor

## Estado del Adaptador

```json
[
    {
        "dvb_id": "a0dj",
        "timestamp": 1677687310,
        "status": 31,
        "signal": 76,
        "signal_db": -2488,
        "snr": 60,
        "snr_db": 902,
        "unc": 0,
        "ber": 0,
        "bitrate": 1938
    }
]
```

Esta lista describe los parámetros que proporcionan información sobre el flujo de trabajo del adaptador:

- `dvb_id` - ID único del adaptador
- `timestamp` - hora del evento
- `status` - estado de la señal
- `signal` - nivel de señal aproximado en porcentaje
- `signal_db` - nivel de señal en `dBm * 100`
- `snr` - relación señal a ruido aproximada en porcentaje
- `snr_db` - relación señal a ruido en `dB * 100`
- `ber` - contador de errores de bits
- `unc` - contador de errores de bloque
- `bitrate` - tasa de bits total en Kbit/s

El estado de la señal describe el estado del sintonizador, descrito en un número de 5 bits:

- `SIGNAL` — el bit de señal se configurará cuando el sintonizador capture la señal
- `CARRIER` — recepción de señal estable
- `FEC` — recepción de datos FEC (corrección de errores directa)
- `SYNC` — información recibida para sincronización
- `LOCK` — el sintonizador está configurado para recibir una señal.

Si el sintonizador se configura correctamente y la señal está bloqueada, el parámetro de estado se establecerá en 31.