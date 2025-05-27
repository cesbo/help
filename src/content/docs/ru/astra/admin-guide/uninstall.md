---
title: "Удаление"
date: 2023-02-21
sidebar:
    order: 3
---


Если Astra больше не нужна, вы можете полностью удалить ее с вашего сервера.

:::note
Перед деинсталляцией, пожалуйста [создайте резервную копию](/ru/astra/admin-guide/backup)!
:::

## Отключить сервис[](/ru/astra/admin-guide/uninstall#disable-service)

Остановите службу и отключите автозапуск:

```
systemctl stop astra
systemctl disable astra
```

## Удалить сервис[](/ru/astra/admin-guide/uninstall#remove-service)

Удалите сервис из системы:

```
astra remove
```

Если на сервере имеется несколько служб, то следует указать имя службы:

```
astra remove astra-8001
```

## Очистка[](/ru/astra/admin-guide/uninstall#cleanup)

Наконец, удалите двоичный файл и файлы конфигурации:

```
rm -rf /usr/bin/astra /etc/astra
```
