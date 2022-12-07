---
description: 'Cesbo Alta installation is a simple process – just copy single binary file to your server'
---

# Quick Start

Cesbo Alta installation is a simple process – just copy single binary file to your server.

## Requirements

- Any Linux based operation system
- 64bit CPU: x86 or ARM

## Install

!!! note ""
    In this guide we use the `curl` command to download files.
    Most Linux distribution has pre-installed `curl`

Download binary file and set execute permission. On the server you may use next command:

```
curl -Lo /usr/bin/alta https://cesbo.com/alta-latest
chmod +x /usr/bin/alta
```

## Check version

After installation or after update you may check installed version:

```
alta version
```

## Start service

Initialization wizard prepares new service on your system. On your server you may launch as many services as you want. Each service has owns configuration file, management port, and unique name. Launch initialization wizard with next command:

```
sudo alta init
```

<div style="position: relative; padding-top: 50vh;"><iframe src="https://customer-jmuojszo6d9hxk3k.cloudflarestream.com/7148481fadc65b275ecdab0c1235bf0d/iframe?poster=https%3A%2F%2Fcustomer-jmuojszo6d9hxk3k.cloudflarestream.com%2F7148481fadc65b275ecdab0c1235bf0d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D28s%26height%3D600" style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>

- **Service name** - name of the service in the system it could be used for configuration file name and to manage service
- **Config path** - full path to the configuration file. Wizard makes parent directories as needed
- **Admin login** - login for first administrator, after configuration you can create additional users in the web interface
- **Admin password** - password for administrator. If you specify own password then on the next step wizard asks for password confirmation. Please note that password is not showing in the console on typing
- **Add service systemd** - service will be registered in the Systemd - a service manager for the Linux based systems. This option useful to control service status, check service logs, and launch service on system startup
- **Enable service autorun** - this option available only with Systemd. Service will be launched automatically on system startup
- **Start service** - start service immediately after wizard

Your service is ready to use. You may continue service configuration in the web interface: [alta.cesbo.com](https://alta.cesbo.com){target="_blank"}
