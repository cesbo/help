---
title: "Equipamiento recomendado"
date: 2023-06-23
sidebar:
    order: 12
---

Se aconseja el hardware de servidor para construir una cabecera de TV digital debido a su capacidad diseñada para un funcionamiento continuo y una alta calidad y fiabilidad. Los componentes clave son:

- Las carcasas de los servidores suelen incluir varias fuentes de alimentación equipadas con protección contra sobretensiones.
- Los módulos de memoria incorporan sistemas de corrección de errores
- Sistemas de refrigeración redundantes

Estos elementos, entre otros, contribuyen a una sólida configuración de la cabecera de televisión digital.

## CPU[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#cpu)

La frecuencia óptima de la CPU para una cabecera de TV digital es de 2,5 - 3GHz o superior. Los procesadores con muchos núcleos pero menor frecuencia (por ejemplo, 1,8-2,5 GHz) no son adecuados para tareas que requieren baja latencia.

Los procesadores con sólo caché L2 pueden no ser tan malos, pero en el 99% indica que el resto del equipo, como la placa base y la RAM, está obsoleto y no es apto para su uso.

Un ejemplo de buen procesador:

- Intel Xeon 10C E5-2680v2
- Xeon 8C E5-2670
- Intel Xeon 6C X5670
- Core i5-9600K

## RAM[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#ram)

La frecuencia de la RAM también es bastante importante. Cifras aproximadas para comparar:

- DDR1 400 MHz - no apta
- DDR2 600 MHz - adecuado para configuraciones pequeñas, como recibir de 10 a 15 canales y emitirlos en udp
- DDR3 1333-1600 MHz - adecuado
- DDR4 2133-2800 MHz - adecuado
- DDR4 2800-3400 Mhz - caro e innecesario

La cantidad de RAM sólo es importante para almacenar trozos HLS (segmentos). La cantidad media de RAM para 100 canales HLS es de 16 Gb.

## Adaptadores de red[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#network-adapters)

### tamaño del búfer rx/tx

Los tamaños de los búferes de anillo de las NIC difieren según el proveedor y el grado de la NIC. Un tamaño de búfer mayor reduce la posibilidad de pérdida de paquetes durante los retrasos de programación.

- inferiores a 1024 no suelen recomendarse
- entre 2048 y 4096 se consideran buenas
- 8192 se considera excelente

### colas

Los paquetes se transmiten entre el búfer en anillo de la NIC y el núcleo del sistema operativo a través de colas. A cada cola se le asigna un núcleo de CPU dedicado. Los adaptadores de red equipados con varias colas pueden procesar paquetes simultáneamente.

Adaptadores de red con cola única para uso exclusivo del consumidor y no recomendados para la configuración de cabeceras de TV digital.

## Adaptadores de red recomendados[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#recomended-network-adapters)

### Intel

- 82599ES, 82599EB (2 puertos)
- 82599EN (1 puerto)
- i350AM2

### Mellanox

- MT27520

### SolarFlare

- SFN7122F

## Adaptadores de red NO recomendados[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#not-recommended-network-adapters)

### D-Link, Realtek

Cualquier modelo por para uso exclusivo de los consumidores y no es adecuado para la cabecera de televisión digital.

### Intel

Aunque recomendamos las tarjetas de red Intel, no recomendamos estos modelos específicamente. Sólo una cola y todos los datos serán procesados por un único núcleo de CPU.

- 82541GI Controlador Gigabit Ethernet (rev 05)
- 82541PI Controlador Gigabit Ethernet (rev 05)
- 82574L Conexión de red Gigabit
- 82540EM Controlador Gigabit Ethernet (rev 03)
- 82545EM
- 82579LM
- 82571EB Controlador Gigabit Ethernet (rev 06)
- 82573L Controlador Gigabit Ethernet
- 82573E Controlador Gigabit Ethernet (rev 03)
- 82578DC Conexión de red Gigabit (rev 06)
- 82546EB Controlador Gigabit Ethernet (rev 01)
- 82546GB Controlador Gigabit Ethernet (rev 03)
- I219-V (rev 31)
- I217

