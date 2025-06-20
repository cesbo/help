---
title: "Minisatip"
date: 2023-02-28
sidebar:
    order: 15
---

Minisatip is a SAT>IP server for Linux.

## Install

Download source code from github:

```
git clone https://github.com/catalinii/minisatip /usr/src/minisatip
```

Build source code:

```
cd /usr/src/minisatip
./configure
make
```

Install binary file:

```
cp minisatip /usr/local/bin/
```

## Launch

```
minisatip -G -e 8-15 -L *:9750-10600-11700 -F /var/log/minisatip.log -y 1554
```

## RTSP Address

```
rtsp://example.com:1554/?src=8&freq=12415&pol=v&ro=0.35&msys=dvbs2&mtype=8psk&plts=on&sr=32000&pids=all
```
