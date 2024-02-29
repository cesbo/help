---
title: "CPU Power Mode"
date: 2023-09-28
---

In the world of digital TV streaming, every millisecond matters. Delays or lags can significantly impact the quality of service.

One of the key factors is the CPU power mode. By default, Linux servers have their CPUs set to a power-saving mode to reduce power consumption and manage heat generation. To ensure optimal performance of your streaming software, it is recommended to set your CPU to its maximum performance mode.

## With cpupower utility

To check the CPU power mode on a Linux server, you can use the `cpupower` utility. This utility is part of the `linux-tools-common` package.

### Install cpupower

```
sudo apt-get update
sudo apt-get install linux-tools-common
```

### Check current settings

```
cpupower frequency-info
```

This command will display the current CPU frequency, governor and other information. If the governor is set to 'powersave' or 'ondemand', then the CPU is in power saving mode.

### Disable the power saving mode

If you want to disable the power saving mode, you can set the governor to `performance`. This will make the CPU run at maximum frequency.

```
cpupower frequency-set -g performance
```

This setting will be lost after a reboot. If you want to make it permanent, you can add the above command to `/etc/rc.local` file so that it gets executed at every boot.

## Check CPU mode manually

```
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

This command will display the current CPU governor for each core. Information about current CPU frequency available in the `/proc/cpuinfo` file:

```
processor	: 0
model name	: Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz
cpu MHz		: 1197.109
```

as we can see current CPU frequency is only 1.2GHz.
