---
title: Tipos de conectores de fibra
date: 2023-05-26
---

En este artículo, intentaremos describir los conectores ópticos más comunes que se utilizan en redes de datos y redes de televisión.

## La virola de fibra[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#the-fiber-ferrule)

La virola de fibra es una pieza cerámica de un conector cilíndrico. En el centro de la virola se inserta una fibra óptica. Se utiliza para hacer pasar la radiación láser a través de dos fibras ópticas.

Los diámetros de virola de fibra más comunes son 2,5 mm (en conectores de tipo FC, SC, ST) y 1,25 mm (en conectores de tipo LC).

![Conector](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/connector.png)

## Conector SC[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#sc-connector)

![SC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/sc.png)

El conector SC fue desarrollado por Nippon Telegraph and Telephone. El invento se ha convertido en el más popular debido a los menores costes de producción.

Características y aplicaciones de los conectores SC:

- instalación sencilla;
- alta velocidad de conexión;
- alta densidad de montaje;
- carcasa de plástico (se desgasta rápidamente, no resiste las vibraciones);
- utilizado con fibra monomodo y multimodo;
- pérdida de 0,25 dB.;
- utilizados en FTTH, telefonía, televisión por cable, etc.

## Conector FC[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#fc-connector)

![FC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/fc.png)

El conector FC fue desarrollado por Nippon Telegraph and Telephone. Fue el primer conector óptico que utilizó una punta de cerámica. Fue el primer conector óptico que utilizó una punta cerámica. Actualmente no se utiliza debido a los conectores SC y LC, más populares.

Características y aplicaciones de los conectores FC:

- carcasa metálica con conexión roscada (no se desgasta tanto y es resistente a las vibraciones);
- menor densidad de montaje (en comparación con el conector SC);
- utilizados en telecomunicaciones, industria y aparatos de medición;
- utilizado con fibra monomodo;
- de 0,3 dB.

## Conector LC[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#lc-connector)

![LC](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/lc.png)

El conector LC fue desarrollado por Lucent Technologies y lanzado al mercado en 1997.

Características y aplicaciones de los conectores LC:

- alta densidad de montaje;
- el pequeño diámetro de la virola de fibra (esto reduce la fiabilidad y la resistencia a las cargas mecánicas);
- utilizados en redes de cable estructurado, telecomunicaciones y centros de datos;
- utilizado con fibra monomodo y multimodo;
- de 0,10 dB.

## Conector ST[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#st-connector)

ST Connector fue desarrollado en Estados Unidos por AT&T y se utiliza en entornos profesionales: redes corporativas, en el ámbito militar.

Características y aplicaciones de los conectores ST:

- carcasa metálica (no se desgasta tanto);
- menor densidad de montaje (en comparación con el conector SC);
- menos conveniente en la conexión que el conector SC, pero más conveniente que el conector FC;
- utilizado con fibra multimodo;
- de 0,25 dB.

## Tipos de pulido en conectores de fibra óptica[](https://help.cesbo.com/misc/articles/hardware/fiber-connectors#types-of-polish-on-fiber-optic-connectors)

A lo largo de los años, los expertos han perfeccionado la forma y las características de los conectores ópticos, tratando de conseguir pérdidas y reflexiones mínimas en el conector. No es ningún secreto que las pérdidas en la conexión del conector reducen la potencia de la señal, lo que conlleva una disminución de la distancia a la que puede transmitirse. La parte reflejada de la señal también puede introducir errores (BER) y calentar el módulo SFP, lo que a su vez reduce la calidad de la información transmitida y provoca una reducción de la vida útil del equipo transmisor.

Por eso han cambiado los tipos de pulido de los conectores ópticos. Los tipos más populares de pulido de conectores ópticos son PC (contacto físico), UPC (contacto ultrafísico) y APC (contacto físico angular).

Puede determinar el tipo de pulido del conector/puerto por su color:

- PC-negro
- UPC-azul
- APC-verde

![Pulido](https://cdn.cesbo.com/help/misc/articles/fiber-connectors/polishing.png)

### PC: Contacto físico

La virola está biselada y procesada sobre una superficie plana. Esto evita espacios vacíos entre las puntas de los conectores conectados y proporciona pérdidas en el rango de -30 dB a -40 dB. Este tipo no es relevante en la actualidad.

### UPC: Ultra Contacto físico

Los conectores pulidos UPC se utilizan mucho en los sistemas de transmisión de datos. Debido a la baja potencia de la señal en tales sistemas, la señal reflejada también tiene un valor bajo. Los conectores son similares a los de tipo PC. Gracias a una curva biselada más clara, las pérdidas se reducen hasta el límite de -40 a -55 dB.

### APC: Contacto físico en ángulo

Los conectores pulidos APC proporcionan menos señal reflejada hacia la fuente.La superficie de la virola está biselada en un ángulo de 8-9 grados. Debido a esto, la señal no se refleja desde el conector en un ángulo de 180 grados, por lo que la señal reflejada no vuelve al transmisor en absoluto, o vuelve con menos potencia. Los conectores pulidos APC se utilizan en sistemas con una señal de alta potencia. Por eso son habituales en redes de TV por cable y PON.

:::note
Está prohibido conectar los conectores APC y UPC. Esto provoca daños en los conectores y aumenta el riesgo de atenuación y reflexión de la señal.
:::
