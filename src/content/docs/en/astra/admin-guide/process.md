---
title: Process Status API
date: 2023-03-23
sidebar:
    order: 26
---

In Astra, you can manage process and control it status using HTTP API methods.

## System status

:::caution
Version: 2021-04-12 or later
:::

Request: `GET /api/system-status`

Optional query parameters: `GET /api/system-status?t={time}`

- `time` - default is `1` - statistics for last minute.  `0` - statistics for last second (current system status).

Response:

```json
{
    "timestamp": 0,
    "instance": "...",
    "la1": 0,
    "la5": 0,
    "la15": 0,
    "app_threads": 1,
    "sys_cpu_usage": 0,
    "app_cpu_usage": 0,
    "sys_mem_usage": 0,
    "app_mem_usage": 0,
    "app_mem_kb": 0,
    "sys_uptime": 0,
    "app_uptime": 0
}
```

- `timestamp` - report time, for `t=0` is a current time
- `instance` - instance name if defined in the Settings -> General -> Instance Name
- `la1` - load average for 1 minute multiplied by 100
- `la5` - load average for 5 minutes multiplied by 100
- `la15` - load average for 15 minutes multiplied by 100
- `app_threads` - number of the threads
- `sys_cpu_usage` - total CPU usage. Could be up to: 100 multiplied with the core numbers on all CPUs
- `app_cpu_usage` - CPU usage by the process and all threads
- `sys_mem_usage` - total RAM usage
- `app_mem_usage` - RAM usage by the process and all threads
- `app_mem_kb` - RAM usage by the process and all threads in kilobytes
- `sys_uptime` - total system uptime in seconds
- `app_uptime` - process uptime in seconds

## Restart Astra

Request: `POST /control/`

```json
{
    "cmd": "restart"
}
```
