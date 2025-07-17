---
title: BER and UNC Errors
sidebar:
    order: 80
---

Las métricas comunes como el nivel de señal y la relación señal-ruido (SNR) indican el estado general de la recepción de la señal, pero no son suficientes para diagnosticar problemas específicos de recepción.

## BER

El BER (Tasa de Error de Bits) es una métrica utilizada para cuantificar el número de bits que se reciben o decodifican incorrectamente en una transmisión dada. El error de BER es una expresión del número de bits incorrectos como una proporción o porcentaje del total de bits transmitidos.

En los sistemas DVB, el error de BER es una métrica importante para medir la calidad de la señal recibida. Un BER bajo indica una buena calidad de señal con menos errores, mientras que un BER alto sugiere que la calidad de la señal es pobre y hay más errores presentes en los datos transmitidos. Factores como el ruido, la interferencia, la fuerza de la señal y la distancia de transmisión pueden afectar al BER.

Para mejorar el BER, los sistemas DVB a menudo emplean varias técnicas de corrección de errores, como la Corrección de Errores Adelante (FEC), que puede detectar y corregir errores en los datos transmitidos, mejorando la calidad y fiabilidad general de la señal digital.

## UNC

UNC (Error Incorregible) indica que un paquete de datos recibido contiene errores que no pueden ser corregidos por los mecanismos de corrección de errores empleados en el sistema, como la Corrección de Errores Adelante (FEC).

Típicamente, los sistemas de comunicación digital utilizan FEC para detectar y corregir errores en los datos transmitidos. Sin embargo, si el número de errores dentro de un paquete de datos es demasiado alto, o si los errores son demasiado severos, los mecanismos de FEC pueden fallar en corregirlos. En tales casos, el sistema reporta un error de UNC.

Los errores UNC pueden resultar de varios factores, incluyendo mala calidad de señal, altos niveles de ruido, interferencia o problemas con el equipo de transmisión. Niveles altos de errores UNC pueden llevar a degradación de la calidad de video o audio, congelación o pixelación en transmisiones de TV digital, o incluso pérdida de señal.

Para minimizar los errores UNC, es esencial:

1. Considerar la interferencia solar - La degradación periódica de la señal, también conocida como apagón solar o desvanecimiento solar, puede ocurrir cuando el sol se alinea directamente detrás del satélite, causando un aumento en los niveles de ruido y una interrupción temporal de la señal. Este fenómeno típicamente dura unos minutos cada día durante períodos específicos del año.
2. Verificar la alineación del plato y el LNB - Conectar un analizador de señal directamente al LNB usando un cable corto.
3. Conectar el analizador de señal al cable en el lado del receptor. La aislación del cable coaxial puede estar dañada o comprometida.