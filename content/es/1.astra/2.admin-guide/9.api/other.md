---
title: "Otros métodos de la API"
date: 2023-06-30
---

## Versión Astra[](https://help.cesbo.com/astra/admin-guide/api/other#astra-version)

Petición: `POST /control/`

```
{
    "cmd": "version"
}
```

## Astra Restart[](https://help.cesbo.com/astra/admin-guide/api/other#astra-restart)

Petición: `POST /control/`

```
{
    "cmd": "restart"
}
```

## Descargar configuración[](https://help.cesbo.com/astra/admin-guide/api/other#download-configuration)

Petición: `POST /control/`

```
{
    "cmd": "load"
}
```

En la respuesta estará todo el archivo de configuración.

## Cargar configuración[](https://help.cesbo.com/astra/admin-guide/api/other#upload-configuration)

Petición: `POST /control/`

```
{
    "cmd": "upload"
    "config": {}
}
```

- `config` - archivo de configuración completo

## Establecer número de serie[](https://help.cesbo.com/astra/admin-guide/api/other#set-serial-number)

Petición: `POST /control/`

```
{
    "cmd": "set-license",
    "license": "xxx"
}
```

- `license` - número de serie de la licencia

## Establecer la imagen en el azulejo de flujo[](https://help.cesbo.com/astra/admin-guide/api/other#set-image-to-the-stream-tile)

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

Este método se utiliza en el script para establecer capturas de pantalla para los mosaicos de flujo. Leer más en Capturas de pantalla de [canal en el panel de control](https://help.cesbo.com/astra/admin-guide/administration/mosaic).
