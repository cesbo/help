---
title: "Устранение проблемы с неподдерживаемым модулем SFP+"
date: 2023-06-23
---

При использовании модулей SFP+ на адаптерах Intel 10G может возникнуть проблема, когда плата не может инициировать модуль SFP+, выводя в dmesg следующее сообщение об ошибке:

```
ixgbe 0000:02:00.1: failed to load because an unsupported SFP+ module type was detected.
```

## Решение[](https://help.cesbo.com/misc/articles/hardware/unsupported-sfp-module#solution)

Выгрузите драйвер:

```
rmmod ixgbe
```

Загрузите драйвер с опцией `allow_unsupported_sfp=1`:

```
modprobe ixgbe allow_unsupported_sfp=1
```

Если запуск сетевого интерфейса прошел успешно, можно настроить сеть и убедиться в ее корректной работе.

### Несколько сетевых интерфейсов

Если сетевых интерфейсов несколько, то может потребоваться записать 1 для каждого из них, для этого используется номер и разделяются запятыми. Для четырех интерфейсов вариант будет выглядеть следующим образом:

```
modprobe ixgbe allow_unsupported_sfp=1,1,1,1
```

## Сохранение изменений:[](https://help.cesbo.com/misc/articles/hardware/unsupported-sfp-module#save-option)

Приведенное выше решение предназначено только для тестирования и будет удалено после перезагрузки сервера. Для постоянной конфигурации передайте опцию в ядро через загрузчик grub.

Откройте файл `/etc/default/grub` в любом текстовом редакторе и найдите строку, начинающуюся с:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

добавить параметр `ixgbe.allow_unsupported_sfp=1`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ixgbe.allow_unsupported_sfp=1"
```

Сохраните файл и примените изменения:

```
sudo update-grub
```

Перезагрузите сервер
