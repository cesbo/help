---
title: DVB Adapters API
sidebar:
    order: 2
---

En la interfaz de Astra, puedes gestionar las configuraciones de Adaptadores DVB y controlar su estado usando métodos API HTTP.

## Configuración de Adaptador

```json
{
    "id": "...",
    "name": "...",
    "type": "...",
    "enable": true,
    "adapter": 0,
    "device": 0
}
```

- `name` - nombre del adaptador;
- `type` - tipo de adaptador: `S`, `S2`, `T`, `T2`, `ATSC`, `ISDB-T`, `C`, `C/A`, `C/B`, `C/C`;
- `enable` - `true` si el adaptador está habilitado;
- `adapter` - número del adaptador en el sistema: `/dev/dvb/adapter0`
- `device` - número del dispositivo en el adaptador: `/dev/dvb/adapter0/frontend0`
- otras opciones dependen de la configuración del adaptador

## Obtener la configuración del Adaptador

:::caution
Versión: 2021-04-12 o posterior
:::

Solicitud: `GET /api/adapter-info/{id}`

- `id` - identificador único del adaptador

La respuesta será un JSON con la configuración del adaptador

## Modificar la configuración del Adaptador

Solicitud: `POST /control/`

```json
{
    "cmd": "set-adapter",
    "id": "...",
    "adapter": {...}
}
```

- `id` - identificador único del adaptador
- `adapter` - configuración del adaptador

## Reiniciar Adaptador

Solicitud: `POST /control/`

```json
{
    "cmd": "restart-adapter",
    "id": "..."
}
```

- `id` - identificador único del adaptador

## Eliminar Adaptador

:::danger
Este método elimina el adaptador y todas las transmisiones relacionadas
:::

Solicitud: `POST /control/`

```json
{
    "cmd": "set-adapter",
    "id": "...",
    "adapter": {
        "remove": true
    }
}
```

- `id` - identificador único del adaptador

## Obtener el estado del Adaptador

:::caution
Versión: 2021-04-12 o posterior
:::

Solicitud: `GET /api/adapter-status/{id}`

- `id` - identificador único del adaptador

Parámetros de consulta opcionales: `GET /api/adapter-status/{id}?t={time}`

- `time` - el valor predeterminado es `1` - estadísticas del último minuto, `0` - estadísticas del último segundo (estado actual del adaptador)

Respuesta:

```json
{
    "timestamp": 0,
    "instance": "...",
    "name": "...",
    "lock": true,
    "signal": 0,
    "signal_db": 0,
    "snr": 0,
    "snr_db": 0,
    "ber": 0,
    "unc": 0,
    "bitrate": 0
}
```

- `timestamp` - tiempo del reporte, para `t=0` es el tiempo actual;
- `instance` - nombre de la instancia si está definido en Configuración → General → Nombre de la Instancia;
- `name` - nombre del flujo;
- `lock` - `true` si el sintonizador tiene bloqueo y puede recibir datos;
- `signal` - nivel aproximado de la señal en porcentaje;
- `signal_db` - nivel de la señal en dBm multiplicado por 100;
- `snr` - relación señal-ruido aproximada en porcentaje;
- `snr_db` - relación señal-ruido en dB multiplicada por 100;
- `ber` - contador de errores de bit;
- `unc` - contador de errores de bloque;
- `bitrate` - tasa de bits total en Kbit/s.