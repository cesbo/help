# Backup

## Create

Save binary file and configuration files to archive:

```
tar -Pzcf ~/astra-backup.tar.gz /usr/bin/astra /etc/astra
```

## Restore

To extract backup launch next commands:

```
rm -f /usr/bin/astra
tar -Pxf ~/astra-backup.tar.gz
```
