---
title: "Auth: IP"
sidebar:
    order: 4
---

La Autorización IP verifica la dirección IP del cliente en la lista de reglas.

![Autorización IP](https://cdn.cesbo.com/help/alta/ott-settings/authorization/ip/options.png)

## Acciones

- **allow**: permitir acceso
- **deny**: denegar acceso
- **pass**: pasar al siguiente método de autorización

## Direcciones

La Autorización IP admite direcciones IPv4 e IPv6 con notación CIDR.

## Ejemplo

- `allow 127.0.0.1` - permitir solicitudes desde localhost
- `deny 192.168.0.100` - denegar acceso a una dirección individual
- `pass 192.168.0.0/24` - pasar el cliente de la red IPv4 al siguiente autorizador - securetoken o backend
- `pass fd32:ce04:8a5c::1/64` - lo mismo para la red IPv6