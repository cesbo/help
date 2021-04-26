---
title: Grafana
---

## Install

Before Grafana installation, make sure that InfluxDB installed and configured: [Read more...]({{< relref "influxdb" >}})

Download latest version from

1. Go to Grafana site: https://grafana.com/grafana/download
2. Choose Grafana v.7
3. Choose your platform
4. Launch commands from the instruction on the Grafana site

Find out more information on official site: https://grafana.com/docs/grafana/latest/

## Grafana Configuration

1. Open Grafana Admin interface: http://grafana-server:3000
2. On the login page, enter `admin` for username and password
3. Set new password

## Append source

1. Open Settings -> Data Sources
2. Name: `Astra`
3. Query language: `Flux`
4. URL: `http://db-server:8086`
5. Organization: your orgranization name in InfluxDB Settings
6. Token: your token copied for InfluxDB Admin interface
7. Default bucket: `astra`
8. Click "Save & Test"
