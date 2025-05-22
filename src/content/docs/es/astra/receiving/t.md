---
title: "Opciones para DVB-T/T2 e ISDB-T"
date: 2023-02-28
sidebar:
    order: 6
---

DVB-T/T2 es una norma para la transmisión de televisión digital terrestre.

## Opciones generales[](https://help.cesbo.com/astra/receiving/dvb/t#general-options)

![DVB-T/T2 Opciones generales](https://cdn.cesbo.com/help/astra/receiving/dvb/t/general.png)

- `Frequency` - frecuencia portadora (0-1000 MHz)

## Opciones avanzadas[](https://help.cesbo.com/astra/receiving/dvb/t#advanced-options)

![Opciones avanzadas de DVB-T/T2](https://cdn.cesbo.com/help/astra/receiving/dvb/t/advanced.png)

- `Bandwidth` - El ancho de banda de la señal en kHz determina la cantidad de datos que se pueden transmitir. Predeterminado: 8000
- `Guard` - Intervalo de guarda utilizado para evitar la interferencia entre símbolos (ISI) causada por la propagación multitrayecto de la señal transmitida. Cuanto mayor sea el intervalo de guarda, más robusta será la señal frente a la ISI, pero a costa de una menor velocidad de transmisión de datos.
- `Transmit` - Modos de transmisión COFDM (Multiplexación por División de Frecuencias Ortogonales Codificadas) para adaptarse a las distintas condiciones del canal y maximizar la robustez de la señal transmitida. Por ejemplo: el modo 2K utiliza 2048 subportadoras para transmitir la señal digital, y es adecuado para transmitir la señal en distancias cortas con interferencias de señal de bajas a moderadas. El modo 8K es adecuado para transmitir la señal a distancias muy largas o en zonas con niveles muy altos de interferencia de la señal.
- `Hierarchy` - esquemas de modulación jerárquica, que permiten la transmisión de dos flujos de bits diferentes con distintos niveles de robustez
