---
title: Logs in Astra
sidebar:
    order: 1
---

The log messages in Astra provide insight into the service status and activities during the receiving and processing of data streams. Log messages are categorized into several types:

- `errors` - indicate operational issues that can disrupt the stream input
- `warnings` - point out issues with the disrupted stream or those that might not affect streams at all
- `information` - includes limited number of messages, such as version information on process start, normal exit, process restart, activation input on the stream, and a few others
- `debug` - detailed information about receiving and processing activities. Turned off by default and can be enabled in the log settings or using command line argument `--debug`
- `access log` - this kind off messages records requests to the built-in Astra HTTP server. The access logs are separate from other logs and stored in a specific file. For more detals, please refer to the [Access Log](/en/astra/logs/access-log/)

## Web interface

Log could be found in web interface, just click "Log" in the main menu:

![Logs in web interface](https://cdn.cesbo.com/help/astra/admin-guide/log/web.png)

- `Search` - search bar in the main menu could be used to filter messages
- `Settings` - basic log options
- `Clear` - clear log in the web interface. On the server Astra keep log as is

![Log settings](https://cdn.cesbo.com/help/astra/admin-guide/log/web-settings.png)

- `API Access` - write to the log all API requests to Astra. Useful to check who manage your service
- `Debug` - write detalied information about receiving and processing

## Console

By default, Astra writes all information to the file `/var/log/astra.log`. File name depends of the service name. Therefore, if you have launched several instances on the same server, the file name will be same as a service name.


## HTTP Access Logs

HTTP Access Logs is an information about processed requests by the buil-in Astra HTTP server. HTTP Access Logs disabled by default, you may turn it on in the Settings → General, set full path to the log file in the "HTTP Access Log" field. For example: `/var/log/astra-access.log`

### Log Fields

```
192.168.88.100 - - [11/Aug/2023:07:03:07 +0000] "GET / HTTP/1.1" 200 0
192.168.88.100 - admin [11/Aug/2023:07:03:07 +0000] "POST /control/ HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/71545838.m3u8 HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/113900585_92b9.ts HTTP/1.1" 200 0
```

Access log has format like most HTTP servers:

```
remote_addr - remote_user [time] "request" status bytes_sent
```

## Log Rotation

Logrotate is a system utility that manages the automatic rotation and compression of log files.

:::caution
Please use log rotation to save disk space and ensure your logs remain in good condition
:::

By default, Astra rotates its own log file, but does not rotate the HTTP Access Log. To set up log rotation for the HTTP Access Log using logrotate, create a new configuration file at `/etc/logrotate.d/astra`:

```
/var/log/astra-access.log {
    daily
    rotate 10
    missingok
    notifempty
    compress
    delaycompress
    sharedscripts
    postrotate
        systemctl reload astra || true
    endscript
}
```

- `/var/log/astra-access.log` - full path to the log file. You can define multiple files separated by spaces
- `daily` - daily rotation. Each log archive file will contain records for a single day
- `rotate 10` - only the last 10 log archive files are kept. For daily rotation, this equates to 10 days of archives
- `missingok` - ignore error if defined log file is not found
- `notifempty` - log will not be rotated if it is empty
- `compress` - compress the log archive files with gzip
- `delaycompress` - new log archive file will be compressed on the next day. As Astra continues to write logs to the new log archive file until the `postrotate` script runs, this option needed to prevent the loss of the latest messages
- `sharedscripts` - execute the `postrotate` script once for all log files
- `postrotate` - command is executed after log file is rotated. Astra receives a signal to start writing in the new empty file
