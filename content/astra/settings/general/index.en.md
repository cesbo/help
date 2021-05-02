---
title: General
---

- Monitoring - This line specifies the url of the server to which statistics will be sent.
- HTTP Sessions - Enable/Disable HTTP sessions. Sessions used to authenticate HTTP/HLS clients. Sessions are enabled by default.
- TLS Certificate Chain - full path to the certificate chain (for example - /etc/letsencrypt/live/example.com/fullchain.pem). Will be used HTTPS protocol for Web-interface, [HTTP Play](http-play.md), and for `https://` - outputs. To get free certificate check [Let's Encrypt](https://letsencrypt.org/)
- TLS Certificate Key - full path to the certificate key (for example - /etc/letsencrypt/live/example.com/privkey.pem)

Default stream settings:

- Start stream on demand
- HTTP Keep Active
- Backup Start Delay
- Backup Return Delay

Default network settings:

- Default codepage - text encoding for SDT
- Service provider - name of the provider in SDT table (Service Description)
- Network name - name of the network in NIT table (Network Information)

Other options:

- CC Limit - Limit on the number of CC errors in the source. After exceeding this limit - the source will be considered as inactive
- Use multithreading for UDP receiving and transmitting - will be created system thread for each UDP input and output
- Bind DVB adapters by MAC - Binding the mac address to the adapter number. (When loading, the adapters can be initialized randomly and mixed up. Note: Not all DVB adapters have MAC addresses)
