---
title: DigitalDevices RESI DVB-C Modulator
sidebar:
    order: 1
---

El RESI, un modulador DVB-C de Digital Devices, genera una secuencia de datos compatible con DVB-C en un cable coaxial de 75 ohmios existente.

![DigitalDevices RESI DVB-C Modulator](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png)

Especificaciones técnicas:

- 4 a 24 Transpondedores según la especificación DVB-C
- Rango de frecuencias: 114 – 858 MHz
- Tasas de símbolo: 1,0 – 7,1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Relación Señal / Ruido: 42dB
- Salida con 8 canales (por canal): 101 dBµV

## Encontrar el modulador en el sistema

Utilice nuestra guía para [Instalar el Controlador de DigitalDevices](/en/astra/adapters/dd-driver/).

Utilice el siguiente comando para encontrar el número del adaptador y el número del dispositivo modulador:

```sh
find "/dev/dvb" -name "mod*"
```

La salida mostrará una lista de dispositivos en el sistema:

```
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
```

- `adapter0`: número de adaptador
- `mod1`: número de dispositivo (modulador)

## Configuración de Astra

1. Prepare [MPTS](/en/astra/streams/mpts/) para el modulador
1. En la configuración de salida, especifique la dirección: resi://#adapter=0&device=1 (0 - número de adaptador, 1 - modulador)
1. En la configuración NIT de MPTS, configure las opciones del transpondedor

![Configuración NIT de MPTS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/mpts-nit.png)

Más información en: [Televisión por cable con Astra para la Industria Hotelera](/en/astra/use-cases/cable-television-with-astra-for-hospitality-industry)

### Opciones adicionales

- `gain=N`: nivel de señal en un rango de 0 a 100
- `buffer_size=N`: tamaño del buffer en megabytes. Por defecto: `256`
- `legacy`: modo de compatibilidad con el modulador RESI antiguo para 10 transpondedores

## Resolución de problemas

### No existe tal archivo o directorio

Si intenta encontrar el número del adaptador y encuentra un error:

```
find: ‘/dev/dvb’: No existe tal archivo o directorio
```

es probable que el controlador de DigitalDevices no esté instalado. Por favor, [Instale el Controlador de DigitalDevices](/en/astra/adapters/dd-driver/)