---
title: UDP for Digital TV delivery
sidebar:
    order: 1
---

UDP (Protocolo de Datagrama de Usuario) es un protocolo de capa de transporte esencial en redes, conocido por su simplicidad y velocidad. Juega un papel significativo en aplicaciones de difusión y transmisión, incluidas las de entrega de televisión digital, donde se puede tolerar la pérdida de paquetes de datos pero la velocidad y los retrasos son cruciales.

![Diagrama de UDP Multicast](https://cdn.cesbo.com/help/astra/delivery/udp.svg)

Una de las aplicaciones clave de UDP es la entrega de contenido televisivo a través de redes multicast. Este enfoque se utiliza comúnmente en diversos sectores, con algunos de los casos de uso más predominantes como los siguientes:

- Organizaciones de Hospitalidad: Los hoteles, resorts y otras entidades de hospitalidad suelen usar multicast UDP para distribuir contenido televisivo a habitaciones y áreas comunes.
- Proveedores de Servicios de Internet: Redes locales de proveedores de internet utilizan este protocolo para entregar servicios de televisión digital a sus suscriptores.
- Recintos Deportivos: Estadios y arenas podrían usar multicast UDP para entregar transmisiones en vivo de un juego o partido a varias pantallas en todo el recinto.

## Formato de Dirección de Medios

La Dirección de Medios configura el destino del flujo UDP. El formato para esta dirección es el siguiente:

```
udp://[interface@]address[:port][#options]
```

En los corchetes se encuentran parámetros opcionales.

- `interface` - nombre de la interfaz local, como `eth0`. Si este campo no está definido, el flujo UDP se entregará según las rutas del sistema.
- `address` - dirección IPv4 del grupo multicast, localhost o host remoto para entrega unicast.
- `port` - puerto de red para la entrega de UDP. Si no se especifica, se utiliza el puerto predeterminado `1234`.

Opciones adicionales se pueden definir después del símbolo `#` y están separadas por el símbolo `&`, similar a los parámetros en un URL típico. Aquí están las opciones disponibles:

- `socket_size=bytes` - define el tamaño personalizado del socket del sistema. Si no se especifica, el valor predeterminado se toma de la configuración del sistema: `sysctl net.core.wmem_default`.
- `sync` - habilita la transmisión de UDP en un hilo separado con sincronización de bitrate.
- `no_sync` - desactiva la sincronización de bitrate si se ha habilitado globalmente.
- `cbr=Kbps` - habilita la sincronización de bitrate y el bitrate constante. Lee más sobre [Bitrate Constante (CBR)](/en/astra/delivery-udp/cbr/).
- `ttl=n` - controla la vida útil del datagrama para evitar que gire indefinidamente debido a errores de enrutamiento. El valor predeterminado es `32`.
- `sap` - activa SAP. Lee más sobre [Protocolo de Anuncio de Sesiones para Multicast](/en/astra/delivery-udp/sap/).

Aquí hay algunos ejemplos de cómo se puede usar el formato de dirección de medios en diferentes escenarios con Astra:

- Entrega multicast en una interfaz específica: Si quieres entregar un flujo UDP a un grupo multicast en la dirección `239.255.0.1` a través de una interfaz de red específica como `eth0`, la dirección se vería así: `udp://eth0@239.255.0.1`.
- Entrega multicast en ruta determinada por el sistema: Si deseas entregar un flujo UDP a un grupo multicast en la dirección `239.255.0.2` y quieres que el sistema determine la ruta (interfaz), la dirección sería: `udp://239.255.0.2`.
- Entrega unicast a un host específico: Si estás enviando un flujo unicast a un host específico en la dirección IP `192.168.1.100`, la dirección se vería así: `udp://192.168.1.100`.
- Entrega en un puerto específico: Si deseas entregar un flujo UDP a un grupo multicast en la dirección `239.255.0.3` en un puerto específico, digamos `5000`, la dirección sería: `udp://239.255.0.3:5000`.
- Activar CBR para preparar el flujo para la modulación DVB: Si deseas entregar un flujo UDP al modulador DVB, puede que necesites un bitrate constante, digamos `24000Kbit/s`, la dirección sería: `udp://239.255.0.4#cbr=24000`.
- Entrega localhost con un puerto específico: Si necesitas entregar un flujo UDP a un servicio en el mismo servidor, como FFMpeg para transcodificación, utilizarías la siguiente dirección: `udp://127.0.0.1:11000`.

## Interfaz Web

Para configurar una nueva salida UDP usando la Interfaz Web, comienza seleccionando "Nuevo Flujo" desde el menú principal. Luego, en la Lista de Salidas, haz clic en el ícono de engranaje y establece el "Tipo de Salida" en UDP. Alternativamente, puedes modificar un flujo existente abriendo su configuración, agregando una Nueva Salida y haciendo clic en el ícono de engranaje correspondiente.

![Opciones de Salida UDP](https://cdn.cesbo.com/help/astra/delivery/broadcasting/udp/options.png)

La mayoría de las opciones presentadas en la interfaz web corresponden directamente a los componentes de la dirección UDP, como se describe en la sección "Formato de Dirección de Medios".

## Solución de Problemas