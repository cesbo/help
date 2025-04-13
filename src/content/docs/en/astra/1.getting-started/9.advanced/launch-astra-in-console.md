---
title: "Launch Astra in console"
date: 2023-02-21
---

If your system does not have systemd you may launch process manually:

```
astra -c /etc/astra/astra.conf -p 8000
```

Process will be launched in the foreground and your console will be taken by process until it finish. To stop process just press Ctrl+C on your keyboard.

To launching process in background append symbol `&` after the command line:

```
astra -c /etc/astra/astra.conf -p 8000 &
```

Process will be launched in the background and console will be returned to your control immediately. To stop process you may launch command:

```
killall astra
```
