---
title: "Integración Astra con InfluxDB"
date: 2023-03-23
---

InfluxDB es una base de datos de series temporales de código abierto.

## Instale[](https://help.cesbo.com/astra/monitoring/export/influxdb#install)

Descargue la última versión desde

1. Ir al sitio InfluxDB: [https://portal.influxdata.com/downloads/](https://portal.influxdata.com/downloads/)
2. Elija la última versión
3. Elija su plataforma
4. Ejecutar comandos a partir de las instrucciones del sitio InfluxDB

Más información en el sitio oficial: [https://docs.influxdata.com/influxdb/latest/](https://docs.influxdata.com/influxdb/latest/)

InfluxDB es una base de datos de series temporales de código abierto.

## Configuración de InfluxDB[](https://help.cesbo.com/astra/monitoring/export/influxdb#influxdb-configuration)

Abra la interfaz de administración de InfluxDB en `http://db-server:8086`.

En primer lugar, crea un nuevo bucket. Un bucket sirve para almacenar todos los datos recibidos de Astra. Encontrará los cubos en la barra lateral izquierda, en el grupo "Cargar datos". Para crear un nuevo cubo:

1. Haga clic en `Create Bucket`
2. Establezca el nombre del cubo, por ejemplo, `astra`
3. Establecer la conservación de datos: en el `Delete Data` seleccione `Older than` y elija 30 días o cualquier otro valor que prefiera.

El siguiente paso es conceder a Astra acceso al cubo. En la barra lateral izquierda, bajo el icono `Load Data` grupo, abierto `API Tokens`:

1. Haga clic en `Generate API Token` y elija `Custom API Token.`
2. Establezca la descripción del token como `astra`
3. En el grupo Bucket, establezca permisos de Lectura y Escritura para el grupo `astra` cubo.
4. Haga clic en `Generate`

Ahora, InfluxDB está configurado y listo para recibir datos.

## Configuración Astra[](https://help.cesbo.com/astra/monitoring/export/influxdb#astra-configuration)

Abra Configuración -> General en la interfaz web de Astra. Establece las opciones de configuración de InfluxDB:

- `Instance Name` - por defecto es `astra` se utilizará como bucket en InfluxDB
- `InfluxDB Address` - dirección de InfluxDB: `http://db-server:8086`
- `InfluxDB Organization` - su organización en la configuración de InfluxDB
- `InfluxDB Token` - pegue el token generado en el paso anterior
- Haga clic en "Aplicar y reiniciar".

## Estructura de datos de InfluxDB[](https://help.cesbo.com/astra/monitoring/export/influxdb#influxdb-data-structure)

### Corriente

Medición: `stream`

Etiquetas:

- `id` - identificador único de flujo
- `name` - nombre del flujo

Datos:

- `active` - `true` si el flujo está activo, o `false` si el flujo funciona a demanda e inactivo
- `onair` - `true` si la entrada activa funciona sin errores
- `sessions` - uint, número de sesiones
- `bitrate` - uint, tasa de bits del flujo en KBit/s
- `sc_error` - uint, porcentaje de paquetes TS codificados
- `cc_error` - uint, CC contador de errores
- `pes_error` - uint, porcentaje de paquetes PES no válidos
- `sync_error` - uint, errores de sincronización HTTP/HLS

### Adaptador

Medición: `adapter`

Etiquetas:

- `id` - identificador único del adaptador
- `name` - nombre del adaptador

Datos:

- `lock` - booleano, `true` si el sintonizador está bloqueado y puede recibir datos
- `signal` - uint, nivel aproximado de la señal en porcentaje
- `signal_db` - float, nivel de señal en dBm
- `snr` - uint, relación señal/ruido aproximada en porcentaje
- `snr_db` - float, relación señal/ruido en dB
- `ber` - uint, contador de errores de bit
- `unc` - uint, contador de errores de bloque
- `bitrate` - bitrate total en Kbit/s

### Información sobre el sistema

Medición: `sysinfo`

Datos:

- `la1` - float, carga media durante 1 minuto
- `la5` - float, carga media durante 5 minutos
- `la15` - float, carga media durante 15 minutos
- `threads` - uint, número de los hilos
- `sys_cpu` - uint, uso total de la CPU. Puede ser hasta 100 multiplicado por los números de núcleo en todas las CPUs
- `app_cpu` - uint, uso de CPU por el proceso y todos los hilos
- `sys_mem` - uint, uso total de RAM
- `app_mem` - uint, uso de RAM por el proceso y todos los hilos
- `app_mem_kb` - uint, uso de RAM por el proceso y todos los hilos en kilobytes
- `sys_uptime` - uint, tiempo total de actividad del sistema en segundos
- `app_uptime` - uint, tiempo de actividad del proceso en segundos
