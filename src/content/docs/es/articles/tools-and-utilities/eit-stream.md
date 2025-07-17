---
title: EIT Stream
date: 2023-03-17
sidebar:
    order: 3
---

EIT Stream es una herramienta para convertir [archivos XMLTV](/en/articles/protocols/xmltv/) en un flujo MPEG-TS con Tablas de Información de Eventos (EIT) para redes de transmisión como DVB, ATSC, ISDB.

## Instalación

Solo descarga un archivo binario único y establece permisos de ejecución:

```sh
curl -Lo /usr/bin/eit-stream http://cesbo.com/and/eit-stream
chmod +x /usr/bin/eit-stream
```

## Configuración

Crea un archivo de configuración `/etc/eit-stream.conf` con cualquier editor de texto. Ejemplo:

```ini
xmltv = /opt/xmltv.xml
output = udp://lo@239.0.0.1:1234
onid = 8000
codepage = 5
eit-days = 1
eit-rate = 1500

[tdt-tot]
country = EST
offset = +120

# Primer multiplex

[multiplex]
tsid = 1

[multiplex/service]
pnr = 101
xmltv-id = discovery

[multiplex/service]
pnr = 102
xmltv-id = history

# Segundo multiplex

[multiplex]
tsid = 2
xmltv = /opt/xmltv-2.xml

[multiplex/service]
pnr = 201
xmltv-id = euronews
```

Las líneas que comienzan con el símbolo `#` son comentarios y se ignoran.

### Opciones generales

- `xmltv` - ruta al archivo xmltv local o enlace http/https al archivo xmltv o archivo xmltv comprimido con gzip. Esta opción puede redefinirse en `[multiplex]` o en `[multiplex/service]`.
- `output` - dirección de destino UDP.
- `onid` - identificador de red original.
- `codepage` - página de códigos. Esta opción puede redefinirse en `[multiplex]` o en `[multiplex/service]`.
- `eit-days` - número de días en EPG. El valor predeterminado es 3.
- `eit-rate` - velocidad de bits en kbit/s. El valor predeterminado es 15 kbit/s por cada servicio.

### Páginas de códigos admitidas

Las siguientes páginas de códigos están disponibles para la codificación de texto:

- `0` - Predeterminado. Latino (ISO 6937)
- `1` - Europa Occidental (ISO 8859-1)
- `2` - Europa Central (ISO 8859-2)
- `3` - Europa del Sur (ISO 8859-3)
- `4` - Europa del Norte (ISO 8859-4)
- `5` - Cirílico (ISO 8859-5)
- `6` - Árabe (ISO 8859-6)
- `7` - Griego (ISO 8859-7)
- `8` - Hebreo (ISO 8859-8)
- `9` - Turco (ISO 8859-9)
- `10` - Nórdico (ISO 8859-10)
- `11` - Tailandés (ISO 8859-11)
- `13` - Árico Báltico (ISO 8859-13)
- `14` - Celta (ISO 8859-14)
- `15` - Europa Occidental (ISO 8859-15)
- `21` - UTF-8

### Opciones de tiempo y fecha

Sección `[tdt-tot]`:

- `country` - código del país en formato ISO 3166-1 alpha-3.
- `offset` - el desplazamiento horario firmado en minutos desde GMT. Por ejemplo, +120 es GMT+2 o -300 es GMT-5.

### Opciones de multiplex

Sección `[multiplex]`

- `tsid` - identificador de flujo de transporte del multiplex.
- `name` - campo opcional para describir el multiplex.

### Opciones de servicio

Sección `[multiplex/service]`

- `pnr` - número de canal/pnr.
- `xmltv-id` - id del canal en xmltv.
- `parental-rating` - restricción de edad. Valor definido en pares: país y edad. Por ejemplo: `parental-rating = EST 16 USA 14`. Código del país en formato ISO 3166-1 alpha-3 (3 letras). Edad de 4 a 18 (inclusive), 0 - sin restricciones.

## Mux stream con EIT a MPTS

Con Astra puedes añadir un flujo UDP con EIT al MPTS.
En la configuración de MPTS, agrega la entrada y establece una dirección UDP, por ejemplo, en la configuración anterior la dirección es `udp://lo@239.0.0.1:1234`.
En la configuración avanzada de MPTS, activa la opción "Pasar EIT".

## Autoinicio

Registra el servicio en systemd para iniciar el servicio en segundo plano y automáticamente al iniciar el sistema. Crea el archivo `/etc/systemd/system/eit-stream.service`:

```ini
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

El siguiente comando se puede usar para gestionar el servicio:

- iniciar servicio: `systemctl start eit-stream`
- detener servicio: `systemctl stop eit-stream`
- habilitar inicio automático: `systemctl enable eit-stream`
- deshabilitar inicio automático: `systemctl disable eit-stream`

## Recarga

Para reiniciar el servicio una vez por noche, añade la siguiente línea en /etc/crontab:

```
0   2   *   *   *   root systemctl restart eit-stream
```