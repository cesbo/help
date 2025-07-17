---
title: "Stream: Backup Settings"
sidebar:
    order: 14
---

Configure el comportamiento de redundancia para cambiar automáticamente las entradas de stream en caso de fallo.

![Stream: Formulario para Configuración de Respaldo](https://cdn.cesbo.com/help/astra/admin-guide/stream/backup.png)

- `Backup Type`: tipo de comportamiento de redundancia. Predeterminado: Active Backup
- `Initial Delay`: retraso en segundos antes de comenzar la siguiente entrada después de que se haya iniciado el stream. Predeterminado: 5 para UDP o SRT; 10 para HLS, HTTP MPEG-TS o RTSP; 120 para DVB
- `Start Delay`: retraso en segundos antes de comenzar la siguiente entrada. Predeterminado: 5
- `Return Delay`: retraso en segundos para Active Backup al regresar a la entrada anterior

El analizador incorporado monitorea continuamente la entrada activa, y si se detecta una falla, cambia inmediatamente a una entrada alternativa.

## Active Backup

El comportamiento predeterminado es Active Backup. En caso de fallo, Astra cambia a la siguiente entrada mientras sigue analizando las entradas anteriores para un posible regreso.

Si todas las entradas fallan, Astra continuará transmitiendo la última entrada disponible. Para detener la transmisión, hay una opción adicional disponible para el Tipo de Respaldo: "Active Backup and Stop streaming if all inputs are inactive"

## Passive Backup

En caso de fallo, Astra cambia a la siguiente entrada y detiene la entrada anterior. Si la última entrada falla, Astra cambiará automáticamente de nuevo a la primera entrada.

## Disabled Backup

En caso de fallo, Astra no hace nada. Este método es adecuado para cambiar las entradas manualmente utilizando la Interfaz Web o métodos API.

Lee más en [Stream API → Cambiar entrada activa](/en/astra/api/stream/#switch-active-input)