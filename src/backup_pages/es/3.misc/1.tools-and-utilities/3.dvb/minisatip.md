---
title: "Minisatip"
date: 2023-02-28
---

Minisatip es un servidor SAT>IP para Linux.

## Instale[](https://help.cesbo.com/misc/tools-and-utilities/dvb/minisatip#install)

Descarga el código fuente de github:

```
git clone https://github.com/catalinii/minisatip /usr/src/minisatip
```

Construir código fuente:

```
cd /usr/src/minisatip
./configure
make
```

Instalar archivo binario:

```
cp minisatip /usr/local/bin/
```

## Lanzamiento[](https://help.cesbo.com/misc/tools-and-utilities/dvb/minisatip#launch)

```
minisatip -G -e 8-15 -L *:9750-10600-11700 -F /var/log/minisatip.log -y 1554
```

## Dirección RTSP[](https://help.cesbo.com/misc/tools-and-utilities/dvb/minisatip#rtsp-address)

```
rtsp://example.com:1554/?src=8&freq=12415&pol=v&ro=0.35&msys=dvbs2&mtype=8psk&plts=on&sr=32000&pids=all
```
