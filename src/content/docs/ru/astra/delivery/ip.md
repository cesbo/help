---
title: "IP-авторизация"
date: 2023-06-19
sidebar:
    order: 14
---

- [Глобальный список IP-адресов](/ru/astra/delivery/http-hls-auth/ip#global-ip-list)
- [Настройки IP-адреса пользователя](/ru/astra/delivery/http-hls-auth/ip#user-ip-settings)

IP-авторизация сравнивает IP-адрес запроса с заранее определенным списком IP-адресов. Доступ к содержимому будет предоставлен только для разрешенных IP-адресов.

![IP-авторизация](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/ip.svg)

## Глобальный список IP-адресов[](/ru/astra/delivery/http-hls-auth/ip#global-ip-list)

Глобальный список IP-адресов доступен в разделе Настройки -> HTTP Auth

![Глобальный список IP-адресов](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/ip-list.png)

В этом списке можно задать отдельные IPv4-адреса и сетевой адрес IPv4 в нотации CIDR.

## Настройки IP-адреса пользователя[](/ru/astra/delivery/http-hls-auth/ip#user-ip-settings)

В настройках пользователя можно определить IPv4-адрес. В этом случае сессия может быть привязана к пользователю.
