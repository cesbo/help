# Service Setup

Systemd is a service manager for the Linux based systems. Systemd needed to control service status, check service logs, and launch service on system startup.

After installation, Astra could be registered as a service in the Systemd:

```
astra init
```

## Change default port

By the default Astra uses port **8000** for web interface. To change port for **4000** for example:

```
astra init 4000
systemctl restart astra
```

After restart web interface will be available on port 4000. Don’t forget to enable this port in your firewall if you use it.

## Launch additional service

You may launch on your server as many services as you want. For example, if you want to launch additional service with name astra-8001 on port 8001:

```
astra init 8001 astra-8001
systemctl start astra-8001
systemctl enable astra-8001
```

This service will use next files:

- log file: `/var/log/astra-8001.log`
- configuration file: `/etc/astra/astra-8001.conf`

## Remove additional service

To remove service launch next commands:

```
systemctl stop astra-8001
systemctl disable astra-8001
astra remove astra-8001
```

This command removes only service from systemd. Configuration file and logs could be removed manually. To get more info please check: [Uninstall](uninstall.md)

## Service management

!!! note
    In this example used default service name: `astra`.
    On your system service name depends on your settings.

| Command | Description |
| --- | --- |
| `systemctl restart astra` | Restart service |
| `systemctl start astra` | Start service |
| `systemctl stop astra` | Stop service |
| `systemctl status astra` | Service status |
| `systemctl enable astra` | Enable autorun |
| `systemctl disable astra` | Disable autorun |
