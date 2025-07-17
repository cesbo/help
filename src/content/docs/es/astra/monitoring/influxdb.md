---
title: "Integration Astra with InfluxDB"
date: 2023-03-23
sidebar:
    order: 3
---

InfluxDB es una base de datos de series temporales de código abierto.

## Instalación

Descarga la última versión desde

1. Ve al sitio de InfluxDB: https://portal.influxdata.com/downloads/
2. Elige la última versión
3. Elige tu plataforma
4. Ejecuta los comandos desde las instrucciones en el sitio de InfluxDB

Encuentra más información en el sitio oficial: https://docs.influxdata.com/influxdb/latest/

InfluxDB es una base de datos de series temporales de código abierto.

## Configuración de InfluxDB

Abre la interfaz de administración de InfluxDB en `http://db-server:8086`.

Primero, crea un nuevo bucket. Un bucket sirve como almacenamiento para todos los datos recibidos de Astra. Puedes encontrar los buckets en la barra lateral izquierda bajo el grupo "Load Data". Para crear un nuevo bucket:

1. Haz clic en `Create Bucket`
2. Establece el nombre del bucket, por ejemplo, `astra`
3. Configura la retención de datos: en la sección `Delete Data`, selecciona `Older than` y elige 30 días o cualquier otro valor que prefieras.

El siguiente paso es otorgar acceso a Astra al bucket. En la barra lateral izquierda bajo el grupo `Load Data`, abre `API Tokens`:

1. Haz clic en `Generate API Token` y elige `Custom API Token.`
2. Establece la descripción del token como `astra`
3. En el grupo de Bucket, establece los permisos de Lectura y Escritura para el bucket `astra`.
4. Haz clic en `Generate`

Ahora, InfluxDB está configurado y listo para recibir datos.

## Configuración de Astra

Abre Configuración → General en la Interfaz Web de Astra. Configura las opciones para la configuración de InfluxDB:

- `Instance Name` - por defecto es `astra` y se usará como bucket en InfluxDB
- `InfluxDB Address` - dirección de InfluxDB: `http://db-server:8086`
- `InfluxDB Organization` - tu organización en la configuración de InfluxDB
- `InfluxDB Token` - pega tu token generado en el paso anterior
- Haz clic en "Apply & Restart"

## Estructura de datos de InfluxDB

### Stream (Flujo)

Medición: `stream`

Etiquetas:

- `id` - identificador único del flujo
- `name` - nombre del flujo

Datos:

- `active` - `true` si el flujo está activo, o `false` si el flujo funciona bajo demanda y está inactivo
- `onair` - `true` si la entrada activa funciona sin errores
- `sessions` - uint, número de sesiones
- `bitrate` - uint, bitrate del flujo en KBit/s
- `sc_error` - uint, porcentaje de paquetes TS codificados erróneamente
- `cc_error` - uint, contador de errores CC
- `pes_error` - uint, porcentaje de paquetes PES inválidos
- `sync_error` - uint, errores de sincronización HTTP/HLS

### Adapter (Adaptador)

Medición: `adapter`

Etiquetas:

- `id` - identificador único del adaptador
- `name` - nombre del adaptador

Datos:

- `lock` - booleano, `true` si el sintonizador tiene bloqueo y puede recibir datos
- `signal` - uint, nivel de señal aproximado en porcentaje
- `signal_db` - flotante, nivel de señal en dBm
- `snr` - uint, relación señal-ruido aproximada en porcentaje
- `snr_db` - flotante, relación señal-ruido en dB
- `ber` - uint, contador de errores de bit
- `unc` - uint, contador de errores de bloque
- `bitrate` - bitrate total en Kbit/s

### Información del sistema

Medición: `sysinfo`

Datos:

- `la1` - flotante, carga promedio durante 1 minuto
- `la5` - flotante, carga promedio durante 5 minutos
- `la15` - flotante, carga promedio durante 15 minutos
- `threads` - uint, número de hilos
- `sys_cpu` - uint, uso total del CPU. Podría ser hasta: 100 multiplicado por el número de núcleos en todos los CPUs
- `app_cpu` - uint, uso de CPU por el proceso y todos los hilos
- `sys_mem` - uint, uso total de RAM
- `app_mem` - uint, uso de RAM por el proceso y todos los hilos
- `app_mem_kb` - uint, uso de RAM por el proceso y todos los hilos en kilobytes
- `sys_uptime` - uint, tiempo total del sistema en segundos
- `app_uptime` - uint, tiempo de actividad del proceso en segundos