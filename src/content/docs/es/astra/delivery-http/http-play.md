---
title: HTTP Play
sidebar:
    order: 10
---

HTTP Play es una forma conveniente y eficiente de acceder a todos tus canales con solo un clic. Con HTTP Play, puedes reproducir fácilmente canales por su ID usando los protocolos HTTP MPEG-TS o HLS. Esta función simplifica el proceso de transmisión, proporcionando un acceso sin interrupciones a tus canales y mejorando la experiencia general del usuario.

Por defecto, HTTP Play está desactivado. Para activarlo, abre: Configuración → HTTP Play.

![Opciones de HTTP Play](https://cdn.cesbo.com/help/astra/delivery/http-hls/http-play/options.png)

- `Allow HTTP access to all streams` - esta opción permite habilitar el acceso a los canales con el protocolo HTTP MPEG-TS
- `Allow HLS access to all streams` - esta opción permite habilitar el acceso a los canales con el protocolo HLS

:::caution
El protocolo HLS desactiva el inicio de transmisiones a pedido y los canales funcionarán de manera permanente. Además, el protocolo HLS utiliza una gran cantidad de RAM, aproximadamente 4 MB por cada 1 Mbit.
:::

- `HTTP play port` - este parámetro te permite asignar un puerto que se utilizará para transferir la lista de reproducción y los flujos de medios. Se utiliza para separar la interfaz web y la lista de reproducción.
- `Disable TLS on HTTP Play port` - esta configuración desactiva el uso de HTTPS para esta lista de medios
- `Path to TV logos` - el parámetro se usa para especificar la ruta al directorio con los archivos de logotipos
- `Custom name for playlist` - el parámetro renombra `playlist.m3u8` a un nombre arbitrario
- `Playlist arrange` - esta opción te permite seleccionar una categoría para agrupar canales. Puedes configurar grupos en Configuración → Grupos
- `playlist.m3u8` - este es un enlace a la lista de reproducción de los canales. Puedes usar la lista de reproducción en dispositivos móviles, computadoras, televisores o decodificadores. Puedes agregar detalles de autenticación a la lista de reproducción, por ejemplo, `https://your-server/playlist.m3u8?token=xxx`. [Leer más](/en/astra/delivery-http/playlist/)

:::caution
Por defecto, la autenticación de acceso está desactivada. Sin autenticación, el acceso a los canales no está restringido, lo que permite que cualquier persona pueda acceder potencialmente al contenido. Para restringir el acceso a tus canales, considera activar la Autorización de Acceso o utilizar un Firewall del Sistema para limitar el acceso a tu servidor. Esto ayudará a garantizar que tu contenido permanezca seguro y accesible solo para usuarios autorizados.
:::

## Logotipo del Canal

Al agregar logotipos a tus listas de reproducción de canales, brindas a tus espectadores una experiencia más atractiva y fácil de usar. Los logotipos ayudan a los usuarios a identificar rápidamente sus canales favoritos y hacer que la navegación a través de la lista de reproducción sea más eficiente.

Con la opción "Path to TV logos", puedes especificar la ubicación del directorio de imágenes en tu servidor. Astra carga imágenes con el mismo nombre que el nombre del canal y agrega el logotipo a la información de la lista de reproducción.

1. Crea un directorio: `/var/lib/astra/tvg-logo`
2. En el campo `Path to TV logos`, establece la ruta completa a este directorio: `/var/lib/astra/tvg-logo`
3. Guarda los logotipos de los canales en el directorio. Usa el mismo nombre de archivo que el nombre del canal, por ejemplo: `Travel Channel.png`