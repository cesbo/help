---
title: "SSH: Tunnels"
description: "Port forwarding with SSH"
sidebar:
    order: 12
---

SSH tunnels are a powerful tool for secure communication, bypassing network restrictions, providing remote access to local resources.

## Local Port Forwarding

Local port forwarding allows you to forward a port on your local machine to a remote address and port. Imagine you have a web application running on a remote server with address `127.0.0.1:8000`. To access this web application from your local machine, you can use SSH port forwarding:

```bash
ssh -L 8080:127.0.0.1:8000 example.com
```

Now in the web browser on the local machine go to `http://localhost:8080` and you should get the data (or see the web page) from your remote server.

- `8080` - the port number on the local computer with ssh client
- `127.0.0.1:8000` - the IP address and port number on the remote computer
- `-fNT` - additional options to run the SSH client in the background

## Reverse Port Forwarding

Reverse port forwarding allows you to forward a port on the remote server to a local service. For example, to forward remote port 9090 to your local machine's port 3000:

```bash
ssh -R 9090:localhost:3000 example.com
```

Now all request on the remote server to port `9090` will be forwarded to port `3000` on your local machine.

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

## Examples

### Secure Remote Database Access

**Scenario**: You have a MySQL database running on a remote server and you want to access it from your local machine. Create an SSH tunnel to forward the remote MySQL port to your local machine:

```bash
ssh -L 3306:localhost:3306 example.com
```

After running this command, you can connect to the remote MySQL database using a local MySQL client like so:

```bash
mysql -h 127.0.0.1 -P 3306 -u db_user -p
```

### Tunneling Multiple Ports

**Scenario**: You need to access a remote database on port `5432` and a web application on port `8080` on remote server.

```bash
ssh -L 8080:localhost:8080 -L 5432:localhost:5432 example.com
```

After running this command, you can access the remote web application at `http://localhost:8080` and the remote database at `localhost:5432`.

### Tunneling with an SSH Config File

For frequent SSH tunnel setups, you can configure your SSH client to simplify the process using the SSH config file `~/.ssh/config`.

```
Host example.com
  LocalForward 5432 localhost:5432
  LocalForward 8080 localhost:8080
```

This setup allows you to quickly establish SSH tunnels with predefined configurations by simply using the aliases.

### Access to IP Camera in a Private Network

**Scenario**: You have an IP camera on a private network that streams video over RTSP on `rtsp://192.168.1.10:554/stream1`. You need to access this RTSP stream from your local machine.

```bash
ssh -L 8554:192.168.1.10:554 example.com
```

After running this command, you can access the RTSP stream from your local machine using an RTSP client (e.g., VLC media player) by connecting to `rtsp://localhost:8554/stream1`.

1. Open VLC Media Player
2. Go to "Media" and click "Open Network Stream".
3. Enter the URL `rtsp://localhost:8554/stream1`.
4. Click "Play".

VLC will now connect to the RTSP stream through the SSH tunnel, allowing you to view the camera feed as if you were on the same private network as the camera.
