---
title: Install
description: Download and Install Astra. System process management
weight: 1
---

Cesbo Astra installation is a simple process - just copy single binary file to your server.

## Install

{{< note >}}
In this guide we use the `curl` command to download files.
Most Linux distribution has pre-installed `curl`.
{{< /note >}}

Download binary file and set execute permission. On the server you may use next command:

```
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

## Check version

After installation or after update you may check installed version:

```
astra -v
```

Install your license for Astra: [Read more...](astra/quick-start/license)

## Process management

`systemd` is an init system and system manager that has widely used in most Linux distributions. Astra can be registered as a service in the systemd:

```
astra init
```

Now you can launch Astra with `systemctl`:

```
systemctl start astra
```

After start web-interface will be available on: http://server-address:8000.
Default login and password: `admin`.

Astra used port `8000` by the default, you may set any custom port:

```
astra init 4000
```

After initialization restart service:

```
systemctl restart astra
```

Enable automatically launch on system startup:

```
systemctl enable astra
```

Commands to manage process with systemd:

- `systemctl start astra` - start
- `systemctl stop astra` - stop
- `systemctl restart astra` - restart
- `systemctl enable astra` - turn autorun on
- `systemctl disable astra` - turn autorun off

## Archived guides

- [](astra/quick-start/archive/firewalld)
- [](astra/quick-start/archive/init-d)
- [](astra/quick-start/archive/monit)