### Broadcom

- Broadcom Corporation NetXtreme BCM5701
- Broadcom Corporation NetXtreme BCM5704
- Broadcom Corporation NetXtreme BCM5715
- Broadcom Corporation NetXtreme BCM5719 - periódicamente aparecen caídas / pérdidas a 256 mbit/s.
- Broadcom Corporation NetXtreme BCM5721
- Broadcom Corporation NetXtreme BCM5722
- Broadcom Corporation NetXtreme II BCM5708
- Broadcom Corporation NetXtreme II BCM5709 - aunque hay varias colas, RSS sólo puede empezar a trabajar en una de ellas, lo que crea una gran carga en un único núcleo en ejecución.
- Broadcom Corporation NetXtreme II BCM5716 , admite la asignación de interrupciones a los núcleos disponibles, pero sigue dejando la mayor parte de los paquetes en el núcleo 0

### Otros

- VIA Technologies, Inc. VT6105/VT6106S Rin-III (rev 86)
- Qualcomm Atheros AR8121/AR8113/AR8114 Gigabit o Fast Ethernet
- Qualcomm Atheros AR8131 Gigabit Ethernet
- Qualcomm Atheros AR8132 Fast Ethernet
- Qualcomm Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
- 3Com Corporation 3c905C-TX/TX-M Tornado
- Red Hat, Inc Dispositivo de red Virtio
- Marvell Technology Group Ltd. 88E8057 Controlador PCI-E Gigabit Ethernet
- Marvell Technology Group Ltd. 88E8050 Controlador PCI-E ASF Gigabit Ethernet
- QLogic Corp. cLOM8214 1/10GbE Controller (rev 54) - no funciona cambiando el número de colas, por defecto 3 rx, 1 rx tx.
- Tarjeta de red NC326i
- NVidia Corporation MCP55 Ethernet (rev a3) - sólo una cola. Como resultado, incluso con una pequeña cantidad de tráfico da una carga muy alta en el núcleo del procesador, que se dedica a procesar el tráfico de esta tarjeta de red, lo que conduce a un procesamiento de paquetes inaceptablemente lento.

## Adaptadores DVB recomendados[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#recommended-dvb-adapters)

### Dispositivos digitales

Todos los adaptadores DVB de [Digital Devices](https://www.digital-devices.eu/){target="_blank"} funcionan bien con Astra.

- DD Max SX8 - Receptor S/S2 de 8 sintonizadores + multiswitch
- DD Max A8i - Receptor de 8 sintonizadores DVB-C2/T2 ISDB-T

También funciona bien otro hardware de Digital Devices:

- DD RESI DVB-C FSM - Modulador DVB-C
- DD Octopus Twin CI - 2 interfaces CI para descodificación de canales

### TBS

Los adaptadores DVB de [TBS](https://www.tbsdtv.com/){target="_blank"} son una de las soluciones más populares para recibir televisión digital.

- TBS6904 - Receptor S/S2 de 4 sintonizadores
- TBS6909 - Receptor S/S2 de 8 sintonizadores + multiswitch
- TBS6205 - Receptor DVB-T2/T/C de 4 sintonizadores

También funciona bien otro hardware de TBS:

- TBS6004 Tarjeta DVB-C 4 QAM PCIe
- TBS6900 - 2 interfaces CI para descodificación de canales

### DVBSky

T980CI - Receptor DVB-T/T2/C de 1 sintonizador con ranura CI. S950CI - Receptor DVB-S/S2 de 1 sintonizador con ranura CI. T9580 - Receptor de 2 sintonizadores S2/T2/T/C con sintonizadores independientes.

## Adaptadores DVB NO recomendados[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#not-recommended-dvb-adapters)

### Dispositivos Digitales

- Modulador RESI DVB-T/ISDB-T SDR de dispositivos digitales no compatible

### Otros

- SkyStar 1 - tarjeta antigua, no admite un S2 estándar
- Mystique SaTiX-SX - tarjeta antigua, no admite un S2 estándar
- Cualquier adaptador USB
  
