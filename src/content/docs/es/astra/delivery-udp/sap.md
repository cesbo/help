---
title: SAP for Multicast
---

El Protocolo de Anuncio de Sesión (SAP) es un protocolo utilizado para anunciar transmisiones Multicast disponibles en redes locales. Los clientes en la red escuchan los anuncios y reciben información como:

- Nombre de la transmisión
- Dirección y puerto Multicast
- TTL
- Formato de transmisión - RTP o UDP

Astra envía paquetes SAP al grupo multicast 239.255.255.255 en el puerto 9875.

## Configurar Astra

En la dirección de salida, añade la opción `sap` para activar los anuncios SAP.

![Configuración de Canal](https://cdn.cesbo.com/help/astra/delivery/broadcasting/sap/channel.png)

## Recibir SAP con VLC

Abre VLC Media Player y en la Lista de reproducción selecciona Red local → Transmisiones de red (SAP). VLC recibe los anuncios SAP y lista todas las transmisiones disponibles. Haz doble clic en la transmisión para comenzar a reproducir.