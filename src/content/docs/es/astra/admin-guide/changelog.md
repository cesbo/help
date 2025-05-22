---
title: "Changelog"
noindex: true
sidebar:
    order: 5
---

## 250221

[Descarga Astra-250221](https://cdn.cesbo.com/astra/builds/astra-250221)

### SRT

- Biblioteca SRT degradada a v1.4.3 debido a errores de pérdida de paquetes y CC
- La entrada SRT reinicia automáticamente las conexiones cuando el bitrate cae a cero

### DVB

- Opción `restart_adapter` para reiniciar el adaptador DVB con el analizador de canales. Cuando el canal recibe una transmisión con errores, envía un comando para reiniciar el adaptador.
- Corregido fallo al iniciar DVB desde scripts Lua
- SAT>IP envía opciones al servidor SAT>IP para Multistream/PLS

### UDP

- Corregida tormenta de registros con mensaje "UDP recv buffer overflow"
- Añadida opción `join` para salida UDP para enviar solicitud Multicast Join (requerido por algunos switches de red)
- Añadida opción `ts_size=204` para MPEG-TS con paquetes de 204 bytes (transmisiones ISDB-T en Brasil y Japón)

### MPEG-TS

- Corregido remap para paquetes AIT

### Interfaz Web

- Enlaces a listas m3u con diferentes fuentes (HLS, HTTP MPEG-TS, UDP): Configuración -> HTTP Play

## 241024

[Descargar Astra-241024](https://cdn.cesbo.com/astra/builds/astra-241024)

### SRT

- Biblioteca SRT actualizada a la versión 1.5.3
- Sesiones para salida SRT en modo oyente
- Refactorización de salida SRT, mejor estabilidad, corregida fuga de memoria
- Opciones `streamid` para entrada SRT

### Modulador TBS DVB-T

- Soporte para la tarjeta moduladora cuádruple TBS6104 DVB-T

### HLS

- Salida HLS pasa marcadores SCTE-35
- Entrada HLS corrige el contador de continuidad si comienza desde 0 en cada segmento

### MPEG-TS

- Soporte para texto codificado con UTF-16, ISO/IEC 10646 BMP en las tablas EIT y SDT
- Detiene la generación de PSI si no hay datos en la entrada

### Interfaz Web

- Iconos para adaptadores virtuales DVB
- Corregir estado y bitrate para adaptador SAT>IP en la interfaz web
- Corregir recarga web al reconectar
- Corregir eliminación de servidores en la interfaz web
- Botón de cierre de sesión
- Pestañas para Settings -> General

### Cambios Internos

- Continúa el traslado de código desde scripts Lua al núcleo de Astra: Métodos API para estado del flujo, reporte del flujo, listas de reproducción, procesamiento JSON y otros

## 230719

[Descargar Astra-230719](https://cdn.cesbo.com/astra/builds/astra-230719)

En este registro de cambios hay una breve comparación con la última versión estable 220504

### SRT

- Biblioteca SRT actualizada a v1.5.1
- Opción `statsout=FILE` para escribir las estadísticas de recepción/transmisión de SRT en el archivo CSV. Este archivo se puede procesar con [https://github.com/mbakholdina/srt-stats-plotting](https://github.com/mbakholdina/srt-stats-plotting).
- Admite el formato de dirección estándar, como `srt://example.com?passphrase=12345`. Si su dirección contiene el símbolo # en la opción streamid, debe cambiarse a `%23`. Por ejemplo: `srt://example.com?streamid=%23!::r=LaminorTV,m=request`
- Mayor estabilidad de recepción
- opción `oheadbw` - sobrecarga del ancho de banda de recuperación por encima de la tasa de entrada. Predeterminado: `25`
- opciones `sndbuf` y `rcvbuf` para ajustar el tamaño del búfer de transmisión y recepción

### Adaptadores virtuales DVB

Adaptadores virtuales es una opción en la configuración del adaptador para facilitar la configuración de los flujos:

- Secuencias MPTS: puede definir la dirección de la secuencia MPTS y escanearla para añadir todos los canales por separado. [Más información](https://help.cesbo.com/astra/receiving/ip/mpts-via-udp)
- Adaptador CI: puede configurar la descodificación de canales con adaptadores CI externos como DigitalDevices Octopus Twin CI o TBS6900. [Más información](https://help.cesbo.com/astra/receiving/dvb/external-ci)
- Adaptador SAT>IP: sustituye a la casilla SAT>IP de versiones anteriores. [Más información](https://help.cesbo.com/astra/receiving/dvb/satip-client)
- SAT>IP: aumentar el tamaño del búfer de recepción
- SAT>IP: más log para errores de conexión HTTP

### Sintonizadores DVB y entrada DVB

- Para adaptadores multiestándar disponibles opción de selección manual de frontales - `fe_device`. Esto se puede encontrar en la interfaz web: Opciones del adaptador -> Avanzadas -> Dispositivo FE
- Escanear adaptadores DVB antes de iniciar Astra

### Modulador RESI de DigitalDevices

- Opciones fijas `gain` y `attenuator` para los controladores más recientes
- Tamaño del búfer por defecto aumentado a 64Mb
- Reiniciar RESI antes de empezar

### HTTP/HLS

Entrada:

- La entrada HLS soporta M3U8 con URLs sin esquema. Por ejemplo: `//example.com/media/001.ts`
- Sincronización de bitrate por marcas de tiempo DTS/PTS en lugar de PCR. (muchos flujos HLS tienen valores PCR corruptos).

Salida:

- Algoritmos de autorización reescritos para mejorar el rendimiento (trasladados de los scripts Lua al núcleo C).
- La autorización HTTP Backend admite redireccionamientos
- Comprobar la lista IP en la autorización HTTP antes que otros métodos
- La salida HLS envía un archivo TS vacío si no se encuentra el archivo (era un error 404, pero algunos reproductores basados en ffplay envían muchas peticiones intentando recargarlo).
- Opción Configuración -> HLS -> Tiempo de espera de la sesión para personalizar el tiempo en que la sesión debe cerrarse al estar inactiva.

### UDP

- Ignorar archivos TS no válidos en la entrada (las versiones anteriores reiniciaban la recepción)
- Opción `src=IP` para especificar la dirección de origen de multidifusión UDP para IGMPv3. Ejemplo: `udp://eth1@239.255.1.1:1234#src=192.168.88.100`

### MPTS

- Cambiar el tipo de IET con activado `remux_eit` opción. Si EIT tsid no es igual al `tsid` definida en la configuración del MPTS, el tipo de IET cambiará de `actual` a `other`

### Tratamiento

- opción `set_pcr_pid` para cambiar PCR pid si se separó de vídeo
- T2MI soluciona el problema de los errores de CC en algunos flujos

### Supervisión

- Opción `interval=SEC` para que la dirección de InfluxDB defina los intervalos de envío. Por defecto es de 60 segundos. Por ejemplo `https://example.com:8086#interval=5`
- `app_mem_kb` en el [API de estado del proceso](https://help.cesbo.com/astra/admin-guide/api/process). Uso de la memoria del proceso en kilobytes
- `video_count` y `audio_count` en el [API de estado del flujo](https://help.cesbo.com/astra/admin-guide/api/stream#get-stream-status)

### Maestro-Esclavo

- Opción `delay` para que el modo esclavo inicie el proceso con retardo. Por defecto 3 segundos. Ejemplo: `astra -c slave.conf -p 8000 --slave "http://master:8000#delay=10"`

### Interfaz web

- Icono
- Interfaz Web de `als.cesbo.com` integrado en el archivo binario de Astra (`als.cesbo.com` ya no se utiliza)
- Opción para establecer una ruta personalizada a la interfaz web. Esto se puede encontrar en Configuración -> General -> Ruta personalizada. Por ejemplo, con la ruta `secret`la interfaz estará disponible en `http://example.com:8000/secret/`
- Opción para modificar el puerto de la interfaz web. Se encuentra en Configuración -> General -> Puerto personalizado. Esta opción personaliza el valor del puerto definido en el archivo `-p` opción. También se admite la dirección de interfaz local, como `127.0.0.1:8000` - la web sólo estará disponible en localhost
- Opción Ajustes -> HTTP Play -> Path to TV Screenshots - adjuntar capturas de pantalla de canales a las tarjetas en el salpicadero
- Descripción del canal
- Diálogos modales para configurar el flujo y los adaptadores

### Cambios internos

- Movido mucho código de los scripts Lua al Astra Core para un mejor rendimiento.
- Astra comprueba el puerto de la API y de la interfaz web para evitar lanzar el mismo proceso dos veces
- Actualizar OpenSSL a v1.1.1t
- Integrar LibUV v1.44.2 (preparando el cambio del procesamiento interno de eventos a libuv)

## Versiones de archivo[](https://help.cesbo.com/astra/admin-guide/administration/changelog#archive-versions)

- [241024](https://cdn.cesbo.com/astra/builds/astra-241024)
- [230719](https://cdn.cesbo.com/astra/builds/astra-230719)
- [230307](https://cdn.cesbo.com/astra/builds/astra-230307)
- [220504](https://cdn.cesbo.com/astra/builds/astra-220504)
