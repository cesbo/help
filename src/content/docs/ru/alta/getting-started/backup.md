---
title: Backup
description: Create and restore backups of Alta binary and configuration files
sidebar:
    order: 11
---

Резервные копии являются важной частью администрирования системы!

## Создание

Сохраните двоичный файл и файлы конфигурации в архив:

```sh
tar -Pzcf ~/alta-backup.tar.gz /usr/bin/alta /etc/alta
```

## Восстановление

Чтобы извлечь резервную копию, выполните следующие команды:

```sh
rm -f /usr/bin/alta
tar -Pxf ~/alta-backup.tar.gz
```