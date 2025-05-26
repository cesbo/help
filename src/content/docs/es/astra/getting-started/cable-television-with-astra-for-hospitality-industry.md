---
title: "Televisión por cable con Astra para la hostelería"
date: 2023-05-04
image: https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/og-image.png
sidebar:
    order: 7
---

Hospitality TV, que ofrece una excelente solución de televisión con emisiones de alta calidad y una selección de los mejores canales, es una parte esencial del servicio hotelero.

El número y la calidad de los canales crean una impresión positiva en los huéspedes. Sin embargo, aquí es donde surge el reto. Los hoteles tienen que modernizar su red de TV existente o diseñar una nueva, buscando un equilibrio entre los costes de los equipos y los servicios necesarios. Le sugerimos que considere el software Astra, que cuenta con funciones potentes y flexibles cuando se utiliza junto con un modulador DVB-C. En este artículo analizaremos los pros y los contras de esta solución y explicaremos los pasos necesarios para configurarla.

## Ventajas de la televisión por cable[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#advantages-of-cable-television)

- construido sobre un cable de TV normal, puede utilizar la red existente del hotel
- un gran número de canales sin restricciones de calidad
- cualquier televisor es capaz de recibir televisión por cable. No se necesita ningún hardware adicional en las habitaciones de los huéspedes.
- fiabilidad de la red
- control de emisiones, como monitorización, configuración, conmutación de canales, etc. Todo esto es posible con Astra Web Interface
- Por último, pero no menos importante, puedes ampliar de forma sencilla el número de fuentes y canales de vídeo. Astra te permite recibir una señal de entrada no sólo desde tarjetas DVB, sino también desde una red (HTTP, HLS, UDP, RTSP), así como crear tus canales de TV a partir de tus grabaciones de vídeo.

## Desventajas[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#disadvantages)

- el coste de la cabecera, incluido el modulador DVB-C y las tarjetas DVB para recibir
- es posible que algunos televisores antiguos no admitan el estándar DVB-C para la televisión por cable

## Hardware[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#hardware)

![Diagrama de TV para hostelería](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/ctv.svg)

Este sencillo diagrama se utiliza para la ilustración. Tenemos una señal de satélite, un PC servidor basado en Linux con tarjeta(s) DVB-S/S2 y tarjeta(s) moduladora(s) RESI DVB-C FSM.

### Receptor DVB-S/S2

Para recibir canales por satélite puede utilizar cualquier adaptador DVB-S/S2 con controladores para Linux.

![Dispositivos Digitales Max SX8](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/maxsx82018.jpg)

Los receptores DVB más populares son:

