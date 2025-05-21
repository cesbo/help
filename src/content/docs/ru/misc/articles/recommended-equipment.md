---
title: "Рекомендуемое оборудование"
date: 2023-06-23
sidebar:
    order: 12
---

При построении головной станции цифрового телевидения рекомендуется использовать серверное оборудование, поскольку оно рассчитано на длительную работу, высокое качество и надежность. К основным компонентам относятся:

- Сервера часто включают в себя несколько блоков питания, оснащенных защитой от перенапряжения
- Модули памяти содержат системы коррекции ошибок
- Резервные системы охлаждения

Эти элементы, помимо прочего, способствуют созданию надежной головной станции цифрового телевидения.

## CPU[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#cpu)

Оптимальная частота процессора для головной станции цифрового телевидения составляет 2,5-3 ГГц и выше. Процессоры с большим количеством ядер, но меньшей частотой (например, 1,8-2,5 ГГц) плохо подходят для задач, требующих низкой латентности.

Процессоры только с кэшем L2, может быть, и не так плохи, но в 99% случаев это говорит о том, что остальное оборудование, такое как материнская плата и оперативная память, устарело и не пригодно для использования.

Пример хорошего процессора:

- Intel Xeon 10C E5-2680v2
- Xeon 8C E5-2670
- Intel Xeon 6C X5670
- Core i5-9600K

## RAM[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#ram)

Частота оперативной памяти также имеет немаловажное значение. Приблизительные цифры для сравнения:

- DDR1 400 МГц - не подходит
- DDR2 600 МГц - подходит для небольших конфигураций, например, для приема 10-15 каналов и их трансляции в udp
- DDR3 1333-1600 МГц - подходит
- DDR4 2133-2800 МГц - подходит
- DDR4 2800-3400 МГц - дорого и не нужно

Объем оперативной памяти важен только для хранения HLS-кусков (сегментов). Средний объем оперативной памяти для 100 hls-каналов составляет 16 Гб.

## Сетевые адаптеры[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#network-adapters)

### размер буфера rx/tx

Размеры кольцевых буферов сетевых карт зависят от производителя и класса сетевой карты. Увеличение размера буфера снижает вероятность потери пакетов при задержках в планировании.

- менее 1024, как правило, не рекомендуется
- от 2048 до 4096 считаются хорошими
- 8192 признан отличным

### очереди

Передача пакетов между кольцевым буфером сетевой карты и ядром операционной системы осуществляется с помощью очередей. Каждой очереди отводится одно выделенное ядро процессора. Сетевые адаптеры, оснащенные несколькими очередями, могут обрабатывать пакеты одновременно.

Сетевые адаптеры с одной очередью предназначены только для потребительского использования и не рекомендуются для настройки головных станций цифрового телевидения.

## Рекомендуемые сетевые адаптеры[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#recomended-network-adapters)

### Intel

- 82599ES, 82599EB (2 порта)
- 82599EN (1 порт)
- i350AM2

### Mellanox

- MT27520

### SolarFlare

- SFN7122F

## НЕ рекомендуемые сетевые адаптеры[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#not-recommended-network-adapters)

### D-Link, Realtek

Любые модели предназначены только для потребительского использования и не подходят для головных станций цифрового телевидения.

### Intel

Хотя мы рекомендуем сетевые карты Intel, мы не рекомендуем конкретно эти модели. Только одна очередь, и все данные будут обрабатываться только одним ядром процессора.

- Контроллер 82541GI Gigabit Ethernet (rev 05)
- Контроллер 82541PI Gigabit Ethernet (rev 05)
- 82574L Гигабитное сетевое подключение
- Контроллер 82540EM Gigabit Ethernet (rev 03)
- 82545EM
- 82579LM
- Контроллер 82571EB Gigabit Ethernet (rev 06)
- 82573L Контроллер Gigabit Ethernet
- Контроллер 82573E Gigabit Ethernet (rev 03)
- 82578DC Гигабитное сетевое подключение (rev 06)
- Контроллер 82546EB Gigabit Ethernet (rev 01)
- Контроллер Gigabit Ethernet 82546GB (rev 03)
- I219-V (rev 31)
- I217

