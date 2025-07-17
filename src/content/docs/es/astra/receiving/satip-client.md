---
title: "SAT>IP Client"
sidebar:
    order: 3
---

SAT>IP (o Sat-IP) especifica un protocolo de comunicación cliente-servidor basado en IP para un gateway de TV. El servidor SAT>IP se conecta a una o más fuentes de transmisión DVB y proporciona acceso a canales para múltiples clientes a través de los protocolos HTTP o RTSP.

En esta cadena, Astra actúa como un cliente SAT>IP. Puede recibir transmisiones DVB mediante el protocolo SAT>IP y ser utilizado como un centro para los canales de TV de diferentes fuentes, para su posterior procesamiento y transmisión a los clientes.

## Beneficios de usar receptores SAT>IP

La ventaja más importante es la posibilidad de separar la recepción y el procesamiento de los canales. Usualmente, las antenas parabólicas y las antenas terrestres están ubicadas en el techo, lo que requiere de cableado dedicado para distribuir la señal satelital al servidor DVB (PC Linux con software Astra) ubicado en la sala de servidores. Esto puede ser costoso, especialmente en edificios o complejos grandes. Con las soluciones SAT>IP, por otro lado, podemos usar la infraestructura de red existente para distribuir la señal (o reducir el cableado a un solo cable Ethernet) y esto puede reducir significativamente los costos de instalación. Dado que Astra puede manejar grandes cantidades de tráfico sin degradación del rendimiento, es una opción que vale la pena considerar.

![Diagrama SAT>IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/sat2ip.svg)

En segundo lugar, podemos ampliar la variedad de hardware con los que puedes recibir una señal DVB. Se trata de hardware de servidor SAT>IP como: [Digital Devices Octopus NET](https://www.digital-devices.eu/shop/en/business-tv/network-tuner/), HDHomeRun, Telestar R1, y muchos otros dispositivos, incluidas opciones de bajo costo, que soportan el estándar SAT>IP.

Es importante mencionar que, con el software de servidor Minisatip, también podemos usar tarjetas DVB PCIe y/o sticks USB (sintonizadores) como adaptadores SAT>IP en Astra Cesbo. Para obtener más detalles sobre cómo usar el servidor Minisatip, consulta [nuestro artículo](/en/articles/tools-and-utilities/minisatip/) y el desarrollador en [GitHub](https://github.com/catalinii/minisatip).

## Configuración

Para usar el protocolo SAT>IP, necesitas crear un Nuevo Adaptador en la Interfaz Web de Astra:

![Configuración SAT>IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-config.png)

- `Name` - escribe un nombre requerido para el adaptador. Es mejor usar nombres que describan qué equipo y qué frecuencia se utiliza.
- `Virtual` - selecciona la opción "SAT>IP".
- `SAT>IP Server` - introduce la dirección del servidor SAT>IP.
- `Adapter` - número de adaptador en el servidor SAT>IP.
- `Type` - selecciona el tipo de adaptador (Satélite/Terrestre/Cable).

Dependiendo del tipo de recepción, necesitarás configurar adicionalmente los datos del transpondedor o la frecuencia para escanear. Puedes encontrar información más detallada en los siguientes enlaces: [Introducción al Ajuste de Adaptador DVB](/en/astra/adapters/) y [Opciones de Sintonizador DVB-S/S2](/en/astra/adapters/s/)

Guarda la configuración del adaptador haciendo clic en el botón "Apply". Ahora puedes hacer clic en el botón "Scan" y seleccionar los programas requeridos.

![Tablero SAT>IP](https://cdn.cesbo.com/help/astra/receiving/dvb/satip/satip-dashboard.png)