---
title: "Modo de alimentación de la CPU"
date: 2023-09-28
---

En el mundo de la televisión digital en streaming, cada milisegundo cuenta. Los retrasos pueden afectar a la calidad del servicio.

Uno de los factores clave es el modo de alimentación de la CPU. Por defecto, los servidores Linux tienen la CPU configurada en modo de ahorro de energía para reducir el consumo y gestionar la generación de calor. Para garantizar un rendimiento óptimo del software de streaming, se recomienda configurar la CPU en su modo de máximo rendimiento.

## Con la utilidad cpupower[](https://help.cesbo.com/misc/tools-and-utilities/linux/cpupower#with-cpupower-utility)

Para comprobar el modo de alimentación de la CPU en un servidor Linux, puede utilizar la función `cpupower` utilidad. Esta utilidad forma parte del `linux-tools-common` paquete.

### Instalar cpupower

```
sudo apt-get update
sudo apt-get install linux-tools-common
```

### Comprobar la configuración actual

```
cpupower frequency-info
```

Este comando mostrará la frecuencia actual de la CPU, el regulador y otra información. Si el regulador está en "powersave" o "ondemand", la CPU está en modo de ahorro de energía.

### Desactivar el modo de ahorro de energía

Si desea desactivar el modo de ahorro de energía, puede ajustar el regulador a `performance`. Esto hará que la CPU funcione a la máxima frecuencia.

```
cpupower frequency-set -g performance
```

Esta configuración se perderá tras un reinicio. Si desea que sea permanente, puede añadir el comando anterior a `/etc/rc.local` para que se ejecute en cada arranque.

## Comprobar el modo CPU manualmente[](https://help.cesbo.com/misc/tools-and-utilities/linux/cpupower#check-cpu-mode-manually)

```
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

Este comando mostrará el gobernador de CPU actual para cada núcleo. La información sobre la frecuencia actual de la CPU está disponible en el `/proc/cpuinfo` archivo:

```
processor   : 0
model name  : Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz
cpu MHz     : 1197.109
```

como podemos ver la frecuencia actual de la CPU es de sólo 1,2GHz.
