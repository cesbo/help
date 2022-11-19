# Uninstall

!!! danger
    Before uninstall please [Make a Backup](backup.md)!

## Remove service

If you use Systemd, first of all stop your service:

```
systemctl stop alta
```

Disable autorun:

```
systemctl disable alta
```

And remove service file:

```
rm /etc/systemd/system/alta.service
```

## Cleanup

Remove binary file and configuration files:

```
rm -rf /usr/bin/alta /etc/alta
```
