---
title: BISS
sidebar:
    order: 11
---

BISS es un sistema básico de acceso condicional con una clave estática para proteger el contenido de accesos no autorizados.

:::caution
BISS tiene una protección débil y puede ser vulnerado mediante ataques de fuerza bruta. Úsalo solo cuando un cifrado más fuerte no esté disponible.
:::

## Formato de Clave BISS

Las claves BISS tienen 16 caracteres hexadecimales. Puedes usar cualquiera de los formatos:

- Clave completa con sumas de verificación: `1234569C789ABCCE` (16 caracteres)
- Clave simplificada: `12345600789ABC00` (Astra calcula las sumas de verificación automáticamente)

Recomendamos usar el formato simplificado para evitar errores en el cálculo de sumas de verificación.

## Encriptar un Stream

Agrega la opción `biss` con tu clave a la dirección de salida:

```
udp://239.255.1.1:1234#biss=12345600789ABC00
```

### Clave sin Sumas de Verificación

En la versión 250502 y posteriores, puedes usar una clave BISS tal cual, sin el cálculo de la suma de verificación. Añade la opción `no_checksum` a la dirección:

```
udp://239.255.1.1:1234#biss=12345600789ABC00&no_checksum
```

Como resultado, la clave será utilizada tal cual, sin calcular las sumas de verificación.

## Verificando si la Encriptación Funciona

Usa el analizador de Astra para verificar que el stream esté encriptado:

```sh
astra --analyze udp://239.255.1.1:1234
```

El analizador mostrará mensajes confirmando que el stream está encriptado.

## Reproducción de Streams Encriptados

**Con VLC Player:**

```sh
vlc --ts-csa-ck 1234569C789ABCCE udp://@239.255.1.1:1234
```

Nota: VLC requiere la clave completa con las sumas de verificación.

**Con Astra:**

Consulta [Cómo desencriptar BISS CAS](/en/astra/streams/decrypt-biss/) para recibir streams encriptados.