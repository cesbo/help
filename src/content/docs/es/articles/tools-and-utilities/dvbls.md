---
title: "Astra DVB List"
date: 2023-02-23
sidebar:
    order: 14
---

Astra DVB List es una herramienta incorporada simple para obtener información sobre los adaptadores DVB instalados.

## Uso

```
astra --dvbls [OPCIONES]
```

Opciones disponibles:

- `-o FILE` - exporta la lista DVB al archivo

Después de iniciar, el programa imprime información sobre los adaptadores en la consola.

Adaptador disponible para usar:

```
Nov 10 09:00:00: INFO: adapter = 3, device = 0
Nov 10 09:00:00: INFO:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: INFO:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: INFO:     type = S
```

Adaptador en uso:

```
Nov 10 09:00:00: WARNING: adapter = 2, device = 0
Nov 10 09:00:00: WARNING:     adapter in use
Nov 10 09:00:00: WARNING:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: WARNING:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: WARNING:     type = S
```

Se produjo un error al acceder al dispositivo. Algún mal funcionamiento del hardware o necesita reinstalar el controlador:

```
Nov 10 09:00:00: ERROR: adapter = 1, device = 0
Nov 10 09:00:00: ERROR:     failed to open [Bad file descriptor]
```

## Exportar lista DVB al archivo

Cuando Astra se inicia, recupera información sobre los adaptadores DVB instalados en el sistema. En algunos casos raros, esta operación puede tomar mucho tiempo. Para evitar que Astra actualice esta información en cada inicio, puedes guardarla en un archivo.

Para hacer esto, sigue estos pasos:

Crea un directorio para los scripts de Astra:

```
mkdir -p /etc/astra/mod
```

Exporta la lista DVB a un archivo Lua:

```
astra --dvbls -o /etc/astra/mod/dvb.lua
```