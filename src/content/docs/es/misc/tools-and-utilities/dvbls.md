---
title: "Lista Astra DVB"
date: 2023-02-23
sidebar:
    order: 14
---

Astra DVB List es una sencilla herramienta integrada para obtener información sobre los adaptadores DVB instalados.

## Utilización[](/es/misc/tools-and-utilities/dvbls#usage)

```
astra --dvbls [OPTIONS]
```

Opciones disponibles:

- `-o FILE` - exportar la lista dvb al archivo

Después de iniciar el programa imprime información sobre los adaptadores en la consola.

Adaptador disponible para su uso:

```
Nov 10 09:00:00: INFO: adapter = 3, device = 0
Nov 10 09:00:00: INFO:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: INFO:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: INFO:     type = S
```

El adaptador está cogido:

```
Nov 10 09:00:00: WARNING: adapter = 2, device = 0
Nov 10 09:00:00: WARNING:     adapter in use
Nov 10 09:00:00: WARNING:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: WARNING:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: WARNING:     type = S
```

Se ha producido un error al acceder al dispositivo. Algún mal funcionamiento del hardware o necesitas reinstalar el controlador:

```
Nov 10 09:00:00: ERROR: adapter = 1, device = 0
Nov 10 09:00:00: ERROR:     failed to open [Bad file descriptor]
```

## Exportar la lista DVB al archivo[](/es/misc/tools-and-utilities/dvbls#export-dvb-list-to-the-file)

Cuando Astra se inicia, recupera información sobre los adaptadores DVB instalados en el sistema. En algunos casos excepcionales, esta operación puede tardar mucho tiempo. Para evitar que Astra actualice esta información en cada arranque, puedes guardarla en un archivo.

Para ello, sigue estos pasos:

Crear directorio para scripts Astra:

```
mkdir -p /etc/astra/mod
```

Exportar la lista DVB a un archivo Lua:

```
astra --dvbls -o /etc/astra/mod/dvb.lua
```
