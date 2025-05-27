---
title: "Errores comunes en la recepción DVB"
date: 2023-08-02
sidebar:
    order: 3
---

Las métricas habituales, como el nivel de señal y la relación señal/ruido (SNR), indican el estado general de la recepción de la señal, pero no bastan para diagnosticar problemas concretos de recepción.

## BER[](/es/misc/troubleshooting/errors#ber)

BER (Bit Error Rate) es una métrica utilizada para cuantificar el número de bits que se reciben o descodifican incorrectamente en una transmisión determinada. El error BER es una expresión del número de bits incorrectos como ratio o porcentaje del número total de bits transmitidos.

En los sistemas DVB, el error BER es una métrica importante para medir la calidad de la señal recibida. Una BER baja indica una buena calidad de la señal con menos errores, mientras que una BER alta sugiere que la calidad de la señal es mala y hay más errores en los datos transmitidos. Factores como el ruido, las interferencias, la intensidad de la señal y la distancia de transmisión pueden afectar a la BER.

Para mejorar la BER, los sistemas DVB suelen emplear diversas técnicas de corrección de errores, como la corrección de errores hacia delante (FEC), que puede detectar y corregir errores en los datos transmitidos, mejorando la calidad y fiabilidad generales de la señal digital.

## UNC[](/es/misc/troubleshooting/errors#unc)

UNC (Uncorrectable Error) indica que un paquete de datos recibido contiene errores que no pueden ser corregidos por los mecanismos de corrección de errores empleados en el sistema, como Forward Error Correction (FEC).

Normalmente, los sistemas de comunicación digital utilizan FEC para detectar y corregir errores en los datos transmitidos. Sin embargo, si el número de errores dentro de un paquete de datos es demasiado alto, o si los errores son demasiado graves, los mecanismos FEC pueden fallar a la hora de corregirlos. En tales casos, el sistema informa de un error UNC.

Los errores de UNC pueden deberse a varios factores, como la mala calidad de la señal, altos niveles de ruido, interferencias o problemas con el equipo de transmisión. Unos niveles elevados de errores UNC pueden provocar una degradación de la calidad de vídeo o audio, congelación o pixelación en las emisiones de televisión digital, o incluso la pérdida de la señal.

Para minimizar los errores de UNC, es esencial:

1. Considere las interferencias solares - La degradación periódica de la señal, también conocida como apagón solar o desvanecimiento solar, puede producirse cuando el sol se alinea directamente detrás del satélite, provocando un aumento de los niveles de ruido y una interrupción temporal de la señal. Este fenómeno suele durar unos minutos al día durante determinados periodos del año.
2. Compruebe la alineación de la antena parabólica y el LNB - Conecte un analizador de señal directamente al LNB mediante un cable corto
3. Conecte el analizador de señales al cable por el lado del receptor. El aislamiento del cable coaxial puede estar dañado o comprometido
