---
title: SSH
---

SSH - is the primary protocol and tool for the remote servers management.
Also allows you to create tunnels and transfer files.

## Connection to server

```sh
ssh root@192.168.1.1
```

## Client configuration

SSH client can work without configuration file and get all necessary parameters at startup.
But it's easier to work if you create a configuration file: `~/.ssh/config`

```sh
Host 192.168.1.1
    User root
    Port 222
    IdentityFile ~/.ssh/server_ed25519
```

- `192.168.1.1` - server name and address if HostName not defined
- `HostName` - optional. server address
- `User` - username
- `Port` - server port, default: `22`
- `IdentityFile` - optional. path to private key file

## Key creation

For security reasons we strongly recommend to use authentication keys instead of password.

```sh
ssh-keygen -t ed25519 -f ~/.ssh/server_ed25519
```

- `ed25519` - select the type of encryption, Ed25519 - optimal choise
- `~/.ssh/server_ed25519` - path to the private key file, public key will be: `~/.ssh/server_ed25519.pub`

Once started, the command will ask for a password. This is an additional level of security,
this password must be entered on connection to the server.

Public key is a signle line with next format:

```
ssh-ed25519 AAAA...UUUU info@cesbo.com
```

On the server append this line to the: `~/.ssh/authorized_keys` This file may contain one or more keys.

```
echo "ssh-ed25519 AAAA...UUUU info@cesbo.com" >>~/.ssh/authorized_keys
```

## Copy file to server

To copy files to the server, use the command:

```
scp LOCAL 192.168.1.1:REMOTE
```

- `LOCAL` - path to the file on the local computer
- `192.168.1.1` - server address
- `REMOTE` - absolute path to the file on the server

## Port forwarding

From server to local computer:

```
ssh -L 4000:127.0.0.1:8000 192.168.1.1
```

- `4000` - port on the local computer
- `127.0.0.1:8000` - address and port on the remote computer
- `-fNT` - run SSH client in background

For example in the local network of the remote server there is an IP camera with the stream address: `rtsp://admin:123@10.0.0.101:554/stream1`

For local forwarding:

```
ssh -fNT -L 10554:10.0.0.101:554 192.168.1.1
```

Once started the stream can be opened in VLC: `rtsp://admin:123@127.0.0.1:10554/stream1`
