---
title: "DigitalDevices Driver Installation"
date: 2023-02-23
sidebar:
    order: 13
---

DigitalDevices is a hardware manufacturer specialized on DVB devices: tuners, modulators.

## Auto Installation

You can install driver in automatically mode or manually. To install driver automatically run in console:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-dd.sh | sh
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
git clone -b 0.9.37 --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
```

Build drivers and install it:

```
cd /usr/src/dddvb
make
make install
```

Update dirver dependencies:

```
mkdir -p /etc/depmod.d
echo 'search extra updates built-in' | tee /etc/depmod.d/extra.conf
depmod -a
```

Create driver configuration for DigitalDevices MaxS8:

```
echo 'options ddbridge fmode=0' | tee /etc/modprobe.d/ddbridge.conf
```

For MaxS8 available next fmode values instead of 0:

- `fmode=0` - 4 tuner mode (internal multiswitch disabled)
- `fmode=1` - Quad LNB / normal outputs of multiswitches
- `fmode=2` - Quattro - LNB / cascade outputs of multiswitches
- `fmode=3` - Unicable LNB or JESS / Unicabel output of the multiswitch

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

If you have any issues with your DVB Adapters, please check [DVB Troubleshooting](/misc/troubleshooting/dvb)
