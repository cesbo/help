---
title: "Check Internet connection speed"
date: 2023-08-08
sidebar:
    order: 10
---

Иногда необходимо проверить скорость интернет-соединения с консоли сервера.

## Установка

Скачайте и установите инструмент командной строки для тестирования интернет-скорости с помощью speedtest.net:

```sh
sudo curl -Lo /usr/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x /usr/bin/speedtest-cli
```

## Запуск

Чтобы начать тестирование, запустите в консоли:

```sh
speedtest-cli
```

Результат будет выведен в консоль:

```
Retrieving speedtest.net configuration...
Testing from Elisa telecommunications group, OU. (76.40.44.19)...
Retrieving speedtest.net server list...
Retrieving information for the selected server...
Hosted by Compic OU (Таллин, Эстония) [16.84 км]: 28.77 мс
Testing download speed.........................
Download: 93.30 Mbit/s
Testing upload speed..........................
Upload: 92.25 Mbit/s
```

## Выбор сервера

Вы можете вывести список доступных серверов с помощью команды:

```sh
speedtest-cli --list
```

Пример вывода:

```
 1437) Telia Lietuva, AB (Каунас, Литва) [506.33 км]
16248) Litnet (Каунас, Литва) [506.33 км]
```

Теперь вы можете запустить speedtest с выбранным сервером:

```sh
speedtest-cli --server 16248
```