---
title: "Integration Astra with InfluxDB"
date: 2023-03-23
---

InfluxDB is an open-source time series database.

## Install

Download latest version from

1. Go to InfluxDB site: https://portal.influxdata.com/downloads/
2. Choose latest version
3. Choose your platform
4. Launch commands from the instruction on the InfluxDB site

Find out more information on official site: https://docs.influxdata.com/influxdb/latest/

InfluxDB is an open-source time series database.

## InfluxDB Configuration

Open the InfluxDB Admin interface at http://db-server:8086.

First, create a new bucket. A bucket serves as storage for all data received from Astra. You can find buckets in the left sidebar under the "Load Data" group. To create a new bucket:

1. Click "Create Bucket."
2. Set the bucket name, for example, "astra."
3. Set data retention: in the "Delete Data" section, select "Older than" and choose 30 days or any other value you prefer.

The next step is to grant Astra access to the bucket. In the left sidebar under the "Load Data" group, open "API Tokens":

1. Click "Generate API Token" and choose "Custom API Token."
2. Set the token description as "astra."
3. In the Bucket group, set Read and Write permissions for the "astra" bucket.
4. Click "Generate."

Now, InfluxDB is configured and ready to receive data.

## Astra Configuration

Open Settings -> General in the Astra Web Interface. Set options for InfluxDB configuration:

- **Instance Name** - by the default is `astra` will be used as bucket in the InfluxDB
- **InfluxDB Address** - address of the InfluxDB: `http://db-server:8086`
- **InfluxDB Organization** - your orgranization in the InfluxDB settings
- **InfluxDB Token** - paste your token generated on previous step
- Click "Apply & Restart"

## InfluxDB data structure

### Stream

Measurement: `stream`

Tags:

- `id` - unique stream identifier
- `name` - stream name

Data:

- `active` - `true` if stream is active, or `false` if stream work on demand and inactive
- `onair` - `true` if active input works without errors
- `sessions` - uint, number of sessions
- `bitrate` - uint, stream bitrate in KBit/s
- `sc_error` - uint, percent of scrambled TS-packets
- `cc_error` - uint, CC errors counter
- `pes_error` - uint, percent of invalid PES-packets
- `sync_error` - uint, HTTP/HLS sync errors

### Adapter

Measurement: `adapter`

Tags:

- `id` - unique adapter identifier
- `name` - adapter name

Data:

- `lock` - boolean, `true` if tuner has lock and able to receive data
- `signal` - uint, approximate signal level in percent
- `signal_db` - float, signal level in dBm
- `snr` - uint, approximate signal to noise ratio in percent
- `snr_db` - float, signal to noise ratio in dB
- `ber` - uint, bit errors counter
- `unc` - uint, block errors counter
- `bitrate` - total bitrate in Kbit/s

### System information

Measurement: `sysinfo`

Data:

- `la1` - float, load average for 1 minute
- `la5` - float, load average for 5 minutes
- `la15` - float, load average for 15 minutes
- `threads` - uint, number of the threads
- `sys_cpu` - uint, total CPU usage. Could be up to: 100 multiplied with the core numbers on all CPUs
- `app_cpu` - uint, CPU usage by the process and all threads
- `sys_mem` - uint, total RAM usage
- `app_mem` - uint, RAM usage by the process and all threads
- `app_mem_kb` - uint, RAM usage by the process and all threads in kilobytes
- `sys_uptime` - uint, total system uptime in seconds
- `app_uptime` - uint, process uptime in seconds
