---
title: Installation
description: Get started with Senta streamer.
sidebar:
    order: 2
---

## Быстрый старт

Перед установкой senta-streamer убедитесь, что на вашем сервере установлен [ffmpeg](https://ffmpeg.org/).

Чтобы начать использовать senta-streamer, вам необходимо скачать последнюю версию. После загрузки вы можете установить ее на ваш сервер.

Для запуска приложения необходимо инициализировать конфигурацию:

```bash [terminal]
./senta init
```

Senta создаст файл **config.json** в том же каталоге, где вы выполняете эту команду. Вы можете отредактировать этот файл и установить параметры (например, `username` и `password`).

После этого вы можете запустить приложение с помощью команды:

```bash [terminal]
./senta config.json
```

Приложение запустится, и вы сможете получить доступ к веб-интерфейсу по адресу `http://address_your_server:8018` (вы можете изменить порт в файле config.json)

Далее вы можете [сделать senta демоном](#set-as-demon) и настроить профили и потоки.

## Настройка в качестве демона

Чтобы создать демон (или службу) в системах на основе Linux, таких как Ubuntu, вы можете использовать инструмент systemd. Вот как вы можете создать службу для вашего приложения:

Создайте новый конфигурационный файл службы в каталоге `/etc/systemd/system/`. Например, вы можете назвать его `senta.service`.

Откройте этот файл в текстовом редакторе и добавьте следующее содержимое:

```toml
[Unit]
Description=Senta Application
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=5
User=root
WorkingDirectory=/root
ExecStart=/path/to/senta config.conf

[Install]
WantedBy=multi-user.target
```

Примечание: `/path/to/senta` — это путь к исполняемому файлу senta. `config.conf` — это файл конфигурации.

Сохраните файл и закройте текстовый редактор.

Обновите список служб systemd, чтобы обнаружить вашу новую службу:

```bash [terminal]
sudo systemctl daemon-reload
```

Теперь вы можете управлять вашей службой с помощью команды systemctl. Например, чтобы запустить службу и настроить ее для автоматического запуска при загрузке системы, выполните следующие команды:

```bash [terminal]
sudo systemctl start senta
sudo systemctl enable senta
```

Теперь ваше приложение будет функционировать как демон, автоматически перезапускаясь в случае сбоя. Вы можете использовать команды systemctl для управления этой службой, такие как stop, restart, status и другие.