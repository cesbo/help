# General

Monitoring settings via the [influxdb](/en/astra/utils/influxdb):

- **Instance Name** - by the default is astra will be used as bucket in the InfluxDB
- **InfluxDB Address** - address of the InfluxDB: http://db-server:8086
- **InfluxDB Organization** - your orgranization in the - InfluxDB settings
- **InfluxDB Token** - paste your token from clipboard

---

- **Monitoring** - This line specifies the url of the server to which statistics will be sent
More information about sending statistics can be found in the section [Monitoring](/en/astra/monitoring/index.md)
s
- **HTTP Sessions** - Enable/disable the ability to monitor http sessions. After disabling this feature , the tab "Sessions" will be removed and the parameters of HLS generation will be changed (the intermediate index file used to check the session will be removed). Sessions are enabled by default

---

When filling in these fields-the web interface will switch to the https protocol, it will be possible to use the https protocol in the output line and HTTP play will work over the https protocol.
It is possible to get certificates, for example, from the service [letsencrypt](https://letsencrypt.org/)

- **Tls certificate chain** - full path to the certificate chain (for example - /etc/letsencrypt/live/cesbo.com/fullchain.pem)
- **Tls certificate key** - full path to the certificate key (for example - /etc/letsencrypt/live/cesbo.com/privkey.pem)

---

**These settings are global for all streams (unless overridden in the stream settings)**

- **Start stream on demand** - Activation of streams in the presence of http-clients (If there are no clients - stream is in inactive state. When a client appears, the stream starts working) Enabled by default
- **HTTP Keep Active** - Time, in seconds, during which the stream will be active, despite the absence of clients
- **Backup Start Delay** - Delay in seconds before switching to a backup source
- **Backup Return Delay** - Delay in seconds before returning to the previous source
- **Default codepage** - SDT Code Page (for Russia- Cyrillic (ISO 8859-5))
- **Service provider** - The name of the provider. Used in SDT tables (stream description)
- **Network name** - The name of the provider's network. Used in SDT tables (stream description)
- **TCP Congestion Control** - Specifying the operation algorithm for TCP CC
- **CC Limit** - Limit on the number of CC errors in the source. After exceeding this limit - the source will be considered non-working
- **Use multithreading for UDP receiving and transmitting** - Ability to handle UDP traffic on separate streams. For each UDP input and output, a separate thread process is created
- **Bind DVB adapters by MAC** - Binding the mac address to the adapter number 
  !!! danger ""
    When loading, the adapters can be initialized randomly and mixed up. Not all DVB adapters have MAC addresses