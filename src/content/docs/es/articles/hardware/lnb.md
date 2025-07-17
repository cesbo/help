---
title: Low-Noise Block for satellite dishes
date: 2023-07-07
sidebar:
    order: 11
---

El LNB (Bloque de Bajo Ruido) es un dispositivo utilizado en antenas parabólicas. Opera en bandas de frecuencia específicas para recibir señales, que luego amplifica y convierte a un nivel óptimo para la transmisión a través de un cable coaxial.

![LNB](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/lnb.jpg)

## Fuente de alimentación

La fuente de alimentación para un LNB proviene directamente del receptor de satélite a través del cable coaxial conectado. Esto generalmente está en el rango de 13 a 18 voltios, con el nivel de voltaje también utilizado para controlar la polarización de la señal recibida.

- Se suministran 18 voltios para polarización lineal horizontal o circular izquierda, con la corriente de conmutación típicamente en el rango de 16 a 20 voltios.
- Se utilizan 13 voltios para polarización lineal vertical o circular derecha, con la corriente de conmutación generalmente entre 11 y 14 voltios.

## Frecuencia heterodina

Un tipo comúnmente usado, el LNB Universal, opera en la banda Ku, con frecuencias que van desde los 10700 hasta los 12750 MHz. Este LNB utiliza dos Osciladores Locales (LOs): uno fijado en 9750 MHz para la banda baja (10700 - 11700 MHz) y otro fijado en 10600 MHz para la banda alta (11700 - 12750 MHz). Cuando se recibe una señal, se mezcla con la frecuencia LO apropiada. Esto resulta en una Señal de Frecuencia Intermedia (IF) que varía de 950 a 2150 MHz, la cual puede ser transmitida efectivamente a través del cable coaxial.

La selección entre los dos Osciladores Locales en un LNB Universal se controla mediante una señal de tono de 22 kHz enviada por el receptor de satélite a través del cable coaxial.

## LNB Quattro

Un LNB Quattro tiene cuatro salidas, cada una dedicada a una banda y polarización específica. Este tipo de LNB está diseñado para:

- Transmisores de fibra
- Sistemas de multiswitch con hasta 32 salidas independientes
- Multiswitch con protocolo Unicable

![Transmisor de Fibra](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/fiber.png)

## LNB Quad

Un LNB Quad tiene cuatro salidas independientes, cada una capaz de acceder a todas las frecuencias en la banda Ku.

:::note
Es importante señalar que un LNB Quad está diseñado para uso de consumo. El LNB Quattro no está destinado para conexión directa a un receptor.
Los dos tipos de LNB son claramente diferentes y no pueden reemplazarse entre sí en sus respectivas aplicaciones. Tenga cuidado de no confundirlos.
:::