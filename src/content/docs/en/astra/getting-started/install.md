---
title: Installing Astra
sidebar:
    order: 2
---

Astra installation is a simple process – just copy single binary file to your server.

## Requirements

- Any Linux based operation system
- x86 64bit CPU
- Connection to the internet on your server
- Periodic internet access is required for license validation by Astra on the servers: `ls1.cesbo.com`, `ls2.cesbo.com`, and `ls3.cesbo.com`

:::note
In this guide we use the **curl** command to download files. Most Linux distribution has pre-installed **curl**
:::

## Install Astra

Open your server console and download binary file:

```sh
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
```

Set execute permission:

```sh
chmod +x /usr/bin/astra
```

Installation completed, now you may check version number:

```sh
astra -v
```

## Get License

Valid license is required to launch Astra on your server. You may get demo license for free or buy subscription on our web site: https://cesbo.com/astra-license

To install license follow the instructions in the email with new license.

## Launch Astra

After installation, register new service in the systemd:

```sh
astra init
```

This command registers Astra as a system service with name `astra` and with management port `8000`. To start service launch command:

```sh
systemctl start astra
```

Read more about service management and launching additional services on your server: [Manage Astra Service](/en/astra/admin-guide/manage-service).

## Enable autorun

Turn autorun on for your service:

```sh
systemctl enable astra
```

Now service `astra` will be started automatically on system startup.

## System Tune

For better performance of your Astra server, tune your system settings. You can use our [Tune script](/en/articles/system/tune/) to automatically configure these settings. This script will adjust network parameters, CPU power modes, and other system configurations to enhance the performance of Astra.

## Login to Web Interface

After installing Astra, you can access its web interface using a web browser - Chrome, Safari, or Firefox. The default port for the web interface is 8000. So interface address will be `http://your-server-address:8000`.
To log in to the web interface, use the default login and password, which are both set to "admin".  It is recommended to change the default password to prevent unauthorized access.

Read next article about [Astra Web Interface](/en/astra/getting-started/web-interface)
