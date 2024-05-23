---
title: "Bloque de bajo ruido para antenas parabólicas"
date: 2023-07-07
image: https://cdn.cesbo.com/help/misc/articles/hardware/lnb/lnb.jpg
---

El LNB (Low-Noise Block) es un dispositivo utilizado en las antenas parabólicas. Funciona en bandas de frecuencia específicas para recibir señales, que luego amplifica y convierte a un nivel óptimo para su transmisión por cable coaxial.

![LNB](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/lnb.jpg)

## Alimentación[](https://help.cesbo.com/misc/articles/hardware/lnb#power-supply)

La alimentación de un LNB procede directamente del receptor de satélite a través del cable coaxial conectado. Suele oscilar entre 13 y 18 voltios, y el nivel de tensión también se utiliza para controlar la polarización de la señal recibida.

- Se suministran 18 voltios para la polarización lineal horizontal o circular izquierda, y la corriente de conmutación suele oscilar entre 16 y 20 voltios
- 13 voltios se utilizan para la polarización lineal vertical o circular derecha, y la corriente de conmutación suele situarse entre 11 y 14 voltios.

## Frecuencia heterodina[](https://help.cesbo.com/misc/articles/hardware/lnb#heterodyne-frequency)

Un tipo de LNB comúnmente utilizado, el LNB Universal, opera en la banda Ku, con frecuencias que van de 10700 a 12750 MHz. Este LNB utiliza dos osciladores locales (LO): uno a 9750 MHz para la banda baja (10700 - 11700 MHz) y otro a 10600 MHz para la banda alta (11700 - 12750 MHz). Cuando se recibe una señal, se mezcla con la frecuencia LO apropiada. El resultado es una señal de frecuencia intermedia (FI) que oscila entre 950 y 2150 MHz y que puede transmitirse eficazmente a través del cable coaxial.

La selección entre los dos osciladores locales en un LNB universal se controla mediante una señal de tono de 22 kHz enviada por el receptor de satélite a través del cable coaxial.

## LNB Quattro[](https://help.cesbo.com/misc/articles/hardware/lnb#quattro-lnb)

Un LNB Quattro tiene cuatro salidas, cada una dedicada a una banda y polarización específicas. Este tipo de LNB diseñado para:

- Transmisores de fibra
- Sistemas multiswitch con hasta 32 salidas independientes
- Multiswitch con protocolo Unicable

![Transmisor de fibra](https://cdn.cesbo.com/help/misc/articles/hardware/lnb/fiber.png)

## LNB cuádruple[](https://help.cesbo.com/misc/articles/hardware/lnb#quad-lnb)

Un LNB cuádruple tiene dos salidas independientes, cada una capaz de acceder a todas las frecuencias de la banda Ku.

::note
Es importante tener en cuenta que un LNB Quad está diseñado para uso del consumidor. El LNB Quattro no está pensado para su conexión directa a un receptor. Los dos tipos de LNB son claramente diferentes y no pueden sustituirse entre sí en sus respectivas aplicaciones. Tenga cuidado de no confundirlos.
::
