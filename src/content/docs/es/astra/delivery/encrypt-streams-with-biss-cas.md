---
title: "Cifrar flujos con BISS CAS"
date: 2023-04-02
sidebar:
    order: 6
---

El Basic Interoperable Scrambling System (BISS) es un sistema de acceso condicional sencillo y eficaz que utiliza una clave estática para proteger los contenidos de accesos no autorizados. BISS se basa en el algoritmo de codificación común (CSA), que codifica los datos del canal, garantizando la transmisión segura de contenidos a través de redes de radiodifusión por satélite y terrestres.

::alert
Aunque BISS proporciona un nivel de protección de contenidos, es esencial señalar que este sistema no es recomendable debido a su débil mecanismo de protección. La clave CSA estática utilizada en BISS es susceptible a ataques de fuerza bruta.
::

## Clave BISS[](https://help.cesbo.com/astra/delivery/cas/encrypt-streams-with-biss-cas#biss-key)

La clave BISS es una secuencia de 8 bytes de longitud, representada como 16 símbolos hexadecimales. Por ejemplo, la clave `1234569C789ABCCE` puede desglosarse del siguiente modo:

- Los 6 primeros símbolos hexadecimales `123456` constituyen la primera parte de la clave
- Los símbolos 7 y 8 `9C` son una suma de comprobación de la primera parte (calculada como `0x12 + 0x34 + 0x56 = 0x9C`)
- Los símbolos hexadecimales 9º a 14º `789ABC` forman la segunda parte de la clave.
- Los dos últimos símbolos `CE` son una suma de comprobación de la segunda parte (calculada como `0x78 + 0x9A + 0xBC = 0x1CE`con sólo el último byte utilizado para la suma de comprobación)

En Astra, puede definir la clave como `12345600789ABC00`y Astra calculará automáticamente las sumas de comprobación por ti. Esto simplifica el proceso y ayuda a garantizar la precisión y la integridad de la clave BISS

## Codificación de flujos transmitidos[](https://help.cesbo.com/astra/delivery/cas/encrypt-streams-with-biss-cas#scrambling-transmitted-streams)

Para codificar un flujo transmitido, añada el parámetro `biss` con la tecla adecuada a la Dirección de Salida. Por ejemplo:

```
udp://239.255.1.1:1234#biss=12345600789ABC00
```

Al especificar la clave BISS en la Dirección de Salida, Astra codificará automáticamente el canal utilizando la clave proporcionada.

## Analizar el flujo codificado[](https://help.cesbo.com/astra/delivery/cas/encrypt-streams-with-biss-cas#analyze-scrambled-stream)

Puedes comprobar si un canal está codificado utilizando el analizador Astra MPEG-TS. Para ello, inicia el analizador con el siguiente comando:

```
astra --analyze udp://239.255.1.1:1234
```

El analizador escribirá mensajes en la consola, indicando que el flujo está codificado.

## Reproducir secuencias codificadas con VLC Player[](https://help.cesbo.com/astra/delivery/cas/encrypt-streams-with-biss-cas#play-scrambled-streams-with-vlc-player)

Los flujos codificados pueden recibirse y visualizarse con VLC Player. Para iniciar VLC con la clave BISS adecuada desde la línea de comandos, introduzca el siguiente comando:

```
vlc --ts-csa-ck 1234569C789ABCCE udp://@239.255.1.1:1234
```

Utilizando el `--ts-csa-ck` seguida de la clave BISS, VLC podrá descifrar y reproducir el contenido sin problemas. Asegúrate de proporcionar la clave BISS correcta con las sumas de comprobación calculadas.

## Recibe flujos codificados con Astra[](https://help.cesbo.com/astra/delivery/cas/encrypt-streams-with-biss-cas#receive-scrambled-streams-with-astra)

Para recibir flujos codificados con Astra, consulta esta guía: [Descifrar flujos con BISS CAS](https://help.cesbo.com/astra/processing/cas/decrypt-biss)
