---
title: InfluxDB
---

## Install

Download latest version from

1. Go to InfluxDB site: https://portal.influxdata.com/downloads/
2. Choose InfluxDB v.2.0
3. Choose your platform
4. Launch commands from the instruction on the InfluxDB site

Find out more information on official site: https://docs.influxdata.com/influxdb/latest/

## InfluxDB Configuration

1. Open InfluxDB Admin interface: http://db-server:8086
2. Click "Get Started"
3. Setup initial configuration:
    - Username and Password for access to Admin interface
    - Organization name
    - Bucket name - by the default is `astra` but you may define any bucket name in the Astra settings
4. Click "Quick Start"
5. In the Admin interface create Token for Astra: Data -> Tokens -> Generate -> Read/Write Token
6. Set token description and choose "astra" or "All Buckets" for Read and Write permission and click "Save"
7. Click on the new token and copy it to the clipboard

Done. InfluxDB configured and ready to receive data.

## Astra Configuration

1. Open Astra Admin interface: http://astra-server:8000
2. Open Settings -> General
3. "Instance Name" - by the default is `astra` will be used as bucket in the InfluxDB
4. "InfluxDB Address" - address of the InfluxDB: `http://db-server:8086`
5. "InfluxDB Organization" - your orgranization in the InfluxDB settings
6. "InfluxDB Token" - paste your token from clipboard
7. Click "Apply & Restart"

## (Advanced) InfluxDB data structure

### Stream

- measurement: `stream`
- tags:
    - `id` - unique stream identifier;
    - `name` - stream name.
- data:
    - `active` - `true` if stream is active, or `false` if stream work on demand and inactive;
    - `onair` - `true` if active input works without errors;
    - `sessions` - uint, number of sessions;
    - `bitrate` - uint, stream bitrate in KBit/s;
    - `packets` - uint, TS-packets counter;
    - `sc_error` - uint, scrambled TS-packets counter;
    - `cc_error` - uint, CC errors counter;
    - `pes_error` - uint, invalid PES-packets counter;
    - `sync_error` - uint, HTTP/HLS sync errors.

### Adapter

- measurement: `adapter`
- tags:
    - `id` - unique adapter identifier
    - `name` - adapter name
- data:
    - `lock` - boolean, `true` if tuner has lock and able to receive data;
    - `signal` - uint, approximate signal level in percent;
    - `signal_db` - float, signal level in dBm;
    - `snr` - uint, approximate signal to noise ratio in percent;
    - `snr_db` - float, signal to noise ratio in dB;
    - `ber` - uint, bit errors counter;
    - `unc` - uint, block errors counter;
    - `bitrate` - total bitrate in Kbit/s.

### System information

- measurement: `sysinfo`
- data:
    - `la1` - float, load average for 1 minute;
    - `la5` - float, load average for 5 minutes;
    - `la15` - float, load average for 15 minutes;
    - `threads` - uint, number of the threads;
    - `sys_cpu` - uint, total CPU usage. Could be up to: 100 multiplied with the core numbers on all CPUs;
    - `app_cpu` - uint, CPU usage by the process and all threads;
    - `sys_mem` - uint, total RAM usage;
    - `app_mem` - uint, RAM usage by the process and all threads;
    - `sys_uptime` - uint, total system uptime in seconds;
    - `app_uptime` - uint, process uptime in seconds.
