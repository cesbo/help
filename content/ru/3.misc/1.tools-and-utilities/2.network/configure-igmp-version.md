---
title: "Настройка IGMP версии"
date: 2023-03-02
---

IGMP (Internet Group Management Protocol) - это коммуникационный протокол, используемый устройствами в сети для присоединения к многоадресным группам и выхода из них. IGMP имеет несколько версий, включая IGMPv2 и IGMPv3, которые предлагают различные возможности и усовершенствования.

Некоторое сетевое оборудование, например коммутаторы или маршрутизаторы, может поддерживать только IGMPv2, что может вызвать проблемы при попытке сервера присоединиться к многоадресной группе, использующей IGMPv3. Поэтому может потребоваться изменить версию IGMP, используемую сервером.

## Конфигурация[](https://help.cesbo.com/misc/tools-and-utilities/network/configure-igmp-version#configuration)

Чтобы изменить версию IGMP на сервере, можно изменить параметр `/etc/sysctl.conf` файл. Сначала определите интерфейс, который должен использовать другую версию IGMP (например, eth0). Затем добавьте следующую строку в файл `/etc/sysctl.conf` файл:

```
net.ipv4.conf.eth0.force_igmp_version=2
```

Эта строка заставляет ваш сервер использовать IGMPv2 на указанном интерфейсе. Чтобы применить изменения, сохраните файл и выполните следующую команду:

```
sudo sysctl -p
```

## Проверка версии IGMP[](https://help.cesbo.com/misc/tools-and-utilities/network/configure-igmp-version#check-igmp-version)

Для подтверждения успешного изменения версии IGMP можно воспользоваться командой tcpdump для захвата сетевого трафика на указанном интерфейсе. Например, для захвата IGMP-трафика на интерфейсе eth0 выполните следующую команду:

```
sudo tcpdump -i eth1 igmp
```

Затем попробуйте подписаться на многоадресный поток. Например:

```
astra --analyze udp://eth1@239.255.1.1:1234
```

В результате будут отображены все IGMP-пакеты на интерфейсе. Проверьте вывод, чтобы убедиться, что используемая версия IGMP теперь IGMPv2.
