---
title: Hardware Requirements
description: CPU, RAM, networking, and DVB adapter requirements for optimal Astra performance
sidebar:
    order: 31
---

La televisión digital es un servicio de alta carga y requiere algunos recursos. Astra no impone restricciones en el número de canales o clientes. Sin embargo, los protocolos elegidos y los recursos disponibles pueden influir en estos parámetros.

## CPU

Recomendamos una CPU con la frecuencia más alta disponible. La frecuencia óptima para una cabecera de TV digital es entre 2.5 y 3GHz o superior. Los procesadores con muchos núcleos, pero de menor frecuencia (por ejemplo, 1.8-2.5 GHz) no son muy adecuados para tareas que requieren baja latencia.

Los procesadores con solo caché L2 pueden no ser tan malos, pero en el 99% de los casos indica que el resto del equipo, como la placa base y la RAM, está obsoleto y no es adecuado para su uso.

Un ejemplo de un buen procesador:

- Intel Xeon 10C E5-2680v2
- Xeon 8C E5-2670
- Intel Xeon 6C X5670
- Core i5-9600K

Asegúrese de que la CPU esté operando en modo de rendimiento y que el modo de ahorro de energía esté deshabilitado. [Leer más](/en/articles/system/cpupower/).

## RAM

Para el funcionamiento del sistema y del software general, recomendamos al menos 2Gb de RAM. Reserve al menos un 20%.

Se necesita RAM adicional:

- Para la recepción, los recursos no son tan importantes como la entrega. Alrededor de 1Gb de RAM por cada 100 canales.
- Para moduladores DVB como TBS, DigitalDevices o HiDes, Astra asigna 256Mb por transpondedor.
- Para la entrega de canales UDP con sincronización de bitrate, Astra asigna unos 12Mb por canal. Aproximadamente 2Gb de RAM son suficientes para entregar 100 canales con el protocolo UDP.
- Para la entrega de canales UDP sin sincronización, Astra asigna solo 1Mb por canal. Esto generalmente no se recomienda.
- Para la entrega HLS, el uso de RAM depende de la configuración de HLS. Por defecto, Astra prepara 4 segmentos, cada uno de hasta 3 segundos de duración. Para un canal HD con una tasa de bits de 10Mbit por segundo, se asignarán aproximadamente 15Mb (calculados 4 * 3 * 10 / 8), además de un fijo de 2Mb por canal, que no depende de la tasa de bits del canal. Cada sesión activa requiere aproximadamente 2Mb de RAM.

La frecuencia de la RAM también es bastante importante. Cifras aproximadas para comparación:

- DDR1 400 MHz - no es adecuada
- DDR2 600 MHz - adecuada para configuraciones pequeñas, como recibir 10-15 canales y transmitirlos en udp
- DDR3 1333-1600 MHz - adecuada
- DDR4 2133-2800 MHz - adecuada
- DDR4 2800-3400 Mhz - cara e innecesaria

## Redes

Evite usar VLAN, Bonding y adaptadores de red de grado para consumidores.

### Tamaño del búfer de Rx/Tx

Los tamaños de los búferes de anillo de la NIC varían según el proveedor y la calidad de la NIC. Un tamaño mayor de búfer reduce la posibilidad de pérdida de paquetes durante los retrasos de programación.

- menos de 1024 generalmente no se recomiendan
- entre 2048 y 4096 se consideran buenos
- 8192 se considera excelente

### Colas

Los paquetes se transmiten entre el búfer de anillo de la NIC y el kernel del sistema operativo a través de colas. Cada cola se asigna a un núcleo de CPU dedicado. Los adaptadores de red equipados con múltiples colas pueden procesar paquetes simultáneamente.

Los adaptadores de red con una sola cola son solo para uso del consumidor y no se recomiendan para la configuración de cabecera de TV digital.

### Adaptadores de Red Recomendados

- **Intel**
    - 82599ES, 82599EB (2 puertos)
    - 82599EN (1 puerto)
    - i350AM2
- **Mellanox**
    - MT27520
- **SolarFlare**
    - SFN7122F

### Adaptadores de Red NO Recomendados

- **D-Link**, **Realtek**: cualquier modelo para uso del consumidor son no adecuados para la cabecera de TV digital.
- **Intel**: aunque recomendamos tarjetas de red Intel, no recomendamos específicamente estos modelos. Solo una cola y todos los datos serán procesados por un solo núcleo de CPU:
    - 82541GI Gigabit Ethernet Controller (rev 05)
    - 82541PI Gigabit Ethernet Controller (rev 05)
    - 82574L Gigabit Network Connection
    - 82540EM Gigabit Ethernet Controller (rev 03)
    - 82545EM
    - 82579LM
    - 82571EB Gigabit Ethernet Controller (rev 06)
    - 82573L Gigabit Ethernet Controller
    - 82573E Gigabit Ethernet Controller (rev 03)
    - 82578DC Gigabit Network Connection (rev 06)
    - 82546EB Gigabit Ethernet Controller (rev 01)
    - 82546GB Gigabit Ethernet Controller (rev 03)
    - I219-V (rev 31)
    - I217
