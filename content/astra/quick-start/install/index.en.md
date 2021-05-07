---
title: Install
description: Download and Install Astra. System process management
weight: 1
---

Cesbo Astra installation is a simple process - just copy single binary file to your server.

## Install

{{< notice >}}
In this guide we use the `curl` command to download files.
Most Linux distribution has pre-installed `curl`.
{{< /notice >}}

Download binary file and set execute permission. On the server you may use next command:

```sh
curl -Lo /usr/bin/astra http://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

A valid license file is required to use Astra [](astra/quick-start/license)

After installation, register service in the systemd - system service manager in most Linux distributions:

```sh
astra init
```

Launch Astra:

```sh
systemctl start astra
```

After start web-interface will be available on: http://server-address:8000.
Default login and password: `admin`.

Astra used port `8000` by the default, you may set any custom port:

```sh
astra init 4000
```

Enable automatically launch on system startup:

```sh
systemctl enable astra
```

## Process management

Command to manage process with systemd:

- `systemctl start astra` - start
- `systemctl stop astra` - stop
- `systemctl restart astra` - restart
- `systemctl enable astra` - turn autorun on
- `systemctl disable astra` - turn autorun off

## Check version

After installation or after update you may check installed version:

```sh
astra -v
```

## Archived guides

- [](astra/quick-start/archive/firewalld)
- [](astra/quick-start/archive/init-d)
- [](astra/quick-start/archive/monit)
