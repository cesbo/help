---
title: "Stream: EPG Export Settings"
sidebar:
    order: 15
---

Configurar la Exportación de EPG para extraer la Guía Electrónica de Programación del flujo

![Flujo: Formulario para Configuración de Exportación EPG](https://cdn.cesbo.com/help/astra/admin-guide/stream/epg.png)

- `XMLTV Channel ID`: utiliza un ID de canal personalizado en lugar del ID primario
- `Format`: Formato de Exportación EPG:
    - `XMLTV`: este es un formato popular utilizado para almacenar y distribuir EPG. XMLTV es compatible con varios middleware y reproductores IPTV
    - `JSON`: útil para enviar EPG a servidores externos o para uso directo en una aplicación web. Por ejemplo, se puede incrustar en un sitio web
- `Destination`: destino para la Exportación de EPG:
    - `file://`: guarda el EPG en un archivo local. Por ejemplo, usando `file:///tmp/test_channel.xml` se almacenará el EPG en el directorio `/tmp` con el nombre de archivo `test_channel.xml`
    - `http://`: envía EPG utilizando una solicitud HTTP POST. En el lado del servidor, se requiere una aplicación para manejar la solicitud recibida, como EPG Aggregator
- `Codepage`: decodifica texto de los paquetes EIT recibidos usando la página de códigos definida. El texto almacenado siempre se codifica con UTF-8

## EPG Aggregator

EPG Aggregator es un script para Astra que recibe EPG de muchos servidores y lo guarda en un único archivo XMLTV.

### Instalación

Para instalar el script, descárgalo y guárdalo en el servidor. Puedes hacerlo con el comando `curl` en el servidor:

```sh
curl -Lo /etc/astra/epg-aggregator.lua https://cdn.cesbo.com/astra/scripts/epg-aggregator/epg-aggregator.lua
```

### Iniciar el script con Systemd

Para iniciar el script automáticamente, puedes añadirlo a systemd.

1. Descarga el archivo de configuración: https://cdn.cesbo.com/astra/scripts/epg-aggregator/astra-epg.service
2. En este archivo puedes configurar los argumentos de línea de comando
3. Guarda el archivo en tu servidor en `/etc/systemd/system/astra-epg.service`
4. Inicia el script: `systemctl start astra-epg`
5. Habilita el inicio automático: `systemctl enable astra-epg`

Argumentos de línea de comando:

- `-o /tmp/epg.xml`: ruta completa para almacenar el archivo XMLTV generado
- `-p 5000`: puerto para recibir solicitudes de Astra
- `–daemon`: ejecuta como daemon
- `–interval SEC`: intervalo para guardar EPG en archivo. predeterminado: 60 segundos
- `–stalker`: reemplaza la etiqueta `<sub-title>` por `<desc>` para middleware Stalker/Ministra

El script está listo para recibir solicitudes de Astra

### Configurar Astra para EPG Aggregator

En la configuración del flujo, en la pestaña "EPG", configura la Exportación de EPG:

- `Format`: establece `JSON`
- `Destination`: establece `http://IP_del_aggregador_EPG:5000`

El archivo XMLTV con los datos recopilados se ubicará en la ruta: `/tmp/epg.xml`.
También puedes descargar el XMLTV desde http://IP_del_aggregador_EPG:5000/epg.xml o puedes añadir esta URL a la aplicación cliente.

### Reiniciar EPG Aggregator cada noche

En algunos casos, es posible que necesites reiniciar EPG Aggregator, es mejor hacerlo cada noche.
Puedes hacerlo con un programador del sistema - cron. Abre la configuración de cron:

```
sudo crontab -e
```

y añade la siguiente línea al archivo:

```
0 4 * * * systemctl restart astra-epg
```

Guarda los cambios en cron. El recolector se reiniciará cada noche a las 4:00.