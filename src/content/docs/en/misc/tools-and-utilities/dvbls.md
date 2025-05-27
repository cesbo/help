---
title: "Astra DVB List"
date: 2023-02-23
sidebar:
    order: 14
---

Astra DVB List is a simple built-in tool to get information about installed DVB adapters.

## Usage

```
astra --dvbls [OPTIONS]
```

Availabale options:

- `-o FILE` - export dvb list to the file

After start program print information about adapters to the console.

Adapter available to use:

```
Nov 10 09:00:00: INFO: adapter = 3, device = 0
Nov 10 09:00:00: INFO:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: INFO:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: INFO:     type = S
```

Adapter is taken:

```
Nov 10 09:00:00: WARNING: adapter = 2, device = 0
Nov 10 09:00:00: WARNING:     adapter in use
Nov 10 09:00:00: WARNING:     mac = 00:17:42:00:00:00
Nov 10 09:00:00: WARNING:     frontend = Montage DS3103/TS2022
Nov 10 09:00:00: WARNING:     type = S
```

An error occurred while accessing the device. Some hardware malfunction or you need to reinstall the driver:

```
Nov 10 09:00:00: ERROR: adapter = 1, device = 0
Nov 10 09:00:00: ERROR:     failed to open [Bad file descriptor]
```

## Export DVB list to the file

When Astra starts up, it retrieves information about the DVB adapters installed on the system. In some rare cases, this operation can take a long time. To prevent Astra from updating this information on each start, you can save it to a file.

To do this, follow these steps:

Create directory for Astra scripts:

```
mkdir -p /etc/astra/mod
```

Export the DVB list to a Lua file:

```
astra --dvbls -o /etc/astra/mod/dvb.lua
```
