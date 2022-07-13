# Backup

## Create

Save binary file and configuration files to archive:

```
tar -Pzcf ~/alta-backup.tar.gz /usr/bin/alta /etc/alta
```

## Restore

To extract backup launch next commands:

```
rm -f /usr/bin/alta
tar -Pxf ~/alta-backup.tar.gz
```
