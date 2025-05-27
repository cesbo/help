---
title: "DVB-T модулятор HiDes"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg
sidebar:
    order: 7
---

:badge[Astra 2021.08.09]

PT100 - DVB-T модулятор на 4 частоты производства HiDes

![PT100 DVB-T модулятор](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg)

Особенности:

- 4 модулятора на плате
- Частотный диапазон 50~950 МГц с шагом 1 КГц
- Модуляция - 64QAM/16QAM/QPSK
- Сигнал/шум: 45 дБ
- Уровень радиочастотного выхода -8 дБм (100 дБуВ)

[Читать далее](http://www.hides.com.tw/product_pt100_eng.html)

## Настройка[](/ru/astra/delivery/hardware/hides-dvb-t-modulator#setup)

Драйвер можно загрузить с [официального сайта](http://www.hides.com.tw/downloads_eng.html)

После установки найдите номер модулятора с помощью команды:

```
find "/dev" -name "it950x*"
```

На выходе команды мы получим номера модуляторов:

```
/dev/usb-it950x1
/dev/usb-it950x0
```

`it950x1` - где 1 - номер модулятора

## Настройки Astra[](/ru/astra/delivery/hardware/hides-dvb-t-modulator#astra-settings)

Подготовьте [MPTS](/ru/astra/delivery/broadcasting/mpts-settings) к работе с модулятором. В настройках MPTS NIT настройте параметры транспондера:

![Настройки MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/mpts-nit.png)

В настройках вывода укажите тип it950x и номер адаптера: `it950x://#adapter=0` (0 - номер модулятора)

### Дополнительные опции вывода

В выходной адрес могут быть добавлены дополнительные опции:

- `gain=N` - уровень сигнала в диапазоне от 0 до 100
- `fec=1/2` - :badge[Astra 2023.08.16] Коэффициент кодирования FEC. Значения: `1/2`, `2/3`, `3/4`, `5/6`, `7/8`, `none`
