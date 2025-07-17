---
title: "OTT Archive"
date: 2023-02-24
sidebar:
    order: 1
---

Alta OTT Archive es un almacenamiento para contenido multimedia en el servidor local o remoto.

## Tiempo de Acceso

El reproductor de medios accede al archivo mediante el enlace con el atributo de tiempo de inicio. El tiempo de inicio puede definirse en dos formatos:

- Tiempo absoluto: el formato unix-timestamp es un número de segundos desde el 1 de enero de 1970 a las 00:00:00 UTC;
- Tiempo relativo: tiempo en segundos desde el tiempo actual. Por ejemplo: -600 - 10 minutos, o -300 - hace 5 minutos.

## Modo de Transmisión

En el modo de Transmisión el reproductor recibe datos parcialmente de acuerdo con el tiempo de visualización.

Por ejemplo, para comenzar a recibir un archivo multimedia desde el 1 de diciembre de 2022 a las 02:00:00, la URL de solicitud debería ser:

```
https://example.com/channel-path/index.m3u8?start=1669860000
```

- `start` - tiempo absoluto o relativo del inicio del archivo.

## Modo de Video Bajo Demanda

El modo de Video Bajo Demanda (VOD) proporciona acceso al archivo completo en el rango de tiempo solicitado.

Por defecto, este modo no está activo por razones de seguridad. Para habilitarlo, configure un nombre de lista de reproducción en la opción Acceso VOD en la configuración del canal. Por ejemplo, el nombre de la lista de reproducción es vod. Para obtener el archivo completo desde el 1 de diciembre de 2022 a las 02:00:00 hasta el 1 de diciembre de 2022 a las 03:00:00, la URL de solicitud debería ser:

```
https://example.com/channel-path/vod.m3u8?start=1669860000&duration=3600
```

- `start` - tiempo absoluto o relativo del inicio del archivo;
- `duration` - duración del archivo en segundos;