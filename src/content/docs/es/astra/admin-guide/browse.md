---
title: "Navegación en los registros del Astra"
date: 2023-08-10
sidebar:
    order: 18
---

Los mensajes de registro en Astra proporcionan información sobre el estado del servicio y las actividades durante la recepción y el procesamiento de los flujos de datos. Los mensajes de registro se clasifican en varios tipos:

- `errors` - indican problemas operativos que pueden perturbar la entrada de corriente
- `warnings` - señalar los problemas del flujo interrumpido o los que podrían no afectar en absoluto a los flujos
- `information` - incluye un número limitado de mensajes, como información sobre la versión al inicio del proceso, salida normal, reinicio del proceso, entrada de activación en el flujo y algunos otros
- `debug` - información detallada sobre las actividades de recepción y procesamiento. Desactivado por defecto y puede activarse en la configuración del registro o utilizando el argumento de la línea de comandos. `--debug`
- `access log` - este tipo de mensajes registra las peticiones al servidor HTTP integrado de Astra. Los registros de acceso están separados de otros registros y se almacenan en un archivo específico. Para más detalles, consulte la página [Registro de acceso](/es/astra/admin-guide/access)

## Interfaz web[](/es/astra/admin-guide/browse#web-interface)

El registro se puede encontrar en la interfaz web, basta con hacer clic en "Registro" en el menú principal:

![Registros en la interfaz web](https://cdn.cesbo.com/help/astra/admin-guide/log/web.png)

- `Search` - la barra de búsqueda del menú principal podría utilizarse para filtrar los mensajes
- `Settings` - opciones básicas de registro
- `Clear` - borrar el registro en la interfaz web. En el servidor Astra mantener el registro como está

![Configuración del registro](https://cdn.cesbo.com/help/astra/admin-guide/log/web-settings.png)

- `API Access` - escribe en el log todas las peticiones API a Astra. Útil para comprobar quién gestiona su servicio
- `Debug` - escriba información detallada sobre la recepción y el tratamiento

## Consola[](/es/astra/admin-guide/browse#console)

Por defecto, Astra escribe toda la información en el archivo `/var/log/astra.log`. El nombre del archivo depende del nombre del servicio. Por lo tanto, si ha lanzado varias instancias en el mismo servidor, el nombre del archivo será el mismo que el nombre del servicio.
