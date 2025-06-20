---
title: TBS Driver
sidebar:
    order: 21
---

TBS is a hardware manufacturer specialized on DVB devices: tuners, modulators.

## Auto Installation

You can install driver in automatically mode or manually. To install driver automatically run in console:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-tbs.sh | sh
```

After server restart, [check](#check-driver) if the driver has been installed correctly.

## Manual Installation

### Prepare system

To install drivers needed root privileges:

```
sudo -s
```

Install system utilities to build drivers from the source code:

```
apt -y install \
    build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

Remove old media drivers:

```
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Install

Download latest driver from the official repository:

```
git clone --depth=1 https://github.com/tbsdtv/media_build.git /usr/src/media_build
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest /usr/src/media
```

Build drivers and install it:

```
cd /usr/src/media_build
make dir DIR=../media
make allyesconfig
make
make install
```

Install firmware for DVB adapters:

```
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -C /lib/firmware/ -jxf -
```

### Restart System

To launch installed drivers restart your system:

```
shutdown -r now
```

After server restart, [check](#check-driver) if the driver has been installed correctly.

## Check Driver

To check if the driver has been installed correctly, list adapters in the dvb directory:

```
ls /dev/dvb
```

Should be listed all adapters installed in the system. For example:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Troubleshooting

You can contact TBS representatives for help installing drivers at this link: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - select "Software installation and debugging"

If you have any issues with your DVB Adapters, please check [Troubleshooting](/en/astra/adapters/troubleshooting/)
