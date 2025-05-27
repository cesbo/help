---
title: "Otros métodos de la API"
date: 2023-06-30
sidebar:
    order: 26
---

## Versión Astra[](/es/astra/admin-guide/other#astra-version)

Petición: `POST /control/`

```
{
    "cmd": "version"
}
```

## Astra Restart[](/es/astra/admin-guide/other#astra-restart)

Petición: `POST /control/`

```
{
    "cmd": "restart"
}
```

## Descargar configuración[](/es/astra/admin-guide/other#download-configuration)

Petición: `POST /control/`

```
{
    "cmd": "load"
}
```

En la respuesta estará todo el archivo de configuración.

## Cargar configuración[](/es/astra/admin-guide/other#upload-configuration)

Petición: `POST /control/`

```
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - archivo de configuración completo

## Establecer número de serie[](/es/astra/admin-guide/other#set-serial-number)

Petición: `POST /control/`

```
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - número de serie de la licencia

## Establecer la imagen en el azulejo de flujo[](/es/astra/admin-guide/other#set-image-to-the-stream-tile)

Petición: `POST /control/`

```
{
   "cmd": "set-stream-image",
   "id": "a001",
   "url": "http://..."
}
```

- `id` - identificador de flujo
- `url` - dirección de la imagen, también se podría utilizar el formato de datos, por ejemplo: `data:image/png;base64,...`

Este método se utiliza en el script para establecer capturas de pantalla para los mosaicos de flujo. Leer más en Capturas de pantalla de [canal en el panel de control](/es/astra/admin-guide/mosaic).
