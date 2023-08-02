---
title: "Resolve issue with Unsupported SFP+ module"
date: 2023-06-23
---

You may experience an issue with SFP+ modules on Intel 10G adapter, where the card fails to initiate the SFP+ module, displaying the following error message in dmesg:

```
ixgbe 0000:02:00.1: failed to load because an unsupported SFP+ module type was detected.
```

## Solution

Unload the driver:

```
rmmod ixgbe
```

Load driver with option `allow_unsupported_sfp=1`:

```
modprobe ixgbe allow_unsupported_sfp=1
```

If the network interface has been started successfully, you can configure the network and verify that it works correctly.

### Several network interfcaces

If there are several network interfaces, it may be necessary to write 1 for each of them, this is done by the number and separated by commas. For four interfaces, the option will look like this:

```
modprobe ixgbe allow_unsupported_sfp=1,1,1,1
```

## Save option

The above solution only for test and will be flushed after server reboot. For permanent configuration pass option to the kernel via the grub boot loader.

Open file `/etc/default/grub` in any text editor and find the line started with:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

add the parameter `ixgbe.allow_unsupported_sfp=1`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ixgbe.allow_unsupported_sfp=1"
```

Save the file and apply the changes:

```
sudo update-grub
```

Restart your server
