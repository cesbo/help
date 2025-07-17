---
title: "Mosaic: Channel Screenshots on Dashboard"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
---

Mosaic — это простой скрипт для создания скриншотов каналов с использованием ffmpeg и их установки на Astra Dashboard через Astra API.

Скриншоты каналов помогают визуально оценить качество каналов.

![Dashboard с Скриншотами](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Требования

- Astra с включенной [HTTP Play](/en/astra/delivery-http/http-play/)
- FFmpeg

## Установка FFmpeg

Установите FFmpeg с помощью системного пакетного менеджера:

```sh
apt install ffmpeg
```

## Настройка HTTP Play

На вашем сервере создайте новый каталог для хранения изображений скриншотов:

```sh
mkdir -p /var/lib/astra/mosaic
```

Затем откройте веб-интерфейс Astra -> Настройки -> HTTP Play:

![Настройки HTTP Play](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Включите HTTP Play, если он отключен, и установите путь к каталогу со скриншотами. Готово, HTTP Play теперь настроен, и вы можете сохранить изменения.

Также в настройках HTTP Play вы можете скопировать ссылку на `playlist.m3u8`, этот файл содержит ссылки на все включенные каналы. Ссылка на плейлист выглядит так: `https://example.com:8000/playlist.m3u8`

Если вы используете HTTP авторизацию, установите Токен для администратора. Откройте веб-интерфейс Astra -> Настройки -> Пользователи -> выберите администратора и установите любой Токен, например: `c6017ac9`. Добавьте этот токен к URL плейлиста: `https://example.com:8000/playlist.m3u8?token=c6017ac9`

## Скачать и настроить скрипт

[Скачайте](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) скрипт и сохраните его на вашем сервере:

```sh
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

Откройте скрипт в любом текстовом редакторе и измените следующие переменные:

- `THREADS` - количество потоков для одновременного захвата нескольких скриншотов. Меньшее количество потоков увеличивает время обновления всех изображений, а большее количество увеличивает использование CPU. Вы можете установить столько потоков, сколько у вас ядер CPU
- `PLAYLIST_URL` - URL к файлу `playlist.m3u8` из предыдущего шага
- `SCREENSHOT_PATH` - путь для хранения скриншотов на вашем сервере: `/var/lib/astra/mosaic/`
- `API_PORT` - порт для Astra API
- `API_AUTH` - логин администратора и пароль для доступа к Astra API

## Запуск скрипта с Systemd

Чтобы скрипт запускался автоматически, вы можете добавить его в systemd. Скачайте файл конфигурации для systemd и сохраните его на вашем сервере:

```sh
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

Следующие команды могут использоваться для управления скриптом:

- Запуск скрипта: `systemctl start mosaic`
- Остановка скрипта: `systemctl stop mosaic`
- Включение автозапуска: `systemctl enable mosaic`
- Отключение автозапуска: `systemctl disable mosaic`

После запуска проверьте, что в каталоге со скриншотами создаются новые png файлы:

```sh
ls /var/lib/astra/mosaic
```