- **Broadcom**
    - NetXtreme BCM5701
    - NetXtreme BCM5704
    - NetXtreme BCM5715
    - NetXtreme BCM5719 - periódicamente aparecen paquetes perdidos / omitidos a 256 mbit/s.
    - NetXtreme BCM5721
    - NetXtreme BCM5722
    - NetXtreme II BCM5708
    - NetXtreme II BCM5709 - aunque hay múltiples colas, RSS solo puede empezar a trabajar en una de ellas, creando una alta carga en un único núcleo.
    - NetXtreme II BCM5716, soporta la asignación de interrupciones a los núcleos disponibles, pero aún deja la mayor parte de los paquetes en el núcleo 0.
- **Qualcomm**
    - Atheros AR8121/AR8113/AR8114 Gigabit o Fast Ethernet
    - Atheros AR8131 Gigabit Ethernet
    - Atheros AR8132 Fast Ethernet
    - Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
- **Otros**
    - **VMware VMXNET3** - no adecuado para entrega UDP, demasiados paquetes perdidos
    - VIA Technologies, Inc. VT6105/VT6106S [Rhine-III] (rev 86)
    - 3Com Corporation 3c905C-TX/TX-M [Tornado]
    - Dispositivo de red Virtio de RedHat
    - Marvell 88E8057 PCI-E Gigabit Ethernet Controller
    - Marvell 88E8050 PCI-E ASF Gigabit Ethernet Controller
    - QLogic Corp. cLOM8214 1/10GbE Controller (rev 54) - no funciona cambiando el número de colas, por defecto 3 rx, 1 tx.
    - HP NC326i
    - NVidia Corporation MCP55 Ethernet (rev a3) - solo una cola. Como resultado, incluso con una pequeña cantidad de tráfico da una carga muy alta en el núcleo del procesador, que se encarga de procesar el tráfico de esta tarjeta de red, lo que lleva a un procesamiento de paquetes inaceptablemente lento.

## DVB

### Adaptadores DVB Recomendados

- **DigitalDevices**: Todos los adaptadores DVB de [Digital Devices](https://www.digital-devices.eu) funcionan bien con Astra.
    - DD Max SX8 - Receptor de 8 sintonizadores S/S2 + multiswitch
    - DD Max A8i - Receptor de 8 sintonizadores DVB-C2/T2 ISDB-T
- **TBS**: Adaptadores DVB de [TBS](https://www.tbsdtv.com) son una de las soluciones más populares para recibir televisión digital.
    - TBS6904 - Receptor de 4 sintonizadores S/S2
    - TBS6909 - Receptor de 8 sintonizadores S/S2 + multiswitch
    - TBS6205 - Receptor de 4 sintonizadores DVB-T2/T/C
- **DVBSky**
    - T980CI - Receptor de 1 sintonizador DVB-T/T2/C con ranura CI.
    - S950CI - Receptor de 1 sintonizador DVB-S/S2 con ranura CI.
    - T9580 - Receptor de 2 sintonizadores S2/T2/T/C con sintonizadores independientes.

Moduladores DVB e interfaces CI recomendados:

- **DigitalDevices**
    - DD RESI DVB-C FSM - Modulador DVB-C
    - DD Octopus Twin CI - 2 interfaces CI para la descramble de canales
- **TBS**
    - TBS6004 DVB-C 4 QAM PCIe Card
    - TBS6104 DVB-T Quad Modulator Card
    - TBS6900 - 2 interfaces CI para la descramble de canales

### Moduladores DVB NO Recomendados

- **DigitalDevices**
    - Modulador Digital Devices RESI SDR - DVB-T/ISDB-T (no soportado. comportamiento impredecible)
    - Modulador Digital Devices RESI SDR - Modulador PAL (no soportado)
- **TBS**
    - TBS6032 16 QAM Modulador DVB-C - (comportamiento impredecible)

### Adaptadores DVB NO Recomendados

- SkyStar 1 - tarjeta antigua, no soporta un estándar S2
- Mystique SaTiX-SX - tarjeta antigua, no soporta un estándar S2
- Cualquier adaptador USB

## Resumen

La RAM total necesaria se calcula como la suma de:

- Operación general del software
- Recepción
- Entrega
- Otro software en su servidor
- Reserva de RAM

### Ejemplo con Transmisión DVB-C

En resumen para 100 canales:

- Operación general del software: 2Gb
- Recepción: 1Gb
- Entrega con 4 transpondedores: 2Gb (256Mb por transpondedor, más recursos adicionales para multiplexación)
- Otro software: 0
- Reserva de RAM: (2 + 1 + 2) * 0.5 = 2.5Gb

Total (redondeado): 8Gb

### HLS

Debido a la naturaleza de HLS, todos los clientes están conectados directamente al servidor. Para balanceo de carga recomendamos usar servidores de caché. Lea más en [Proxy de Caché HLS con Nginx](/en/articles/tools-and-utilities/hls-caching-proxy-with-nginx/)