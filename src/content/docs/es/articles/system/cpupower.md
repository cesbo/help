---
title: "CPU Power Mode"
date: 2023-09-28
sidebar:
    order: 17
---

En el mundo del streaming de TV digital, cada milisegundo cuenta. Los retrasos o lags pueden impactar significativamente la calidad del servicio.

Uno de los factores clave es el modo de energía de la CPU. Por defecto, los servidores Linux tienen sus CPU configuradas en un modo de ahorro de energía para reducir el consumo de energía y gestionar la generación de calor. Para garantizar un rendimiento óptimo de tu software de streaming, se recomienda configurar tu CPU en su modo de máximo rendimiento.

:::note
Puedes usar nuestro script Tune para configurar automáticamente estos ajustes. [Lee más](/en/articles/system/tune/)
:::

## Con la utilidad cpupower

Para verificar el modo de energía de la CPU en un servidor Linux, puedes usar la utilidad `cpupower`. Esta utilidad es parte del paquete `linux-tools-common`.

### Instalar cpupower

```
sudo apt-get update
sudo apt-get install linux-tools-common
```

### Verificar la configuración actual

```
cpupower frequency-info
```

Este comando mostrará la frecuencia actual de la CPU, el gobernador y otra información. Si el gobernador está configurado en 'powersave' o 'ondemand', entonces la CPU está en modo de ahorro de energía.

### Desactivar el modo de ahorro de energía

Si deseas desactivar el modo de ahorro de energía, puedes configurar el gobernador a `performance`. Esto hará que la CPU funcione a su frecuencia máxima.

```
cpupower frequency-set -g performance
```

Esta configuración se perderá después de un reinicio. Si deseas que sea permanente, puedes añadir el comando anterior al archivo `/etc/rc.local` para que se ejecute en cada arranque.

## Verificar manualmente el modo de la CPU

```
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

Este comando mostrará el gobernador actual de la CPU para cada núcleo. La información sobre la frecuencia actual de la CPU está disponible en el archivo `/proc/cpuinfo`:

```
processor	: 0
model name	: Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz
cpu MHz		: 1197.109
```

Como podemos ver, la frecuencia actual de la CPU es solo 1.2GHz.