---
title: "Corriente IET"
date: 2023-03-17
sidebar:
    order: 3
---

EIT Stream es una herramienta para convertir [archivos XMLTV](https://help.cesbo.com/misc/articles/format/xmltv) en flujo MPEG-TS con Tablas de Información de Eventos (EIT) para redes de difusión como DVB, ATSC, ISDB.

## Instalación[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream#installation)

Sólo tiene que descargar un único archivo binario y establecer el permiso de ejecución:

```
curl -Lo /usr/bin/eit-stream http://cesbo.com/and/eit-stream
chmod +x /usr/bin/eit-stream
```

## Configuración[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream#configuration)

Crear un archivo de configuración `/etc/eit-stream.conf` con cualquier editor de texto. Ejemplo:

```
xmltv = /opt/xmltv.xml
output = udp://lo@239.0.0.1:1234
onid = 8000
codepage = 5
eit-days = 1
eit-rate = 1500

[tdt-tot]
country = EST
offset = +120

# First multiplex

[multiplex]
tsid = 1

[multiplex/service]
pnr = 101
xmltv-id = discovery

[multiplex/service]
pnr = 102
xmltv-id = history

# Second multiplex

[multiplex]
tsid = 2
xmltv = /opt/xmltv-2.xml

[multiplex/service]
pnr = 201
xmltv-id = euronews
```

Líneas iniciadas con el símbolo `#` es un comentario e ignorado.

### Opciones generales

- `xmltv` - ruta al archivo xmltv local. o enlace http/https al archivo xmltv o gzip xmltv. Esta opción podría redefinirse en `[multiplex]` o en `[multiplex/service]`
- `output` - dirección UDP de destino
- `onid` - identificador de red original
- `codepage` - codepage. Esta opción podría redefinirse en `[multiplex]` o en `[multiplex/service]`
- `eit-days` - número de días en epg. por defecto es 3
- `eit-rate` - bitrate en kbit/s. por defecto 15 kbit/s por cada servicio

### Páginas de código compatibles

Próximas páginas de códigos disponibles para la codificación de texto:

- `0` - Por defecto. Latín (ISO 6937)
- `1` - Europa Occidental (ISO 8859-1)
- `2` - Centroeuropeo (ISO 8859-2)
- `3` - Sur de Europa (ISO 8859-3)
- `4` - Norte de Europa (ISO 8859-4)
- `5` - Cirílico (ISO 8859-5)
- `6` - Árabe (ISO 8859-6)
- `7` - Griego (ISO 8859-7)
- `8` - Hebreo (ISO 8859-8)
- `9` - Turco (ISO 8859-9)
- `10` - Nórdica (ISO 8859-10)
- `11` - Tailandés (ISO 8859-11)
- `13` - Borde Báltico (ISO 8859-13)
- `14` - Celta (ISO 8859-14)
- `15` - Europa Occidental (ISO 8859-15)
- `21` - UTF-8

### Opciones de fecha y hora

Sección `[tdt-tot]`:

- `country` - código de país en formato ISO 3166-1 alfa-3
- `offset` - el desfase horario en minutos con respecto a GMT. Por ejemplo, +120 es GMT+2 o -300 es GMT-5.

### Opciones multiplex

Sección `[multiplex]`

- `tsid` - identificador de flujo de transporte multiplexado
- `name` - campo opcional para describir el multiplex

### Opciones de servicio

Sección `[multiplex/service]`

- `pnr` - número de canal/pnr
- `xmltv-id` - id de canal en xmltv
- `parental-rating` - restricción de edad. Valor definido en pares: país y edad. Por ejemplo: `parental-rating = EST 16 USA 14`. Código de país en formato ISO 3166-1 alfa-3 (3 letras). Edad de 4 a 18 años (inclusive), 0 - sin restricciones.

## Flujo Mux con EIT a MPTS[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream#mux-stream-with-eit-to-mpts)

Con Astra puedes añadir un flujo UDP con EIT al MPTS. En la configuración del MPTS añada la entrada y establezca la dirección UDP, por ejemplo en la configuración anterior la dirección es `udp://lo@239.0.0.1:1234`. En los ajustes avanzados del MPTS, active la opción "Pasar IET".

## Arranque automático[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream#autostart)

Registrar el servicio en systemd para iniciar el servicio en segundo plano y autoarranque en el arranque del sistema. Crear archivo `/etc/systemd/system/eit-stream.service`:

```
[Unit]
Description=eit-stream service
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/eit-stream /etc/eit-stream.conf
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

El siguiente comando puede utilizarse para gestionar el servicio:

- iniciar servicio: `systemctl start eit-stream`
- detener el servicio: `systemctl stop eit-stream`
- activar autoarranque: `systemctl enable eit-stream`
- desactivar el arranque automático: `systemctl disable eit-stream`

## Recarga[](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream#reload)

Para reiniciar el servicio una vez por la noche, añada la siguiente línea a /etc/crontab:

```
0   2   *   *   *   root systemctl restart eit-stream
```
