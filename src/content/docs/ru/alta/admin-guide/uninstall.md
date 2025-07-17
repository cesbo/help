---
title: Uninstall
date: 2023-02-24
sidebar:
    order: 4
---

Если Alta больше не нужна, вы можете полностью удалить её с вашего сервера.

:::caution
Перед удалением, пожалуйста, [сделайте резервную копию](/en/alta/getting-started/backup/)!
:::

## Удаление сервиса

Если вы используете Systemd, первым делом остановите ваш сервис:

```sh
systemctl stop alta
```

Отключите автозапуск:

```sh
systemctl disable alta
```

И удалите файл сервиса:

```sh
rm /etc/systemd/system/alta.service
```

## Очистка

Удалите исполняемый файл и файлы конфигурации:

```sh
rm -rf /usr/bin/alta /etc/alta
```