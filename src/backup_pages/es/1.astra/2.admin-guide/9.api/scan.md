---
title: "Escanear API"
date: 2023-08-03
---

## Iniciar analizador[](https://help.cesbo.com/astra/admin-guide/api/scan#start-analyzer)

Petición: `POST /control/`

```
{
    "cmd": "scan-init",
    "scan": "..."
}
```

- `scan` - dirección del flujo. Más información [Formato de dirección de medios](https://help.cesbo.com/astra/receiving/general/address-format)

Respuesta:

```
{
    "scan-init": "ok",
    "id": "..."
}
```

- `id` - identificador de la instancia de analizador creada

El analizador se detendrá automáticamente en 10 segundos. Para mantener el analizador activo durante más tiempo, utilice `scan-check` Método API.

## Stop Analyzer[](https://help.cesbo.com/astra/admin-guide/api/scan#stop-analyzer)

Petición: `POST /control/`

```
{
    "cmd": "scan-kill",
    "id": "..."
}
```

- `id` - identificador de la instancia del analizador

Este método detiene el analizador inmediatamente.

## Obtener información[](https://help.cesbo.com/astra/admin-guide/api/scan#get-information)

Petición: `POST /control/`

```
{
    "cmd": "scan-check",
    "id": "..."
}
```

- `id` - identificador de la instancia del analizador

Respuesta:

```
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

- `scan` - array con información del flujo, si no hay nueva información este campo se omitirá

Información sobre el flujo:

- `psi` - Nombre del paquete de información de flujo de programa (PSI). Puede ser: `pat`, `pmt`, `cat`, `nit`, `sdt`
- `table_id` - Identificador PSI
- `pid` - Identificador de paquete MPEG-TS
- `version` - Versión del paquete PSI
- `crc32` - Suma de comprobación del paquete PSI

Los campos adicionales dependen del tipo de ISP.

### PAT

La tabla de asociación de programas (PAT) es una lista de programas. Contiene el número de programa (PNR) y el identificador de paquete (PID) del PMT asociado. Campos adicionales:

```
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
- `tsid` - Identificador del flujo de transporte
- `programs` - lista de programas

Información sobre el programa:

- `pnr` - número de programa
- `pid` - Identificador de paquete MPEG-TS para PMT

### PMT

La tabla de asignación de programas (PMT) es una lista de flujos elementales de programas: Vídeo, Audio y otros datos. Campos adicionales:

```
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
- `pid` - Identificador de paquete MPEG-TS
- `pnr` - Número de programa
- `pcr` - Identificador de paquete MPEG-TS para paquetes con marcas de tiempo de referencia de reloj de programa (PCR)
- `streams` - lista de corrientes elementales del programa

Información sobre la corriente primaria:

- `pid` - Identificador de paquete MPEG-TS para flujo elemental
- `type_name` - tipo de flujo elemental: `VIDEO`, `AUDIO`, `SUB`, `TTX`, `AIT`, `DATA`
- `type_id` - identificador de flujo elemental
- `descriptors` - Los descriptores elementales de flujo contienen información adicional
