---
title: Configure firewalld
description: Configure firewalld for Astra service
---

Firewalld is a firewall management tool for Linux operating systems.
It preinstalled and enabled by default on some Linux distributions.

## Add new service

Check is zone `astra` already exists and have ports:

```sh
firewall-cmd --permanent --service=astra --get-ports
```

If you see message: `Error: INVALID_SERVICE: astra` then create create new service
and append it into the public zone:

```sh
firewall-cmd --permanent --new-service=astra
firewall-cmd --permanent --zone=public --add-service=astra
```

## Append port to the service

You may append different ports to the same zone:

```sh
firewall-cmd --permanent --service=astra --add-port=8000/tcp
```

## Reload firewall

Apply changes after firewall configuration:

```sh
firewall-cmd --reload
```
