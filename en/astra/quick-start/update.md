# Update

?> Before update please [Make a Backup](quick-start/backup.md)!

## Install update

Download latest binary file:

```
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Restart Astra after update:

```
systemctl restart astra
```
