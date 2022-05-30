# DigitalDevices Drivers

## Automatic Installation

For installation by script just launch command:

```
curl http://cesbo.com/download/astra/scripts/drv-dd.sh | bash
```

## Manual Installation

### Prepare system

To install drivers needed root privileges:

```
sudo -s
```

Install system utilities to build drivers from the source code:

```
apt-get install build-essential \
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
git clone --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
cd /usr/src/dddvb
```

Build drivers and install it:

```
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

For MaxS8 available next `fmode` values instead of `0`:

- `fmode=0` - 4 tuner mode (internal multiswitch disabled)
- `fmode=1` - Quad LNB / normal outputs of multiswitches
- `fmode=2` - Quattro - LNB / cascade outputs of multiswitches
- `fmode=3` - Unicable LNB or JESS / Unicabel output of the multiswitch

## Restart System

To launch installed drivers restart your system:

```
shutdown -r now
```

After reboot check adapters:

```
ls /dev/dvb
```

Should be listed all adapters installed in the system. For example:

```
adapter0 adapter1 adapter2 adapter3 adapter4 adapter5 adapter6 adapter7
```

## Troubleshooting

<details class="marker">
<summary>All works fine until server reboot</summary>

Probably Linux kernel has been updated with autoupdate or manually. Try to reinstall driver.

</details>

<details class="marker">
<summary>DVB adapters are not available</summary>

If command `ls /dev/dvb` shows error `No such file or directory`, then first of all need to check is hardware is visible by the system:

```
lspci | grep Multimedia
```

If adapters connected to the PCIe properly you will see listing of the PCIe adapters. For example:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Try to reinstall driver. If this not helps, please contact with hardware vendor.

</details>

<details class="marker">
<summary>Signal is fine, but channels not working</summary>

Check dmesg output for i2c errors:

```
dmesg | grep i2c
```

if you see messages like `i2c_write error` then turn off MSI (Message Signaled Interrupts) in the driver:

Open `/etc/modprobe.d/ddbridge.conf` in any text editor. Find line `options ddbridge`.
After the `ddbridge` append `msi=0` option. For example: `options ddbridge msi=0 fmode=1`.

</details>
