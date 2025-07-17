---
title: Adapters Overview
sidebar:
    order: 1
---

DVB (Difusión de Video Digital) es un conjunto de estándares internacionales para la transmisión de televisión digital. Con Astra puedes recibir contenido multimedia de varias redes DVB, incluyendo fuentes satelitales, de cable y terrestres.

## Adaptador DVB

Para recibir la señal DVB en tu servidor, necesitarás hardware adicional: el Adaptador DVB. Los Adaptadores DVB son típicamente tarjetas PCIe, aunque también están disponibles adaptadores USB DVB, pero no se recomiendan para uso en producción.

![Adaptador DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-adapter.jpg)

Componentes clave de un adaptador DVB:

- **Sintonizador**: también conocido como frontend, este componente recibe la señal, convierte el análogo a digital y corrige errores.
- **Demultiplexor**: responsable de procesar la transmisión MPEG-TS recibida y filtrar las transmisiones individuales.
- **Interfaz Común (CI)**: algunos adaptadores vienen con una interfaz para conectar módulos de acceso condicional para desencriptar transmisiones.

Recomendamos adaptadores DVB de:

- [Digital Devices](https://www.digital-devices.eu)
- [TBS](https://www.tbsdtv.com)

## Preparar su sistema

Antes de comenzar, asegúrate de que el Adaptador DVB esté conectado a tu servidor y que el controlador de Linux apropiado esté instalado:

- [Instalación del controlador de DigitalDevices](/en/astra/adapters/dd-driver/)
- [Instalación del controlador de TBS](/en/astra/adapters/tbs-driver/)

## Opciones generales

Para crear un nuevo adaptador haz clic en "Nuevo Adaptador" en el menú principal.

![Opciones Generales DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-general.png)

- `Enable`: activar/desactivar adaptador;
- `Name`: nombre del adaptador;
- `ID`: identificador único del adaptador. Para un nuevo adaptador puedes dejar este campo en blanco y Astra lo generará;
- `Virtual`: adaptadores virtuales es una interfaz personalizada para recibir transmisiones MPTS de diferentes fuentes como SAT>IP, UDP, CI-Adapters;
- `SAT>IP`: usar adaptador en servidor remoto a través del protocolo SAT>IP (en desuso, usar Virtual - SAT>IP en su lugar);
- `Adapter`: seleccionar dispositivos del sistema;
- `Type`: seleccionar el estándar del adaptador.

## Opciones avanzadas

![Opciones Avanzadas DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-advanced.png)

- `Enable monitoring`: habilitar envío de telemetría a Zabbix o InfluxDB;
- `Timeout`: comprobar errores de DVR en un intervalo definido. Predeterminado: 120;
- `CI`: usar adaptador DVB-CI externo como [DigitalDevices DuoFlex CI](https://www.digital-devices.eu/shop/en/cine-series/ci-expansion/224/digital-devices-duoflex-ci-double-common-interface-ci-extension-duoflex-ci?c=173) o [TBS 6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html);
- `CI Device`: número de dispositivo en el adaptador DVB-CI;
- `CI Bitrate`: definir el bitrate para el adaptador DVB-CI;
- `BISS`: descifrar un transpondedor entero;
- `DVB API v3`: usar API obsoleta para leer información del Adaptador;
- `Budget Mode`: deshabilitar el filtrado de PID por hardware. En modo budget, Astra recibe el transpondedor completo del adaptador;
- `CA Delay`: retraso entre el envío de paquetes de control al Módulo de Acceso Condicional (CAM).

## Tipo de DVB

Otras opciones dependen del tipo de adaptador seleccionado:

- [DVB-S/S2](/en/astra/adapters/s/)
- [DVB-T/T2](/en/astra/adapters/t/)
- [DVB-C](/en/astra/adapters/c/)

## Escaneo

Una vez que tu adaptador esté configurado, puedes verificar la calidad de la señal y escanearla para canales disponibles. Leer más: [Escanear Adaptador DVB](/en/astra/adapters/scan/)

## Solución de problemas

Si tienes algún problema al iniciar el adaptador DVB, por favor revisa nuestra guía: [Solución de problemas](/en/astra/adapters/troubleshooting/)