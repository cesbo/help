---
title: "Recepción de MPTS vía UDP"
date: 2023-03-10
sidebar:
    order: 11
---

Con Astra, puedes recibir MPTS (Multi Program Transport Stream) de diferentes fuentes, incluyendo UDP. El MPTS recibido puede demultiplexarse en varios canales SPTS (Single Program Transport Stream).

## Adaptador virtual[](https://help.cesbo.com/astra/receiving/ip/mpts-via-udp#virtual-adapter)

:::note
Adaptador virtual disponible para versiones posteriores al 20 de septiembre de 2022
:::

Para una configuración rápida y sencilla de la recepción MPTS, puede utilizar el Adaptador Virtual. Haga clic en "Nuevo adaptador" en el menú principal:

![Adaptador virtual para MPTS](https://cdn.cesbo.com/help/astra/receiving/ip/mpts-via-udp/virtual-mpts.png)

En el **Dirección** establezca la fuente UDP, por ejemplo `udp://239.255.1.1:1234`. Más información sobre el formato de dirección UDP en [Recepción UDP/RTP](https://help.cesbo.com/astra/receiving/ip/udp).

Aplica los cambios y, a continuación, puedes escanear el adaptador para obtener una lista de los canales disponibles. Seleccione los canales que desea añadir y haga clic en Aplicar.

## Crear canales manualmente[](https://help.cesbo.com/astra/receiving/ip/mpts-via-udp#create-channels-manually)

En cualquier versión de Astra puedes añadir canales del flujo MPTS manualmente.

En primer lugar, analiza UDP MPTS con MPEG-TS Analyzer:

```
astra --analyze udp://239.255.1.1:1234
```

Más información sobre cómo analizar secuencias: Analizador [Astra MPEG-TS](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer). Analizador muestra información sobre los canales disponibles, por ejemplo:

```
INFO: PMT pnr:100 version:1
INFO: PMT pnr:200 version:1
```

A continuación, puede crear un canal haciendo clic en `New Stream` en el menú principal. En los ajustes del canal ajuste el nombre y la dirección de entrada con el número de programa (PNR): `udp://239.255.1.1:1234#pnr=100`. Y haga clic en Aplicar para guardar la configuración.
