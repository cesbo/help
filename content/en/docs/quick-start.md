---
title: Install
---

Cesbo Astra installation is a simple process - just copy single binary file to your server.

## Prepare

Check is curl installed in your system (for Debian)

```sh
apt update
apt install -y curl
```

## Install

Download binary file and set execute permission. On the server you may use next command:

```sh
curl -Lo /usr/bin/astra http://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

A valid license file is required to use Astra: [Get License](license/)

After installation, register service in the systemd - system service manager in most Linux distributions:

```sh
astra init
```

Launch Astra:

```sh
systemctl start astra
```

After start web-interface will be available on: http://server-address:8000. Default login and password: admin By the default, for web-interface and control Astra used port 8000, you may define any port:

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

## Firewall on CentOS

```sh
# Add service:
firewall-cmd --permanent --new-service=astra
firewall-cmd --permanent --service=astra --add-port=8000/tcp
# Add service to zone:
firewall-cmd --permanent --zone=public --add-service=astra
# Reload firewall:
firewall-cmd --reload
```

## Archived guides

- [Autorun with init.d script]()
- [Autorun with Monit]()
