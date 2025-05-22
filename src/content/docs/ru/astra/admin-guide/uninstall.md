---
title: "Удаление"
date: 2023-02-21
sidebar:
    order: 3
---


Если Astra больше не нужна, вы можете полностью удалить ее с вашего сервера.

:::note
Перед деинсталляцией, пожалуйста [создайте резервную копию](https://help.cesbo.com/astra/admin-guide/administration/backup)!
:::

## Отключить сервис[](https://help.cesbo.com/astra/admin-guide/administration/uninstall#disable-service)

Остановите службу и отключите автозапуск:

```
systemctl stop astra
systemctl disable astra
```

## Удалить сервис[](https://help.cesbo.com/astra/admin-guide/administration/uninstall#remove-service)

Удалите сервис из системы:

```
astra remove
```

Если на сервере имеется несколько служб, то следует указать имя службы:

```
astra remove astra-8001
```

## Очистка[](https://help.cesbo.com/astra/admin-guide/administration/uninstall#cleanup)

Наконец, удалите двоичный файл и файлы конфигурации:

```
rm -rf /usr/bin/astra /etc/astra
```
