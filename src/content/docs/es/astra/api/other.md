---
title: Other API Methods
---

## Versión de Astra

Solicitud: `POST /control/`

```json
{
    "cmd": "version"
}
```

## Reiniciar Astra

Solicitud: `POST /control/`

```json
{
    "cmd": "restart"
}
```

## Descargar configuración

Solicitud: `POST /control/`

```json
{
    "cmd": "load"
}
```

En la respuesta se encontrará todo el archivo de configuración.

## Subir configuración

Solicitud: `POST /control/`

```json
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - archivo de configuración completo

## Establecer número de serie

Solicitud: `POST /control/`

```json
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - número de serie de la licencia

## Establecer imagen en el mosaico del stream

Solicitud: `POST /control/`

```json
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - identificador del stream
- `url` - dirección de la imagen, también se puede utilizar formato de datos, por ejemplo: `data:image/png;base64,...`

Este método se utiliza en el script para configurar capturas de pantalla para los mosaicos de stream. Lea más en [Capturas de Canal en el Tablero](/en/articles/tools-and-utilities/mosaic/)