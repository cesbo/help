---
title: "Ajustes de exportación de EPG"
date: 2023-08-14
sidebar:
    order: 14
---

Configurar la Exportación de EPG para extraer la Guía Electrónica de Programas del stream

![Opciones de exportación de EPG](https://cdn.cesbo.com/help/astra/admin-guide/stream/epg.png)

- `XMLTV Channel ID` - utilizar un ID de canal personalizado en lugar del ID primario
- `Format` - Formato de exportación EPG:
    - `XMLTV` - Este popular formato se utiliza para almacenar y distribuir EPG. XMLTV es compatible con varios middleware y reproductores de IPTV
    - `JSON` - útil para enviar EPG a servidores externos o para su uso directo en una aplicación web. Por ejemplo, puede incrustarse en un sitio web
- `Destination` - destino para la exportación de EPG:
    - `file://` - guardar la EPG en un archivo local. Por ejemplo, utilizando `file:///tmp/test_channel.xml` almacenará la EPG en el `/tmp` con el nombre de archivo `test_channel.xml`
    - `http://` - enviar EPG mediante una solicitud HTTP POST. En el lado del servidor, se requiere una aplicación para gestionar la solicitud recibida, como EPG Aggregator
- `Codepage` - decodificar el texto de los paquetes EIT recibidos utilizando la codificación definida. El texto almacenado siempre se codifica con UTF-8

## Agregador EPG[](https://help.cesbo.com/astra/admin-guide/stream/epg#epg-aggregator)

EPG Aggregator es un script para que Astra reciba EPG de muchos servidores y los guarde en un único archivo XMLTV.

### Instale

Para instalar el script, descárguelo y guárdelo en el servidor. Puede hacerlo con `curl` en el servidor:

```
curl -Lo /etc/astra/epg-aggregator.lua https://cdn.cesbo.com/astra/scripts/epg-aggregator/epg-aggregator.lua
```

### Iniciar script con Systemd

Para iniciar el script automáticamente puede añadirlo al systemd.

1. Descarga del archivo de configuración: [https://cdn.cesbo.com/astra/scripts/epg-aggregator/astra-epg.service](https://cdn.cesbo.com/astra/scripts/epg-aggregator/astra-epg.service)
2. En este archivo puede configurar los argumentos de la línea de comandos
3. Guarde el archivo en su servidor en `/etc/systemd/system/astra-epg.service`
4. Iniciar guión: `systemctl start astra-epg`
5. Activa la ejecución automática: `systemctl enable astra-epg`

Argumentos de la línea de comandos:

- `-o /tmp/epg.xml` - ruta completa para almacenar el archivo XMLTV generado
- `-p 5000` -puerto para recibir peticiones de Astra
- `–daemon` - ejecutar como demonio
- `–interval SEC` - intervalo de guardado de la EPG en un archivo. por defecto: 60 segundos
- `–stalker` - sustituir etiqueta `<sub-title>` a `<desc>` para middleware Stalker/Ministra

El script está listo para recibir peticiones de Astra

### Configurar Astra para el agregador EPG

En los ajustes del stream, en la pestaña "EPG", configure la Exportación EPG:

- `Format` - set `JSON`
- `Destination` - set `http://EPG_agregator_IP:5000`

El archivo XMLTV con los datos recogidos se ubicará en la ruta: `/tmp/epg.xml`. También puede descargar XMLTV desde http://EPG\_agregator\_IP:5000/epg.xml o puede añadir esta URL a la aplicación cliente.

### Reiniciar el Agregador EPG cada noche

En algunos casos es necesario reiniciar el Agregador EPG, mejor hacerlo cada noche. Puede hacerlo con un programador del sistema - cron. Abra la configuración de cron:

```
sudo crontab -e
```

y añadir la línea al archivo:

```
0 4 * * * systemctl restart astra-epg
```

Guarde los cambios en cron. El colector se reiniciará cada noche a las 4:00
