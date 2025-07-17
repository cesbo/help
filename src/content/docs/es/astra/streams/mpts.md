---
title: "MPTS: General Settings"
sidebar:
    order: 21
---

MPTS (Stream de Transporte de Múltiples Programas) te permite agrupar múltiples canales de TV en un solo flujo. Esto es útil cuando necesitas enviar varios canales juntos a equipos de transmisión o redes de cable.

Por ejemplo, en lugar de enviar el Canal 1, Canal 2 y Canal 3 como flujos separados, el MPTS los combina en un solo flujo que transporta los tres canales.

## Creación de un Stream MPTS

Para crear un flujo MPTS:

1. Ve al Panel de Control principal
2. Haz clic en `Nuevo Stream` en la esquina superior derecha
3. Marca la casilla `Stream de Múltiples Programas`
4. Configura los ajustes a continuación

## General

La pestaña General contiene los ajustes básicos para tu flujo MPTS.

![Opciones Generales](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/general.png)

### Ajustes Básicos

- `Habilitar`: Activar o desactivar el flujo MPTS
- `Nombre`: Dale un nombre a tu flujo MPTS para identificarlo en la interfaz
- `ID`: Generado automáticamente al guardar (campo opcional)

### Ajustes de Ubicación

- `País`: Código de país donde se aplica el desfase horario local. Se usa para el ajuste correcto de la hora en transmisiones regionales. Usa el formato [ISO 3166-1 alfa-3](https://es.wikipedia.org/wiki/ISO_3166-1_alpha-3)
- `Desfase de UTC`: Configura el desfase de zona horaria respecto a UTC (-720 a +780 minutos). Esto ayuda a que los televisores ajusten la hora correctamente de forma automática

### Ajustes de Red

- `ID de Red`: Número único para tu red DVB (predeterminado: 1)
- `Nombre de Red`: Nombre para tu red DVB
- `Nombre del Proveedor`: Nombre de tu empresa u organización (se muestra cuando los usuarios buscan canales)
- `Página de Códigos`: Codificación de caracteres para el texto. Usa Latin (ISO 6937) para inglés

### Identificadores de Stream

- `TSID`: ID de Stream de Transporte - número único para este flujo (predeterminado: 1)
- `ONID`: ID Original de Red - identifica la red original. Debe ser el mismo para todos los flujos en tu red (predeterminado: 1)

## Lista de Entradas

La Lista de Entradas define qué flujos (Canales de TV) se combinarán en tu salida MPTS. Cada entrada representa un canal único que deseas incluir en el flujo multicanal final.

![Lista de Entradas](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/input.png)

### Gestión de Entradas

- `Nueva Entrada`: Añadir un nuevo flujo a tu flujo MPTS
- `Reordenar (↑↓)`: Cambiar el orden de los canales en la lista
- `Configuración (⚙)`: Configurar ajustes individuales de cada canal como la URL de origen y el número de programa

### Ajustes Importantes

Cada flujo de entrada necesita identificadores únicos para evitar conflictos:

- `PIDs Únicos`: Cada canal debe tener diferentes identificadores de paquetes. Por defecto, Astra asigna PIDs únicos automáticamente
- `Números de Programa`: Asigna números de programa únicos usando la opción `set_pnr=`

**URLs de entrada de ejemplo:**

```
udp://225.1.1.27:1234#set_pnr=11
udp://225.1.1.28:1234#set_pnr=12
udp://225.1.1.29:1234#set_pnr=13
```

Esto crea tres canales con números de programa 11, 12 y 13 respectivamente.

### Usar Streams desde Astra

También puedes usar flujos existentes desde Astra como entradas para tu flujo MPTS. Esto te permite usar canales que ya están configurados y preparados para MPTS.

Usa el formato de URL `stream://` y especifica el ID del flujo que quieres incluir.

**URL de entrada de ejemplo:**

```
stream://a123
```

Así será el flujo de trabajo de ejemplo:

- Flujos SPTS utilizados para recibir canales desde fuentes externas (como UDP o DVB), prepararlos para transmisión (por ejemplo, establecer números de programa, PIDs, filtros, etc.)
- El flujo MPTS combina estos flujos SPTS en una sola salida multicanal

## Lista de Salidas

La Lista de Salidas define a dónde se enviará tu flujo MPTS. Después de combinar múltiples canales en un solo flujo MPTS, necesitas especificar el(los) destino(s) donde se debe entregar este flujo combinado.

![Lista de Salidas](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/output.png)

### Gestión de Salidas

- `Nueva Salida`: Añadir un nuevo destino para tu flujo MPTS
- `Configuración (⚙)`: Configurar ajustes de salida como URL de destino, bitrate constante, y otros parámetros

### Tipos Comunes de Salida

Tu flujo MPTS puede ser enviado a varios destinos:

- `Multicast UDP`: Enviar a dispositivos de red u otros servidores de streaming
- `Hardware`: Enviar a equipos de transmisión

Más información sobre configuraciones de moduladores DVB:

- [Modulador DVB-C DigitalDevices RESI](/en/astra/delivery-broadcast/resi-dvb-c-modulator/)
- [Modulador TBS DVB-C](/en/astra/delivery-broadcast/tbs-dvb-c-modulator/)
- [Modulador HiDes DVB-T](/en/astra/delivery-broadcast/hides-dvb-t-modulator/)