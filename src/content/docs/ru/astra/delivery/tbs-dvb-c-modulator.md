---
title: "DVB-C модулятор TBS6004"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg
sidebar:
    order: 9
---

:badge[Astra 2021.08.09]

TBS6004 - PCIe-карта с модулятором DVB-C 4 QAM.

![DVB-C модулятор TBS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/tbs-dvb-c.jpeg)

Технические характеристики:

- 4 модулятора на плате
- Частоты: 100 ~ 1000 МГц
- Модуляция - 16QAM, 32QAM, 64QAM, 128QAM, 256QAM
- Уровень радиочастотного выхода - 5-120 dBuV

## Настройка[](/ru/astra/delivery/tbs-dvb-c-modulator#setup)

Воспользуйтесь нашим руководством по [установке драйвера TBS](/ru/misc/tools-and-utilities/tbs-driver). С помощью следующей команды найдите номер адаптера и номер устройства модулятора:

```
find "/dev" -name "mod*"
```

На выходе мы увидим номера модуляторов:

```
/dev/tbsmod0/mod1
/dev/tbsmod0/mod0
```

- `tbsmod0` - номер адаптера
- `mod1` - номер устройства

## Настройки Astra[](/ru/astra/delivery/tbs-dvb-c-modulator#astra-settings)

1. Подготовка [MPTS](/ru/astra/delivery/mpts-settings) к работе с модулятором
2. В настройках вывода укажите адрес: `tbs://#adapter=0&device=1` (0 - номер адаптера, 1 - модулятор)
3. В настройках MPTS NIT настройте параметры транспондера

![Настройки MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/tbs-dvb-c-modulator/mpts-nit.png)

Подробнее в: [Кабельное телевидение с Astra для гостиничного бизнеса](/ru/astra/getting-started/cable-television-with-astra-for-hospitality-industry)

### Дополнительные опции

В выходной адрес могут быть добавлены дополнительные опции:

- `bitrate=N` - Значение по умолчанию зависит от символьной скорости и типа модуляции. Например, для символьной скорости 6900 и 256-QAM значение будет равно 55
- `gain=N` - уровень сигнала в диапазоне от 0 до 100. Значение по умолчанию: 60

## Поиск и устранение неисправностей[](/ru/astra/delivery/tbs-dvb-c-modulator#troubleshooting)

### Нет такого файла или каталога

Если при попытке найти номер адаптера возникает ошибка:

```
find: ‘/dev/dvb’: No such file or directory
```

то, скорее всего, не установлен драйвер TBS. Пожалуйста, [установите драйвер TBS](/ru/misc/tools-and-utilities/tbs-driver)
