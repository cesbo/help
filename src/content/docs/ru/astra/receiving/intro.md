---
title: Введение в настройку адаптера DVB
date: 2023-02-28
sidebar:
    order: 2
---

Digital Video Broadcasting (DVB) - это набор международных открытых стандартов для цифрового телевизионного вещания. С помощью опций DVB в Astra можно настроить прием медиаконтента из различных DVB-сетей, включая спутниковые, кабельные и наземные источники.

## Адаптер DVB[](/ru/astra/receiving/intro#dvb-adapter)

Для приема DVB-сигналов на ПК необходимо дополнительное оборудование - DVB-адаптер. Как правило, DVB-адаптеры представляют собой платы PCIe, однако существуют и USB DVB-адаптеры, хотя они и менее популярны.

![Адаптер DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-adapter.jpg)

Основные компоненты DVB-адаптера:

- `Tuner` - также известный как frontend, этот компонент принимает сигнал, преобразует аналоговый сигнал в цифровой и исправляет ошибки
- `Demultiplexer` - отвечает за обработку принятого потока MPEG-TS и фильтрацию отдельных потоков
- `Common Interface (CI)` - Некоторые адаптеры имеют интерфейс для подключения модулей условного доступа для дескремблирования потока

Мы рекомендуем DVB-адаптеры от:

- [TBS](https://www.tbsdtv.com/)
- [Цифровые устройства](https://www.digital-devices.eu/)

## Подготовьте систему[](/ru/astra/receiving/intro#prepare-you-system)

Перед началом работы убедитесь, что DVB-адаптер подключен к серверу и что установлен соответствующий драйвер для Linux:

- [Установка драйвера TBS](/ru/misc/tools-and-utilities/tbs-driver)
- [Установка драйверов DigitalDevices](/ru/misc/tools-and-utilities/dd-driver)

## Общие опции[](/ru/astra/receiving/intro#general-options)

Для создания нового адаптера нажмите кнопку "New Adapter" в главном меню.

![Общие параметры DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-general.png)

- `Enable` - включение/выключение адаптера;
- `Name` - имя адаптера;
- `ID` - уникальный идентификатор адаптера. Для нового адаптера можно не заполнять это поле, и Astra сама сгенерирует его;
- `Virtual` - Виртуальные адаптеры - это пользовательский интерфейс для приема MPTS-потоков из различных источников, таких как SAT>IP, UDP, CI-адаптеры;
- `SAT>IP` - использовать адаптер на удаленном сервере по протоколу SAT>IP (устарело, вместо этого используйте Virtual - SAT>IP);
- `Adapter` - выбрать системные устройства;
- `Type` - выберите стандарт адаптера.

## Дополнительные опции[](/ru/astra/receiving/intro#advanced-options)

![Дополнительные параметры DVB](https://cdn.cesbo.com/help/astra/receiving/dvb/intro/dvb-advanced.png)

- `Enable monitoring` - включить отправку телеметрии в Zabbix или InfluxDB;
- `Timeout` - проверка ошибок DVR через заданный интервал времени. По умолчанию: 120;
- `CI` - использовать внешний адаптер DVB-CI, например [DigitalDevices DuoFlex CI](https://www.digital-devices.eu/shop/en/cine-series/ci-expansion/224/digital-devices-duoflex-ci-double-common-interface-ci-extension-duoflex-ci?c=173) или [TBS 6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html);
- `CI Device` - номер устройства на адаптере DVB-CI;
- `CI Bitrate` - определить битрейт для адаптера DVB-CI;
- `BISS` - дескремблирование всего транспондера;
- `DVB API v3` - использовать устаревший API для чтения информации из адаптера;
- `Budget Mode` - отключить аппаратную фильтрацию PID. В бюджетном режиме Astra получает от адаптера транспондер целиком;
- `CA Delay` - задержка между отправкой управляющих пакетов в модуль условного доступа (CAM).

## Тип DVB[](/ru/astra/receiving/intro#dvb-type)

Остальные опции зависят от выбранного типа адаптера:

- [DVB-S/S2](/ru/astra/receiving/s)
- [DVB-T/T2](/ru/astra/receiving/t)
- [DVB-C](/ru/astra/receiving/c)

## Сканирование[](/ru/astra/receiving/intro#scan)

После настройки адаптера можно проверить качество сигнала и просканировать его на наличие доступных каналов. Подробнее: [Сканирование DVB-адаптера](/ru/astra/receiving/scan)

## Поиск и устранение неисправностей[](/ru/astra/receiving/intro#troubleshooting)

Если у вас возникли проблемы с запуском DVB-адаптера, обратитесь к нашему руководству: [Устранение неполадок при приеме DVB](/ru/misc/troubleshooting/dvb)
