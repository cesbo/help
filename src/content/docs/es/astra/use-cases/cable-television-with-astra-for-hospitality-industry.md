---
title: Cable Television with Astra for Hospitality Industry
date: 2023-05-04
sidebar:
    order: 7
---

![Hospitalidad industria usando TV](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/og-image.png)

La TV de hospitalidad, ofreciendo una excelente solución de televisión con transmisiones de alta calidad y una selección de los mejores canales, es una parte esencial del servicio hotelero.

El número y la calidad de los canales crean una impresión positiva en los huéspedes. Sin embargo, aquí es donde surge el desafío. Los hoteles necesitan modernizar su red de televisión existente o diseñar una nueva, encontrando un equilibrio entre los costos del equipo y los servicios requeridos. Sugerimos considerar el software Astra, que cuenta con características potentes y flexibles cuando se utiliza junto con un modulador DVB-C. En este artículo, exploraremos los pros y los contras de tal solución y recorreremos los pasos para configurarla.

## Ventajas de la televisión por cable

- construida con un cable de TV regular, puedes usar la red existente del hotel
- una gran cantidad de canales sin restricciones de calidad
- cualquier televisor es capaz de recibir TV por cable. No necesitas ningún hardware adicional en las habitaciones de los huéspedes
- confiabilidad de la red
- control de transmisión como monitoreo, configuración, cambio de canal, etc. Todo esto es posible con Astra Web Interface
- por último, pero no menos importante, puedes expandir fácilmente el número de fuentes de video y canales. Astra te permite recibir una señal de entrada no solo de tarjetas DVB, sino también de una red (HTTP, HLS, UDP, RTSP), así como crear tus propios canales de TV a partir de tus grabaciones de video.

## Desventajas

- el costo de la cabecera, incluyendo el modulador DVB-C y tarjetas DVB para recepción
- algunos televisores antiguos pueden no soportar el estándar DVB-C para TV por cable

## Hardware

![Diagrama de TV de hospitalidad](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/ctv.svg)

Este diagrama simple se utiliza para la ilustración. Tenemos una señal satelital, un PC Servidor basado en Linux con tarjeta(s) DVB-S/S2, y tarjeta(s) Moduladora RESI DVB-C FSM.

### Receptor DVB-S/S2

Para recibir canales satelitales puedes usar cualquier adaptador DVB-S/S2 con controladores para Linux.

![DigitalDevices Max SX8](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/maxsx82018.jpg)

Los receptores DVB más populares son:

