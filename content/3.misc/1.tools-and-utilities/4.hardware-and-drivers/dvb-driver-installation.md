---
title: "DVB Driver Installation"
date: 2023-06-23
---

Installation drivers for DigitalDevices and TBS DVB adapters

## DigitalDevices Driver Installation

Run in console:

```sh
curl -L http://cesbo.com/download/astra/scripts/drv-dd.sh | bash
```

<details><summary>Installation in manual mode</summary>

### Prepare system

To install drivers needed root privileges:

```
sudo -s
```

Install system utilities to build drivers from the source code:

```sh
apt-get install build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

#### Disable auto update in Ubuntu 16.04

```sh
systemctl disable apt-daily.service
systemctl disable apt-daily.timer
```

### Install

Download latest driver from the official repository:

```sh
git clone --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
cd /usr/src/dddvb
```

Build drivers and install it:

```sh
make
make install
```

Create a list of module dependencies:

```
mkdir -p /etc/depmod.d
echo 'search extra updates built-in' | tee /etc/depmod.d/extra.conf
depmod -a
```

Create configuration file for MaxS8 DVB adapters:

```
echo 'options ddbridge fmode=0' | tee /etc/modprobe.d/ddbridge.conf
```

Replacing `0` with the mode number. Modes for Max S8 :

* `fmode=0` - 4 tuner mode ( Internal multiswitch disabled )
* `fmode=1` - Quad LNB / normal outputs of multiswitches
* `fmode=2` - Quattro - LNB / cascade outputs of multiswitches
* `fmode=3` - Unicable LNB or JESS / Unicabel output of the multiswitch

To launch installed drivers restart your system:

```sh
shutdown -r now
```

After reboot check adapters:

```sh
ls /dev/dvb
```

Should be listed all adapters installed in the system. For example:

```
adapter0 adapter1 adapter2 adapter3 adapter4 adapter5 adapter6 adapter7
```

</details>

<details><summary>Troubleshooting</summary>

#### Signal is fine, but channels don't work

Check dmesg output for i2c errors:

```sh
dmesg | grep i2c
```

if you see messages like i2c_write error then turn off MSI (Message Signaled Interrupts) in the driver:

Open `/etc/modprobe.d/ddbridge.conf` in any text editor. Find `options ddbridge` line/
After the `ddbridge` append `msi=0` option. For example: `options ddbridge msi=0 fmode=1`
If file does not exists, then create file:

```
echo 'options ddbridge msi=0' | tee /etc/modprobe.d/ddbridge.conf
```

#### DVB adapters are not available

If command `ls /dev/dvb` shows error: `No such file or directory`

With lspci you may check is adapters available in the system:

```sh
lspci | grep Multimedia
```

If adapters connected to the PCIe properly you will see listing of the PCIe adapters. For example:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Check system boot log for errors:

```sh
dmesg | grep -i dvb
```

You may send this log to the adapter vendor to find a solution.

#### Drivers has been installed some time ago and all worked fine before server reboot

Probably Linux kernel has been updated. After Linux kernel update drivers should be reinstalled.

</details>

## TBS Driver Installation

Run in console:

```sh
curl -L http://cesbo.com/download/astra/scripts/drv-tbs.sh | bash
```

You can contact TBS representatives for help installing drivers at this link: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - select "software installation and debugging"

<details><summary>Installation in manual mode</summary>

### Prepare system

To install drivers needed root privileges:

```
sudo -s
```

Install system utilities to build drivers from the source code:

```sh
apt-get install build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

#### Remove old media drivers:

```sh
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

#### Disable auto update in Ubuntu 16.04

```sh
systemctl disable apt-daily.service
systemctl disable apt-daily.timer
```

### Install

Downloading and building:

```sh
cd /usr/src
git clone https://github.com/tbsdtv/media_build.git
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest ./media
cd media_build
make dir DIR=../media
make allyesconfig
make -j4
sudo make install
```

Install firmware for DVB adapters:

```sh
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -jxvf - -C /lib/firmware/
```

To launch installed drivers restart your system:

```sh
shutdown -r now
```

After reboot check adapters:

```sh
ls /dev/dvb
```

Should be listed all adapters installed in the system:

```
adapter0 adapter1 adapter2 adapter3 adapter4 adapter5 adapter6 adapter7
```

</details>

<details><summary>Troubleshooting</summary>

#### DVB adapters are not available

If command `ls /dev/dvb` shows error: `No such file or directory`

With lspci you may check is adapters available in the system:

```sh
lspci | grep Multimedia
```

If adapters connected to the PCIe properly you will see listing of the PCIe adapters. For example:

```
01:00.0 Multimedia controller: TBS Technologies DVB-S2 4 Tuner PCIe Card
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Check system boot log for errors:

```sh
dmesg | grep -i dvb
```

You may send this log to the adapter vendor to find a solution.

#### Drivers has been installed some time ago and all worked fine before server reboot

Probably Linux kernel has been updated. After Linux kernel update drivers should be reinstalled.

</details>

[]()
