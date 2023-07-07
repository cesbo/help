---
title: "Unsupported SFP+ module"
date: 2023-06-23
---
After you install the SFP module on an Intel Corporation 82599ES 10-Gigabit network card, you may experience an issue where the card does not start the module with an error:

```
ixgbe 0000:02:00.1: failed to load because an unsupported SFP+ module type was detected.
```

This error indicates that this module has not been tested to work with this card and the card will not work with it.

Unload the driver:

```sh
modprobe ixgbe -r
```

Load it with the option `allow_unsupported_sfp=1`

```sh
modprobe ixgbe allow_unsupported_sfp=1
```

If the network interface has been started successfully, you can configure the network and verify that it works correctly.

If there are several network interfaces, it may be necessary to write 1 for each of them, this is done by the number and separated by commas. For four interfaces, the option will look like this: allow_unsupported_sfp=1,1,1,1

To ensure automatic application of this option, you should specify the following option for the kernel via the grub boot loader config:

Open and edit the file /etc/default/grub:
find the line:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

add the parameter:

```
ixgbe.allow_unsupported_sfp=1
```

the following is an example file:

```
GRUB_DEFAULT=6
#GRUB_HIDDEN_TIMEOUT=0
GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT="2"
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ixgbe.allow_unsupported_sfp=1"
GRUB_CMDLINE_LINUX=""

# Uncomment to disable graphical terminal (grub-pc only)
#GRUB_TERMINAL=console
```

Save the file and apply the changes:

```sh
sudo update-grub
```
