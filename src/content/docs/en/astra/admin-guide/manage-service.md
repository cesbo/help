---
title: Manage Astra Service
sidebar:
    order: 10
---

Service is an application process with specified name and own configuration.

:::tip
In most Linux distributions services are managed with `systemd`. Systemd controls service status, checks service logs, and launches service on system startup.
:::

## Launch additional services

You may launch on your server one or more services depends on your need.

```sh
astra init 8001 astra-1
```

Service name will be `astra-1` with the web interface port `8001`.

## Service management

In this example service name is default: `astra`

| Command | Description |
| --- | --- |
| `systemctl restart astra` | Restart service |
| `systemctl start astra` | Start service |
| `systemctl stop astra` | Stop service |
| `systemctl status astra` | Service status |
| `systemctl enable astra` | Launch service on system startup |
| `systemctl disable astra` | Disable autorun |
| `journalctl -fu astra` | Service logs |

## Remove service

Before removing service, stop it and turn off autorun:

```sh
systemctl stop astra-1
systemctl disable astra-1
```

Then, remove service from systemd:

```sh
astra remove astra-1
```

This command remove service and log files, while keeping configuration and binary files.
