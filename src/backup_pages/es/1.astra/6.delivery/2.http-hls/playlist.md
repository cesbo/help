---
title: "Lista de reproducción para HTTP Play"
date: 2023-08-22
---

Astra genera una lista de reproducción simple con enlaces a todos los canales habilitados. Esta lista de reproducción sólo está disponible para la función [HTTP Play](https://help.cesbo.com/astra/delivery/http-hls/http-play).

![Configuración de HTTP Play](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/http-play.png)

## Formato de la lista de reproducción[](https://help.cesbo.com/astra/delivery/http-hls/playlist#playlist-format)

Astra proporciona acceso a listas de reproducción en los siguientes formatos:

- `M3U8` - es un formato muy popular que admiten todos los reproductores multimedia
- `XSPF` - es un formato de lista de reproducción basado en XML, compatible con algunos reproductores

En esta guía utilizaremos el formato M3U8.

## Enlaces a la lista de reproducción[](https://help.cesbo.com/astra/delivery/http-hls/playlist#links-to-the-playlist)

El enlace por defecto a la lista de reproducción M3U8 es:

```
http://example.com:8000/playlist.m3u8
```

Dónde:

- `example.com` - la dirección IP de su servidor
- `8000` - es un puerto para HTTP Play, por defecto es igual al puerto de la interfaz web de Astra, pero se puede personalizar en la configuración de HTTP Play.
- `playlist.m3u8` - nombre de archivo de la lista de reproducción, también se puede personalizar en la configuración de HTTP Play

## Grupos de canales[](https://help.cesbo.com/astra/delivery/http-hls/playlist#channel-groups)

Para una mejor navegación, los canales de la lista de reproducción podrían agruparse. Para ello, cree una nueva categoría en Configuración -> Grupos. Más información sobre cómo crear grupos [de canales](https://help.cesbo.com/astra/admin-guide/settings/channel-groups).

A continuación, seleccione la categoría creada en el `HTTP Play` configuración, opción `Playlist Arrange`.

:::note 
Algunos reproductores, como VLC, no soportan grupos M3U8 y muestran listas de reproducción planas
:::

## Canal Logos[](https://help.cesbo.com/astra/delivery/http-hls/playlist#channel-logos)

Algunos actores y soluciones de middleware muestran logotipos de canales junto a sus nombres en la lista de canales.

![Canal Logos en Middleware](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/mw.jpg)

Para empezar, descargue el archivo con las imágenes del logotipo de: [https://epg.it999.ru/it999\_transparent\_logo.zip](https://epg.it999.ru/it999_transparent_logo.zip) Puede descargar y extraer el archivo en su servidor utilizando los siguientes comandos:

```
mkdir -p /var/lib/astra
cd /var/lib/astra
curl -LO https://epg.it999.ru/it999_transparent_logo.zip
unzip it999_transparent_logo.zip
rm it999_transparent_logo.zip
```

En Ajustes -> `HTTP Play` -> `Path to TV logos`establece la ruta como `/var/lib/astra/it999_transparent_220x132`. Tenga en cuenta que el nombre del directorio es el del ejemplo anterior.

El archivo proporcionado incluye logotipos en formato PNG, con nombres de archivo que coinciden con los nombres de los canales. Una vez completados estos pasos, la lista de reproducción incluirá el archivo `tvg-logo` para cada canal.

## Guía electrónica de programas[](https://help.cesbo.com/astra/delivery/http-hls/playlist#electronic-program-guide)

Algunos reproductores y soluciones middleware muestran los eventos actuales y próximos de los canales. La guía electrónica de programación (EPG) puede exportarse al reproductor en XMLTV o en cualquier otro formato compatible con el reproductor.

En los Ajustes de Astra -> `HTTP Play` -> `M3U Header`Establecer opción

```
url-tvg="https://teleguide.info/download/new3/xmltv.xml.gz"
```

La línea se añadirá a la cabecera de la lista de reproducción y proporcionará información sobre la ubicación de la EPG. Esta URL es sólo un ejemplo, puede utilizar cualquier otra fuente de EPG o explorar nuestra solución, [EPG Aggregator](https://help.cesbo.com/astra/admin-guide/stream/epg).

El último paso es configurar el ID del canal para enlazar sus canales con los registros EPG. Cada canal en el XMLTV tiene un identificador único, así:

```
<channel id="226">
    <display-name lang="en">Discovery Channel</display-name>
</channel>
```

En Astra, vaya a la configuración del canal, abra la pestaña EPG y configure el `XMLTV Channel ID` valor a `226`:

![Opciones de EPG en streaming](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/stream-epg.png)
