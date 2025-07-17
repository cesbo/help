---
title: Logs in Astra
sidebar:
    order: 1
---

Los mensajes de registro en Astra ofrecen una visión del estado del servicio y de las actividades durante la recepción y el procesamiento de flujos de datos. Los mensajes de registro se categorizan en varios tipos:

- `errors` - indican problemas operativos que pueden interrumpir la entrada del flujo
- `warnings` - señalan problemas con el flujo interrumpido o aquellos que podrían no afectar los flujos en absoluto
- `information` - incluye un número limitado de mensajes, como información de versión al iniciar el proceso, salida normal, reinicio del proceso, activación de entrada en el flujo, y algunos otros
- `debug` - información detallada sobre actividades de recepción y procesamiento. Desactivado por defecto y se puede habilitar en la configuración del registro o utilizando el argumento de línea de comandos `--debug`
- `access log` - este tipo de mensajes registra solicitudes al servidor HTTP integrado de Astra. Los registros de acceso son separados de otros registros y se almacenan en un archivo específico. Para más detalles, consulte el [Registro de Acceso](/en/astra/logs/access-log/)

## Interfaz web

Los registros pueden encontrarse en la interfaz web, solo hay que hacer clic en "Log" en el menú principal:

![Registros en la interfaz web](https://cdn.cesbo.com/help/astra/admin-guide/log/web.png)

- `Search` - la barra de búsqueda en el menú principal se puede usar para filtrar mensajes
- `Settings` - opciones básicas de registro
- `Clear` - limpiar registro en la interfaz web. En el servidor, Astra mantiene el registro tal cual

![Configuración del registro](https://cdn.cesbo.com/help/astra/admin-guide/log/web-settings.png)

- `API Access` - escribe en el registro todas las solicitudes API a Astra. Útil para verificar quién gestiona tu servicio
- `Debug` - escribe información detallada sobre la recepción y el procesamiento

## Consola

Por defecto, Astra escribe toda la información en el archivo `/var/log/astra.log`. El nombre del archivo depende del nombre del servicio. Por lo tanto, si has lanzado varias instancias en el mismo servidor, el nombre del archivo será el mismo que el del servicio.