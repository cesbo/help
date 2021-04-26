---
title: Uninstall
weight: 5
---

Before uninstall please make [backup]({{< relref "backup" >}})

## Disable service

Stop service and turn autorun off:

```sh
systemctl stop astra
systemctl disable astra
```

## Remove service

```sh
astra remove
```

## Cleanup

Finally remove binary file and configuration files:

```sh
rm -rf /usr/bin/astra /etc/astra
```
