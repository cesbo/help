---
title: About Astra
description: Digital TV broadcasting software that receives, processes, and delivers television signals over cable, satellite, terrestrial, and IP networks
sidebar:
    order: 1
---

Astra es un software de radiodifusión de TV digital que recibe señales de televisión de diferentes fuentes y luego las entrega a sus espectadores a través de redes de cable, satélite, terrestre e IP.

## ¿Es para ti?

Astra está diseñado para:

- Operadores de TV por cable, satélite y terrestre
- Proveedores de servicios IPTV y OTT
- Redes de entrega de contenido (CDNs)
- Hoteles, hospitales y otros que proporcionan servicios de TV a sus propios clientes

## ¿Cómo funciona?

Astra se ejecuta en servidores Linux y obtiene contenido de TV de varias fuentes, luego lo entrega a sus espectadores.

[Lea cómo instalar Astra](/en/astra/getting-started/install/)

### Recepción de contenido

Astra admite varios tipos de fuentes:

- Señales de satélite, cable y terrestre utilizando estándares DVB e ISDB-T
- Streams HLS y HTTP MPEG-TS
- Streams multicast en redes IP con UDP o RTP
- Protocolo SRT en modos de llamada o escucha
- Streams RTSP desde cámaras IP

### Procesamiento de contenido

Astra prepara los canales recibidos para su entrega utilizando características de procesamiento de MPEG-TS:

- Demultiplexación MPEG-TS para extraer canales de streams multiprograma
- Filtrado y remapeo de streams
- Descrambleo con DVB-CI y módulos de acceso condicional
- Análisis de streams
- Redundancia de streams con conmutación automática a fuentes de respaldo cuando fallan las transmisiones principales

Astra trabaja a nivel de flujo de transporte y entrega contenido sin cambiar los flujos de video y audio originales.

### Entrega de contenido

Radiodifusión y transmisión de contenido a través de diferentes redes:

- Preparación de streams y multiplexación MPEG-TS para redes de cable, terrestre y satélite
- Encripción usando DVB Simulcrypt
- Transmisión HLS y HTTP MPEG-TS con autenticación de acceso
- Entrega de streams sobre redes IP con Multicast UDP
- Protocolo SRT en modos de escucha o llamada

### Otras características

- **Interfaz web** - Controle y configure Astra en su navegador
- **Monitoreo en tiempo real** - Supervise el estado de adaptadores y streams
- **Integración con Zabbix, Grafana e InfluxDB** - Conecte con sus herramientas de monitoreo existentes
- **API** - Automatice tareas e integre con otros sistemas
- **Scripts Lua** - Personalice la funcionalidad con scripting