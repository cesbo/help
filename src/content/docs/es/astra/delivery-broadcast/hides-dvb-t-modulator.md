---
title: HiDes DVB-T Modulator
sidebar:
    order: 3
---

PT100 es un modulador DVB-T para 4 frecuencias de HiDes

![PT100 modulador DVB-T](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg)

Características:

- 4 moduladores en la placa
- Rango de frecuencia 50~950MHz, tamaño de paso 1KHz
- Modulación - 64QAM/16QAM/QPSK
- Señal/Ruido: 45dB
- Nivel de salida RF -8 dBm (100 dBuV)

[Leer más](http://www.hides.com.tw/product_pt100_eng.html)

## Configuración

El controlador puede ser descargado desde el [sitio oficial](http://www.hides.com.tw/downloads_eng.html)

Después de la instalación, encuentra el número de los moduladores usando el comando:

```sh
find "/dev" -name "it950x*"
```

En la salida del comando, obtendremos los números de los moduladores:

```
/dev/usb-it950x1
/dev/usb-it950x0
```

- `it950x1`: donde 1 es el número del modulador

## Configuración de Astra

Prepara [MPTS](/es/astra/streams/mpts/) para el modulador. En la configuración de NIT del MPTS, configura las opciones del transpondedor:

![Configuración de NIT de MPTS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/mpts-nit.png)

En la configuración de salida, especifica el tipo it950x y el número de adaptador: `it950x://#adapter=0` (0 - número del modulador)

### Opciones adicionales de salida

Opciones adicionales pueden ser añadidas a la dirección de salida:

- `gain=N`: nivel de señal en un rango de 0 a 100
- `fec=1/2`: relación de codificación FEC. Valores: `1/2`, `2/3`, `3/4`, `5/6`, `7/8`, `none`