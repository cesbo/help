---
title: Launch Astra in console
sidebar:
    order: 8
---

If your system does not have systemd you may launch process manually:

```sh
astra -c /etc/astra/astra.conf -p 8000
```

Process will be launched in the foreground and your console will be taken by process until it finish. To stop process just press Ctrl+C on your keyboard.

- `-c`: path to the configuration file.
- `-p`: port for the Astra Web Interface.

## Launch in background

To launching process in background append option `--daemon` after the command line:

```sh
astra -c /etc/astra/astra.conf -p 8000 --daemon
```

## Kill process

Process will be launched in the background and console will be returned to your control immediately. To stop process you may launch command:

```sh
killall astra
```

## Path to license file

By default, Astra will look for the license file in the `/etc/astra/license.txt` path. If you have your license file in a different location, you can specify it using the `--license` option when launching Astra.

```sh
astra -c /etc/astra/astra.conf -p 8000 --license /path/to/license.txt
```
