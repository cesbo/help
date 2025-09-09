---
title: Common Issues with DVB Adapters
sidebar:
    order: 90
---

Detailed guide on troubleshooting DVB reception issues, covering essential aspects such as signal quality, error rates, equipment setup, and interference. Learn practical tips and techniques to diagnose and resolve common problems, ensuring a seamless digital TV viewing experience.

## All works fine until server reboot

Most common issue with DVB adapters is that they stop working after server reboot.
Probably Linux kernel has been updated with autoupdate or manually.
Try to reinstall driver.

## failed to open frontend: No such file or directory

The first step is to check whether the DVB adapters are present in the system using the command:

```sh
ls /dev/dvb
```

If the command shows an error message "No such file or directory", the first thing to do is to check if the hardware is available to the system using the command:

```sh
lspci | grep Multimedia
```

If the adapters are properly connected to the PCIe slot, you should see a listing of the PCIe adapters like this:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Try to reinstall the driver. If this doesn't help, please contact the hardware vendor.

## failed to open frontend: Device or resource busy

Adapter is taken by another process. Maybe Astra started twice.

You may check wich process uses Astra with next command:

```sh
lsof | grep adapter0
```

Example output:

```
astra 23068 ... /dev/dvb/adapter31/dvr0
astra 23068 ... /dev/dvb/adapter31/frontend0
```

- `astra` - process name
- `23068` - process PID
- `/dev/dvb/adapter32/...` - path to the adapter

## Signal is fine, but channels not working

This issue common for adapters by DigitalDevices. Check dmesg output for i2c errors:

```sh
dmesg | grep i2c
```

if you see messages like i2c_write error then turn off MSI (Message Signaled Interrupts) in the driver:

Open file `/etc/modprobe.d/ddbridge.conf` in any text editor. Find line `options ddbridge`. After the `ddbridge` append `msi=0` option. For example:

```
options ddbridge msi=0 fmode=1
```

## PCIe Bus Error

DVB adapters may stop to working over time, or work with issues like CC errors and signal re-tuning. These malfunction signs could be reflected as the following error in the dmesg:

```
pcieport 0000:00:1c.3: PCIe Bus Error: severity=Corrected, type=Physical Laye
```

Typically, this error occurs as a result of the system's Active-State Power Management (ASPM) attempting to reduce power supply to the PCIe port.

## Disable ASPM

On the servers we recommend to disable power management.

Open file `/etc/default/grub` in any text editor and find the line started with:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

add the parameter `pcie_aspm=off`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pcie_aspm=off"
```

Save the file and apply the changes:

```
sudo update-grub
```

Restart your server

## Secure Boot

If the `/dev/dvb` folder is empty or not found, try to start driver manually. Launch in your console:

```
modprobe dvb-core
```

If you got error:

```
modprobe: ERROR: could not insert 'dvb_core': Required key not available
```

This error message is related to Secure Boot.

1. Restart your system and enter the system's BIOS/UEFI settings.
2. Navigate to the Secure Boot configuration page (the exact position varies based on the manufacturer and BIOS/UEFI version).
3. Disable the Secure Boot option.
4. Save changes and exit.
5. Boot into Linux again and check adapters with `ls /dev/dvb`

## cxd2878: SLtoAIT_BandSetting error

This error may appear in the dmesg log for DVB adapters TBS 6209SE. To resolve this issue set the Bandwidth parameter in the DVB Adapter settings, on the Advanced tab:

- 8MHz for DVB-T or DVB-T2
- 6MHz for ISDB-T
