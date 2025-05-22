---
title: "Modulador DVB-C RESI de DigitalDevices"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png
sidebar:
    order: 8
---

El RESI, un modulador DVB-C de Digital Devices, emite un flujo de datos compatible con DVB-C en un cableado coaxial existente de 75 ohmios.

![Modulador DVB-C RESI de DigitalDevices](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png)

Especificaciones técnicas:

- 4 - 24 Transpondedor según especificación DVB-C
- Gama de frecuencias: 114 - 858 MHz
- Velocidad de símbolos: 1,0 - 7,1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Relación señal/ruido: 42 dB
- Salida con 8 canales (por canal) 101 dBµV

## Buscar modulador en el sistema[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#find-modulator-in-system)

Utilice nuestra guía para [instalar el controlador de DigitalDevices](https://help.cesbo.com/misc/tools-and-utilities/dvb/dd-driver).

Utilice el siguiente comando para encontrar el número de adaptador y el número de dispositivo modulador:

```
find "/dev/dvb" -name "mod*"
```

La salida mostrará una lista de dispositivos en el sistema:

```
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
```

- `adapter0` - número de adaptador
- `mod1` - número de dispositivo (modulador)

## Ajustes Astra[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#astra-settings)

1. Preparar [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) para modulador
2. En la configuración de salida, especifique la dirección: resi://#adapter=0&device=1 (0 - número de adaptador, 1 - modulador)
3. En los ajustes MPTS NIT, configure las opciones del transpondedor

![Ajustes MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/mpts-nit.png)

Más información en: [Televisión por cable con Astra para la hostelería](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

### Opciones adicionales

- `gain=N` - nivel de señal de 0 a 100
- `buffer_size=N` - Tamaño del búfer en megabytes. Por defecto: `256`
- `legacy` - modo de compatibilidad con el antiguo modulador RESI para 10 transpoductores

## Solución de problemas[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#troubleshooting)

### No such file or directory

Si intenta encontrar el número de adaptador y se encuentra con un error:

```
find: ‘/dev/dvb’: No such file or directory
```

es probable que el controlador DigitalDevices no esté instalado. Por favor, [instale el](https://help.cesbo.com/misc/tools-and-utilities/dvb/dd-driver) controlador DigitalDevices
