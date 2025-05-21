---
title: "Ошибка шины PCIe"
date: 2023-08-02
sidebar:
    order: 6
---

Со временем DVB-адаптеры могут перестать работать или работать с такими проблемами, как ошибки CC и перенастройка сигнала. Эти признаки неисправности могут быть отражены в виде следующей ошибки в dmesg:

```
pcieport 0000:00:1c.3: PCIe Bus Error: severity=Corrected, type=Physical Laye
```

Как правило, эта ошибка возникает в результате того, что система управления питанием в активном состоянии (ASPM) пытается уменьшить подачу питания на порт PCIe.

## Отключить ASPM[](https://help.cesbo.com/misc/troubleshooting/dvb/pcie#disable-aspm)

На серверах мы рекомендуем отключить управление питанием.

Откройте файл `/etc/default/grub` в любом текстовом редакторе и найдите строку, начинающуюся с:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

добавить параметр `pcie_aspm=off`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pcie_aspm=off"
```

Сохраните файл и примените изменения:

```
sudo update-grub
```

Перезагрузите сервер
