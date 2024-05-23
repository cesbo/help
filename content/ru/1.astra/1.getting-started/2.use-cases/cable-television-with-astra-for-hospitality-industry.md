---
title: "Кабельное телевидение с Astra для гостиничного бизнеса"
date: 2023-05-04
image: https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/og-image.png
---

Hospitality TV, предлагающее отличное телевизионное решение с высококачественным вещанием и выбором лучших каналов, является неотъемлемой частью гостиничного сервиса.

Количество и качество каналов создают положительное впечатление у гостей. Однако именно здесь и возникает проблема. Гостиницам приходится либо модернизировать существующую телевизионную сеть, либо создавать новую, находя баланс между стоимостью оборудования и необходимыми услугами. Мы предлагаем рассмотреть программное обеспечение Astra, которое обладает мощными и гибкими возможностями при использовании в сочетании с DVB-C модулятором. В этой статье мы рассмотрим плюсы и минусы такого решения, а также пройдемся по шагам его настройки.

## Преимущества кабельного телевидения[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#advantages-of-cable-television)

- построенный на обычном телевизионном кабеле, можно использовать существующую сеть отеля
- большое количество каналов без ограничений по качеству
- любой телевизор способен принимать кабельное телевидение. Дополнительное оборудование в гостевых комнатах не требуется
- надежность сети
- управление вещанием, такое как мониторинг, конфигурирование, переключение каналов и т.д. Все это возможно с помощью Web-интерфейса Astra
- наконец, можно просто расширить количество источников видеосигнала и каналов. Astra позволяет принимать входной сигнал не только с DVB-карт, но и из сети (HTTP, HLS, UDP, RTSP), а также создавать свои телеканалы из видеозаписей.

## Недостатки[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#disadvantages)

- стоимость головной станции, включая DVB-C модулятор и DVB-карты для приема
- некоторые старые телевизоры могут не поддерживать стандарт DVB-C для кабельного телевидения

## Оборудование[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#hardware)

![Схема гостеприимного телевидения](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/ctv.svg)

Эта простая схема используется для иллюстрации. У нас есть спутниковый сигнал, серверный ПК на базе Linux с картой (картами) DVB-S/S2 и картой (картами) FSM-модулятора RESI DVB-C.

### Приемник DVB-S/S2

Для приема спутниковых каналов можно использовать любой DVB-S/S2-адаптер с драйверами для Linux.

![DigitalDevices Max SX8](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/maxsx82018.jpg)

Наиболее популярными DVB-ресиверами являются:

