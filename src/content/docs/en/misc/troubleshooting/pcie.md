---
title: "PCIe Bus Error"
date: 2023-08-02
sidebar:
    order: 6
---

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
