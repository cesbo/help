---
title: Backup
description: Create and restore backups of Astra binary and configuration files
sidebar:
    order: 11
---

Резервные копии — важная часть администрирования системы!

## Создание

Сохраните бинарный файл и файлы конфигурации в архив:

```sh
tar -Pzcf ~/astra-backup.tar.gz /usr/bin/astra /etc/astra
```

## Восстановление

Для извлечения резервной копии выполните следующие команды:

```sh
rm -f /usr/bin/astra
tar -Pxf ~/astra-backup.tar.gz
```