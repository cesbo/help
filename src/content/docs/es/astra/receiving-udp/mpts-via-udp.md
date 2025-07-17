---
title: MPTS via UDP
sidebar:
    order: 11
---

Con Astra, puedes recibir MPTS (Multi Program Transport Stream) de diferentes fuentes, incluyendo UDP. El MPTS recibido puede ser demultiplexado en varios canales SPTS (Single Program Transport Stream).

## Adaptador Virtual

:::caution
Adaptador Virtual disponible para versiones lanzadas después del 20 de septiembre de 2022
:::

Para una configuración rápida y sencilla de la recepción de MPTS, puedes usar el Adaptador Virtual. Haz clic en "Nuevo Adaptador" en el menú principal:

![Adaptador Virtual para MPTS](https://cdn.cesbo.com/help/astra/receiving/ip/mpts-via-udp/virtual-mpts.png)

En el campo **Dirección** establece la fuente UDP, por ejemplo `udp://239.255.1.1:1234`. Lee más sobre el formato de dirección UDP en [Recepción UDP/RTP](/en/astra/receiving-udp/).

Aplica los cambios, y luego puedes escanear el adaptador para obtener una lista de los canales disponibles. Selecciona los canales que deseas agregar y haz clic en aplicar.

## Crear canales manualmente

En cualquier versión de Astra, puedes añadir canales del flujo MPTS manualmente.

Primero analiza el UDP MPTS con MPEG-TS Analyzer:

```sh
astra --analyze udp://239.255.1.1:1234
```

Lee más sobre cómo analizar flujos: [Astra MPEG-TS Analyzer](/en/articles/tools-and-utilities/astra-mpeg-ts-analyzer/). El analizador muestra información sobre los canales disponibles, por ejemplo:

```
INFO: PMT pnr:100 version:1
INFO: PMT pnr:200 version:1
```

Luego puedes crear un canal haciendo clic en `Nuevo Stream` en el menú principal. En la configuración del canal establece el nombre y la dirección de entrada con el número de programa (PNR): `udp://239.255.1.1:1234#pnr=100`. Y haz clic en Aplicar para guardar la configuración.