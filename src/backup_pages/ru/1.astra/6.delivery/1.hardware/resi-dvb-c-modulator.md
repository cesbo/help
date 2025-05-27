---
title: "Модулятор DVB-C от DigitalDevices RESI"
date: 2023-06-23
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png
---

RESI, модулятор DVB-C компании Digital Devices, выводит поток данных, совместимый с DVB-C, в существующий 75-омный коаксиальный кабель.

![Модулятор DVB-C от DigitalDevices RESI](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png)

Технические характеристики:

- 4 - 24 транспондера в соответствии со спецификацией DVB-C
- Частотный диапазон: 114 - 858 МГц
- Скорость передачи символов: 1,0 - 7,1 Мсим/с
- QAM: 16, 32, 64, 128, 256
- Соотношение сигнал/шум: 42 дБ
- Выходной сигнал при 8 каналах (на канал): 101 дБ мкВ

## Найти модулятор в системе[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#find-modulator-in-system)

Воспользуйтесь нашим руководством по [установке драйвера DigitalDevices](https://help.cesbo.com/misc/tools-and-utilities/dvb/dd-driver).

Для поиска номера адаптера и номера устройства модулятора используйте следующую команду:

```
find "/dev/dvb" -name "mod*"
```

На выходе будет отображен список устройств в системе:

```
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
```

- `adapter0` - номер адаптера
- `mod1` - номер устройства (модулятора)

## Настройки Astra[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#astra-settings)

1. Подготовка [MPTS](https://help.cesbo.com/astra/delivery/broadcasting/mpts-settings) к работе с модулятором
2. В настройках вывода укажите адрес: resi://#adapter=0&device=1 (0 - номер адаптера, 1 - модулятора)
3. В настройках MPTS NIT настройте параметры транспондера

![Настройки MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/mpts-nit.png)

Подробнее в: [Кабельное телевидение с Astra для гостиничного бизнеса](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry)

### Дополнительные опции

- `gain=N` - уровень сигнала в диапазоне от 0 до 100
- `buffer_size=N` - размер буфера в мегабайтах. По умолчанию: `256`
- `legacy` - режим совместимости со старым модулятором RESI для 10 трансподнеров

## Поиск и устранение неисправностей[](https://help.cesbo.com/astra/delivery/hardware/resi-dvb-c-modulator#troubleshooting)

### Нет такого файла или каталога

Если при попытке найти номер адаптера возникает ошибка:

```
find: ‘/dev/dvb’: No such file or directory
```

то, скорее всего, не установлен драйвер DigitalDevices. Пожалуйста, [установите драйвер DigitalDevices](https://help.cesbo.com/misc/tools-and-utilities/dvb/dd-driver)
