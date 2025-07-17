---
title: "Port forwarding with socat"
date: 2023-02-28
sidebar:
    order: 9
---

Socat es una herramienta de línea de comandos que permite la transferencia de datos bidireccional entre dos flujos.

## Exponiendo recursos locales

La solicitud recibida en el puerto `11554` será reenviada a `192.168.88.100:554`

```
socat tcp-listen:11554,reuseaddr,fork tcp:192.168.88.100:554
```