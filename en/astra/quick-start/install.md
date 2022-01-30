# Install

Cesbo Astra installation is a simple process – just copy single binary file to your server.

!> In this guide we use the `curl` command to download files.
Most Linux distribution has pre-installed `curl`

Download binary file and set execute permission. On the server you may use next command:

```
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

After installation, register service in the systemd – system service manager in most Linux distributions:

```
astra init
```

Launch Astra:

```
systemctl start astra
```

After start web-interface will be available on: http://server-address:8000.
Default login and password: **admin** .

Astra used port **8000** by the default, you may set any custom port:

```
astra init 4000
```

After changing port on existing service it should be restarted. Read more about service configuration in [Service Setup](service-setup.md)

## Process management

Restart service:

```
systemctl restart astra
```

Enable autorun on system startup:

```
systemctl enable astra
```

Disable autorun:

```
systemctl disable astra
```

Start service:

```
systemctl start astra
```

Stop service:

```
systemctl stop astra
```

Service status:

```
systemctl status astra
```

## Check version

After installation or after update you may check installed version:

```
astra -v
```
