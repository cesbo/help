---
title: "SSH: Basics"
sidebar:
    order: 11
---

SSH - is the primary protocol and tool for the remote servers management. Also allows you to create tunnels and transfer files.

## SSH Utilities

### OpenSSH Server

- **sshd** (OpenSSH Daemon): A server-side daemon that listens for incoming SSH connections. Authenticates users and establishes secure sessions.
- **sftp-server** (SFTP server subsystem): A program for file transfers using the SFTP protocol, usually invoked automatically by the sshd daemon.

### OpenSSH Client

- **ssh** (SSH client): Logs into a remote server, provides virtual terminal, and executes commands.
- **ssh-keygen**: Creates and manages authentication keys.
- **scp**: Copies files between local and remote machines using an encrypted channel.
- **sftp**: Transfers files over a secure channel, similar to FTP.

## Connection to server

```bash
ssh root@example.com
```

Connect to the server with custom port:

```bash
ssh -p 2222 root@example.com
```

Connect to the server with a specific private key:

```
ssh -i ~/.ssh/server_ed25519 root@example.com
```

## Client Configuration

The SSH client can work without a configuration file and retrieve all the necessary parameters from command-line arguments. However, you may create a configuration file named `~/.ssh/config`. This file should contain the following information:

```
Host example.com
    HostName 192.168.1.1
    User root
    Port 2222
    IdentityFile ~/.ssh/server_ed25519
```

- `Host` - server name. This is the name used in the connection command: `ssh example.com`
- `HostName` - an optional server address. If HostName is not defined, the proper address or host name should be defined in `Host`
- `User` - username
- `Port` - the server port. Default: `22`
- `IdentityFile` - an optional field that specifies the full path to the private key file

## SSH Keys

SSH keys are a more secure way of logging into an SSH server, compared to using passwords. They consist of a pair of keys: a public key and a private key. The public key is placed on the server you want to connect to, while the private key remains on your local machine.

:::caution
Do not share your private keys!
:::

### Generating

To generate an SSH key pair, use the following command:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/server_ed25519
```

- `ed25519` - selects the type of encryption. Ed25519 is the optimal choice
- `~/.ssh/server_ed25519` - the path to the private key file. The public key will be generated as `~/.ssh/server_ed25519.pub`

Once the command is started, it will prompt you to enter a password. This password provides an additional level of security and must be entered when connecting to the server.

The public key is a single line with the following format:

```
ssh-ed25519 AAAA...UUUU user@example.com
```

### Copy Public Key to Server

On the server side, append this line to the `~/.ssh/authorized_keys` file. This file may contain one or more keys. To append the public key, run the following command:

```bash
echo "ssh-ed25519 AAAA...UUUU user@example.com" >>~/.ssh/authorized_keys
```

## SSH Agent Forwarding

SSH Agent forwarding allows you to use your local SSH keys on a remote server without sharing. This is useful when you need to access another server from the first server without storing your keys on the remote server.

You can enable SSH Agent forwarding by using the -A option with the ssh command:

```bash
ssh -A example.com
```

Alternatively, you can enable it permanently for a specific host in your SSH config file `~/.ssh/config`:

```
Host example.com
    ForwardAgent yes
```

:::note
SSH Agent will be forwarded only in active SSH session, and the private key will not be copied to the remote server. SSH Agent forwarding is not recommended for untrusted servers.
:::

## SSH Proxy Jump

ProxyJump is another useful mechanism. It allows you to connect to a remote server via an intermediate SSH server, also known as a "jump host".

To connect to server2 via server1:

```bash
ssh -J user@server1 server2
```

Alternatively, you can enable it permanently for a specific host in your SSH config file `~/.ssh/config`:

```
Host server2
    ProxyJump user@server1
```

Now you can simply use:

```bash
ssh server2
```
