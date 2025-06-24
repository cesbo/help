# Uninstall

If Alta is not needed anymore you can remove it completely from your server.

>Before uninstall please [Make a Backup]()

## Remove service

If you use Systemd, first of all stop your service:

Terminal window

```
systemctl stop alta
```

Disable autorun:

Terminal window

```
systemctl disable alta
```

And remove service file:

Terminal window

```
rm /etc/systemd/system/alta.service
```

## Cleanup

Remove binary file and configuration files:

Terminal window

```
rm -rf /usr/bin/alta /etc/alta
```