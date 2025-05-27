---
title: "Установка драйвера TBS"
date: 2023-02-23
sidebar:
    order: 12
---

TBS - производитель оборудования, специализирующийся на DVB-устройствах: тюнерах, модуляторах.

## Автоматическая установка[](/ru/misc/tools-and-utilities/dvb/tbs-driver#auto-installation)

Вы можете установить драйвер в автоматическом режиме или вручную. Для автоматической установки драйвера запустите консоль:

```
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-tbs.sh | sh
```

После перезапуска сервера [проверьте](/ru/misc/tools-and-utilities/dvb/tbs-driver#check-driver) правильность установки драйвера.

## Ручная установка[](/ru/misc/tools-and-utilities/dvb/tbs-driver#manual-installation)

### Подготовка системы

Для установки драйверов необходимы права root:

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

Удалите старые драйверы носителей:

```
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Установка

Загрузите последнюю версию драйвера из официального репозитория:

```
git clone --depth=1 https://github.com/tbsdtv/media_build.git /usr/src/media_build
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest /usr/src/media
```

Соберите драйверы и установите его:

```
cd /usr/src/media_build
make dir DIR=../media
make allyesconfig
make
make install
```

Установка микропрограммного обеспечения для DVB-адаптеров:

```
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -C /lib/firmware/ -jxf -
```

### Перезапустить систему

Для запуска установленных драйверов перезагрузите систему:

```
shutdown -r now
```

После перезапуска сервера [проверьте](/ru/misc/tools-and-utilities/dvb/tbs-driver#check-driver) правильность установки драйвера.

## Проверка работы драйвера[](/ru/misc/tools-and-utilities/dvb/tbs-driver#check-driver)

Чтобы проверить правильность установки драйвера, выведите список адаптеров в каталоге dvb:

```
ls /dev/dvb
```

Должны быть перечислены все адаптеры, установленные в системе. Например:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Поиск и устранение неисправностей[](/ru/misc/tools-and-utilities/dvb/tbs-driver#troubleshooting)

За помощью в установке драйверов можно обратиться к представителям компании TBS по этой ссылке: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - выберите "Установка и отладка ПО".

Если у вас возникли какие-либо проблемы с адаптерами DVB, пожалуйста, проверьте раздел [Устранение неисправностей DVB](/ru/misc/troubleshooting/dvb)
