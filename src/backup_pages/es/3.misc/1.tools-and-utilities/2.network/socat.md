---
title: "Reenvío de puertos con socat"
date: 2023-02-28
---

Socat es una herramienta de línea de comandos que permite la transferencia bidireccional de datos entre dos flujos.

## Exposición de recursos locales[](https://help.cesbo.com/misc/tools-and-utilities/network/socat#exposing-local-resources)

Solicitud recibida en el puerto `11554` se remitirá a `192.168.88.100:554`

```
socat tcp-listen:11554,reuseaddr,fork tcp:192.168.88.100:554
```
