---
title: Types of fiber connectors
date: 2023-05-26
sidebar:
    order: 10
---

En este artículo, intentaremos describir los conectores ópticos más comunes que se utilizan en redes de datos y redes de televisión.

## La férula de fibra

La férula de fibra es una parte cerámica de un conector cilíndrico. Una fibra óptica se inserta en el centro de la férula. Se utiliza para pasar radiación láser a través de dos fibras ópticas.

Los diámetros de férula de fibra más comunes son 2,5 mm (en conectores tipo FC, SC, ST) y 1,25 mm (en conectores tipo LC).

![Connector](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/connector.png)

## Conector SC

![SC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/sc.png)

El conector SC fue desarrollado por Nippon Telegraph and Telephone. La invención se ha convertido en la más popular debido a los menores costos de producción.

Características y aplicaciones de los conectores SC:

- instalación sencilla;
- alta velocidad de conexión;
- alta densidad de montaje;
- carcasa de plástico (se desgasta rápidamente, no es resistente a la vibración);
- utilizado con fibra monomodo y multimodo;
- pérdida de 0,25 dB;
- usado en FTTH, telefonía, televisión por cable, etc.

## Conector FC

![FC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/fc.png)

El conector FC fue desarrollado por Nippon Telegraph and Telephone. Fue el primer conector óptico que utilizó una punta cerámica. Este fue el primer conector óptico que utilizó una punta cerámica. Actualmente no se usa debido a los conectores SC y LC más populares.

Características y aplicaciones de los conectores FC:

- carcasa de metal con conexión roscada (no se desgasta tanto y es resistente a la vibración);
- menor densidad de montaje (en comparación con el conector SC);
- utilizado en telecomunicaciones, industria y dispositivos de medición;
- utilizado con fibra monomodo;
- pérdida de 0.3 dB.

## Conector LC

![LC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/lc.png)

El conector LC fue desarrollado por Lucent Technologies y lanzado en 1997.

Características y aplicaciones de los conectores LC:

- alta densidad de montaje;
- pequeño diámetro de la férula de fibra (esto reduce la fiabilidad y resistencia a cargas mecánicas);
- utilizado en redes de cableado estructurado, telecomunicaciones y centros de datos;
- utilizado con fibra monomodo y multimodo;
- pérdida de 0.10 dB.

## Conector ST

El conector ST fue desarrollado en los Estados Unidos por AT&T y se utiliza en entornos profesionales: redes corporativas, en el ámbito militar.

Características y aplicaciones de los conectores ST:

- carcasa de metal (no se desgasta tanto);
- menor densidad de montaje (en comparación con el conector SC);
- menos conveniente en conexión que el conector SC, pero más conveniente que el conector FC;
- utilizado con fibra multimodo;
- pérdida de 0,25 dB.

## Tipos de pulido en conectores de fibra óptica

A lo largo de los años, los expertos han mejorado la forma y características de los conectores ópticos, intentando lograr pérdidas y reflexiones mínimas en el conector. No es ningún secreto que las pérdidas en la conexión del conector reducen la potencia de la señal, lo que lleva a una disminución en la distancia a la que se puede transmitir. La parte reflejada de la señal también puede introducir errores (BER) y calentar el módulo SFP, lo que a su vez reduce la calidad de la información transmitida y lleva a una reducción de la vida útil del equipo transmisor.

Es por eso que se han cambiado los tipos de pulido de los conectores ópticos. Los tipos más populares de pulido de conectores ópticos son PC (contacto físico), UPC (contacto ultra físico) y APC (contacto físico angular).

Puede determinar el tipo de pulido de conector/puerto por su color:

- PC-negro
- UPC-azul
- APC-verde

![Polishing](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/polishing.png)

### PC: Contacto Físico

La férula está biselada y procesada en una superficie plana. Esto evita espacios vacíos entre las puntas de los conectores conectados y proporciona pérdidas en el rango de -30 dB a -40 dB. Este tipo ya no es relevante.

### UPC: Contacto Ultra Físico

Los conectores pulidos UPC se utilizan ampliamente en sistemas de transmisión de datos. Tienen un costo más bajo que APC. Debido a la baja potencia de señal en tales sistemas, la señal reflejada también tiene un valor bajo. Los conectores son similares al tipo PC. Debido a una curva de bisel más clara, las pérdidas se reducen al límite de -40 a -55 dB.

### APC: Contacto Físico Angular

Los conectores pulidos APC proporcionan una señal reflejada menor hacia la fuente. La superficie de la férula está biselada en un ángulo de 8-9 grados. Debido a esto, la señal no se refleja desde el conector en un ángulo de 180 grados, por lo que la señal reflejada no vuelve al transmisor o vuelve con menor potencia. Los conectores pulidos APC se utilizan en sistemas con una señal de alta potencia. Esta es la razón por la que son comunes en redes de televisión por cable y PON.

:::peligro
Está prohibido conectar los conectores APC y UPC. Esto causa daño a los conectores y aumenta el riesgo de atenuación de la señal y reflexión.
:::