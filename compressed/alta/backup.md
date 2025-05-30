# Backup

> Backups is an important part of system administration!

## Create

Save binary file and configuration files to archive:

Terminal window

```
tar -Pzcf ~/alta-backup.tar.gz /usr/bin/alta /etc/alta
```

## Restore

To extract backup launch next commands:

Terminal window

```
rm -f /usr/bin/altatar -Pxf ~/alta-backup.tar.gz
```