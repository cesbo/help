---
title: "MPEG-TS"
date: 2023-06-13
sidebar:
    order: 8
---

MPEG-TS (Transport Stream) - es un formato de transporte para la transmisión de vídeo, audio y otros datos a través de redes IP o de banda ancha. Encontrará una descripción detallada en la norma [ISO 13818-1](https://www.iso.org/standard/74427.html){target="_blank"}

## Flujo elemental empaquetado[](/es/misc/articles/mpegts#packetized-elementary-stream)

El flujo elemental (ES) es una salida de datos comprimidos del codificador.

El flujo elemental empaquetado (PES) es una secuencia de cabeceras con información ES y tramas ES. La multiplexación es una operación de paquetización de varios flujos elementales en un único flujo. La demultiplexación es el proceso inverso a la multiplexación. Demultiplexar un único flujo en componentes separados y pasar los componentes a procesamiento.

## Información específica del programa[](/es/misc/articles/mpegts#program-specific-information)

La información específica del programa (PSI) es un paquete con información sobre el flujo para que el receptor pueda demultiplexar y descodificar los flujos del programa.

- Tabla de asociación de programas (PAT): lista de programas. Contiene el número de programa (PNR) y el identificador de paquete (PID) del PMT asociado.
- Tabla de asignación de programas (PMT) - lista de flujos de programas. PID de los datos de vídeo, audio y otros asociados.
- Tabla de acceso condicional (CAT): información sobre los sistemas de acceso condicional

## Información de servicio[](/es/misc/articles/mpegts#service-information)

Además de la ISP, se necesitan datos que permitan identificar los servicios y eventos para el usuario:

- Tabla de información de red (NIT)
- Tabla de descripción de servicios (SDT): información como el nombre del servicio, el nombre del proveedor, etc.
- Tabla de información de eventos (EIT): contiene información sobre los eventos, como el nombre, la hora de inicio, etc.
- Tabla de fecha y hora (TDT)
- Tabla de tiempos (TOT)

## Corriente de transporte[](/es/misc/articles/mpegts#transport-stream)

El flujo de transporte es una secuencia de paquetes TS. Los paquetes TS tienen una longitud fija de 188 bytes. El primer byte, también llamado byte de sincronización, es siempre 0x47. Los 3 bytes siguientes son la cabecera. Los 184 bytes restantes son la carga útil (paquetes PES, PSI o SI).

La cabecera TS contiene la siguiente información:

- Identificador de paquete (PID). Puede estar en el rango 0 - 8191
- Contador de continuidad (CC). Puede estar en el rango 0 - 15. Con un contador el analizador MPEG-TS capaz de detectar la corrupción de la continuidad de los paquetes.
- Indicador de inicio de la unidad de carga útil: un único bit indica si el paquete contiene el inicio de la carga útil.

## PID - Identificador del paquete TS[](/es/misc/articles/mpegts#pid-ts-packet-identifier)

Los flujos elementales (vídeo, audio) y las tablas de información se empaquetan en los paquetes TS. Cada paquete tiene un identificador único (PID). El valor del PID debe estar comprendido entre 0 y 8191. El rango de 0 a 31 y 8191 está reservado y no debe utilizarse. Se puede utilizar cualquier PID en el rango de 32 a 8190.
