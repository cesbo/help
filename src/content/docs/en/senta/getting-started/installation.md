---
title: Installation
description: Get started with Senta streamer.
sidebar:
    order: 2
---
## Quick Start

Before installing senta-streamer, make sure that [ffmpeg](https://ffmpeg.org/) is installed on your server.

To start using senta-streamer, you need to download the latest version. After downloading, you can install it on your server.

To start the application, you need to init config:

```bash [terminal]
./senta init
```

Senta making **config.json** file in the same directory, where you run this command. You can edit this file and set the parameters (for example, `username` and `password`).

After that, you can start the application with the command:

```bash [terminal]
./senta config.json
```

The application will start and you can access the web interface at `http://address_your_server:8018` (you can change port in config.json file)

Next you can [make senta as demon](#set-as-demon) and set profiles and streams

## Set as demon

To create a daemon (or service) in Linux-based systems such as Ubuntu, you can utilize the systemd tool. Here's how you can create a service for your application:

Create a new service configuration file in the directory `/etc/systemd/system/`. For example, you can name it `senta.service`.

Open this file in a text editor and add the following content:

```toml
[Unit]
Description=Senta Application
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=5
User=root
WorkingDirectory=/root
ExecStart=/path/to/senta config.conf

[Install]
WantedBy=multi-user.target
```

Note: `/path/to/senta` is the path to execute the senta binary file. `config.conf` is the configuration file.

Save the file and close the text editor.

Update the systemd service list to detect your new service:

```bash [terminal]
sudo systemctl daemon-reload
```

Now you can manage your service using the systemctl command. For example, to start the service and configure it to start automatically on system boot, execute the following:

```bash [terminal]
sudo systemctl start senta
sudo systemctl enable senta
```

Now your application will function as a daemon, automatically restarting in case of failure. You can use systemctl commands to manage this service, such as stop, restart, status, etc.
