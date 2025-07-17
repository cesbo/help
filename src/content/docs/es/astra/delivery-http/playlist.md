---
title: Playlist for HTTP Play
date: 2023-08-22
sidebar:
    order: 11
---

Astra genera una lista de reproducción simple con enlaces a todos los canales habilitados. Esta lista de reproducción está disponible solo para la función [HTTP Play](/en/astra/delivery-http/http-play/).

![Configuraciones de HTTP Play](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/http-play.png)

## Formato de la lista de reproducción

Astra proporciona acceso a la lista de reproducción en los siguientes formatos:

- `M3U8` - es el formato más popular, compatible con todos los reproductores multimedia.
- `XSPF` - es un formato de lista de reproducción basado en XML, compatible con algunos reproductores.

En esta guía usaremos el formato M3U8.

## Enlaces a la lista de reproducción

El enlace predeterminado a la lista de reproducción M3U8 es:

```
http://example.com:8000/playlist.m3u8
```

Donde:

- `example.com` - es la dirección IP de tu servidor
- `8000` - es un puerto para HTTP Play, por defecto es igual al puerto de la interfaz web de Astra, pero se puede personalizar en los ajustes de HTTP Play.
- `playlist.m3u8` - nombre del archivo de lista de reproducción, también se puede personalizar en los ajustes de HTTP Play.

## Grupos de canales

Para una mejor navegación, los canales en la lista de reproducción pueden agruparse. Para hacerlo, crea una nueva categoría en Ajustes → Grupos. Lee más sobre cómo crear [Grupos de Canales](/en/astra/settings/groups/).

Luego, selecciona la categoría creada en los ajustes de `HTTP Play`, opción `Playlist Arrange`.

:::note
Algunos reproductores, como VLC, no admiten grupos M3U8 y muestran una lista de reproducción plana.
:::

## Logos de Canales

Algunos reproductores y soluciones de middleware muestran logos de canales junto con sus nombres en la lista de canales.

![Logos de Canales en Middleware](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/mw.jpg)

Para comenzar, descarga el archivo con las imágenes de los logos desde: https://epg.it999.ru/it999_transparent_logo.zip
Puedes descargar y extraer el archivo en tu servidor usando los siguientes comandos:

```sh
mkdir -p /var/lib/astra
cd /var/lib/astra
curl -LO https://epg.it999.ru/it999_transparent_logo.zip
unzip it999_transparent_logo.zip
rm it999_transparent_logo.zip
```

En Ajustes → `HTTP Play` → `Ruta a los logos de TV`, establece la ruta como `/var/lib/astra/it999_transparent_220x132`. Por favor, ten en cuenta que el nombre del directorio es sólo un ejemplo anterior.

El archivo proporcionado incluye logos en formato PNG, con nombres de archivo que coinciden con los nombres de los canales. Con estos pasos completados, la lista de reproducción ahora incluirá la opción `tvg-logo` para cada canal.

## Guía Electrónica de Programas

Algunos reproductores y soluciones de middleware muestran eventos actuales y futuros para los canales. La Guía Electrónica de Programas (EPG) puede exportarse al reproductor en formato XMLTV o cualquier otro formato soportado por el reproductor.

En los Ajustes de Astra → `HTTP Play` → `Encabezado M3U`, establece la opción:

```
url-tvg="https://teleguide.info/download/new3/xmltv.xml.gz"
```

La línea se añadirá al encabezado de la lista de reproducción y proporcionará información sobre la ubicación del EPG. Esta URL es solo un ejemplo, puedes usar cualquier otra fuente de EPG o explorar nuestra solución, [Agregador de EPG](/en/astra/streams/spts-epg/#epg-aggregator).

El paso final es configurar el ID del canal para vincular tus canales con los registros del EPG. Cada canal en el XMLTV tiene un identificador único, como este:

```xml
<channel id="226">
    <display-name lang="en">Discovery Channel</display-name>
</channel>
```

En Astra, navega a los ajustes del Canal, abre la pestaña EPG y establece el valor de `ID de Canal XMLTV` en `226`:

![Opciones de EPG del Stream](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/stream-epg.png)