---
title: HiDes DVB-T Modulator
sidebar:
    order: 3
---

PT100 — это модулятор DVB-T для 4 частот от HiDes

![Модулятор DVB-T PT100](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/pt100.jpeg)

Характеристики:

- 4 модулятора на плате
- Частотный диапазон 50~950 МГц, шаг 1 кГц
- Модуляция - 64QAM/16QAM/QPSK
- Сигнал/Шум: 45dB
- Уровень RF сигнала на выходе -8 дБм (100 дБмкВ)

[Подробнее](http://www.hides.com.tw/product_pt100_eng.html)

## Настройка

Драйвер можно скачать с [официального сайта](http://www.hides.com.tw/downloads_eng.html)

После установки найдите номера модуляторов с помощью команды:

```sh
find "/dev" -name "it950x*"
```

В выводе команды мы получим номера модуляторов:

```
/dev/usb-it950x1
/dev/usb-it950x0
```

- `it950x1`: где 1 — номер модулятора

## Настройки Astra

Подготовьте [MPTS](/en/astra/streams/mpts/) для модулятора. В настройках NIT MPTS укажите параметры транспондера:

![Настройки NIT MPTS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/hides-dvb-t-modulator/mpts-nit.png)

В настройке вывода укажите тип it950x и номер адаптера: `it950x://#adapter=0` (0 - номер модулятора)

### Дополнительные параметры вывода

Дополнительные параметры могут быть добавлены к адресу вывода:

- `gain=N`: уровень сигнала в диапазоне от 0 до 100
- `fec=1/2`: коэффициент кодирования FEC. Значения: `1/2`, `2/3`, `3/4`, `5/6`, `7/8`, `none`