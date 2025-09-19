---
title: Too many open files
sidebar:
    order: 51
---

Every process in Linux runs with limits. One of these limits is the number of files and network sockets a process can open at the same time. When the limit is too low, you may see the error **Too many open files**.

## Astra and Open File Limits

In Astra, this error may appear when the system limit is not set high enough. By default, if you installed Astra with the command `astra init` (as described in our Quick Start guide), the limit is set to **65536** open files. This value is usually enough for most use cases.

If you start Astra in a different way, you need to make sure the open file limit is set correctly. Below are the common cases.

## Starting with init.d

When using an init.d script, you must increase the limit before starting Astra. Add the ulimit -n 65536 line before the command that launches Astra.

Example script:

```sh
if [ "$1" = "start" ]; then
    /usr/bin/astra -c /etc/astra/astra.conf -p 8000 --pid /var/run/astra.pid --log /var/log/astra.log --daemon
elif [ "$1" = "stop" ]; then
    if [ -f /var/run/astra.pid ]; then
        kill $(cat /var/run/astra.pid)
    fi
elif [ "$1" = "restart" ]; then
    $0 stop
    sleep 1
    $0 start
fi
```

## Starting with systemd

For systemd services, you should set the limit inside the service file. In the `[Service]` section, add:

```ini
[Service]
Type=simple
LimitNOFILE=65536
ExecStart=/usr/bin/astra -c /etc/astra/astra.conf -p 8000 --log /var/log/astra.log --no-stdout
```

This ensures Astra can open enough files and sockets without hitting the error.

## Checking the Current Limit

You can check the current open file limit for a running process using the ulimit or cat commands.

If you are inside the same shell where Astra is running, run:

```sh
ulimit -n
```

This shows the maximum number of open files for that shell (and any processes started from it).

If Astra is already running as a daemon, find its process ID (PID) and check directly:

```sh
pidof astra
```

This returns the PID of the Astra process. Then run:

```sh
cat /proc/<PID>/limits | grep "open files"
```

Example output:

```
Max open files            65536                65536                files
```
