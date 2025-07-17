---
title: MPEG-TS
sidebar:
    order: 8
---

MPEG-TS (Transport Stream) - es un formato de transporte para la transmisión de video, audio y otros datos sobre redes IP o de banda ancha.
Descripción detallada disponible en el estándar [ISO 13818-1](https://www.iso.org/standard/74427.html).

## Stream de Elementos Packetized

Stream de Elementos (ES, por sus siglas en inglés) es una salida de datos comprimidos del codificador.

Stream de Elementos Packetized (PES) es una secuencia de encabezados con información ES y los fotogramas ES.
Multiplexación es una operación de empaquetado de varios streams elementales en un solo stream.
Demultiplexación es el proceso inverso de multiplexación. Demultiplexar un solo stream en componentes separados y pasar los componentes para su procesamiento.

## Información Específica del Programa

La información específica del programa (PSI) son paquetes con información sobre el stream para que el receptor demultiplexe y decodifique los streams del programa.

- Tabla de Asociación de Programas (PAT) - lista de programas. Contiene el Número de Programa (PNR) y el Identificador de Paquete (PID) del PMT asociado.
- Tabla de Mapeo de Programas (PMT) - lista de streams del programa. PIDs de los datos de video, audio y otros asociados.
- Tabla de Acceso Condicional (CAT) - información sobre Sistemas de Acceso Condicional.

## Información del Servicio

Además de la PSI, se necesita información para proporcionar identificación de servicios y eventos al usuario:

- Tabla de Información de Red (NIT)
- Tabla de Descripción del Servicio (SDT) - información como el nombre del servicio, nombre del proveedor, etc.
- Tabla de Información de Eventos (EIT) - contiene información de eventos como nombre del evento, hora de inicio, etc.
- Tabla de Hora y Fecha (TDT)
- Tabla de Desplazamiento de Hora (TOT)

## Transport Stream

Transport Stream es una secuencia de paquetes TS.
Los paquetes TS tienen una longitud fija de 188 bytes. El primer byte, también llamado byte de sincronización, es siempre 0x47.
Los siguientes 3 bytes son un encabezado. Los 184 bytes restantes son una carga útil (paquetes PES, PSI o SI).

El encabezado TS contiene la siguiente información:

- Identificador de Paquete (PID). Podría estar en el rango de 0 - 8191.
- Contador de Continuidad (CC). Podría estar en el rango de 0 - 15. Con un contador, el analizador MPEG-TS puede detectar la corrupción de la continuidad de los paquetes.
- Indicador de Inicio de Unidad de Carga Útil - es un solo bit que indica si el paquete contiene el inicio de la carga útil.

## PID - Identificador de paquete TS

Los streams elementales (video, audio) y las tablas de información se empaquetan en paquetes TS. Cada paquete tiene un identificador único - PID.
El valor PID debe estar entre 0 y 8191. El rango de 0 a 31 y 8191 está reservado y no debe ser utilizado. Puedes usar cualquier PID en el rango de 32 a 8190.