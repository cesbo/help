---
title: "Minisatip"
date: 2023-02-28
sidebar:
    order: 15
---

Minisatip — это сервер SAT>IP для Linux.

## Установка

Скачайте исходный код с github:

```
git clone https://github.com/catalinii/minisatip /usr/src/minisatip
```

Соберите исходный код:

```
cd /usr/src/minisatip
./configure
make
```

Установите исполняемый файл:

```
cp minisatip /usr/local/bin/
```

## Запуск

```
minisatip -G -e 8-15 -L *:9750-10600-11700 -F /var/log/minisatip.log -y 1554
```

## RTSP Адрес

```
rtsp://example.com:1554/?src=8&freq=12415&pol=v&ro=0.35&msys=dvbs2&mtype=8psk&plts=on&sr=32000&pids=all
```