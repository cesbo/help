# Install

Cesbo Alta installation is a simple process – just copy single binary file to your server.

!!! note
    In this guide we use the `curl` command to download files.
    Most Linux distribution has pre-installed `curl`

Download binary file and set execute permission. On the server you may use next command:

```
curl -Lo /usr/bin/alta https://cesbo.com/and/alta-2207
chmod +x /usr/bin/alta
```

## Check version

After installation or after update you may check installed version:

```
alta version
```
