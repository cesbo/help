---
title: Browsing Logs in Astra
date: 2023-08-10
sidebar:
    order: 19
---

The log messages in Astra provide insight into the service status and activities during the receiving and processing of data streams. Log messages are categorized into several types:

- `errors` - indicate operational issues that can disrupt the stream input
- `warnings` - point out issues with the disrupted stream or those that might not affect streams at all
- `information` - includes limited number of messages, such as version information on process start, normal exit, process restart, activation input on the stream, and a few others
- `debug` - detailed information about receiving and processing activities. Turned off by default and can be enabled in the log settings or using command line argument `--debug`
- `access log` - this kind off messages records requests to the built-in Astra HTTP server. The access logs are separate from other logs and stored in a specific file. For more detals, please refer to the [Access Log](/en/astra/admin-guide/access)

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
