---
title: "Integration Astra with Grafana"
date: 2023-06-10
---

Grafana is an open source analytics and interactive visualization web application.
It works in pair with [InfluxDB](./influxdb) to visualize status of the Astra, stream, and adapters.

## Install

Before Grafana installation, make sure that InfluxDB installed and configured: [Read more...](./influxdb)

Download latest version from

1. Go to Grafana site: https://grafana.com/grafana/download
2. Choose latest version
3. Choose your platform
4. Launch commands from the instruction on the Grafana site

Find out more information on official site: https://grafana.com/docs/grafana/latest/

## Grafana configuration

1. Open Grafana Admin interface: `http://grafana-server:3000`
2. On the login page, enter `admin` for username and password
3. Set new password

## Append data source

Open Settings -> Data Sources and click "Append data source", choose InfluxDB and set next options:

- Name: `Astra` or any other
- Query language: `Flux`
- HTTP URL: `http://db-server:8086`
- Turn off `Basic auth`
- Organization: your organization name in InfluxDB Settings
- Token: your token copied for Astra settings
- Min time interval: `1m`

Click `Save & Test`, you should see green notification: `Bucket found`

## Append dashboard

1. Download our template for Grafana: [dashboard.json](https://cdn.cesbo.com/astra/grafana/dashboard.json)
2. Open: Create -> Import
3. Click `Upload JSON file`
4. Choose downloaded file
5. Set any name for dashboard
6. Click `Import`

## Dashboard

![Grafana Dashboard](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/dashboard.png)

Dashboard has next variables:

- `Source` - choose `Astra` or other name;
- `Bucket` - this is database name in the InfluxDB. Same as `Instance Name` in the Astra settings.
If you have several servers or different Astra instances on the same server you can create several
dashboards for each instance;
- `Adapter` - All DVB adapters on the instance;
- `Stream` - All streams on the instance.

### Status panels

CPU Usage:
- The System CPU usage is for all available cores. Max value is a number of cores multiplied by 100
- The App CPU usage is for all threads on all cores and relative to the System CPU usage

Memory Usage:

- The System Memory Usage - is total memory usage by all processes in the system
- The App Memory Usage - is total memory usage by all app threads. Value is relative to the system memory usage

Status:

- `App uptime` - elapsed time since app launched
- `Sys uptime` - elapsed time since system startup
- `LA 1m` - load average for 1 minute
- `LA 5m` - load average for 5 minutes
- `LA 15m` - load average for 15 minutes

Failed Streams - list of all incidents ordered by the time. Recent events on top of the table. All values in the table at the event time:

- `Name` - stream name
- `Elapsed time` - time since incidents happened
- `Sessions` - number of HTTP/HLS sessions
- `CC Errors` - counter of the detected packet loss events
- `Sync Errors` - counter of the HTTP/HLS bitrate synchronization errors
- `PES Errors` - percent of the video/audio packets with the corrupted content
- `Scrambled` - percent of the scrambled packets
- `Bitrate` - stream bitrate in KBit/s

Adapters and streams:

![Adapters and streams](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/adapters-and-streams.png)

Charts displayed separately for each selected adapter or streams.
