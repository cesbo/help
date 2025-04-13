---
title: "Проверка скорости подключения к Интернету"
date: 2023-08-08
---

Иногда возникает необходимость проверить скорость подключения к Интернету из консоли сервера.

## Установка[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#install)

Загрузите и установите инструмент командной строки для тестирования пропускной способности Интернета с помощью speedtest.net

```
sudo curl -Lo /usr/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x /usr/bin/speedtest-cli
```

## Запуск[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#launch)

Для запуска теста запустите его в консоли:

```
speedtest-cli
```

Результат будет выведен в консоль:

```
Retrieving speedtest.net configuration...
Testing from Elisa telecommunications group, OU. (76.40.44.19)...
Retrieving speedtest.net server list...
Retrieving information for the selected server...
Hosted by Compic OU (Tallinn, Estonia) [16.84 km]: 28.77 ms
Testing download speed.........................
Download: 93.30 Mbit/s
Testing upload speed..........................
Upload: 92.25 Mbit/s
```

## Выберите сервер[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#select-server)

Список доступных серверов можно составить с помощью команды:

```
speedtest-cli --list
```

Пример вывода:

```
 1437) Telia Lietuva, AB (Kaunas, Lithuania) [506.33 km]
16248) Litnet (Kaunas, Lithuania) [506.33 km]
```

Теперь можно запустить speedtest с пользовательским сервером:

```
speedtest-cli --server 16248
```
