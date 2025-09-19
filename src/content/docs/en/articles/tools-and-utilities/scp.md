---
title: SCP
sidebar:
    order: 13
---

SCP (Secure Copy Protocol) is a command-line utility for securely transferring files between local and remote systems over SSH. It uses the same authentication and security mechanisms as SSH, ensuring that data is encrypted during transmission.

To copy files to the server, use the next command:

```bash
scp FILE example.com:REMOTE
```

- `FILE` - path to the file on the local computer
- `192.168.1.1` - server address
- `REMOTE` - absolute path to the file on the server
