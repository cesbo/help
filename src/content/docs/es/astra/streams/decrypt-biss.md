---
title: How to decrypt BISS CAS
sidebar:
    order: 35
---

BISS es un sistema básico de acceso condicional con una clave estática para proteger el contenido de accesos no autorizados.

## Recibir un Canal Codificado

Para descifrar un canal codificado, necesitas agregar la opción `biss` con la clave apropiada a la dirección de entrada. Por ejemplo:

```
dvb://a001#pnr=1&biss=12345600789ABC00
```

Al usar una clave BISS no válida, el flujo de datos descifrado estará corrupto. En este caso, el analizador Astra mostrará un `PES Error`.

## Retransmitir Canales Codificados

Para retransmitir un canal codificado sin descifrarlo, puedes usar la opción `cas` en la Dirección de Entrada. Ejemplo de una Dirección de Entrada con la opción `cas`:

```
dvb://a001#pnr=1&cas
```

Este método te permite pasar el canal codificado a la salida, preservando todos los datos necesarios para que los decodificadores puedan descifrar el contenido.