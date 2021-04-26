---
title: Service Options
weight: 7
---

Most Linux distributions uses `systemd` for the system service management by the default.
To configure Astra as a system service you may use built-in commands: `astra init`

## Service management

Base `systemd` commands is:

- `systemctl status` - status of all system services
- `systemctl status NAME` - status of the system service
- `systemctl start NAME` - start
- `systemctl stop NAME` - stop
- `systemctl restart NAME` - restart
- `systemctl enable NAME` - turn autorun on for system service NAME
- `systemctl disable NAME` - turn autorun off
- `systemctl daemon-reload` - reload `systemd`

## Change default port

By the default Astra uses port `8000` for web interface. To change port for `4000` for example:

```
astra init 4000
systemctl restart astra
```

After restart web interface will be available on port 4000.
Don't forget to enable this port in your firewall if you use it.

## Launch additional service

If you want to launch additional service with name `astra-8001` on port `8001`:

```
astra init 8001 astra-8001
systemctl start astra-8001
systemctl enable astra-8001
```

This service will use next files:

- log file: `/var/log/astra-8001.log`
- configuration file: `/etc/astra/astra-8001.conf`

## Remove additional service

```
systemctl stop astra-8001
systemctl disable astra-8001
astra remove astra-8001
```
