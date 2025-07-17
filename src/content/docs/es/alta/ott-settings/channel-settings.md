---
title: Channel Settings
date: 2023-02-24
sidebar:
    order: 7
---

Un canal es un flujo de medios que puede contener un único flujo de video, o no contener video en absoluto, junto con cualquier número de flujos de audio o sin audio. Los canales se utilizan comúnmente para transmitir programas de televisión, eventos en vivo, transmisiones de cámaras de seguridad y otros contenidos multimedia.

![Opciones del Canal](https://cdn.cesbo.com/help/alta/ott-settings/channels/channel-settings/options.png)

Cada canal tiene un ID único. Por ejemplo, `travel-tv/1080p`, donde:

- `travel-tv` - es la ruta base del canal
- `1080p` - es el nombre de la variante del canal

## Ruta Base

La ruta base del canal es la ubicación de los recursos del canal en el servidor. En el ejemplo anterior, la ruta base del canal es travel-tv:

- La URL de HLS será `https://example.com/travel-tv/index.m3u8`;
- El archivo local estará en `/opt/storage/travel-tv`.

La ruta base puede estar anidada, por ejemplo: `parent-directory/travel-tv`.

## Nombre de Variante

Cesbo Alta puede entregar video en múltiples variantes con diferentes calidades. Esta función se llama Multibitrate. Para crear un canal multibitrate, se deben crear varios canales con la misma ruta base y diferentes nombres de variante. Por ejemplo:

- `travel-tv/1080p` - para la variante HD
- `travel-tv/480p` - para la variante SD

Como resultado, el canal estará disponible a través de HLS en la misma dirección: `https://example.com/travel-tv/index.m3u8`. Esta lista contiene enlaces a todas las variantes, y el reproductor multimedia elige automáticamente la mejor variante en función del ancho de banda disponible del espectador y de las capacidades del dispositivo. Esto proporciona una experiencia de reproducción más fluida con menos almacenamiento en búfer y mayor calidad de video.

## Dirección

:::caution
este es un campo temporal y será eliminado en futuras versiones
:::

La dirección fuente admite los siguientes protocolos:

- `UDP`
- `HTTP` y `HTTPS`
- `RTSP`

## Archivo y Duración

- **Archivo** - seleccionar el archivo donde se almacenará el canal
- **Duración** - definir la duración del archivo en horas. Por defecto se utiliza la duración en las opciones de archivo

## Acceso HLS

- **Acceso a Medios** - de forma predeterminada, la lista de reproducción de Medios HLS solo es accesible a través de la lista de reproducción de Índice HLS. Esta opción define un nombre permanente para el archivo de la lista de reproducción de Medios HLS
- **Acceso VOD** - establece un nombre permanente para la lista de reproducción HLS VOD (Video Bajo Demanda)
- **Índice** - nombre personalizado para la lista de reproducción de Índice HLS. Por defecto es `index`