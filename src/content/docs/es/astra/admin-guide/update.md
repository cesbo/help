---
title: "Actualización"
date: 2023-02-21
sidebar:
    order: 1
---

Instale la nueva versión en su servidor

::alert
Antes de actualizar por favor [Hacer una copia de seguridad](https://help.cesbo.com/astra/admin-guide/administration/backup)!
::

## Instalar actualización[](https://help.cesbo.com/astra/admin-guide/administration/update#install-update)

Descarga el último archivo binario:

```
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Reinicie Astra después de la actualización:

```
systemctl restart astra
```
