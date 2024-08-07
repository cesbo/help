---
title: "Режим питания процессора CPU Power"
date: 2023-09-28
---

В мире потокового цифрового телевидения важна каждая миллисекунда. Задержки или запаздывания могут существенно повлиять на качество обслуживания.

Одним из ключевых факторов является режим энергопотребления процессора. По умолчанию в Linux-серверах процессоры переведены в энергосберегающий режим для снижения энергопотребления и управления тепловыделением. Для обеспечения оптимальной работы потокового ПО рекомендуется перевести процессор в режим максимальной производительности.

## С помощью утилиты cpupower[](https://help.cesbo.com/misc/tools-and-utilities/linux/cpupower#with-cpupower-utility)

Для проверки режима энергопотребления процессора на сервере Linux можно воспользоваться командой `cpupower` утилита. Эта утилита входит в состав `linux-tools-common` пакет.

### Установить cpupower

```
sudo apt-get update
sudo apt-get install linux-tools-common
```

### Проверка текущих настроек

```
cpupower frequency-info
```

Эта команда отображает текущую частоту процессора, параметры регулятора и другую информацию. Если регулятор установлен в положение 'powersave' или 'ondemand', то процессор находится в режиме энергосбережения.

### Отключение режима энергосбережения

Если необходимо отключить режим энергосбережения, можно установить регулятор в положение `performance`. Это заставит процессор работать на максимальной частоте.

```
cpupower frequency-set -g performance
```

Эта настройка будет потеряна после перезагрузки. Если вы хотите сделать ее постоянной, то можете добавить приведенную выше команду в `/etc/rc.local` файл, чтобы он выполнялся при каждой загрузке.

## Проверьте режим работы процессора вручную[](https://help.cesbo.com/misc/tools-and-utilities/linux/cpupower#check-cpu-mode-manually)

```
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

Эта команда отображает текущую частоту процессора для каждого ядра. Информация о текущей частоте процессора доступна в разделе `/proc/cpuinfo` файл:

```
processor   : 0
model name  : Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz
cpu MHz     : 1197.109
```

как мы видим, текущая частота процессора составляет всего 1,2 ГГц.
