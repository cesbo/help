---
title: "Оповещение о мультикаст группах по протоколу SAP"
date: 2023-09-01
sidebar:
    order: 3
---

Session Announcement Protocol (SAP) - это протокол для анонсирования доступных многоадресных потоков в локальных сетях. Клиенты в сети прослушивают анонсы и получают такую информацию, как:

- Название потока
- Адрес и порт многоадресной рассылки
- TTL
- Формат потока - RTP или UDP

Astra отправляет SAP-пакеты в многоадресную группу 239.255.255.255 порт 9875.

## Настройка Astra[](https://help.cesbo.com/astra/delivery/broadcasting/sap#configure-astra)

В поле Выходной адрес добавьте `sap` опция для включения объявлений SAP.

![Настройки каналов](https://cdn.cesbo.com/help/astra/delivery/broadcasting/sap/channel.png)

## Получение SAP с помощью VLC[](https://help.cesbo.com/astra/delivery/broadcasting/sap#receiving-sap-with-vlc)

Откройте VLC Media Player и в списке воспроизведения выберите Local Network -> Network streams (SAP). VLC получит анонсы SAP и выведет список всех доступных потоков. Дважды щелкните на потоке, чтобы начать воспроизведение.
