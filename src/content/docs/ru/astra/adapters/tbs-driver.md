---
title: TBS Driver
sidebar:
    order: 21
---

TBS - производитель оборудования, специализирующийся на устройствах DVB: тюнерах, модуляторах.

## Автоматическая Установка

Вы можете установить драйвер в автоматическом режиме или вручную. Чтобы установить драйвер автоматически, выполните в консоли следующую команду:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-tbs.sh | sh
```

После перезагрузки сервера, [проверьте](#check-driver), правильно ли был установлен драйвер.

## Ручная Установка

### Подготовка системы

Для установки драйверов необходимы привилегии root:

```
sudo -s
```

Установите системные утилиты для сборки драйверов из исходного кода:

```
apt -y install \
    build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

Удалите старые медиа-драйверы:

```
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Установка

Скачайте последний драйвер из официального репозитория:

```
git clone --depth=1 https://github.com/tbsdtv/media_build.git /usr/src/media_build
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest /usr/src/media
```

Соберите драйверы и установите их:

```
cd /usr/src/media_build
make dir DIR=../media
make allyesconfig
make
make install
```

Установите прошивку для DVB-адаптеров:

```
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -C /lib/firmware/ -jxf -
```

### Перезагрузка Системы

Чтобы запустить установленные драйверы, перезагрузите систему:

```
shutdown -r now
```

После перезагрузки сервера [проверьте](#check-driver), правильно ли был установлен драйвер.

## Проверка Драйвера

Чтобы проверить правильность установки драйвера, перечислите адаптеры в каталоге dvb:

```
ls /dev/dvb
```

Должны быть перечислены все установленные в системе адаптеры. Например:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Устранение Неполадок

Вы можете связаться с представителями TBS для получения помощи по установке драйверов по следующей ссылке: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - выберите "Software installation and debugging"

Если у вас возникли какие-либо проблемы с вашими DVB-адаптерами, пожалуйста, проверьте [Устранение неполадок](/en/astra/adapters/troubleshooting/)