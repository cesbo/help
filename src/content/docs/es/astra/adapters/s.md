---
title: Options for DVB-S/S2
sidebar:
    order: 4
---

DVB-S/S2 es un estándar para Televisión Satelital

## Opciones generales

![Opciones Generales DVB-S/S2](https://cdn.cesbo.com/help/astra/receiving/dvb/s/general.png)

- `Frequency`: frecuencia portadora (950-13250 MHz)
- `Polarization`: polarización de la señal. Para polarización lineal: Vertical, Horizontal. Para polarización circular: Derecha, Izquierda
- `Symbolrate`: tasa de símbolos, también conocida como tasa de baudios, se refiere a la cantidad de cambios de señal por segundo (1000-50000 Kbaud)

## Opciones de LNB (Bloque de Bajo Ruido)

![Opciones de LNB](https://cdn.cesbo.com/help/astra/receiving/dvb/s/lnb.png)

- `LOF1`: Sub-banda baja, MHz
- `LOF2`: Sub-banda alta, MHz
- `SLOF`: Rango de sub-banda. Si la frecuencia del adaptador es mayor que SLOF, se utilizará el valor de LOF2 y se enviará una señal de tono (22 kHz) al LNB para cambiar
- `Force Tone`: opción para enviar una señal de tono de 22 kHz
- `LNB Mode`: seleccionar modos adicionales de LNB

Las opciones predeterminadas dependen de la frecuencia del adaptador:

| Rango de frecuencia | LOF1 | LOF2 | SLOF |
| --- | --- | --- | --- |
| 10700 .. 13250 | 9750 | 10600 | 11700 |
| 4500 .. 4800 | 5950 | 0 | 0 |
| 3400 .. 4200 | 5150 | 0 | 0 |
| 2500 .. 2700 | 3650 | 0 | 0 |
| 950 .. 2150 | 0 | 0 | 0 |

:::tip
Para conversores de polarización circular (por ejemplo, 36°E, 56°E), establezca 10750 en LOF1
:::

## Polarización de LNB

La opción de polarización del LNB controla la señal recibida por la antena satelital. El nivel de voltaje para la fuente de alimentación del LNB está definido por la polarización:

- 13V es para polarización Vertical/Derecha. Señal de cambio en el rango de 11-14 Voltios
- 18V es para polarización Horizontal/Izquierda. Señal de cambio en el rango de 16-20 Voltios

## Modos de LNB

- `LNB Sharing`: en este modo, se desactivan el suministro de voltaje del LNB y la señal de tono. Esto permite conectar varios adaptadores DVB a un único conversor a través de un divisor pasivo. En el divisor, solo un adaptador debe estar activo; los demás adaptadores deben ser pasivos. Todos los adaptadores en el mismo divisor deben usar la misma polarización y la misma sub-banda (frecuencia mayor o menor que el valor de slof)
- `DiSEqC 1.0`: Control Digital de Equipos Satelitales es un protocolo de comunicación usado entre un receptor satelital y un dispositivo, como un conmutador multi-plato o un rotor de antena pequeña. La versión 1.0 permite cambiar entre hasta 4 fuentes satelitales
- `DiSEqC 1.1`: permite cambiar entre hasta 16 fuentes satelitales
- `DiSEqC Command`: envía un comando en bruto a DiSEqC
- `Tone Burst`: también conocido como mini DiSEqC. Permite cambiar entre 2 fuentes satelitales
- `Unicable I (EN50494)`: proporciona acceso simultáneo a múltiples LNB a través de un único cable coaxial para varios receptores. La versión I proporciona acceso hasta 8 fuentes satelitales
- `Unicable II (EN50607)`: proporciona acceso hasta 32 fuentes satelitales

## Opciones avanzadas

![Opciones Avanzadas DVB-S/S2](https://cdn.cesbo.com/help/astra/receiving/dvb/s/advanced.png)

- `Modulation`: método usado para convertir datos digitales en una señal analógica. Predeterminado: QPSK para DVB-S, PSK8 para DVB-S2
- `FEC`: corrección de errores hacia adelante. Predeterminado: Auto
- `Roll-Off`: eficiencia espectral. Solo para DVB-S2. Predeterminado: 35
- `Stream ID`: ID de la secuencia PLP para transpondedores multiseñales. Solo para DVB-S2

![Opciones de Stream ID DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/s/stream-id.png)