---
title: TBS6004 DVB-C modulator
sidebar:
    order: 2
---

TBS6004 es una tarjeta PCIe moduladora DVB-C 4 QAM.

![TBS DVB-C modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg)

Especificaciones técnicas:

- 4 moduladores en la tarjeta
- Frecuencias: 100 ~ 1000 MHz
- Modulación - 16QAM, 32QAM, 64QAM, 128QAM, 256QAM
- Nivel de salida RF - 5-120 dBuV

## Configuración

Utilice nuestra guía para [Instalar el Controlador TBS](/en/astra/adapters/tbs-driver/). Use el siguiente comando para encontrar el número del adaptador y el número del dispositivo modulador:

```sh
find "/dev" -name "mod*"
```

En el resultado - veremos los números de los moduladores:

```
/dev/tbsmod0/mod1
/dev/tbsmod0/mod0
```

- `tbsmod0`: número del adaptador
- `mod1`: número del dispositivo

## Configuraciones de Astra

1. Prepare [MPTS](/en/astra/streams/mpts/) para el modulador
2. En la configuración de salida, especifique la dirección: `tbs://#adapter=0&device=1` (0 - número del adaptador, 1 - modulador)
3. En las configuraciones de MPTS NIT, configure las opciones del transpondedor

![Configuraciones de MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/mpts-nit.png)

Lea más en: [Televisión por Cable con Astra para la Industria de la Hospitalidad](/en/astra/use-cases/cable-television-with-astra-for-hospitality-industry)

### Opciones adicionales

Se pueden añadir opciones adicionales a la dirección de salida:

- `bitrate=N`: el valor predeterminado depende de la tasa de símbolos y del tipo de modulación. Por ejemplo, para una tasa de símbolos de 6900 y 256-QAM, el valor será 55
- `gain=N`: nivel de señal en un rango de 0 a 100. Valor predeterminado: 60

## Solución de problemas

### No existe tal archivo o directorio

Si intenta encontrar el número del adaptador y encuentra un error:

```
find: ‘/dev/dvb’: No such file or directory
```

es probable que el controlador TBS no esté instalado. Por favor, [instale el controlador TBS](/en/astra/adapters/tbs-driver/)