---
title: "EIT Stream"
date: 2023-03-17
sidebar:
    order: 3
---

EIT Stream is a tool to convert [XMLTV files](/misc/articles/format/xmltv) into MPEG-TS stream with Event Information Tables (EIT) for broadcasting networks like DVB, ATSC, ISDB.

## Installation

Just download single binary file and set execute permission:

```
curl -Lo /usr/bin/eit-stream http://cesbo.com/and/eit-stream
chmod +x /usr/bin/eit-stream
```

## Configuration

Create a configuration file `/etc/eit-stream.conf` with any text editor. Example:

```
xmltv = /opt/xmltv.xml
output = udp://lo@239.0.0.1:1234
onid = 8000
codepage = 5
eit-days = 1
eit-rate = 1500

[tdt-tot]
country = EST
offset = +120

# First multiplex

[multiplex]
tsid = 1

[multiplex/service]
pnr = 101
xmltv-id = discovery

[multiplex/service]
pnr = 102
xmltv-id = history

# Second multiplex

[multiplex]
tsid = 2
xmltv = /opt/xmltv-2.xml

[multiplex/service]
pnr = 201
xmltv-id = euronews
```

Lines started with symbol `#` is a comment and ignored.

### General options

- `xmltv` - path to local xmltv file. or http/https link to xmltv or gzip xmltv file. This option could be redefined in `[multiplex]` or in `[multiplex/service]`
- `output` - destination UDP address
- `onid` - original network identifier
- `codepage` - codepage. This option could be redefined in `[multiplex]` or in `[multiplex/service]`
- `eit-days` - number of days in epg. default is 3
- `eit-rate` - bitrate in kbit/s. default 15 kbit/s per each service

### Supported codepages

Next codepages available for text encoding:

- `0` - Default. Latin (ISO 6937)
- `1` - Western European (ISO 8859-1)
- `2` - Central European (ISO 8859-2)
- `3` - South European (ISO 8859-3)
- `4` - North European (ISO 8859-4)
- `5` - Cyrillic (ISO 8859-5)
- `6` - Arabic (ISO 8859-6)
- `7` - Greek (ISO 8859-7)
- `8` - Hebrew (ISO 8859-8)
- `9` - Turkish (ISO 8859-9)
- `10` - Nordic (ISO 8859-10)
- `11` - Thai (ISO 8859-11)
- `13` - Baltic Rim (ISO 8859-13)
- `14` - Celtic (ISO 8859-14)
- `15` - Western European (ISO 8859-15)
- `21` - UTF-8

### Time and date options

Section `[tdt-tot]`:

- `country` - country code in format ISO 3166-1 alpha-3
- `offset` - the signed time offset in minutes from GMT. For example +120 is GMT+2 or -300 is GMT-5

### Multiplex options

Section `[multiplex]`

- `tsid` - multiplex transport stream identifier
- `name` - optional field to describe multiplex

### Service options

Section `[multiplex/service]`

- `pnr` - channel number/pnr
- `xmltv-id` - channel id in xmltv
- `parental-rating` - age restriction. Value defined in pairs: country and age. For example: `parental-rating = EST 16 USA 14`. Country code in ISO 3166-1 alpha-3 format (3 letters). Age from 4 to 18 (inclusive), 0 - without restrictions.

## Mux stream with EIT to MPTS

With Astra you can append UDP stream with EIT to the MPTS.
In the MPTS settings append input and set and UDP address, for example in configuration above address is `udp://lo@239.0.0.1:1234`.
In the MPTS advanced settings turn on option "Pass EIT".

## Autostart

Register service in systemd to start service in background and autostart on system startup. Create file `/etc/systemd/system/eit-stream.service`:

```
[Unit]
Description=eit-stream service
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/eit-stream /etc/eit-stream.conf
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Next command could be used to manage service:

- start service: `systemctl start eit-stream`
- stop service: `systemctl stop eit-stream`
- enable auto-start: `systemctl enable eit-stream`
- disable auto-start: `systemctl disable eit-stream`

## Reload

To restart service once at night append next line into /etc/crontab:

```
0   2   *   *   *   root systemctl restart eit-stream
```
