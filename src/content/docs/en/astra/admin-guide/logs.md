---
title: Logs in Astra
sidebar:
    order: 1
---

Astra writes logs to help you understand the service status and how streams are received and processed. Logs are grouped into types:

- `errors` - iproblems that break or stop stream input
- `warnings` - issues in the stream that may or may not affect playback
- `information` - short messages such as process start, version info, normal exit, restart, or stream input activation
- `debug` -  detailed stream processing messages. Disabled by default. Enable in log settings or with `--debug` command line option
- `access log` - requests to Astra's HTTP server. Stored in a separate file

## Web interface

Open logs in the web interface by clicking Log in the main menu:

![Logs in web interface](https://cdn.cesbo.com/help/astra/admin-guide/log/web.png)

- **Search**: filter log messages
- **Settings**: change log options
- **Clear**: clear the log view. On the server side logs remain unchanged

![Log settings](https://cdn.cesbo.com/help/astra/admin-guide/log/web-settings.png)

- **API Access**: log all API requests. Helps track who manages the service
- **Debug**: write detailed information about receiving and processing

## Log Output

Log location depends on how Astra is started:

- If you used `astra init` to set up the service, logs are written to `/var/log/astra.log`
- If you used `astra init <port> <service>` to set up the service, logs are written to `/var/log/<service>.log`
- If you start Astra directly in the console, logs are shown only in the console

## HTTP Access Logs

HTTP Access Logs capture requests to the built-in Astra HTTP server. They are off by default.
Enable them in Settings → General and set the full path in the HTTP Access Log field, for example: `/var/log/astra-access.log`

### Example Entries

```
192.168.88.100 - - [11/Aug/2023:07:03:07 +0000] "GET / HTTP/1.1" 200 0
192.168.88.100 - admin [11/Aug/2023:07:03:07 +0000] "POST /control/ HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/71545838.m3u8 HTTP/1.1" 200 0
198.51.100.1 - - [11/Aug/2023:07:03:08 +0000] "GET /play/a0g2/113900585_92b9.ts HTTP/1.1" 200 0
```

Format is the same as most HTTP servers:

```
remote_addr - remote_user [time] "request" status bytes_sent
```

## Log Rotation

Use log rotation to save disk space and keep logs clean.
Linux systems use logrotate to manage rotation and compression.

:::caution
Astra rotates its own log file but not the HTTP Access Log.
:::

### Astra Log File

Astra rotates its own log file automatically when file size exceeds 2MB. It keeps only one rotated file.

### HTTP Access Log File

Astra does not rotate the HTTP Access Log. To set up log rotation for the HTTP Access Log using logrotate, create a new configuration file at `/etc/logrotate.d/astra`:

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

- `/var/log/astra-access.log` - path to the log file. You can list multiple files
- `daily` - rotate logs every day
- `rotate 10` - keep the last 10 archives
- `missingok` - skip if the file is missing
- `notifempty` - skip if the file is empty
- `compress` - compress archives with gzip
- `delaycompress` - compress the archive on the next day, preventing message loss
- `sharedscripts` - run the postrotate script once for all files
- `postrotate` - command to run after rotation. Reloads Astra so it writes to the new file
