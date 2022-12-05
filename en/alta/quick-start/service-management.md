# Service Management

Service is an application process with specified name and own configuration. You may launch on your server one or more services depends on your need.

## Systemd

Systemd is a popular service manager for Linux-based operating systems. It is used to manage the services and processes running on the system, including starting and stopping services, checking their status, and managing their logs. Systemd is also responsible for launching services when the system starts up, ensuring that all necessary services are running before users can access the system.

After finishing the initialization wizard a service will be added to the system. The service can be managed with the commands:

- `systemctl restart alta` - Restart service
- `systemctl start alta` - Start service
- `systemctl stop alta` - Stop service
- `systemctl status alta` - Service status and recent logs
- `systemctl enable alta` - Launch service on system startup
- `systemctl disable alta` - Disable autorun
- `journalctl -fu alta` - Service logs

In this example we used a default service name: **alta**. On your system the service name will depends on your settings.

## Start process in console

If your system does not have systemd you may launch process manually:

```
alta /etc/alta/alta.conf
```

Process will be launched in the foreground and your console will be taken by process until it finish. To stop process just press ++ctrl+c++ on your keyboard.

For launching process in background append symbol `&` after the command line:

```
alta /etc/alta/alta.conf &
```

Process will be launched in the background and console will be returned to your control immediately. To stop process you may launch command:

```
killall alta
```
