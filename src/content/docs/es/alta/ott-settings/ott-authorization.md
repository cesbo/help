---
title: OTT Authorization
sidebar:
    order: 3
---

La autorización es un proceso de concesión de acceso a contenido protegido a un usuario.

## Métodos

- [IP](/en/alta/ott-settings/auth-ip/) - por la dirección IP del cliente
- [Securetoken](/en/alta/ott-settings/auth-securetoken/) - enlaces temporales con token
- [HTTP Backend](/en/alta/ott-settings/auth-backend/) - con servicio externo

## Prioridad

Todos los métodos funcionan en el siguiente orden:

1. **IP**: salta al siguiente método si la IP está en la regla de omisión o no se relaciona con ninguna regla
1. **Securetoken**: salta al siguiente método si el formato del token no coincide
1. **Backend**: salta al siguiente método si el backend no está disponible
1. **Default**: acción predeterminada. Si no está configurado, se permitirá el acceso