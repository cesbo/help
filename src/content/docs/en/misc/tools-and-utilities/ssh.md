---
title: "SSH"
date: 2023-02-28
sidebar:
    order: 11
---

SSH - is the primary protocol and tool for the remote servers management. Also allows you to create tunnels and transfer files.

## Connection to server

```
ssh root@192.168.1.1
```

## Client Configuration

The SSH client can work without a configuration file and retrieve all the necessary parameters from command-line arguments. However, you may create a configuration file named `~/.ssh/config`. This file should contain the following information:

```
Host server-alias
    HostName 192.168.1.1
    User root
    Port 222
    IdentityFile ~/.ssh/server_ed25519
```

- `Host` - server name. This is the name used in the connection command: `ssh server-alias`
- `HostName` - an optional server address. If HostName is not defined, the proper address or host name should be defined in `Host`
- `User` - username
- `Port` - the server port. Default: `22`
- `IdentityFile` - an optional field that specifies the full path to the private key file

## Key Generation

For security reasons, it is strongly recommended to use authentication keys instead of passwords.

To generate an authentication key, run the following command:

```
ssh-keygen -t ed25519 -f ~/.ssh/server_ed25519
```

- `ed25519` - selects the type of encryption. Ed25519 is the optimal choice
- `~/.ssh/server_ed25519` - the path to the private key file. The public key will be generated as `~/.ssh/server_ed25519.pub`

Once the command is started, it will prompt you to enter a password. This password provides an additional level of security and must be entered when connecting to the server.

The public key is a single line with the following format:

```
ssh-ed25519 AAAA...UUUU user@example.com
```

On the server, append this line to the `~/.ssh/authorized_keys` file. This file may contain one or more keys. To append the public key, run the following command:

```
echo "ssh-ed25519 AAAA...UUUU user@example.com" >>~/.ssh/authorized_keys
```

## Copy file to server

To copy files to the server, use the next command:

```
scp FILE 192.168.1.1:REMOTE
```

- `FILE` - path to the file on the local computer
- `192.168.1.1` - server address
- `REMOTE` - absolute path to the file on the server

## Port Forwarding

To forward traffic from a remote server to a local computer, use the following command:

```
ssh -L 4000:192.168.88.100:554 192.168.1.1
```

- `4000` - the port number on the local computer with ssh client
- `192.168.88.100:554` - the IP address and port number on the remote computer
- `-fNT` - additional options to run the SSH client in the background

For example, if the remote address is an IP camera with the stream address `rtsp://admin:123@192.168.88.100:554/stream1`, SSH will forward all requests to port `4000` to this camera. Once the stream is started, it can be opened in VLC using the following URL: `rtsp://admin:123@127.0.0.1:4000/stream1`.
