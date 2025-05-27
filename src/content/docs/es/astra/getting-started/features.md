---
title: Características
date: 2024-08-02
sidebar:
    order: 1
---

## Requisitos del Sistema

Astra funciona en cualquier distribución basada en Linux para CPUs x86 de 64 bits. Recomendamos usar Ubuntu 22.04 LTS.

[Leer más...](/es/astra/getting-started/requirements)

## Recepción de contenido

Astra admite varios tipos de fuentes:

- DVB, incluyendo satélite, cable y terrestre
- Transmisiones HLS y HTTP MPEG-TS
- Transmisiones multicast en redes IP con UDP o RTP
- Protocolo SRT en modos caller o listener
- Transmisiones RTSP desde cámaras IP

[Leer más...](/es/astra/receiving/intro)

## Procesamiento de contenido

Astra prepara los canales recibidos para la entrega utilizando funciones de procesamiento MPEG-TS:

- Demultiplexación MPEG-TS para extraer canales de transmisiones multiprograma
- Filtrado y remapeo de transmisiones
- Descrambling con módulos DVB-CI y de acceso condicional
- Análisis de transmisiones
- Redundancia de transmisiones mediante la conmutación automática a fuentes de respaldo

[Leer más...](/es/astra/processing/demux)

## Entrega de contenido

Transmisión y difusión de contenido a través de diferentes redes:

- Preparación de transmisiones y multiplexación MPEG-TS para redes de cable, terrestre y satélite
- Scrambling usando DVB Simulcrypt
- Transmisión HLS y HTTP MPEG-TS con autenticación de acceso
- Entrega de transmisiones sobre redes IP con multicast UDP
- Protocolo SRT en modos listener o caller


[Leer más...](/es/astra/delivery/mpts-settings)

## Gestión

- Interfaz web responsiva
- Monitoreo en tiempo real
- Integración con Zabbix, Grafana e InfluxDB
- API
- Lua scripts
