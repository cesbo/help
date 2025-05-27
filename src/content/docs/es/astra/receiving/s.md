---
title: "Opciones para DVB-S/S2"
date: 2023-02-28
sidebar:
    order: 4
---

DVB-S/S2 es una norma para la televisión por satélite

## Opciones generales[](/es/astra/receiving/s#general-options)

![DVB-S/S2 Opciones generales](https://cdn.cesbo.com/help/astra/receiving/dvb/s/general.png)

- `Frequency` - frecuencia portadora (950-13250 MHz)
- `Polarization` - polarización de la señal. Para polarización lineal: Vertical, Horizontal. Para polarización circular: Derecha, Izquierda
- `Symbolrate` - tasa de símbolos también conocida como tasa de baudios, se refiere al número de cambios de señal por segundo (1000-50000 Kbaud)

## Opciones LNB (Low-Noise Block)[](/es/astra/receiving/s#lnb-low-noise-block-options)

![Opciones LNB](https://cdn.cesbo.com/help/astra/receiving/dvb/s/lnb.png)

- `LOF1` - Subbanda baja, MHz
- `LOF2` - Subbanda alta, MHz
- `SLOF` - Rango de sub-bandas. Si la frecuencia del adaptador es superior a SLOF, se utilizará el valor LOF2 y se enviará una señal de tono (22 kHz) al LNB para conmutar.
- `Force Tone` - opción de enviar señal de tono de 22 KHz
- `LNB Mode` - seleccionar modos LNB adicionales

Las opciones por defecto dependen de la frecuencia del adaptador:

| Gama de frecuencias | LOF1 | LOF2 | SLOF |
| --- | --- | --- | --- |
| 10700 .. 13250 | 9750 | 10600 | 11700 |
| 4500 .. 4800 | 5950 | 0 | 0 |
| 3400 .. 4200 | 5150 | 0 | 0 |
| 2500 .. 2700 | 3650 | 0 | 0 |
| 950 .. 2150 | 0 | 0 | 0 |

:::note 
Para convertidores de polarización circular (por ejemplo, 36°E, 56°E), ajuste 10750 en LOF1
:::

## Polarización LNB[](/es/astra/receiving/s#lnb-polarization)

La opción de polarización del LNB controla la señal recibida por la antena parabólica. El nivel de tensión para la alimentación del LNB viene definido por la polarización:

- 13V es para polarización Vertical/Derecha. Señal de conmutación en el rango de 11-14 voltios.
- 18V es para polarización Horizontal/Izquierda. Señal de conmutación en el rango de 16-20 voltios.

## Modos LNB[](/es/astra/receiving/s#lnb-modes)

- `LNB Sharing` - En este modo, la alimentación de tensión del LNB y la señal de tono están desactivadas. Esto le permite conectar varios adaptadores DVB a un único convertidor a través de un divisor pasivo. En el divisor, sólo un adaptador debe estar activo; los demás adaptadores deben ser pasivos. Todos los adaptadores del mismo divisor deben utilizar la misma polarización y la misma subbanda (frecuencia mayor o menor que el valor de slof).
- `DiSEqC 1.0` - digital Satellite Equipment Control es un protocolo de comunicación entre un receptor de satélite y un dispositivo como un conmutador multiparabólica o un pequeño rotor de antena parabólica. La versión 1.0 permite conmutar entre un máximo de 4 fuentes de satélite.
- `DiSEqC 1.1` - permite alternar entre hasta 16 fuentes de satélite
- `DiSEqC Command` - envía una orden en bruto a DiSEqC
- `Tone Burst` - también conocido como mini DiSEqC. Permite conmutar entre 2 fuentes de satélite
- `Unicable I (EN50494)` - proporciona acceso simultáneo a varios LNB a través de un único cable coaxial para varios receptores. La versión I proporciona acceso hasta a 8 fuentes de satélite
- `Unicable II (EN50607)` - proporciona acceso a hasta 32 fuentes vía satélite

## Opciones avanzadas[](/es/astra/receiving/s#advanced-options)

![DVB-S/S2 Opciones Avanzadas](https://cdn.cesbo.com/help/astra/receiving/dvb/s/advanced.png)

- `Modulation` - Método utilizado para convertir datos digitales en una señal analógica. Por defecto: QPSK para DVB-S, PSK8 para DVB-S2
- `FEC` - corrección de errores hacia adelante. Predeterminado: Auto
- `Roll-Off` - eficiencia espectral. Sólo para DVB-S2. Por defecto: 35
- `Stream ID` - ID de flujo PLP para transpondedores multiflujo. Sólo para DVB-S2

![Opciones de DVB Stream ID](https://cdn.cesbo.com/help/astra/receiving/dvb/s/stream-id.png)