- [Dispositivos digitales MAX SX8 Pro](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/340/digital-devices-max-sx8-pro-4/8-8-tuner-tv-card-dvb-s2/dvb-s2x-full-spectrum)
- [Dispositivos digitales Max M4](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/341/digital-devices-max-m4-4x-multi-band-tuner-tv-card?c=167): todoterreno para la recepción por satélite, cable o terrestre
- [TBS6909-X](https://www.tbsdtv.com/products/tbs6909-x-dvb-s-s2-s2x-octa-tuner-pcie-card.html)

### Modulador DVB-C

En este artículo, consideramos pasos sencillos sobre Cómo configurar Astra para DVB-C Modulación utilizando [RESI DVB-C FSM 8](https://www.digital-devices.eu/shop/en/business-tv/qam-sdr-modulator/). También puede utilizar el modulador [TBS6004](https://www.tbsdtv.com/products/tbs6004-dvb-c-4-qam-pcie-card.html).

![Modulador DVB-C RESI de DigitalDevices](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/resi-fsm.png)

Breve descripción:

- RESI DVB-C FSM 8 tiene 8 transpondedores según la especificación DVB-C
- Gama de frecuencias: 114 - 858 MHz
- Velocidades de símbolos: 1,0 - 7,1 MSym/s
- QAM: 16, 32, 64, 128, 256
- Relación señal/ruido: 42 dB
- Salida con 8 transpondedores activos: 101 dBµV
- El FSM8 puede emitir hasta 7,1 MSym/s y QAM256. La tasa de bits máxima entregada es de unos 52 Mbps

:::note Aconsejamos no enviar más de 40-42Mbps a un solo transpondedor, especialmente si el flujo de entrada procede del satélite. Los canales por satélite suelen tener un bitrate flotante que, por ejemplo, en un canal HD puede pasar de 6 Mbps a 11 Mbps.
:::

Según esto, podemos calcular cuántos canales podemos poner en un solo transpondedor y en todos los transpondedores disponibles:

- 4 x canales HD ~7Mbps = 28Mbps
- 4 x canales SD ~3Mbps = 12Mbps

Aproximadamente podemos obtener 8 canales en un transpondedor, multiplicado por 8 transpondedores podemos obtener hasta 64 canales en su red DVB-C. Esta combinación de canales puede ser diferente, depende de sus necesidades. Si necesita más canales puede obtener RESI DVB-C FSM 16 o 24.

## Requisitos[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#requirements)

Hardware:

- PC servidor, CPU Intel® o AMD® de al menos cuatro núcleos a 2,8 GHz, 8 Gb de RAM, con 2 o más ranuras PCIe, en función de la cantidad de tarjetas PCIe.
- Moduladores DVB-C (RESI o TBS)
- Tarjetas de TV DVB-S/S2 o DVB-T/T2 (a modo de ejemplo)

Software:

- Sistema operativo basado en Linux. Recomendamos Ubuntu 22.04 LTS
- Cesbo Astra
- Controladores de tarjeta DVB
- Navegador de Internet en tu PC. Chrome, Safari o Firefox

## Configurar Astra[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#configure-astra)

### Instalar Astra

En primer lugar, tenemos que preparar nuestra máquina servidor e instalar Linux y Astra. La información sobre la instalación de Ubuntu se puede encontrar en el [sitio web oficial](https://ubuntu.com/tutorials/install-ubuntu-server)

La instalación de Astra es sencilla - sólo tienes que copiar un único archivo binario a tu servidor. Aquí, en detalle, usted puede encontrar cómo [instalar Astra](/es/astra/getting-started/install)

Muy a menudo los clientes olvidan configurar sus Adaptadores antes de los siguientes pasos. Así que asegúrese de que tiene instalados los controladores de la tarjeta DVB en el servidor.

- [Instalación del controlador DigitalDevices](/es/misc/tools-and-utilities/dd-driver)
- [Instalación del controlador TBS](/es/misc/tools-and-utilities/tbs-driver)
- Para otros adaptadores, puede encontrar información en el sitio web del vendedor

### Canales de recepción con Astra

Ahora es el momento de configurar todos nuestros Adaptadores y encontrar los canales, que queremos Modular sobre DVB-C. Lista de todos los artículos sobre recepción de canales disponible aquí: [Recepción con Astra](/es/astra/receiving).

Para configurar la recepción de canales desde satélite te recomendamos que eches un vistazo a estos artículos:

- [Introducción a la sintonización del adaptador DVB](/es/astra/receiving/intro)
- [Opciones de sintonizador DVB-S/S2](/es/astra/receiving/s)
- [Scan DVB Adaptador](/es/astra/receiving/scan)

A continuación se muestra una captura de pantalla de la configuración del adaptador de ejemplo:

![DVB-S2 Ejemplo](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dvb-s-settings.png)

### Buscar y seleccionar los canales deseados

Una vez configurados nuestros Adaptadores, podemos hacer un escaneo del Transpondedor requerido (frecuencia) y añadir canales a Astra seleccionando todos los programas que queramos añadir.

![Escanear adaptador configurado](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/scan.png)

![Canales añadidos en el salpicadero](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dashboard.png)

### Crear un nuevo flujo con MPTS

MPTS es un Multi Program Transport Stream (o multiplex) es un flujo que contiene varios servicios (programas). Se utiliza para transferir canales a moduladores y multiplexores ip-qam/ip-asi. A continuación se muestran capturas de pantalla de la mayoría de las páginas de configuración general

![Configuración general de MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-general.png)

![Lista de entradas MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-input.png)

![Ajustes MPTS SDT](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-sdt.png)

En la configuración SDT se debe proporcionar toda la información sobre el canal:

- `Service Name` - nombre del programa
- `PNR` - el número de programa debe ser el mismo que en la lista de entrada
- `LCN` - El número lógico define el número de canal que aparecerá en el televisor.

![Ajustes MPTS NIT](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-nit.png)

En los ajustes de NIT proporcione información para el transpondedor DVB-C.

### Configuración del modulador

En este punto, ya hemos encontrado y añadido todos los canales necesarios en Astra, creado un Nuevo Stream, y configurado el MPTS, que debe ser enviado al modulador. Para configurar la señal de salida al modulador DVB-C RESI necesitamos saber el número de adaptadores RESI en el sistema.

En la consola del servidor, busque el número de tarjeta y los moduladores mediante el comando

```
find "/dev/dvb" -name "mod*"
```

En la salida - obtenemos el número del adaptador y sus moduladores como:

```
/dev/dvb/adapter0/mod0
```

- `adapter0` - número de adaptador en el sistema
- `mod0` - número de dispositivo (transpondedor) en este adaptador. El rango de 0 a 7 será para el modulador FSM8

Ahora es el turno de configurar la señal de salida al modulador DVB-C RESI en los ajustes MPTS

![Lista de salidas MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-output.png)

Como resultado, deberíamos obtener un Stream completamente configurado, como se muestra en la captura de pantalla:

![MPTS en el salpicadero](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-dashboard.png)

## Supervisar y gestionar[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#monitor-and-manage)

Con Astra, podrá Analizar la calidad y estabilidad de los flujos de transporte. Exportar estadísticas y eventos a sistemas externos como Zabbix o Grafana.

También puedes abrir en cualquier momento la interfaz web de Astra para ver el panel de control. Aquí verás los adaptadores ya configurados, los streams creados y algunas opciones útiles como la intensidad/calidad de la señal, el bitrate de los canales, etc.

![Interfaz web Astra](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/astra-dashboard.png)

![Zabbix](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/zabbix.png)

![Grafana](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/grafana.png)

## Comprobación de la señal DVB-C de salida[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#checking-the-output-dvb-c-signal)

Con estos sencillos pasos hemos configurado nuestro Stream. Ahora tenemos los canales convertidos y modulados con el modulador RESI DVB-C FSM.

La mejor manera de comprobar la señal de salida es utilizar un analizador. Hay muchos modelos diferentes de muchos fabricantes. Por ejemplo, Telestar:

![Analizador Telestar](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/telestar.jpg)

Además, podemos conectar el cable coaxial del RESI al televisor y, en la configuración del televisor, realizar una nueva búsqueda de canales DVB-C, ya sea Búsqueda completa o Búsqueda de red (o especificar los parámetros de búsqueda manualmente). Los ajustes de búsqueda de canales dependen totalmente del fabricante del televisor, pero en general son muy similares.

## Solución de problemas de recepción DVB[](/es/astra/getting-started/cable-television-with-astra-for-hospitality-industry#troubleshooting-dvb-receiving)

En caso de que surja algún problema durante la configuración, le ofrecemos una lista de artículos sobre cómo identificar problemas y eliminar la posible causa del problema: [Solución de problemas de recepción DVB](/es/misc/troubleshooting/dvb)

Cuidamos de cada uno de nuestros clientes y de su mejor experiencia de trabajo con Cesbo Astra, por eso ofrecemos más canales de soporte como la ayuda Online y el soporte vía E-mail.
