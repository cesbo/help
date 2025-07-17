---
title: URL Format for HLS
---

## Estructura de URL

- **Ruta base**: `/<channel_name>` (por ejemplo, `/discovery`)
- **Ruta de variante** (multi-bitrate): `/<channel_name>/<variant>` (por ejemplo, `/discovery/1080p`)

Extensiones de archivo:

- `index.m3u8`: Punto de acceso principal tanto para contenido en vivo como bajo demanda, también conocido como la lista de reproducción maestra.
- `/<channel_name>/<variant>/<session_id>.m3u8`: Lista de reproducción específica de la sesión para los segmentos de medios.
- `/<channel_name>/<variant>/<name>.ts`: Archivos de segmento de medios en formato MPEG-TS.

## Acceso Estándar (index.m3u8)

Esta es la forma principal de acceder al contenido HLS. Funciona tanto para transmisión en vivo como para contenido archivado.

### Contenido en Vivo

Transmitir contenido en vivo actual:

```
/<channel_name>/index.m3u8
```

### Contenido Archivado

Acceder al contenido del archivo con parámetros de tiempo:

```
/<channel_name>/index.m3u8?start=<time>&duration=<sec>
```

**Parámetros**:
- **start**: Cuándo comenzar la reproducción
  - Reciente: `-300` (hace 5 minutos)
  - Tiempo específico: `1747485787` (marca de tiempo Unix)
- **duration**: Cuánto tiempo reproducir (en segundos)

**Ejemplos**:
- `/discovery/index.m3u8?start=-300` - Últimos 5 minutos
- `/discovery/index.m3u8?start=1747485787&duration=40` - 40 segundos desde un tiempo específico

## Acceso Directo (Opcional)

El acceso directo omite la autenticación y las sesiones. Use esto cuando Alta actúe como un backend y su aplicación maneje el acceso del usuario.

**Nota**: Esto está deshabilitado por defecto. Habilítelo en [Configuración del Canal](../channel-settings/) bajo opciones de Acceso a Medios.

### Acceso Directo en Vivo

Configure un nombre para la lista de reproducción de medios en Configuración del Canal. Si usa `media`:

```
/<channel_name>/<variant>/media.m3u8
```

### Acceso Directo al Archivo

Configure un nombre para la lista de reproducción VOD en Configuración del Canal. Si usa `vod`:

```
/<channel_name>/<variant>/vod.m3u8?start=<time>&duration=<sec>
```

Utilice los mismos parámetros de tiempo que para el acceso estándar arriba.