- [Цифровые устройства MAX SX8 Pro](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/340/digital-devices-max-sx8-pro-4/8-8-tuner-tv-card-dvb-s2/dvb-s2x-full-spectrum)
- [Digital Devices Max M4](https://www.digital-devices.eu/shop/en/tv-cards/all-tv-cards/341/digital-devices-max-m4-4x-multi-band-tuner-tv-card?c=167) - универсальное устройство для приема спутниковых, кабельных и эфирных сигналов
- [TBS6909-X](https://www.tbsdtv.com/products/tbs6909-x-dvb-s-s2-s2x-octa-tuner-pcie-card.html)

### DVB-C модулятор

В этой статье мы рассмотрим простые шаги по настройке Astra для модуляции DVB-C с помощью [RESI DVB-C FSM 8](https://www.digital-devices.eu/shop/en/business-tv/qam-sdr-modulator/). Также можно использовать модулятор [TBS6004](https://www.tbsdtv.com/products/tbs6004-dvb-c-4-qam-pcie-card.html).

![Модулятор DVB-C от DigitalDevices RESI](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/resi-fsm.png)

Краткое описание:

- RESI DVB-C FSM 8 имеет 8 транспондеров в соответствии со спецификацией DVB-C
- Диапазон частот: 114 - 858 МГц
- Скорость передачи символов: 1,0 - 7,1 мсим/с
- QAM: 16, 32, 64, 128, 256
- Соотношение сигнал/шум: 42 дБ
- Выход с 8 активными транспондерами: 101 дБ мкВ
- FSM8 может принимать до 7,1 MSym/s и QAM256. Максимальный передаваемый битрейт составляет около 52 Мбит/с

::note Мы советуем передавать на один транспондер не более 40-42 Мбит/с, особенно если входной поток идет со спутника. Так как спутниковые каналы обычно имеют плавающий битрейт, который, например, у HD-канала может скакать от 6 Мбит/с до 11 Мбит/с. ::

В соответствии с этим можно рассчитать, сколько каналов мы можем разместить на одном транспондере и на всех имеющихся транспондерах:

- 4 x HD-канала ~7 Мбит/с = 28 Мбит/с
- 4 x SD-канала ~3 Мбит/с = 12 Мбит/с

Приблизительно мы можем получить 8 каналов на одном транспондере, умножив их на 8 транспондеров, мы можем получить до 64 каналов в вашей сети DVB-C. Это сочетание каналов может быть различным, все зависит от ваших потребностей. Если Вам необходимо большее количество каналов, Вы можете приобрести RESI DVB-C FSM 16 или 24.

## Требования[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#requirements)

Аппаратное обеспечение:

- Серверный ПК, не менее четырехъядерного процессора Intel® или AMD® 2,8 ГГц, 8 Гб оперативной памяти, с 2 или более слотами PCIe, в зависимости от количества карт PCIe
- Модуляторы DVB-C (RESI или TBS)
- Телевизионные карты DVB-S/S2 или DVB-T/T2 (в качестве примера)

Программное обеспечение:

- Операционная система на базе Linux. Мы рекомендуем Ubuntu 22.04 LTS
- Cesbo Astra
- Драйверы DVB-карт
- Интернет-браузер на компьютере. Chrome, Safari или Firefox

## Настройка Astra[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#configure-astra)

### Установка Astra

Прежде всего, необходимо подготовить серверную машину и установить Linux и Astra. Информацию об установке Ubuntu можно найти на [официальном сайте](https://ubuntu.com/tutorials/install-ubuntu-server)

Установка Astra очень проста - достаточно скопировать один бинарный файл на ваш сервер. Здесь подробно описано, как [установить Astra](https://help.cesbo.com/astra/getting-started/first-steps/install)

Довольно часто клиенты забывают настроить свои адаптеры перед выполнением следующих шагов. Поэтому убедитесь, что на сервере установлены драйверы DVB-карты.

- [Установка драйверов DigitalDevices](https://help.cesbo.com/misc/tools-and-utilities/dvb/dd-driver)
- [Установка драйвера TBS](https://help.cesbo.com/misc/tools-and-utilities/dvb/tbs-driver)
- Информацию о других адаптерах можно найти на сайте производителя

### Прием каналов с помощью системы Astra

Теперь самое время настроить все наши адаптеры и найти каналы, которые мы хотим модулировать по DVB-C. Список всех статей о приеме каналов доступен здесь: [Прием с помощью Astra](https://help.cesbo.com/astra/receiving).

Для настройки приема каналов со спутника рекомендуем ознакомиться с этими статьями:

- [Введение в настройку адаптера DVB](https://help.cesbo.com/astra/receiving/dvb/intro)
- [Опции тюнера DVB-S/S2](https://help.cesbo.com/astra/receiving/dvb/s)
- [Сканирование](https://help.cesbo.com/astra/receiving/dvb/scan)

Ниже приведен скриншот примера настроек адаптера:

![Пример DVB-S2](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dvb-s-settings.png)

### Сканирование и выбор необходимых каналов

Когда мы разобрались с настройкой наших адаптеров, можно произвести сканирование нужного транспондера (частоты) и добавить каналы в Astra, выбрав все программы, которые необходимо добавить.

![Сканирование сконфигурированного адаптера](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/scan.png)

![Добавлены каналы на приборной панели](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/dashboard.png)

### Создание нового потока с помощью MPTS

MPTS - Multi Program Transport Stream (или мультиплекс) - это поток, содержащий несколько сервисов (программ). Он используется для передачи каналов на ip-qam/ip-asi модуляторы и мультиплексоры. Ниже приведены скриншоты наиболее общих страниц конфигурации

![Общие настройки MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-general.png)

![Список входов MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-input.png)

![Настройки MPTS SDT](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-sdt.png)

В настройках SDT должна быть представлена вся информация о канале:

- `Service Name` - название программы
- `PNR` - номер программы должен быть таким же, как в списке ввода
- `LCN` - логический номер определяет, какой номер канала будет на телевизоре

![Настройки MPTS NIT](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-nit.png)

В настройках NIT укажите информацию для транспондера DVB-C.

### Настройка модулятора

На данном этапе мы уже нашли и добавили все необходимые каналы в Astra, создали Новый поток и настроили MPTS, который должен быть отправлен на модулятор. Для настройки выходного сигнала на модулятор RESI DVB-C нам необходимо знать количество адаптеров RESI в системе.

На консоли сервера найдите номер карты и модуляторы с помощью команды:

```
find "/dev/dvb" -name "mod*"
```

На выходе мы получаем номер адаптера и его модуляторы типа:

```
/dev/dvb/adapter0/mod0
```

- `adapter0` - номер адаптера в системе
- `mod0` - номер устройства (транспондера) на данном адаптере. Диапазон от 0 до 7 для модулятора FSM8

Теперь настала очередь настройки выходного сигнала на модулятор RESI DVB-C в настройках MPTS

![Список выходов MPTS](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-output.png)

В результате мы должны получить полностью настроенный Stream, как показано на рисунке:

![MPTS на приборной панели](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/mpts-dashboard.png)

## Мониторинг и управление[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#monitor-and-manage)

С помощью Astra можно анализировать качество и стабильность транспортных потоков. Экспортировать статистику и события во внешние системы, такие как Zabbix или Grafana.

Также в любой момент можно открыть веб-интерфейс Astra Web Interface, чтобы просто заглянуть в Dashboard. Здесь вы увидите уже настроенные адаптеры, созданные потоки, а также некоторые полезные параметры, такие как уровень/качество сигнала, битрейт на каналах и т.д.

![Веб-интерфейс Astra](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/astra-dashboard.png)

![Zabbix](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/zabbix.png)

![Grafana](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/grafana.png)

## Проверка выходного сигнала DVB-C[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#checking-the-output-dvb-c-signal)

С помощью этих простых шагов мы настроили наш поток. Теперь у нас есть каналы, преобразованные и промодулированные FSM-модулятором RESI DVB-C.

Наилучшим способом проверки выходного сигнала является использование анализатора. Существует множество различных моделей от многих производителей. Например, Telestar:

![Анализатор Telestar](https://cdn.cesbo.com/help/astra/getting-started/ctv-with-astra/telestar.jpg)

Также мы можем подключить коаксиальный кабель от RESI к телевизору и в настройках телевизора произвести новое сканирование каналов DVB-C - Full Scan или Network Scan (или задать параметры сканирования вручную). Настройки поиска каналов полностью зависят от производителя телевизора, но в целом они очень похожи.

## Поиск и устранение неисправностей при приеме сигнала DVB[](https://help.cesbo.com/astra/getting-started/use-cases/cable-television-with-astra-for-hospitality-industry#troubleshooting-dvb-receiving)

В случае возникновения проблем при настройке мы приводим список статей по выявлению проблем и устранению потенциальной причины их возникновения: [Troubleshooting DVB receiving](https://help.cesbo.com/misc/troubleshooting/dvb)

Мы заботимся о каждом нашем клиенте и о том, чтобы у вас остались самые лучшие впечатления от работы с Cesbo Astra, поэтому мы предлагаем больше каналов поддержки, таких как Online-помощь и поддержка по электронной почте.
