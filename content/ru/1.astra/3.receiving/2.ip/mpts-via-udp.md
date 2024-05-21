---
title: "Прием MPTS по протоколу UDP"
date: 2023-03-10
---

С помощью Astra можно принимать MPTS (Multi Program Transport Stream) из различных источников, включая UDP. Полученный MPTS может быть демультиплексирован на несколько каналов SPTS (Single Program Transport Stream).

## Виртуальный адаптер[](https://help.cesbo.com/astra/receiving/ip/mpts-via-udp#virtual-adapter)

::alert Виртуальный адаптер доступен для версий, выпущенных после 20 сентября 2022 года
::

Для быстрой и простой настройки приема MPTS можно воспользоваться Виртуальным адаптером. Для этого в главном меню нажмите кнопку "Новый адаптер":

![Виртуальный адаптер для MPTS](https://cdn.cesbo.com/help/astra/receiving/ip/mpts-via-udp/virtual-mpts.png)

В **Адрес** поле задает источник UDP, например `udp://239.255.1.1:1234`. Подробнее о формате адреса UDP читайте в [Прием UDP/RTP](https://help.cesbo.com/astra/receiving/ip/udp).

Примените изменения, после чего можно просканировать адаптер, чтобы получить список доступных каналов. Выберите каналы, которые необходимо добавить, и нажмите кнопку Применить.

## Создание каналов вручную[](https://help.cesbo.com/astra/receiving/ip/mpts-via-udp#create-channels-manually)

На любой версии Astra можно добавлять каналы из потока MPTS вручную.

Прежде всего, проанализируйте UDP MPTS с помощью программы MPEG-TS Analyzer:

```
astra --analyze udp://239.255.1.1:1234
```

Подробнее о том, как анализировать потоки: [Astra MPEG-TS Analyzer](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/astra-mpeg-ts-analyzer). Анализатор показывает информацию о доступных каналах, например:

```
INFO: PMT pnr:100 version:1
INFO: PMT pnr:200 version:1
```

Далее вы можете создать канал, нажав кнопку `New Stream` в главном меню. В настройках канала установите имя и адрес входа с номером программы (PNR): `udp://239.255.1.1:1234#pnr=100`. И нажмите кнопку Применить для сохранения настроек.
