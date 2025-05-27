---
title: "Modulador HiDes DVB-T"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg
sidebar:
    order: 7
---

:badge[Astra 2021.08.09]

PT100 es un modulador DVB-T para 4 frecuencias de HiDes

![Modulador PT100 DVB-T](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg)

Características:

- 4 moduladores en el tablero
- Gama de frecuencias 50~950MHz tamaño de paso 1KHz
- Modulación - 64QAM/16QAM/QPSK
- Señal/ruido: 45 dB
- Nivel de salida RF -8 dBm (100 dBuV)

[Seguir leyendo](http://www.hides.com.tw/product_pt100_eng.html)

## Configurar[](/es/astra/delivery/hides-dvb-t-modulator#setup)

El controlador puede descargarse del [sitio oficial](http://www.hides.com.tw/downloads_eng.html)

Después de la instalación encontrar el número de moduladores utilizando el comando:

```
find "/dev" -name "it950x*"
```

En la salida del comando, obtendremos los números de los moduladores:

```
/dev/usb-it950x1
/dev/usb-it950x0
```

`it950x1` - donde 1 es el número de modulador

## Ajustes Astra[](/es/astra/delivery/hides-dvb-t-modulator#astra-settings)

Prepare [el](/es/astra/delivery/mpts-settings) MPTS para el modulador. En los ajustes NIT del MPTS, configure las opciones del transpondedor:

![Ajustes MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/mpts-nit.png)

En la configuración de salida, especifique el tipo it950x y el número de adaptador: `it950x://#adapter=0` (0 - número de modulador)

### Opciones de salida adicionales

Se podrían añadir opciones adicionales a la dirección de salida:

- `gain=N` - nivel de señal de 0 a 100
- `fec=1/2` - Astra 2023.08.16 Relación de codificación FEC. Valores: `1/2`, `2/3`, `3/4`, `5/6`, `7/8`, `none`
