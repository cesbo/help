---
title: "Registros DVB: Sintonización y recepción"
date: 2023-08-10
sidebar:
    order: 19
---

Los registros DVB proporcionan información sobre el sintonizador DVB y DVB-CI.

## FE tiene cerradura[](https://help.cesbo.com/astra/admin-guide/log/dvb#fe-has-lock)

```
fe has lock. status:SCVYL signal:60% snr:80% ber:0 unc:0
```

El mensaje de información se imprime cuando se devuelve la señal. Cuando el adaptador se crea o reinicia manualmente, este mensaje se suprime.

- **estado** - estado del sintonizador codificado con símbolos comunes para `femon` herramienta:
    - **S** - Señal. Encontrado algo por encima del nivel de ruido
    - **C** - Portadora. Encontrada una señal DVB
    - **V** - Viterbi. FEC (forward error correction) es estable
    - **Y** - Sincronización. Datos de sincronización encontrados
    - **L** - Bloqueo. Señal bloqueada y sintonizador listo
- **señal** - nivel de señal
- **snr** - relación señal/ruido
- **ber** - contador de errores de bit
- **unc** - contador de errores de bloque

Leer más sobre [Errores comunes en la recepción DVB](https://help.cesbo.com/misc/troubleshooting/dvb/errors)

## FE no tiene cerradura[](https://help.cesbo.com/astra/admin-guide/log/dvb#fe-has-no-lock)

```
fe has no lock. status:_____
```

El adaptador no puede sintonizar la señal. Compruebe la conexión a la antena y la alineación de la antena. También podría perderse la señal debido a condiciones meteorológicas como lluvia intensa o interferencias estacionales del sol.

## dvr cc error[](https://help.cesbo.com/astra/admin-guide/log/dvb#dvr-cc-error)

Astra analiza la recepción de paquetes con PID 0 (PAT - Program Association Table), si detecta pérdida de paquetes imprime este error y reinicia el sintonizador.

## dvr sync byte error[](https://help.cesbo.com/astra/admin-guide/log/dvb#dvr-sync-byte-error)

Astra no puede encontrar el byte de sincronización MPEG-TS en el flujo. Este problema es muy poco frecuente. Probablemente frecuencia incorrecta

## dvr receiving timeout[](https://help.cesbo.com/astra/admin-guide/log/dvb#dvr-receiving-timeout)

No se han recibido datos del adaptador DVB durante el tiempo de espera. El valor predeterminado es 120 segundos.

## error de lectura dvr[](https://help.cesbo.com/astra/admin-guide/log/dvb#dvr-read-error)

El problema se produce en algunas versiones antiguas de Astra debido a una carga elevada. Hay dos soluciones:

- actualizar a la última versión
- divide tu archivo de configuración en varios procesos. Por ejemplo 2 adaptadores con sus canales en una instancia, y otros 2 adaptadores con sus canales en otra.

## Error al abrir el frontend: Dispositivo o recurso ocupado[](https://help.cesbo.com/astra/admin-guide/log/dvb#failed-to-open-frontend-device-or-resource-busy)

El adaptador está ocupado por otro proceso. Por favor, consulte nuestra [guía de solución de problemas](https://help.cesbo.com/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-device-or-resource-busy)

## Error al abrir el frontend: No such file or directory[](https://help.cesbo.com/astra/admin-guide/log/dvb#failed-to-open-frontend-no-such-file-or-directory)

Problema con los controladores DVB. Por favor, consulte nuestra [guía de solución de problemas](https://help.cesbo.com/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-no-such-file-or-directory)
