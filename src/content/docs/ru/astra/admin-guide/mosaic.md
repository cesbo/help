---
title: "Mosaic: Скриншоты каналов в интерфейсе"
date: 2023-08-28
image: https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png
sidebar:
    order: 7
---

Mosaic - это простой скрипт для создания скриншотов каналов с помощью ffmpeg и показа их в Astra Dashboard с использованием API.

Скриншоты позволяют наглядно оценить работу каналов.

![Приборная панель со скриншотами](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/dashboard.png)

## Требования[](/ru/astra/admin-guide/administration/mosaic#requirements)

- Astra с включенной функцией [HTTP Play](/ru/astra/delivery/http-hls/http-play)
- FFmpeg

## Установка FFmpeg[](/ru/astra/admin-guide/administration/mosaic#install-ffmpeg)

Установите FFmpeg с помощью менеджера пакетов:

```
apt install ffmpeg
```

## Настройка HTTP Play[](/ru/astra/admin-guide/administration/mosaic#configure-http-play)

На сервере создайте новый каталог для хранения скриншотов:

```
mkdir -p /var/lib/astra/mosaic
```

Затем откройте веб-интерфейс Astra  и перейдите в -> Настройки -> HTTP Play:

![Настройки воспроизведения по протоколу HTTP](https://cdn.cesbo.com/help/astra/admin-guide/administration/mosaic/http-play.png)

Включите HTTP Play, если он отключен, и укажите путь к каталогу со скриншотами. Готово, теперь HTTP Play настроен, и вы можете сохранить изменения.

Также в настройках HTTP Play можно скопировать ссылку на `playlist.m3u8`В этом файле содержатся ссылки на все включенные каналы. Ссылка на плейлист выглядит следующим образом: `https://example.com:8000/playlist.m3u8`

Если используется HTTP-авторизация, установите Token для администратора. Откройте веб-интерфейс Astra и перейдите в -> Settings -> Users -> выберите администратора и установите любой Токен, например: `c6017ac9`. Добавьте этот токен к URL-адресу плейлиста: `https://example.com:8000/playlist.m3u8?token=c6017ac9`

## Скачайте и настройте скрипт[](/ru/astra/admin-guide/administration/mosaic#download-and-configure-script)

[Скачайте](https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh) скрипт и сохраните его на своем сервере:

```
curl -Lo /usr/local/bin/mosaic.sh https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.sh
chmod +x /usr/local/bin/mosaic.sh
```

Откройте скрипт в любом текстовом редакторе и измените следующие переменные:

- `THREADS` - количество потоков для одновременного создания нескольких скриншотов. Меньшее количество потоков потребует больше времени для обновления всех изображений, а большее количество потоков увеличит загрузку процессора. Вы можете задать столько потоков, сколько у вас ядер процессора
- `PLAYLIST_URL` - URL to `playlist.m3u8` файл из предыдущего шага
- `SCREENSHOT_PATH` - путь для хранения скриншотов на вашем сервере: `/var/lib/astra/mosaic/`
- `API_PORT` - порт для API Astra 
- `API_AUTH` - логин и пароль admin для доступа к Astra API

## Запуск скрипта с помощью Systemd[](/ru/astra/admin-guide/administration/mosaic#start-script-with-systemd)

Для автоматического запуска скрипта его можно добавить в systemd. Загрузите конфигурационный файл для systemd и сохраните его на своем сервере:

```
curl -Lo /etc/systemd/system/mosaic.service https://cdn.cesbo.com/astra/scripts/mosaic/mosaic.service
```

Для управления скриптом могут быть использованы следующие команды:

- Запустить скрипт: `systemctl start mosaic`
- Остановить скрипт: `systemctl stop mosaic`
- Включить автозапуск: `systemctl enable mosaic`
- Отключить автозапуск: `systemctl disable mosaic`

После запуска проверьте, что в каталоге screenshots создаются новые png-файлы:

```
ls /var/lib/astra/mosaic
```
