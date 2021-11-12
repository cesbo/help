---
title: Установка
description: Загрузка и установка Astra. Управление процессом
weight: 1
---

Для установка Cesbo Astra достаточно скопировать один исполняемый файл на ваш сервер.

## Установка

{{< note >}}
В этом руководстве для загрузки файлов используется `curl`.
Большинство дистрибутивов Linux включают `curl`.
{{< /note >}}

Загрузите исполняемый файл и установите право на запуск. На сервере необходимо выполнить следующие команды:

```sh
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Для работы Astra требуется активная лицензия [](astra/quick-start/license)

После установки, добавьте сервис в systemd - менеджер системных процессов в большинстве Linux дистрибутивов:

```sh
astra init
```

Запустите Astra:

```sh
systemctl start astra
```

После запуска веб-интерфейс будет доступен по адресу: http://server-address:8000.
Имя пользователя и пароль по умолчанию: `admin`.

Astra использует порт `8000` по умолчанию, вы можете установить произвольный порт:

```sh
astra init 4000
```

После изменения порта на существующем сервисе его необходимо перезапустить:

```sh
systemctl restart astra
```

Включение автоматического запуска при старте системы:

```sh
systemctl enable astra
```

## Управление процессом

Команды управления процессом в systemd:

- `systemctl start astra` - запуск
- `systemctl stop astra` - остановка
- `systemctl restart astra` - перезапуска
- `systemctl enable astra` - включить автозапуск
- `systemctl disable astra` - выключить автозапуск

## Проверка версии

После установки или после обновления вы можете проверить установленную версию:

```sh
astra -v
```

## Архив

- [](astra/quick-start/archive/firewalld)
- [](astra/quick-start/archive/init-d)
- [](astra/quick-start/archive/monit)
