---
title: "Stream: Advanced Settings"
sidebar:
    order: 16
---

- `Enable monitoring`: analizar el estado del flujo y enviar informes al sistema de monitoreo
- `Channel Number`: opción utilizada para ordenar los canales en la lista de reproducción
- `Start stream on demand`: Astra esperará una solicitud entrante para iniciar el flujo. Este modo está desactivado para canales con salidas UDP o HLS
- `Keep Active`: opción adicional para el modo bajo demanda. Por defecto, cuando el último cliente cierra la conexión, Astra apaga el canal. Esta opción permite que el canal permanezca activo durante algún tiempo
- `HLS Header`: información personalizada del flujo HLS para el `EXT-X-STREAM-INF`