- [Digital Devices MAX SX8 Pro](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/340/digital-devices-max-sx8-pro-4/8-8-tuner-tv-card-dvb-s2/dvb-s2x-full-spectrum)
- [Digital Devices Max M4](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/341/digital-devices-max-m4-4x-multi-band-tuner-tv-card?c=167) - todo terreno para recepción satelital, por cable o terrestre
- [TBS6909-X](https://www.tbsdtv.com/products/tbs6909-x-dvb-s-s2-s2x-octa-tuner-pcie-card.html)

### Modulador DVB-C

En este artículo, consideramos pasos simples sobre Cómo configurar Astra para Modulación DVB-C usando [RESI DVB-C FSM 8](https://www.digital-devices.eu/shop/en/business-tv/qam-sdr-modulator/). También puedes usar el modulador [TBS6004](https://www.tbsdtv.com/products/tbs6004-dvb-c-4-qam-pcie-card.html).

![Modulador DigitalDevices RESI DVB-C](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/resi-fsm.png)

Descripción breve:

- RESI DVB-C FSM 8 tiene 8 transpondedores de acuerdo con la especificación DVB-C
- Rango de frecuencia: 114 - 858 MHz
- Velocidades de símbolo: 1.0 - 7.1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Relación señal / ruido: 42dB
- Salida con 8 transpondedores activos: 101 dBµV
- El FSM8 puede alcanzar hasta 7.1 MSym/s y QAM256. La tasa máxima de bits entregada es de aproximadamente 52Mbps

:::note
Recomendamos no enviar más de 40-42Mbps a un solo transpondedor, especialmente si la corriente de entrada es del satélite. Ya que los canales satelitales usualmente tienen tasa de bits variable, que, por ejemplo, en un canal HD puede cambiar de 6Mbps a 11Mbps.
:::

De acuerdo con eso, podemos calcular cuántos canales podemos colocar en un solo transpondedor y en todos los transpondedores disponibles:

- 4 x canales HD ~7Mbps = 28Mbps
- 4 x canales SD ~3Mbps = 12Mbps

Aproximadamente podemos obtener 8 canales en un transpondedor, multiplicados por 8 transpondedores podemos tener hasta 64 canales en tu red DVB-C. Esta combinación de canales puede ser diferente, depende de tus necesidades. Si necesitas más canales, puedes obtener RESI DVB-C FSM 16 o 24.

## Requisitos

### Hardware

- Servidor PC, al menos CPU Quad Core Intel® o AMD® 2.8GHz, 8Gb RAM, con 2 o más ranuras PCIe, dependiendo de la cantidad de tarjetas PCIe
- Moduladores DVB-C (RESI o TBS)
- Tarjetas de TV DVB-S/S2 o DVB-T/T2 (como ejemplo)

### Software

- Sistema operativo basado en Linux. Recomendamos Ubuntu 22.04 LTS
- Cesbo Astra
- Controladores de Tarjeta DVB
- Navegador de Internet en tu PC. Chrome, Safari, o Firefox

## Configurar Astra

### Instalar Astra

Primero que nada, necesitamos preparar nuestra máquina servidor e instalar Linux y Astra. La información sobre la instalación de Ubuntu se puede encontrar en el [sitio web oficial](https://ubuntu.com/tutorials/install-ubuntu-server).

La instalación de Astra es simple: solo copia un archivo binario único en tu servidor. Aquí, en detalle, puedes encontrar cómo [Instalar Astra](/en/astra/getting-started/install).

A menudo los clientes olvidan configurar sus adaptadores antes de los siguientes pasos. Así que asegúrate de tener los controladores de la tarjeta DVB instalados en el servidor.

- [Instalación de Controladores DigitalDevices](/en/astra/adapters/dd-driver/)
- [Instalación de Controladores TBS](/en/astra/adapters/tbs-driver/)
- Para otros adaptadores puedes encontrar información en el sitio web del vendedor.

### Recibir canales con Astra

Ahora es el momento de configurar todos nuestros adaptadores y encontrar los canales que queremos modular a través de DVB-C.

Para configurar la recepción de canales desde satélite recomendamos echar un vistazo a estos artículos:

- [Introducción a la Sintonización de Adaptadores DVB](/en/astra/adapters/)
- [Opciones de Sintonizador DVB-S/S2](/en/astra/adapters/s/)
- [Escanear Adaptador DVB](/en/astra/adapters/scan/)

A continuación, se proporciona una captura de pantalla de las configuraciones de ejemplo del adaptador:

![Ejemplo DVB-S2](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dvb-s-settings.png)

### Escanear y seleccionar los canales requeridos

Cuando averiguamos cómo configurar nuestros adaptadores, podemos hacer un escaneo del transpondedor requerido (frecuencia) y agregar canales a Astra seleccionando todos los programas que deseas añadir.

![Escanear adaptador configurado](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/scan.png)

![Canales añadidos en el tablero](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dashboard.png)

### Crear Nueva Corriente con MPTS

MPTS es un flujo de transporte de múltiples programas (o multiplex) que es un flujo que contiene varios servicios (programas). Se utiliza para transferir canales a moduladores ip-qam/ip-asi y multiplexores. A continuación se muestran capturas de pantalla de las páginas de configuración más generales.

![Configuración General de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-general.png)

![Lista de entrada de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-input.png)

![Configuración de SDT de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-sdt.png)

En la configuración de SDT se debe proporcionar toda la información sobre el canal:

- `Nombre del servicio` - nombre del programa
- `PNR` - número del programa debe ser el mismo que en la lista de entrada
- `LCN` - número lógico define qué número de canal estará en el televisor

![Configuración de NIT de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-nit.png)

En la configuración de NIT proporciona información para el transpondedor DVB-C.

### Configurar el Modulador

En este punto, ya hemos encontrado y agregado todos los canales necesarios en Astra, creado una Nueva Corriente y configurado el MPTS, que debe ser enviado al modulador. Para configurar la señal de salida al modulador RESI DVB-C necesitamos saber el Número de adaptadores RESI en el sistema.

En la consola del servidor se encuentra el número de la tarjeta y los moduladores usando el comando:

```sh
find "/dev/dvb" -name "mod*"
```

En la salida, obtenemos el número del adaptador y sus moduladores como:

```
/dev/dvb/adapter0/mod0
```

- `adapter0` - número de adaptador en el sistema
- `mod0` - número de dispositivo (transpondedor) en este adaptador. El rango de 0 a 7 será para el modulador FSM8

Ahora es el turno de configurar la señal de salida al modulador RESI DVB-C en la configuración de MPTS.

![Lista de salida de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-output.png)

Como resultado, deberíamos obtener una corriente completamente configurada, como se muestra en la captura de pantalla:

![MPTS en el Tablero](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-dashboard.png)

## Monitorear y gestionar

Con Astra, puedes analizar la calidad y estabilidad de los flujos de transporte. Exportar estadísticas y eventos a sistemas externos como Zabbix o Grafana.

También, en cualquier momento, puedes abrir la Interfaz Web de Astra para simplemente revisar el Tablero. Aquí verás adaptadores ya configurados, corrientes creadas y algunas opciones útiles como fuerza de señal/calidad, tasa de bits en los canales, y más.

![Interfaz Web de Astra](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/astra-dashboard.png)

![Zabbix](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/zabbix.png)

![Grafana](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/grafana.png)

## Comprobación de la señal de salida DVB-C

Con estos simples pasos, hemos configurado nuestra Corriente. Ahora tenemos los canales convertidos y modulados con el modulador RESI DVB-C FSM.

La mejor manera de comprobar la señal de salida es utilizar un analizador. Hay muchos modelos diferentes de muchos fabricantes. Por ejemplo, Telestar:

![Analizador Telestar](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/telestar.jpg)

También podemos conectar el cable coaxial de RESI al televisor, y en la configuración de la TV realizar un nuevo escaneo de canales DVB-C, ya sea Escaneo Completo o Escaneo de Red (o especificar manualmente los parámetros del escaneo). Las configuraciones de búsqueda de canales dependen completamente del fabricante del televisor, pero en general son muy similares.

## Resolución de problemas de recepción DVB

En caso de que encuentres algún problema durante la configuración, proporcionamos una lista de artículos sobre cómo identificar problemas y eliminar la posible causa del problema: [Resolución de problemas de recepción DVB](/en/astra/adapters/troubleshooting/).

Cuidamos de cada uno de nuestros clientes y tu mejor experiencia de trabajo con Cesbo Astra, por eso ofrecemos más canales de soporte como ayuda en línea y soporte vía E-mail.