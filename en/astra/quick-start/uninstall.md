# Uninstall

?> Before uninstall please [Make a Backup](quick-start/backup.md)!

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

## Cleanup

Finally remove binary file and configuration files:

```
rm -rf /usr/bin/astra /etc/astra
```
