---
title: "HTTP Access Logs"
date: 2023-08-10
---

HTTP Access Logs is an information about processed requests by the buil-in Astra HTTP server.

## Configuration

HTTP Access Logs disabled by default, you may turn it on in the Settings -> General, set full path to the log file in the "HTTP Access Log" field. For example: `/var/log/astra-access.log`

## Log Fields

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

::alert
Please use log rotation to save disk space and ensure your logs remain in good condition
::

Logrotate is a system utility that manages the automatic rotation and compression of log files. To use it, create a new configuration file at `/etc/logrotate.d/astra`:

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
