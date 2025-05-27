---
title: Manage Alta Services
date: 2023-03-04
sidebar:
    order: 1
---

Service is an application process with specified name and own configuration. You may launch on your server one or more services depends on your need.

## Systemd

Systemd is a popular service manager for Linux-based operating systems. It is used to manage the services and processes running on the system, including starting and stopping services, checking their status, and managing their logs. Systemd is also responsible for launching services when the system starts up, ensuring that all necessary services are running before users can access the system.

## Service management

To register new service launch initialization wizard with next command:

```sh
sudo alta init
```

After finishing the initialization wizard a service will be added to the system. The service can be managed with the commands:

| Command | Description |
| --- | --- |
| `systemctl restart alta` | Restart service |
| `systemctl start alta` | Start service |
| `systemctl stop alta` | Stop service |
| `systemctl status alta` | Service status |
| `systemctl enable alta` | Launch service on system startup |
| `systemctl disable alta` | Disable autorun |
| `journalctl -fu alta` | Service logs |

In this example we used default service name `alta`.
