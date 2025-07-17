---
title: DigitalDevices Driver
sidebar:
    order: 21
---

DigitalDevices — производитель оборудования, специализирующийся на устройствах DVB: тюнеры, модуляторы.

## Автоматическая установка

Вы можете установить драйвер автоматически или вручную. Чтобы установить драйвер автоматически, выполните в консоли:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-dd.sh | sh
```

После перезагрузки сервера [проверьте](#check-driver), правильно ли установлен драйвер.

## Ручная установка

### Подготовка системы

Для установки драйверов требуются привилегии root:

```sh
sudo -s
```

Установите системные утилиты для сборки драйверов из исходного кода:

```sh
apt -y install \
    build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

Удалите старые медиа-драйверы:

```sh
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Установка

Скачайте последний драйвер из официального репозитория:

```sh
git clone -b 0.9.37 --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
```

Соберите драйверы и установите их:

```sh
cd /usr/src/dddvb
make
make install
```

Обновите зависимости драйверов:

```sh
mkdir -p /etc/depmod.d
echo 'search extra updates built-in' | tee /etc/depmod.d/extra.conf
depmod -a
```

Создайте конфигурацию драйвера для DigitalDevices MaxS8:

```sh
echo 'options ddbridge fmode=0' | tee /etc/modprobe.d/ddbridge.conf
```

Для MaxS8 доступны следующие значения fmode вместо 0:

- `fmode=0` - режим 4 тюнера (внутренний мультисвитч отключен)
- `fmode=1` - Quad LNB / нормальные выходы мультисвитчей
- `fmode=2` - Quattro - LNB / каскадные выходы мультисвитчей
- `fmode=3` - Unicable LNB или JESS / Unicable выход мультисвитча

### Перезагрузка системы

Чтобы запустить установленные драйверы, перезагрузите вашу систему:

```sh
shutdown -r now
```

После перезагрузки сервера [проверьте](#check-driver), правильно ли установлен драйвер.

## Проверка драйвера

Чтобы проверить, правильно ли установлен драйвер, перечислите адаптеры в каталоге dvb:

```sh
ls /dev/dvb
```

Должны быть перечислены все установленные в системе адаптеры. Например:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Устранение неполадок

Если у вас есть проблемы с вашими DVB адаптерами, пожалуйста, ознакомьтесь с [Устранение неполадок](/en/astra/adapters/troubleshooting/).