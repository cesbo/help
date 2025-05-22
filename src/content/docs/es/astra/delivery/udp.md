---
title: "UDP para TV digital"
date: 2023-05-18
sidebar:
    order: 2
---

El protocolo UDP (User Datagram Protocol) es un protocolo esencial de la capa de transporte en redes, conocido por su sencillez y velocidad. Desempeña un papel importante en las aplicaciones de radiodifusión y streaming, incluida la entrega de televisión digital, donde la pérdida de paquetes de datos puede tolerarse pero la velocidad y los retrasos son cruciales.

![Diagrama de multidifusión UDP](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

Una de las principales aplicaciones de UDP es la difusión de contenidos televisivos a través de redes multidifusión. Este enfoque se utiliza comúnmente en diversos sectores, y algunos de los casos de uso más frecuentes son los siguientes:

- Organizaciones de hostelería: Los hoteles, complejos turísticos y otras entidades hosteleras suelen utilizar la multidifusión UDP para distribuir contenidos de TV a las habitaciones y zonas comunes
- Proveedores de servicios de Internet: Las redes locales de los proveedores de internet aprovechan este protocolo para ofrecer servicios de televisión digital a sus abonados
- Instalaciones deportivas: Los estadios y los recintos deportivos pueden utilizar la multidifusión UDP para retransmitir en directo un partido a varias pantallas repartidas por el recinto.

## Formato de dirección de medios[](https://help.cesbo.com/astra/delivery/broadcasting/udp#media-address-format)

Media Address configura el destino del flujo UDP. El formato de esta dirección es el siguiente:

```
udp://[interface@]address[:port][#options]
```

Parámetros opcionales entre corchetes.

- `interface` - nombre de la interfaz local, como `eth0`. Si no se define este campo, el flujo UDP se entregará según las rutas del sistema
- `address` - Dirección IPv4 del grupo de multidifusión, localhost o host remoto para la entrega de unidifusión
- `port` - puerto de red para la entrega UDP. Si no se especifica, el puerto por defecto `1234` se utiliza

Se pueden definir opciones adicionales después de `#` y están separados por el símbolo `&` similar a los parámetros de una URL típica. Estas son las opciones disponibles:

- `socket_size=bytes` - define el tamaño personalizado del socket del sistema. Si no se especifica, el valor predeterminado se toma de la configuración del sistema: `sysctl net.core.wmem_default`
- `sync` - permite la transmisión de UDP en un hilo separado con sincronización de bitrate
- `no_sync` - desactivar la sincronización del bitrate si se ha activado globalmente
- `cbr=Kbps` - activa la sincronización de la tasa de bits y activa la inserción de paquetes de relleno para lograr una tasa de bits constante.
- `ttl=n` - controla el tiempo de vida del datagrama para evitar que se repita indefinidamente debido a errores de enrutamiento. El valor por defecto es `32`
- `sap` - activar SAP. Más información [Protocolo de anuncio de sesión para multidifusión](https://help.cesbo.com/astra/delivery/broadcasting/sap)

Aquí tienes algunos ejemplos de cómo se puede utilizar el formato de dirección multimedia en diferentes escenarios con Astra:

- Entrega multicast en una interfaz específica: Si desea entregar un flujo UDP a un grupo multidifusión en la dirección `239.255.0.1` a través de una interfaz de red específica como `eth0`la dirección sería la siguiente `udp://eth0@239.255.0.1`
- Entrega multidifusión en ruta definida por el sistema: Si desea entregar un flujo UDP a un grupo multidifusión en la dirección `239.255.0.2` y quieres que el sistema determine la ruta (interfaz), la dirección sería: `udp://239.255.0.2`
- Envío unidifusión a un host específico: Si está enviando un flujo unidifusión a un host específico en la dirección IP `192.168.1.100`la dirección sería la siguiente `udp://192.168.1.100`
- Entrega en un puerto específico: Si desea entregar un flujo UDP a un grupo multidifusión en la dirección `239.255.0.3` en un puerto específico, por ejemplo `5000`la dirección sería: `udp://239.255.0.3:5000`
- Active CBR para preparar el flujo para la modulación DVB: Si desea entregar un flujo UDP al modulador DVB, puede necesitar una tasa de bits constante, por ejemplo `24000Kbit/s`la dirección sería: `udp://239.255.0.4#cbr=24000`
- Entrega Localhost con un Puerto Específico: Si usted necesita entregar un flujo UDP a un servicio en el mismo servidor, como FFMpeg para transcodificación, usted usaría la siguiente dirección: `udp://127.0.0.1:11000`

## Interfaz web[](https://help.cesbo.com/astra/delivery/broadcasting/udp#web-interface)

Para configurar una nueva salida UDP utilizando la Interfaz Web, comience seleccionando "Nuevo Flujo" en el menú principal. A continuación, en la Lista de salidas, haga clic en el icono de engranaje y establezca el "Tipo de salida" en UDP. Alternativamente, puede modificar un flujo existente abriendo su configuración, añadiendo una Nueva Salida y haciendo clic en el icono del engranaje correspondiente.

![Opciones de salida UDP](https://cdn.cesbo.com/help/astra/delivery/broadcasting/udp/options.png)

La mayoría de las opciones presentadas en la interfaz web corresponden directamente a los componentes de la dirección UDP, como se describe en la sección "Formato de dirección de medios".

## Solución de problemas
