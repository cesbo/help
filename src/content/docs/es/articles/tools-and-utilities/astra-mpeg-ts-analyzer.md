---
title: "Astra MPEG-TS Analyzer"
date: 2023-02-23
sidebar:
    order: 2
---

Astra MPEG-TS Analyzer es una herramienta incorporada para analizar flujos MPEG-TS.

![Interfaz de Astra MPEG-TS Analyzer](https://cdn.cesbo.com/help/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer/analyzer.png)

## Lanzar con la interfaz web

```
astra --analyze [OPTIONS] -p PORT
```

Opciones:

- `-p PORT` - especifica el puerto a usar para la interfaz web;
- `-c FILE` - especifica la ruta al listado de canales, que se creará automáticamente. Esta opción permite guardar direcciones analizadas;
- `--daemon` - iniciar en modo daemon;
- `--log` /var/log/relay.log - ruta completa al archivo de log.

## Lanzar en consola

```
astra --analyze [OPTIONS] ADDRESS
```

Opciones:

- `-n seconds` - detener el analizador después del tiempo definido;
- `-o file` - guardar el flujo recibido en un archivo.

Astra registra información directamente en la consola. Por ejemplo:

```
> astra --analyze "udp://239.255.1.1:1234"

Nov 28 00:59:28: INFO: [main] Iniciando Astra (commit:b871b4e3 fecha:2022-01-12)
Nov 28 00:59:29: INFO: PAT tsid:1 versión:1
Nov 28 00:59:29: INFO: PAT    PMT pid:115 pnr:1
Nov 28 00:59:29: INFO: PAT crc32:0x02575D2D
Nov 28 00:59:29: INFO: PMT pnr:1 versión:1
Nov 28 00:59:29: INFO: PCR pid:215
Nov 28 00:59:29: INFO: VIDEO pid:215 tipo:0x1B
Nov 28 00:59:29: INFO: AUDIO pid:315 tipo:0x04
Nov 28 00:59:29: INFO: AUDIO    idioma:eng
Nov 28 00:59:29: INFO: PMT crc32:0x9E87CF44
Nov 28 00:59:29: INFO: SDT tsid:1 versión:3
Nov 28 00:59:29: INFO: SDT pnr:1
Nov 28 00:59:29: INFO: SDT    proveedor:Demo TV
Nov 28 00:59:29: INFO: SDT    servicio:Demo1
Nov 28 00:59:29: INFO: SDT crc32:0x9F98BF46
Nov 28 00:59:30: INFO: EIT tsid:1 onid:1 pnr:1 versión:17
Nov 28 00:59:30: INFO: EIT    inicio:Wed Nov 28 00:10:00 2018
Nov 28 00:59:30: INFO: EIT    fin:Wed Nov 28 01:05:00 2018
Nov 28 00:59:30: INFO: EIT    idioma:eng título:DOCUMENTAL
Nov 28 00:59:30: INFO: EIT crc32:0xC0BCCA18
Nov 28 00:59:30: INFO: Bitrate: 2323 Kbit/s
Nov 28 00:59:30: INFO: EIT tsid:1 onid:1 pnr:1 versión:17
Nov 28 00:59:30: INFO: EIT    inicio:Wed Nov 28 01:05:00 2018
Nov 28 00:59:30: INFO: EIT    fin:Wed Nov 28 03:05:00 2018
Nov 28 00:59:30: INFO: EIT    idioma:eng título:AUDIENCIA (16+)
Nov 28 00:59:30: INFO: EIT crc32:0xE9257DFA
Nov 28 00:59:31: INFO: Bitrate: 2397 Kbit/s
Nov 28 00:59:32: INFO: Bitrate: 2755 Kbit/s
Nov 28 00:59:33: INFO: Bitrate: 4446 Kbit/s
```

## Formato de dirección

El analizador soporta cualquier formato de recepción compatible con Astra. Por ejemplo:

- `udp://239.255.1.1:1234`
- `http://example.com/media.m3u8`
- `dvb://#adapter=0&type=s2&tp=11044:v:43200`

Más información descrita en la Configuración de Astra: Entrada.