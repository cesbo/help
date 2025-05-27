---
title: "Configuración de la copia de seguridad del flujo"
date: 2023-08-14
sidebar:
    order: 13
---

Configure el comportamiento de redundancia para conmutar automáticamente las entradas de flujo en caso de fallo.

![Opciones de copia de seguridad](https://cdn.cesbo.com/help/astra/admin-guide/stream/backup.png)

- `Backup Type` - Tipo de comportamiento de redundancia. Predeterminado: Copia de seguridad activa
- `Initial Delay` - Retraso en segundos antes de iniciar la siguiente entrada tras el inicio del flujo. Por defecto: 5 para UDP o SRT; 10 para HLS, HTTP MPEG-TS o RTSP; 120 para DVB.
- `Start Delay` - Retraso en segundos antes de iniciar la siguiente entrada. Predeterminado: 5
- `Return Delay` - retardo del respaldo activo en segundos para volver a la entrada anterior

El analizador integrado supervisa continuamente la entrada activa y, si detecta un fallo, cambia inmediatamente a una entrada alternativa.

## Copia de seguridad activa[](/es/astra/admin-guide/backup#active-backup)

El comportamiento por defecto es Respaldo activo. En caso de fallo, Astra cambia a la siguiente entrada mientras sigue analizando las entradas anteriores para un posible retorno.

Si todas las entradas fallan, Astra continuará transmitiendo la última entrada disponible. Para detener el streaming, existe una opción adicional para el tipo de copia de seguridad: "Copia de seguridad activa y detener el streaming si todas las entradas están inactivas"

## Copia de seguridad pasiva[](/es/astra/admin-guide/backup#passive-backup)

En caso de fallo, Astra pasa a la siguiente entrada y detiene la anterior. Si falla la última entrada, Astra volverá automáticamente a la primera entrada

## Copia de seguridad desactivada[](/es/astra/admin-guide/backup#disabled-backup)

En caso de fallo, Astra no hace nada. Este método es adecuado para conmutar manualmente las entradas mediante la Interfaz Web o los métodos de la API.

Más información en [Stream API > Conmutar entrada activa](/es/astra/admin-guide/stream#switch-active-input)
