---
title: EPG Options
weight: 5
---

EPG is an Electronic Program Guide

{{< figure src="/assets/img/docs/streams/epg.png" alt="Stream EPG Options" >}}

EPG Export:

EPG Export extracts the program guide from the stream and
saves it into the file or sends it to the [EPG Aggregator](#epg-aggregator).

- Format:
    - `XMLTV` - it is a popular format for storing and distributing EPG files. XMLTV uses a large number of popular middlware and iptv players. (as an example - Infomir Ministra)
    - `JSON` - this format is useful for sending EPG to external servers or can be used directly in a web application (for Example, embedding EPG into a site)
- Destination:
    - `file://` - save EPG to file. (for example: `file:///tmp/test_channel.xml`)
    - `http://` - send data as POST request to HTTP server. On the server side, there must be an application to handle the received request - for example, an [EPG Aggregator](#epg-aggregator)
- Codepage - Override EPG codepage. By the default Astra get codepage from stream

## EPG Aggregator

EPG Aggregator is a script for Astra to receive EPG from many servers and save it into the single XMLTV file.

To install script, run command in server console:

```sh
curl \
    -o /etc/astra/epg-aggregator.lua \
    http://cesbo.com/download/astra/scripts/epg-aggregator.lua
```

Download service file for systemd:

```sh
curl \
    -o /etc/systemd/system/astra-epg.service \
    http://cesbo.com/download/astra/scripts/astra-epg.service
```

In this file you can change next options:

- `-p 5000` - port for receiving EPG
- `-o /tmp/epg.xml` - path to store the generated XMLTV file

Or append additional options:

- `-stalker` - replace tag `<sub-title>` to `<desc>`
- `-interval SEC` - interval in seconds for saving EPG to file. Default: 60

To enable service use next commands:

```sh
systemctl daemon-reload
systemctl enable astra-epg
systemctl start astra-epg
```

You can add URLs to client applications: `http://EPG_agregator_IP:5000/epg.xml`
