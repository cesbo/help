---
title: Streams API
sidebar:
    order: 2
---

En la interfaz de Astra, puedes gestionar las configuraciones de los Streams y controlar su estado usando métodos de la API HTTP.

:::note
Los parámetros configurables son similares a los usados en la configuración de la interfaz de Astra, puedes leer más en los artículos relevantes sobre cómo configurar estos parámetros. Leer más
:::

## Configuración de Stream

```json
{
    "id": "...",
    "name": "...",
    "type": "...",
    "enable": true,
    "input": [
        ""
    ]
}
```

- `name` - nombre del stream
- `type` - tipo de stream `spts` o `mpts`
- `enable` - `true` si el stream está habilitado
- `input` - lista de entradas del stream
- otras opciones dependen de la configuración del stream.

## Obtener configuración del Stream

Petición: `GET /api/stream-info/{id}`

- `id` - identificador único del stream

La respuesta será un JSON con la configuración del stream.

## Modificar configuración del Stream

Petición: `POST /control/`

```json
{
    "id": "...",
    "cmd": "set-stream",
    "stream": { ... }
}
```

- `id` - identificador único del stream
- `stream` - configuración del stream

## Alternar el Stream

Encender/apagar un stream. Petición: `POST /control/`

```json
{
    "cmd": "toggle-stream",
    "id": "..."
}
```

- `id` - identificador único del stream

:::tip
Puedes habilitar o deshabilitar un stream ejecutando el siguiente comando:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"toggle-stream", "id":"a001"}' \
    http://server:8000/control/
```

si Astra lo realiza con éxito, se devuelve:

```json
{ "toggle-stream": "ok" }
```
:::

## Reiniciar Stream

Petición: `POST /control/`

```json
{
    "cmd": "restart-stream",
    "id": "..."
}
```

- `id` - identificador único del stream

## Cambiar entrada activa

Elegir entrada activa. Funciona solo para streams con los siguientes tipos de respaldo: `passive` o `disable`. Petición: `POST /control/`

```json
{
    "cmd": "set-stream-input",
    "id": "...",
    "input": "..."
}
```

- `id` - identificador único del stream
- `input` – número de entrada. La numeración empieza desde 1. Si no se define la opción, se iniciará la siguiente entrada después de la entrada activa.

:::tip
Puedes cambiar la entrada de un stream ejecutando el siguiente comando:

```sh
curl \
    -X POST \
    -user login \
    -d '{"cmd":"set-stream-input", "id":"a001", "input": 2}' \
    http://server:8000/control/
```

si Astra lo realiza con éxito, se devuelve:

```json
{ "set-stream-input": "ok" }
```
:::

## Eliminar Stream

Petición: `POST /control/`

```json
{
    "cmd": "set-stream",
    "id": "...",
    "stream": {
        "remove": true
    }
}
```

- `id` - identificador único del stream

## Obtener estado del Stream

Petición: `GET /api/stream-status/{id}`

- `id` - identificador único del stream

Parámetros de consulta opcionales: `GET /api/stream-status/{id}?t={time}`

- `time` - el valor predeterminado es `1` - estadísticas del último minuto. `0` - estadísticas del último segundo (estado actual del stream).

Respuesta:

```json
{
    "timestamp": 0,
    "instance": "...",
    "name": "...",
    "input_id": 1,
    "active": true,
    "onair": true,
    "sessions": 0,
    "bitrate": 0,
    "packets": 0,
    "pes_error": 0,
    "sc_error": 0,
    "cc_error": 0,
    "video_count": 1,
    "audio_count": 1
}
```

- `timestamp` - tiempo del reporte, para `t=0` es el tiempo actual
- `instance` - nombre de la instancia si se ha definido en Configuración → General → Nombre de la instancia
- `name` - nombre del stream
- `input_id` - identificador de entrada activa. por ejemplo, si la entrada primaria funciona bien será 1. si el stream cambia a la entrada de respaldo, será el número de esta entrada
- `active` - `true` si el stream está activo, o `false` si el stream funciona bajo demanda e inactivo
- `onair` - `true` si la entrada activa funciona sin errores
- `sessions` - número de sesiones activas en el stream
- `bitrate` - tasa de bits del stream en Kbit/s
- `pes_error` - número de paquetes PES inválidos
- `sc_error` - número de paquetes TS codificados. Si el stream está protegido con un Sistema de Acceso Condicional (CAS), entonces `sc_error` y `pes_error` serán mayores que 0. Si el stream se desencripta con una clave inválida, entonces `sc_error` será igual a 0 y `pes_error` será mayor que 0
- `cc_error` - contador de errores de CC. Un error de CC puede ser causado por pérdida o exceso de paquetes
- `video_count` - número de streams de video
- `audio_count` - número de streams de audio