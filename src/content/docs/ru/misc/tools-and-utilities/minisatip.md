---
title: "Minisatip"
date: 2023-02-28
sidebar:
    order: 15
---

Minisatip - это SAT>IP-сервер для Linux.

## Установка[](/ru/misc/tools-and-utilities/minisatip#install)

Загрузите исходный код с github:

```
git clone https://github.com/catalinii/minisatip /usr/src/minisatip
```

Собрать исходный код:

```
cd /usr/src/minisatip
./configure
make
```

Установить двоичный файл:

```
cp minisatip /usr/local/bin/
```

## Запуск[](/ru/misc/tools-and-utilities/minisatip#launch)

```
minisatip -G -e 8-15 -L *:9750-10600-11700 -F /var/log/minisatip.log -y 1554
```

## Адрес RTSP[](/ru/misc/tools-and-utilities/minisatip#rtsp-address)

```
rtsp://example.com:1554/?src=8&freq=12415&pol=v&ro=0.35&msys=dvbs2&mtype=8psk&plts=on&sr=32000&pids=all
```
