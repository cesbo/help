---
title: DigitalDevices RESI DVB-C Modulator
sidebar:
    order: 1
---

RESI, DVB-C модулятор от компании Digital Devices, выводит поток данных, совместимый с DVB-C, в существующую 75-омную коаксиальную кабельную сеть.

![DigitalDevices RESI DVB-C Модулятор](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/resi.png)

Технические характеристики:

- 4 - 24 транспондера согласно спецификации DVB-C
- Частотный диапазон: 114 – 858 МГц
- Скорости символов: 1,0 – 7,1 Мсим/с
- QAM: 16, 32, 64, 128, 256
- Отношение сигнал/шум: 42 дБ
- Выход на 8 каналах (на канал): 101 дБµВ

## Поиск модулятора в системе

Используйте наше руководство для [Установки Драйвера DigitalDevices](/en/astra/adapters/dd-driver/).

Используйте следующую команду, чтобы найти номер адаптера и номер устройства модулятора:

```sh
find "/dev/dvb" -name "mod*"
```

Вывод покажет список устройств в системе:

```
/dev/dvb/adapter0/mod0
/dev/dvb/adapter0/mod1
```

- `adapter0`: номер адаптера
- `mod1`: номер устройства (модулятора)

## Настройки Astra

1. Подготовьте [MPTS](/en/astra/streams/mpts/) для модулятора
2. В настройках вывода укажите адрес: resi://#adapter=0&device=1 (0 - номер адаптера, 1 - модулятор)
3. В настройках MPTS NIT настройте параметры транспондера

![Настройки MPTS NIT](https://cdn.cesbo.com/help/astra/delivery/broadcasting/resi-dvb-c-modulator/mpts-nit.png)

Подробнее читайте в: [Кабельное телевидение с Astra для гостиничной индустрии](/en/astra/use-cases/cable-television-with-astra-for-hospitality-industry)

### Дополнительные настройки

- `gain=N`: уровень сигнала в диапазоне от 0 до 100
- `buffer_size=N`: размер буфера в мегабайтах. По умолчанию: `256`
- `legacy`: режим совместимости с старым модулятором RESI для 10 транспондеров

## Устранение неполадок

### Нет такого файла или каталога

Если при попытке найти номер адаптера вы столкнулись с ошибкой:

```
find: ‘/dev/dvb’: No such file or directory
```

то, скорее всего, драйвер DigitalDevices не установлен. Пожалуйста, [Установите Драйвер DigitalDevices](/en/astra/adapters/dd-driver/)