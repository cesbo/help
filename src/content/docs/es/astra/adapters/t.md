---
title: "Options for DVB-T/T2 and ISDB-T"
sidebar:
    order: 6
---

DVB-T/T2 es un estándar para la transmisión de televisión digital terrestre.

## Opciones Generales

![Opciones Generales de DVB-T/T2](https://cdn.cesbo.com/help/astra/receiving/dvb/t/general.png)

- `Frequency`: frecuencia portadora (0-1000 MHz)

## Opciones Avanzadas

![Opciones Avanzadas de DVB-T/T2](https://cdn.cesbo.com/help/astra/receiving/dvb/t/advanced.png)

- `Bandwidth`: el ancho de banda de la señal en kHz determina la cantidad de datos que se pueden transmitir. Por defecto: 8000
- `Guard`: intervalo de guarda utilizado para prevenir la interferencia intersímbolo (ISI) causada por la propagación multipercurso de la señal transmitida. Cuanto mayor sea el intervalo de guarda, más robusta será la señal contra el ISI, pero a costa de tasas de datos más bajas
- `Transmit`: modos de transmisión COFDM (Multiplexión por División de Frecuencia Ortogonal Codificada) que se adaptan a diferentes condiciones de canal y maximizan la robustez de la señal transmitida. Por ejemplo: el modo 2K utiliza 2048 subportadoras para transmitir la señal digital y es adecuado para transmitir la señal a cortas distancias con una interferencia de señal baja a moderada. El modo 8K es adecuado para transmitir la señal a distancias muy largas o en áreas con niveles muy altos de interferencia de señal
- `Hierarchy`: esquemas de modulación jerárquica, que permiten la transmisión de dos flujos de bits diferentes con distintos niveles de robustez