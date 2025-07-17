---
title: Changelog
sidebar:
    order: 100
---

## 250716

[Descargar Alta-250716](https://cdn.cesbo.com/alta/builds/alta-250716)

### Almacenamiento

- Cambio automático a grabación circular en caso de espacio en disco bajo
- Corregir problema con las estadísticas de almacenamiento en la interfaz web
- Emular Flussonic para acceder al almacenamiento desde aplicaciones de terceros

### Receptores

- Transmitir desde archivo en bucle sin interrupciones
- Corregir fallo al apagar el receptor

### HLS

- Duración y cantidad de segmentos HLS configurables
- Tiempo de espera configurable para cerrar sesiones pausadas
- Corregir uso elevado de memoria en sesiones activas numerosas

### Interfaz y API

- Mejor API para importar canales y receptores
- Corregir problema con el fondo de las tarjetas en tema oscuro

## 250603

[Descargar Alta-250603](https://cdn.cesbo.com/alta/builds/alta-250603)

### Interfaz

- Guía breve sobre cómo restablecer la contraseña en la página de inicio de sesión
- Solucionado problema con la máscara de red en la configuración de autenticación IP

### Receptores

- Mejor estabilidad en la recepción - puede manejar muchos errores en el flujo sin detener el receptor
- Si el receptor deja de funcionar, el último fotograma de vídeo completo sigue siendo entregado — el flujo no se interrumpe en el reproductor y se reanudará automáticamente cuando la fuente regrese

### Canales

- Pausa - El reproductor puede pausar el canal y continuar la reproducción desde la última posición. En caso de un canal en vivo, continuará la reproducción desde el archivo (si está habilitado).

### Aplicación Base

- Pequeñas correcciones para el comando `alta init`
- Corregir problemas con el bloqueo de la aplicación en el receptor UDP y reinicio de la aplicación después del bloqueo
- Copia de seguridad de la configuración al realizar cambios

## 250314

[Descargar Alta-250314](https://cdn.cesbo.com/alta/builds/alta-250314)

### Interfaz

- Barra de filtros para canales, receptores y panel de control
- Exportación de configuración

### Canales

- Corregido problema con interrupciones de recepción debido al manejo de PTS/DTS
- Registro mejorado para errores de PTS/DTS y monitoreo de desmultiplexación
- Añadido DirectIO para operaciones de escritura de archivos

### Importante refactorización de configuración

- Eliminadas opciones `Media Access` y `VOD Access` de la configuración de canales
- Opciones `Media Enable` y `VOD Enable` ahora disponibles en la configuración de Channels -> HLS Access. Utilice estas opciones solo si desea acceder al contenido sin sesiones y autenticación (por ejemplo, si usa Alta como un backend)
- Acceso a la lista de reproducción VOD a través de `index.m3u8` sin opciones adicionales: `http://your-server/channel-path/index.m3u8?start=unix-timestamp&duration=minutes`

## 250205

[Descargar Alta-250205](https://cdn.cesbo.com/alta/builds/alta-250205)

### Panel de control

- Resumen de Canales y Receptores
- Al hacer clic en la tarjeta del canal se puede ver: bitrate para cada variante, uso de almacenamiento y sesiones activas

![Dashboard](https://cdn.cesbo.com/help/alta/admin-guide/changelog/250205_ui_dashboard.png)

### Receptores

- Reinicio del receptor en caso de error al recibir medios

### Canales

- HLS multibitrate, se pueden agregar múltiples variantes para cada canal
- La opción "Media Enable" ahora es una casilla de verificación simple para habilitar acceso directo a la lista de reproducción de medios. URL predeterminada a la lista de reproducción de medios será: `http://your-server/channel-path/variant-name/media.m3u8`
- La opción "VOD Enable" ahora es una casilla de verificación simple para habilitar acceso directo a la lista de reproducción VOD. URL predeterminada a la lista de reproducción VOD será: `http://your-server/channel-path/variant-name/vod.m3u8?start=unix-timestamp&duration=minutes`

![Channel Variants](https://cdn.cesbo.com/help/alta/admin-guide/changelog/250205_ui_variants.png)

### Catchup

- Catchup proporciona a un reproductor multimedia (como Kodi, Televizo) información sobre cómo acceder al contenido multimedia desde el almacenamiento.
- Si el almacenamiento está configurado para el canal, se agregarán las opciones de catchup a la lista de reproducción exportada.
- Puede configurar la opción `tvg_id` en la configuración del canal para vincular el canal con los datos xmltv relacionados.

### RTSP

- RTSP ahora soporta cámaras IP con el códec h.265

### Otros

- Mejor rendimiento y gestión de memoria.

## 241210

:::danger
¡Esta versión tiene cambios significativos!

Antes de actualizar, por favor guarde una copia de su archivo de configuración.
El archivo de configuración predeterminado se encuentra en `/etc/alta/alta.conf`
:::

[Descargar Alta-241210](https://cdn.cesbo.com/alta/builds/alta-241210)

### Receptores

- Corregir problema con la recepción RTSP para la mayoría de las cámaras h.264
- Receptores separados de los canales. En futuras actualizaciones, la lista de receptores también se utilizará para el monitoreo conveniente de todas las fuentes

![Receptores](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_receiverlist.png)

- Importar receptores de la lista de reproducción m3u

![Import M3U](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_import_m3u.png)

### Canales

- Nueva interfaz de canales con estadísticas sobre el uso del almacenamiento. Puede ver cuánto espacio en disco está ocupado por el archivo para cada canal

![Canales](https://cesbo.b-cdn.net/help/alta/admin-guide/changelog/ui_ott_channellist.png)

- Exportar canales a la lista de reproducción m3u

![Export M3U](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_export_m3u.png)

### Sesiones

- Nueva interfaz de sesiones con sesiones activas

![Sesiones](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_sessions.png)

### Almacenamiento

- Nueva interfaz para el almacenamiento con información sobre el uso del almacenamiento

![Almacenamiento](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_ott_storagelist.png)

### Otros cambios

- Acciones de grupo con canales y receptores

![Acciones de Grupo](https://cdn.cesbo.com/help/alta/admin-guide/changelog/ui_group_action.png)

## 240909

[Descargar Alta-240909](https://cdn.cesbo.com/alta/builds/alta-240909)

### Receptores

- Arreglado error con la sincronización de audio
- Soporte para códec de audio EAC3
- Proporcionar información con el nombre de la transmisión en las transmisiones de salida
- Arreglada dirección RTSP en la configuración del canal

### Servidor HTTP

- Se reemplazó el servidor HTTP personalizado con el motor HTTP más rápido para Go: [Fiber](https://gofiber.io/)