---
title: Scan API
---

## Iniciar Analizador

Solicitud: `POST /control/`

```json
{
    "cmd": "scan-init",
    "scan": "..."
}
```

- `scan` - dirección del flujo. Lee más sobre el [Formato de Dirección de Medios](/en/astra/streams/address-format/)

Respuesta:

```json
{
    "scan-init": "ok",
    "id": "..."
}
```

- `id` - identificador de la instancia del analizador creada

El analizador se detendrá automáticamente en 10 segundos. Para mantener el analizador activo por más tiempo, use el método API `scan-check`.

## Detener Analizador

Solicitud: `POST /control/`

```json
{
    "cmd": "scan-kill",
    "id": "..."
}
```

- `id` - identificador de la instancia del analizador

Este método detiene el analizador de inmediato.

## Obtener Información

Solicitud: `POST /control/`

```json
{
    "cmd": "scan-check",
    "id": "..."
}
```

- `id` - identificador de la instancia del analizador

Respuesta:

```json
{
    "scan-check": "ok",
    "scan": [
        {
            "psi": "...",
            "table_id": N,
            "pid": N,
            "version": N,
            "crc32": N,
            ...
        }
    ]
}
```

- `scan` - array con información del flujo, si no hay nueva información este campo será omitido

Información del flujo:

- `psi` - nombre del paquete de Información de Flujo de Programa (PSI). Puede ser: `pat`, `pmt`, `cat`, `nit`, `sdt`
- `table_id` - identificador de PSI
- `pid` - identificador del paquete MPEG-TS
- `version` - versión del paquete PSI
- `crc32` - suma de verificación del paquete PSI

Campos adicionales dependen del tipo de PSI.

### PAT

La Tabla de Asociación de Programas (PAT) es una lista de programas. Contiene el Número de Programa (PNR) y el Identificador de Paquete (PID) del PMT asociado. Campos adicionales:

```json
{
    "psi": "pat",
    "table_id": 0,
    "pid": 0,
    "tsid": N,
    "programs": [
        {
            "pnr": N,
            "pid": N
        }
    ]
}
```

- `table_id` - siempre `0`
- `pid` - siempre `0`
- `tsid` - identificador del Flujo de Transporte
- `programs` - lista de programas

Información del programa:

- `pnr` - número de programa
- `pid` - identificador del paquete MPEG-TS para PMT

### PMT

La Tabla de Mapeo de Programas (PMT) es una lista de flujos elementales del programa: Video, Audio y otros datos. Campos adicionales:

```json
{
    "psi": "pmt",
    "table_id": 2,
    "pnr": N,
    "pid": N,
    "pcr": N,
    "streams": [
        {
            "pid": N,
            "type_name": "...",
            "type_id": N,
            "descriptors": [
                {
                    "type_id": N,
                    "type_name": "...",
                    ...
                }
            ]
        }
    ]
}
```

- `table_id` - siempre `2`
- `pid` - identificador del paquete MPEG-TS
- `pnr` - Número de Programa
- `pcr` - identificador del paquete MPEG-TS para paquetes con las marcas de tiempo de la Referencia de Reloj del Programa (PCR)
- `streams` - lista de flujos elementales del programa

Información del Flujo Elemental:

- `pid` - identificador del paquete MPEG-TS para el flujo elemental
- `type_name` - tipo de flujo elemental: `VIDEO`, `AUDIO`, `SUB`, `TTX`, `AIT`, `DATA`
- `type_id` - identificador del flujo elemental
- `descriptors` - descriptores del flujo elemental contienen información adicional