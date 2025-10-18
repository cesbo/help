---
title: Read-only file system
sidebar:
    order: 52
---

The error name says it all: a program cannot write to the disk because the disk is in "read-only" mode, or the program is running with restricted write permissions.

## How This Error Shows Up in Astra

The most common scenarios where this error occurs:

- When Astra starts for the first time and tries to save the initial configuration
- When saving changes in the web interface

In the log, you will see an error like this:

```
failed to save config /etc/astra/astra.conf [Read-only file system]
```

## Filesystem Intentionally Mounted as Read-Only

In some cases, the filesystem may be deliberately mounted in read-only mode. This can happen with live USB systems, recovery modes, or certain embedded systems.

### How to Check

You can check if a filesystem is mounted as read-only by running:

```sh
mount | grep ' / '
```

Look for the `ro` (read-only) option in the output. Example:

```
/dev/sda1 on / type ext4 (ro,relatime)
```

If you see `ro` in the options, the filesystem is read-only.

You can also check with:

```sh
cat /proc/mounts | grep ' / '
```

### How to Fix

To remount the root filesystem as read-write:

```sh
mount -o remount,rw /
```

This change may not persist after reboot. To make it permanent, check your `/etc/fstab` file and ensure the root filesystem is not set to mount as read-only. The fourth field in `/etc/fstab` should not contain `ro`.

## Automatic Read-Only Filesystem Transition

Linux filesystems can automatically switch to read-only mode when critical errors are detected. This is a protection mechanism to prevent data corruption.

### Causes of Automatic Transition

The most common causes include:

- **Disk errors**: Physical problems with the disk, such as bad sectors or hardware failure
- **Filesystem corruption**: Errors in the filesystem structure detected during operation
- **I/O errors**: Problems communicating with the storage device
- **RAID degradation**: When a RAID array enters a degraded state

### How to Check

Check the system logs for disk or filesystem errors:

```sh
dmesg | grep -i "read-only"
```

Or:

```sh
journalctl -xe | grep -i "read-only"
```

Look for messages about I/O errors, filesystem errors, or remounting:

```
EXT4-fs error: remounting filesystem read-only
I/O error, dev sda, sector 12345
```

You can also check SMART data for the disk:

```sh
smartctl -a /dev/sda
```

Look for reallocated sectors, pending sectors, or other indicators of disk failure.

## Mount Namespace Isolation

A process may be running in an environment where the filesystem has been deliberately restricted using mount namespaces. This is common in containerized environments or with certain security frameworks. If you encounter this situation and you know what mount namespaces are, you already know how to handle it.

## systemd ProtectSystem Parameter

The `ProtectSystem` parameter in systemd service files can restrict write access to certain directories.

### About ProtectSystem

The `ProtectSystem` option makes parts of the filesystem read-only for the service:

- `ProtectSystem=strict` - Makes the entire filesystem read-only except for `/proc`, `/dev`, and `/sys`
- `ProtectSystem=full` - Makes `/usr`, `/boot`, and `/efi` read-only
- `ProtectSystem=yes` - Makes `/usr` and `/boot` read-only

Astra itself (when initialized with `astra init`) does not use this parameter in its service file. However, if Astra is launched through another process monitoring service, such as `monit`, the service file for that monitoring tool may include `ProtectSystem`.

### How to Fix

Check the systemd service file that starts Astra or the monitoring service:

```sh
systemctl cat astra
```

Or if Astra is started by another service like monit:

```sh
systemctl cat monit
```

Look for `ProtectSystem` in the `[Service]` section. If present, remove it or set it to `false`:

```ini
[Service]
ProtectSystem=false
```

After editing the service file, reload systemd and restart the service:

```sh
systemctl daemon-reload
systemctl restart astra
```
