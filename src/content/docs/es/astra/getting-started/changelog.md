---
title: Changelog
description: Release notes and feature updates for recent Astra versions
noindex: true
sidebar:
    order: 100
---

## 250221

[Descargar Astra-250221](https://cdn.cesbo.com/astra/builds/astra-250221)

### SRT

- La biblioteca SRT se ha degradado a la versión v1.4.3 debido a la pérdida de paquetes y errores de CC
- La entrada SRT reinicia automáticamente las conexiones cuando la tasa de bits cae a cero

### DVB

- Opción `restart_adapter` para reiniciar el adaptador DVB con el analizador de canales. Cuando el canal recibe una transmisión con errores, envía un comando para reiniciar el adaptador.
- Se solucionó el fallo al iniciar DVB desde scripts de Lua
- SAT>IP envía opciones al servidor SAT>IP para Multistream/PLS

### UDP

- Solucionada la tormenta de registros con el mensaje "UDP recv buffer overflow"
- Se añadió la opción `join` para la salida UDP para enviar solicitud de unión Multicast (requerida por algunos switches de red)
- Se añadió la opción `ts_size=204` para MPEG-TS con paquetes de 204 bytes (flujos ISDB-T en Brasil y Japón)

### MPEG-TS

- Corregido el remapeo para paquetes AIT

### Interfaz Web

- Enlaces a listas de reproducción m3u con diferentes fuentes (HLS, HTTP MPEG-TS, UDP): Configuración → HTTP Play

## 241024

[Descargar Astra-241024](https://cdn.cesbo.com/astra/builds/astra-241024)

### SRT

- Biblioteca SRT actualizada a la versión v1.5.3
- Sesiones para salida SRT en modo de escucha
- Refactorización de salida SRT, mejor estabilidad, corregida fuga de memoria
- Opciones `streamid` para entrada SRT

### Modulador DVB-T TBS

- Soporte para tarjeta moduladora cuádruple TBS6104 DVB-T

### HLS

- La salida HLS pasa marcadores SCTE-35
- La entrada HLS corrige el Contador de Continuidad si comienza desde 0 en cada segmento

### MPEG-TS

- Soporte para texto codificado con UTF-16, ISO/IEC 10646 BMP en las tablas EIT y SDT
- Deja de generar PSI si no hay datos en la entrada

### Interfaz Web

- Iconos para adaptadores virtuales DVB
- Corrección del estado y tasa de bits para adaptador SAT>IP en la interfaz web
- Corrección de recarga web al reconectar
- Corrección de eliminación de servidores en la interfaz web
- Botón de cierre de sesión
- Pestañas para Configuración → General

### Cambios Internos

- Siguen moviendo código de scripts de Lua al núcleo de Astra: métodos API para estado de flujo, reporte de flujo, listas de reproducción, procesamiento JSON y otros

## 230719

[Descargar Astra-230719](https://cdn.cesbo.com/astra/builds/astra-230719)

En este registro de cambios hay una breve comparación con la última versión estable 220504

### SRT

- Biblioteca SRT actualizada a la versión v1.5.1
- Opción `statsout=FILE` para escribir estadísticas de recepción/transmisión SRT en el archivo CSV. Este archivo se puede procesar usando https://github.com/mbakholdina/srt-stats-plotting.
- Soporta el formato de dirección estándar, como `srt://example.com?passphrase=12345`.
Si su dirección contiene el símbolo # en la opción streamid, debe cambiarse a `%23`. Por ejemplo: `srt://example.com?streamid=%23!::r=LaminorTV,m=request`
- Mejor estabilidad de recepción
- Opción `oheadbw` - ancho de banda de recuperación por encima de la tasa de entrada. Por defecto: `25`
- Opciones `sndbuf` y `rcvbuf` para ajustar el tamaño del búfer de transmisión y recepción

### Adaptadores Virtuales DVB

Los adaptadores virtuales son una opción en la configuración del adaptador para configurar fácilmente flujos:
- Flujos MPTS: puede definir la dirección del flujo MPTS y escanearlo para agregar todos los canales por separado. [Lea más](/en/astra/receiving-udp/mpts-via-udp/)
- Adaptador CI: puede configurar la decodificación de canales con adaptadores CI externos como DigitalDevices Octopus Twin CI o TBS6900. [Lea más](/en/astra/adapters/external-ci/)
- Adaptador SAT>IP: este es el reemplazo para la casilla SAT>IP en versiones anteriores. [Lea más](/en/astra/receiving/satip-client/)
- SAT>IP: aumentar el tamaño del búfer de recepción
- SAT>IP: más registro de errores de conexión HTTP

### Sintonizadores DVB y Entrada DVB

- Para adaptadores multiestándar disponible opción para selección manual de frontend - `fe_device`. Esto se puede encontrar en la interfaz web: Opciones del adaptador → Avanzado → Dispositivo FE
- Escanear adaptadores DVB antes de iniciar Astra

### Modulador DigitalDevices RESI

- Corregir opciones `gain` y `attenuator` para los últimos drivers
- Tamaño de búfer por defecto aumentado a 64Mb
- Restablecer RESI antes de iniciar

### HTTP/HLS

Entrada:

- La entrada HLS soporta M3U8 con URLs sin esquema. Por ejemplo: `//example.com/media/001.ts`
- Sincronización de bitrate por marcas de tiempo DTS/PTS en lugar de PCR. (muchos flujos HLS tienen valores de PCR corruptos)

Salida:

- Algoritmos de autorización reescritos para un mejor rendimiento (movidos de scripts de Lua al núcleo C)
- Autorización del backend HTTP soporta redirecciones
- Revisar lista de IP en la autorización HTTP antes de otros métodos
- La salida HLS envía un archivo TS vacío si el archivo no se encuentra (anteriormente error 404, pero algunos reproductores basados en ffplay envían muchas solicitudes tratando de recargarlo)
- Opción Configuración → HLS → Tiempo de Espera de Sesión para personalizar el tiempo cuando la sesión debe cerrarse por inactividad

### UDP

- Ignorar archivos TS inválidos en la Entrada (versiones anteriores reiniciaban la recepción)
- Opción `src=IP` para especificar la dirección fuente de UDP multicast para IGMPv3. Ejemplo: `udp://eth1@239.255.1.1:1234#src=192.168.88.100`

### MPTS

- Cambiar tipo EIT con la opción `remux_eit` habilitada. Si el tsid de EIT no es igual a la opción `tsid` definida en la configuración de MPTS, entonces el tipo EIT se cambiará de `actual` a `otro`

### Procesamiento

- Opción `set_pcr_pid` para cambiar el pid de PCR si está separado del video
- T2MI corregir problema con errores de CC en algunos flujos

### Monitoreo

- Opción `interval=SEC` para dirección InfluxDB para definir intervalos de envío. Por defecto es 60 segundos. Por ejemplo: `https://example.com:8086#interval=5`
- `app_mem_kb` en la [API de estado del proceso](/en/astra/api/process/). Uso de memoria del proceso en kilobytes
- `video_count` y `audio_count` en la [API de estado del flujo](/en/astra/api/stream/)

### Maestro-Esclavo

- Opción `delay` para modo esclavo para iniciar el proceso con retraso. Por defecto 3 segundos. Ejemplo: `astra -c slave.conf -p 8000 --slave "http://master:8000#delay=10"`

### Interfaz Web

- Icono
- Interfaz Web de `als.cesbo.com` integrada en el archivo binario de Astra (`als.cesbo.com` ya no se usa)
- Opción para establecer una ruta personalizada a la interfaz web. Esto se puede encontrar en Configuración → General → Ruta Personalizada. Por ejemplo, con la ruta `secret`, la interfaz estará disponible en `http://example.com:8000/secret/`
- Opción para modificar el puerto para la interfaz web. Esto se puede encontrar en Configuración → General → Puerto Personalizado. Esta opción personaliza el valor de puerto definido en la opción `-p`. También soporta dirección de interfaz local, como `127.0.0.1:8000` - la web estará disponible solo en localhost
- Opción Configuración → HTTP Play → Ruta a Capturas de Pantalla de TV - adjuntar capturas de pantalla de canales a las tarjetas en el panel de control
- Descripción para el canal
- Diálogos modales para configurar ajustes de flujo y adaptador

### Cambios Internos

- Se movió mucho código de scripts de Lua al núcleo de Astra para mejor rendimiento
- Astra verifica el puerto para la API y la interfaz Web para prevenir la ejecución dos veces del mismo proceso
- Actualizar OpenSSL a v1.1.1t
- Integrar LibUV v1.44.2 (preparación para cambiar del procesamiento de eventos interno a libuv)

## Versiones Archivadas

- [241024](https://cdn.cesbo.com/astra/builds/astra-241024)
- [230719](https://cdn.cesbo.com/astra/builds/astra-230719)
- [230307](https://cdn.cesbo.com/astra/builds/astra-230307)
- [220504](https://cdn.cesbo.com/astra/builds/astra-220504)