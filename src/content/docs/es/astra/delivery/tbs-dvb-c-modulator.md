---
title: "Modulator TBS6004 DVB-C"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg
sidebar:
    order: 9
---

:badge[Astra 2021.08.09]

TBS6004 es una tarjeta PCIe moduladora DVB-C 4 QAM.

![Modulador DVB-C TBS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg)

Especificaciones técnicas:

- 4 moduladores en el tablero
- Frecuencias: 100 ~ 1000 MHz
- Modulación - 16QAM, 32QAM, 64QAM, 128QAM, 256QAM
- Nivel de salida RF - 5-120 dBuV

## Configurar[](https://help.cesbo.com/astra/delivery/hardware/tbs-dvb-c-modulator#setup)

Utilice nuestra guía para [instalar el controlador TBS](https://help.cesbo.com/misc/tools-and-utilities/dvb/tbs-driver). Utilice el siguiente comando para encontrar el número de adaptador y el número de dispositivo modulador:

```
find "/dev" -name "mod*"
```

En la salida - veremos los números de moduladores:

```
/dev/tbsmod0/mod1
/dev/tbsmod0/mod0
```

- `tbsmod0` - número de adaptador
- `mod1` - número de dispositivo

## Ajustes Astra[](https://help.cesbo.com/astra/delivery/hardware/tbs-dvb-c-modulator#astra-settings)

1. Preparar [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) para modulador
2. En la configuración de salida, especifique la dirección: `tbs://#adapter=0&device=1` (0 - número de adaptador, 1 - modulador)
3. En los ajustes MPTS NIT, configure las opciones del transpondedor

![Ajustes MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/mpts-nit.png)

Más información en: [Televisión por cable con Astra para la hostelería](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

### Opciones adicionales

Se podrían añadir opciones adicionales a la dirección de salida:

- `bitrate=N` - El valor por defecto depende de la tasa de símbolos y del tipo de modulación. Por ejemplo, para symbolrate 6900 y 256-QAM el valor será 55
- `gain=N` - nivel de señal en un rango de 0 a 100. Valor por defecto: 60

## Solución de problemas[](https://help.cesbo.com/astra/delivery/hardware/tbs-dvb-c-modulator#troubleshooting)

### No such file or directory

Si intenta encontrar el número de adaptador y se encuentra con un error:

```
find: ‘/dev/dvb’: No such file or directory
```

es probable que el controlador TBS no esté instalado. Por favor, [instale el](https://help.cesbo.com/misc/tools-and-utilities/dvb/tbs-driver) controlador TBS
