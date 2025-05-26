---
title: "Exportación de eventos de supervisión"
date: 2023-03-01
sidebar:
    order: 1
---

Astra permite exportar eventos de monitorización con el estado de los flujos entrantes o adaptadores DVB.

## URL de supervisión[](/es/astra/monitoring/export-monitoring-events#monitoring-url)

La dirección del servidor de monitorización puede especificarse en la interfaz web: Configuración -> General -> Monitorización:

![Opciones de control](https://cdn.cesbo.com/help/astra/monitoring/export/export-monitoring-events/options.png)

La dirección tiene los siguientes parámetros:

- `interval=30` - este parámetro define el intervalo de transmisión de las estadísticas, medido en segundos. El valor por defecto de este parámetro es 30.
- `total=1` - este parámetro se utiliza para obtener estadísticas resumidas del paquete de datos

Por ejemplo, con la dirección `http://example.com/api#interval=60&total=1` astra envía una solicitud HTTP POST al archivo `http://example.com/api` cada minuto, petición que contiene JSON con las estadísticas resumidas de un minuto de monitorización del flujo.

## Propiedades del arroyo[](/es/astra/monitoring/export-monitoring-events#stream-properties)

Las propiedades del flujo Astra sólo se envían una vez al iniciarse el flujo.

```
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

- `channel` - configuración de todo el flujo
- `timestamp` - hora del evento
- `hostname` - nombre del servidor

## Estado del flujo[](/es/astra/monitoring/export-monitoring-events#stream-status)

```
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

Esta lista describe los parámetros que proporcionan información sobre el flujo de trabajo:

- `count` - sólo para datos resumidos, indique la cantidad de segundos transcurridos desde la última recopilación de estadísticas
- `timestamp` - hora del evento en formato Unix
- `channel_id` - ID único del canal
- `input_id` - el número de entrada. Empieza por 1
- `current` - indica que las estadísticas de la entrada activa actual
- `onair` - estado del flujo, proporcionando una forma rápida de comprobar si se está ejecutando
- `scrambled` - indica si el flujo está cifrado o no
- `bitrate` - bitrate de entrada en Kbit/s
- `packets` - número total de paquetes TS
- `cc_error` - número total de errores CC ocurridos
- `pes_error` - número total de errores PSE ocurridos

Estos datos se transmiten en formato JSON como una matriz de varios elementos, en la que cada elemento representa un segundo de observaciones. El número de elementos de la matriz viene determinado por la frecuencia de transmisión de las estadísticas. Si la agregación de estadísticas está activada, sólo hay un elemento en la matriz, que contiene el número total de errores y el bitrate medio para el periodo igual a la frecuencia de transmisión de estadísticas.

## Propiedades del adaptador[](/es/astra/monitoring/export-monitoring-events#adapter-properties)

Propiedades del adaptador Astra enviar sólo una vez en el arranque del adaptador.

```
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

- `dvb` - mientras que la configuración del adaptador
- `timestamp` - hora del evento
- `hostname` - nombre del servidor

## Estado del adaptador[](/es/astra/monitoring/export-monitoring-events#adapter-status)

```
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
- `signal` - nivel aproximado de la señal en porcentaje
- `signal_db` - nivel de señal en `dBm * 100`
- `snr` - relación señal/ruido aproximada en porcentaje
- `snr_db` - relación señal/ruido en `dB * 100`
- `ber` - contador de errores de bit
- `unc` - contador de errores de bloque
- `bitrate` - bitrate total en Kbit/s

El estado de la señal describe el estado del sintonizador, descrito en un número de 5 bits:

- `SIGNAL` - el bit de señal se activará cuando el sintonizador capte la señal
- `CARRIER` - recepción estable de la señal
- `FEC` - recepción de datos FEC (forward error correction)
- `SYNC` - información recibida para la sincronización
- `LOCK` - el sintonizador está preparado para recibir una señal.

Si el sintonizador se ha configurado correctamente y la señal está bloqueada, el parámetro de estado se ajustará a 31
