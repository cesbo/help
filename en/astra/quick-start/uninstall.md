# Uninstall

!!! danger
    Before uninstall please [Make a Backup](backup.md)!

## Disable service

Stop service and turn autorun off:

```
systemctl stop astra
systemctl disable astra
```

## Remove service

Remove service from systemd:

```
astra remove
```

If you have several services on your server, then custom name should be specified:

```
astra remove astra-8001
```

## Cleanup

Finally remove binary file and configuration files:

```
rm -rf /usr/bin/astra /etc/astra
```
