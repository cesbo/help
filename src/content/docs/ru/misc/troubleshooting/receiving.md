---
title: "Проблемы с приемом DVB"
date: 2023-02-28
sidebar:
    order: 5
---

Подробное руководство по устранению проблем, связанных с приемом сигнала DVB, охватывающее такие важные аспекты, как качество сигнала, частота ошибок, настройка оборудования и помехи. Ознакомьтесь с практическими советами и методами диагностики и устранения распространенных проблем, обеспечивая бесперебойную работу цифрового телевидения.

## Все работает нормально до перезагрузки сервера[](/ru/misc/troubleshooting/dvb/receiving#all-works-fine-until-server-reboot)

Вероятно, ядро Linux было обновлено с помощью автообновления или вручную. Попробуйте переустановить драйвер.

## не удалось открыть фронтенд: Устройство или ресурс заняты[](/ru/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-device-or-resource-busy)

Адаптер занят другим процессом. Возможно, Astra запускалась дважды.

Проверить, какой процесс использует Astra, можно с помощью следующей команды:

```
lsof | grep adapter0
```

Пример вывода:

```
astra 23068 ... /dev/dvb/adapter31/dvr0
astra 23068 ... /dev/dvb/adapter31/frontend0
```

- `astra` - название процесса
- `23068` - PID процесса
- `/dev/dvb/adapter32/...` - путь к адаптеру

## не удалось открыть фронтенд: Нет такого файла или каталога[](/ru/misc/troubleshooting/dvb/receiving#failed-to-open-frontend-no-such-file-or-directory)

Первым делом необходимо проверить наличие DVB-адаптеров в системе с помощью команды:

```
ls /dev/dvb
```

Если команда выдает сообщение об ошибке "No such file or directory", то первое, что необходимо сделать, - это проверить, доступно ли оборудование для системы с помощью данной команды:

```
lspci | grep Multimedia
```

Если адаптеры правильно подключены к слоту PCIe, вы должны увидеть список адаптеров PCIe следующего вида:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Попробуйте переустановить драйвер. Если это не поможет, обратитесь к поставщику оборудования.

## Сигнал нормальный, но каналы не работают[](/ru/misc/troubleshooting/dvb/receiving#signal-is-fine-but-channels-not-working)

Эта проблема характерна для адаптеров компании DigitalDevices. Проверьте вывод dmesg на наличие ошибок i2c:

```
dmesg | grep i2c
```

если появляются сообщения типа i2c\_write error, то отключите в драйвере MSI (Message Signaled Interrupts):

Откройте файл `/etc/modprobe.d/ddbridge.conf` в любом текстовом редакторе. Найти строку `options ddbridge`. После `ddbridge` добавить `msi=0` опция. Например:

```
options ddbridge msi=0 fmode=1
```

## cxd2878: Ошибка SLtoAIT\_BandSetting[](/ru/misc/troubleshooting/dvb/receiving#cxd2878-sltoait_bandsetting-error)

Данная ошибка может появиться в журнале dmesg для DVB-адаптеров TBS 6209SE. Для решения этой проблемы установите параметр Bandwidth в настройках DVB-адаптера на вкладке Advanced:

- 8 МГц для DVB-T или DVB-T2
- 6 МГц для ISDB-T
