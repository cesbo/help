---
title: "SAT>IP Cliente"
date: 2023-05-04
sidebar:
    order: 3
---

SAT>IP (o Sat-IP) especifica un protocolo de comunicación cliente-servidor basado en IP para una pasarela de TV. El servidor SAT>IP se conecta a una o más fuentes de emisión DVB y proporciona acceso a canales para múltiples clientes a través de protocolos HTTP o RTSP.

En esta cadena, Astra actúa como cliente SAT>IP. Puede recibir flujos DVB a través del protocolo SAT>IP y utilizarse como concentrador de canales de TV de distintas fuentes, para su posterior procesamiento y transmisión a los clientes.

## Ventajas de utilizar receptores SAT>IP[](/es/astra/receiving/dvb/satip-client#benefits-of-using-satip-receivers)

La ventaja más importante es la posibilidad de separar la recepción y el procesamiento de los canales. Normalmente, las antenas parabólicas y terrestres están situadas en el tejado, lo que requiere un cableado dedicado para distribuir la señal de satélite al servidor DVB (PC Linux con software Astra), situado en la sala de servidores. Esto puede resultar costoso, especialmente en edificios o complejos grandes. En cambio, con las soluciones SAT>IP podemos utilizar la infraestructura de red existente para distribuir la señal (o reducir el cableado a un único cable Ethernet) y esto puede reducir significativamente los costes de instalación. Dado que Astra puede manejar grandes cantidades de tráfico sin degradación del rendimiento, merece la pena utilizar esta opción.

![Diagrama SAT>IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/sat2ip.svg)

En segundo lugar, podemos ampliar la variedad de hardware con lo que puede recibir una señal DVB. Se trata de hardware de servidor SAT>IP como: [Digital Devices Octopus NET](https://www.digital-devices.eu/shop/en/business-tv/network-tuner/), HDHomeRun, Telestar R1, y muchos otros dispositivos, incluyendo opciones de bajo coste, que soportan SAT>IP Standard.

Lo que es importante mencionar, es que con el software del servidor Minisatip, también podemos utilizar tarjetas PCIe DVB y/o memorias USB (sintonizadores) como adaptadores SAT>IP en Astra Cesbo. Para más detalles sobre cómo utilizar el servidor Minisatip mira [nuestro artículo](/es/misc/tools-and-utilities/minisatip) y en [GitHub](https://github.com/catalinii/minisatip) del desarrollador.

## Configuración[](/es/astra/receiving/dvb/satip-client#configuration)

Para utilizar el protocolo SAT>IP, es necesario crear un nuevo adaptador en la interfaz web de Astra:

![SAT>Configuración IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-config.png)

- `Name` - escriba un nombre obligatorio para el Adaptador. Es mejor utilizar nombres que describan qué equipo y qué frecuencia se utiliza
- `Virtual` - seleccione la opción "SAT>IP
- `SAT>IP Server` - introduzca la dirección del servidor SAT>IP
- `Adapter` - número de adaptador en el servidor SAT>IP
- `Type` - seleccione el tipo de adaptador (Satélite/Terrestre/Cable)

Dependiendo del tipo de recepción, deberá configurar adicionalmente los datos del Transpondedor o la Frecuencia a escanear. Encontrará información más detallada en los siguientes enlaces: [Introducción a la sintonización del adaptador DVB](/es/astra/receiving/dvb/intro) y [Opciones del sintonizador DVB-S/S2](/es/astra/receiving/dvb/s)

Guarde la configuración del adaptador haciendo clic en el botón "Aplicar". Ahora puede hacer clic en el botón "Escanear" y seleccionar los programas necesarios.

![SAT>Panel IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-dashboard.png)
