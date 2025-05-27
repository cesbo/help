---
title: "Управление сервисом Astra"
date: 2023-02-21
sidebar:
    order: 6
---

Сервис - это прикладной процесс с заданным именем и собственной конфигурацией.

:::note В большинстве дистрибутивов Linux сервисы, управляемые с помощью `systemd`. Systemd контролирует состояние сервисов, проверяет журналы сервисов и запускает сервисы при старте системы. ::

## Запуск дополнительных процессов[](/ru/astra/getting-started/first-steps/manage-service#launch-additional-services)

Вы можете запустить на своем сервере один или несколько сервисов в зависимости от ваших потребностей.

```
astra init 8001 astra-1
```

Имя сервиса будет `astra-1` с портом веб-интерфейса `8001`.

## Управление службой[](/ru/astra/getting-started/first-steps/manage-service#service-management)

В данном примере имя сервиса задано по умолчанию: `astra`

| Команда | Описание |
| --- | --- |
| `systemctl restart astra` | Перезапуск сервиса |
| `systemctl start astra` | Запуск сервиса |
| `systemctl stop astra` | Остановить сервис |
| `systemctl status astra` | Состояние сервиса |
| `systemctl enable astra` | Запуск сервиса при старте системы |
| `systemctl disable astra` | Отключение автозапуска |
| `journalctl -fu astra` | Лог сервиса |

## Удалить сервис[](/ru/astra/getting-started/first-steps/manage-service#remove-service)

Перед удалением сервиса остановите его и отключите автозапуск:

```
systemctl stop astra-1
systemctl disable astra-1
```

Затем удалите службу из systemd:

```
astra remove astra-1
```

Эта команда удаляет служебные и журнальные файлы, сохраняя при этом конфигурационные и двоичные файлы.