### Broadcom

- Broadcom Corporation NetXtreme BCM5701
- Broadcom Corporation NetXtreme BCM5704
- Broadcom Corporation NetXtreme BCM5715
- Broadcom Corporation NetXtreme BCM5719 - периодически появляются падения/пропуски на скорости 256 мбит/с.
- Broadcom Corporation NetXtreme BCM5721
- Broadcom Corporation NetXtreme BCM5722
- Broadcom Corporation NetXtreme II BCM5708
- Broadcom Corporation NetXtreme II BCM5709 - несмотря на наличие нескольких очередей, RSS может начать работу только с одной из них, что создает высокую нагрузку на одно работающее ядро
- Broadcom Corporation NetXtreme II BCM5716 , поддерживает распределение прерываний по доступным ядрам, но при этом оставляет основную часть пакетов на ядре 0

### Другие

- VIA Technologies, Inc. VT6105/VT6106S Rhine-III (rev 86)
- Qualcomm Atheros AR8121/AR8113/AR8114 Gigabit или Fast Ethernet
- Qualcomm Atheros AR8131 Gigabit Ethernet
- Qualcomm Atheros AR8132 Fast Ethernet
- Qualcomm Atheros AR8151 v2.0 Gigabit Ethernet (rev c0)
- 3Com Corporation 3c905C-TX/TX-M Tornado
- Сетевое устройство Red Hat, Inc Virtio
- Marvell Technology Group Ltd. 88E8057 PCI-E Gigabit Ethernet Controller
- Marvell Technology Group Ltd. 88E8050 PCI-E ASF Gigabit Ethernet Controller
- QLogic Corp. cLOM8214 1/10GbE Controller (rev. 54) - не работает изменение количества очередей, по умолчанию 3 rx, 1 rx tx.
- Сетевая карта NC326i
- NVidia Corporation MCP55 Ethernet (rev a3) - только одна очередь. В результате даже при небольшом объеме трафика возникает очень высокая нагрузка на процессорное ядро, занятое обработкой трафика от данной сетевой карты, что приводит к неприемлемо медленной обработке пакетов.

## Рекомендуемые DVB-адаптеры[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#recommended-dvb-adapters)

### Цифровые устройства

Все DVB-адаптеры компании [Digital Devices](https://www.digital-devices.eu/){target="_blank"} хорошо работают с Astra.

- DD Max SX8 - 8 тюнерная S/S2 карта + мультисвитч
- DD Max A8i - 8-тюнерный DVB-C2/T2 ISDB-T

Также хорошо работает с другим оборудованием компании Digital Devices:

- DD RESI DVB-C FSM - модулятор DVB-C
- DD Octopus Twin CI - 2 CI-интерфейса для дешифрования каналов

### TBS

DVB-адаптеры компании [TBS](https://www.tbsdtv.com/){target="_blank"} являются одним из наиболее популярных решений для приема цифрового телевидения.

- TBS6904 - 4 тюнерная S/S2 карта приема
- TBS6909 - 8- тюнерная S/S2 карта приема  + мультисвитч
- TBS6205 - 4 тюнерный DVB-T2/T/C ресивер

Также хорошо работает с другим оборудованием компании TBS:

- TBS6004 DVB-C 4 QAM PCIe Card
- TBS6900 - 2 CI-интерфейса для дешифрования каналов

### DVBSky

T980CI - 1 тюнерный DVB-T/T2/C ресивер со слотом CI. S950CI - 1 тюнерный DVB-S/S2 ресивер со слотом CI. T9580 - 2-тюнерный S2/T2/T/C ресивер с независимыми тюнерами.

## Не рекомендуется использовать DVB-адаптеры[](https://help.cesbo.com/misc/articles/hardware/recommended-equipment#not-recommended-dvb-adapters)

### DigitalDevices

- Модулятор Digital Devices RESI DVB-T/ISDB-T SDR не поддерживается

### Другие

- SkyStar 1 - старая карта, не поддерживает стандарт S2
- Mystique SaTiX-SX - старая карта, не поддерживает стандарт S2
- Любые USB-адаптеры
