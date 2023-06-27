---
title: "Monit"
date: 2023-02-23
---

Monit is free and open source software that helps you keep track of processes. It can restart services that are not responding or that have crashed. You can use Systemd or daemontools for the same purpose. In this article, we'll show you how to install and configure monit to control processes on Debian or Ubuntu Linux.

## Install

<details><summary>for Centos 7-8</summary>

To install, run the command on the server:

```sh
yum install epel-release
yum update
yum install monit
systemctl enable monit
systemctl start monit
```

</details>

<details><summary>for Debian-like system:</summary>

To install, run the command on the server:

```sh
sudo apt install monit
```

</details>

Recommended configuration file `/etc/monit/monitrc`:

```
set daemon 1
  with start delay 1

set logfile /var/log/monit.log
set idfile /var/lib/monit/id
set statefile /var/lib/monit/state

set httpd port 2812 and
  use address localhost
  allow localhost

include /etc/monit/conf.d/*
```

<details><summary>Configuration file for Astra service</summary>

`/etc/monit/conf.d/astra.conf`

```
check process astra with pidfile /var/run/astra.pid
    start program = "/etc/init.d/astra start"
    stop program = "/etc/init.d/astra stop"
```

</details>

OR

<details><summary>Configuration file for simple Astra process</summary>

`/etc/monit/conf.d/astra.conf`

```
check process astra.pid with pidfile /var/run/astra.pid
    start program = "/bin/sh -c 'ulimit -n 65536;  /usr/bin/astra -c /etc/astra/astra.conf -p 8000 --pid /var/run/astra.pid --log /var/log/astra.log --daemon'"
    stop program = "/bin/sh -c 'kill `cat /var/run/astra.pid`'"
```

</details>

Restart monit to apply changes:

```sh
systemctl restart monit
```

or

```sh
sudo /etc/init.d/monit restart
```

## Commands:

- `monit reload` — reload configuration files
- `monit summary` — short information
- `monit start astra` — start Astra
- `monit stop astra` — stop Astra
- `monit restart astra` — restart Astra
