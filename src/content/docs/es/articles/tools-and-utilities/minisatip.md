---
title: "Minisatip"
date: 2023-02-28
sidebar:
    order: 15
---

Minisatip es un servidor SAT>IP para Linux.

## Instalación

Descargar el código fuente desde GitHub:

```
git clone https://github.com/catalinii/minisatip /usr/src/minisatip
```

Compilar el código fuente:

```
cd /usr/src/minisatip
./configure
make
```

Instalar el archivo binario:

```
cp minisatip /usr/local/bin/
```

## Iniciar

```
minisatip -G -e 8-15 -L *:9750-10600-11700 -F /var/log/minisatip.log -y 1554
```

## Dirección RTSP

```
rtsp://example.com:1554/?src=8&freq=12415&pol=v&ro=0.35&msys=dvbs2&mtype=8psk&plts=on&sr=32000&pids=all
```