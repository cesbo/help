# General

List of Astra's main settings that allow you to work with system data and allow you to interact with external software interfaces

## Influxdb

Influxdb is used for a storage of statistics on the operation of channels. You may monitoring settings via the [influxdb](/en/astra/utils/influxdb):

- **Instance Name** - data store name. As a default Astra used the InfluxDB
- **InfluxDB Address** - attached storage address. As a default address of the InfluxDB is: http://db-server:8086
- **InfluxDB Organization** - name of your orgranization in the InfluxDB settings
- **InfluxDB Token** - if you need to connect an external interface, then you need to enter API token from clipboard

## Monitoring

- **Monitoring** - information about the server to which the statistics will be sent is available at this URL

!!! note ""
    More information about sending statistics can be found in the section [Monitoring](/en/astra/monitoring/index.md)

## HTTP Settings

Viewing data streams and setting up connected sessions is carried out through the following parameters

- **HTTP Access Log** - the function shows the full path to the file for writing the request log to the HTTP server
- **HTTP Sessions** - the function is responsible for enabling and disabling monitoring of http sessions. The enabled state adds a "Sessions" panel containing information about connections. If the function is deactivated, then this tab is hidden, and an intermediate index file that stores the processed data is also deleted. The function is set to "Enabled" by default
- **HTTP Access Log** - the function shows the full path to the file for writing the request log to the HTTP server
- **Sessions Backend Address** - this feature shows URL for sending an HTTP POST request with information about the start/end of the session
- **Minimal Session Time** - the function allows to track and send information about sessions that exceed the specified duration

When filling in these fields-the web interface will switch to the https protocol. It will be possible to use the https protocol in the output line and HTTP play will work over the https protocol.
It is possible to get certificates from the other services, such as [letsencrypt](https://letsencrypt.org/)

- **Tls certificate chain** - must contain full path to the certificate chain. For example - `/etc/letsencrypt/live/example.com/fullchain.pem`
- **TLS certificate key** - must contain full path to the certificate key. For example - `/etc/letsencrypt/live/example.com/privkey.pem`
- **Disable TLS on primary port** - https used only for ports with channels. For a port with a web interface https is not used

## Default strema options

These settings are global for all streams (unless overridden in the stream settings)

- **Start stream on demand** - the function is responsible for Activation of streams in the presence of http-clients. Function enabled by default
- **HTTP Keep Active** - the function limits time in seconds, during which the stream will be active, despite the absence of clients. If parameter setted to -1 - channels will be active during all time. This value is set when the Start stream in demand option is turned off.
- **Backup Start Delay** - the function set delay in seconds before switching to a backup source
- **Backup Return Delay** - the function set delay in seconds before returning to the previous source
- **Default codepage** - the function displays SDT Code Page (for Russia- Cyrillic (ISO 8859-5))
- **Service provider** - the function contains the name of the provider. Used in SDT tables (stream description)
- **Network name** - the function contains the name of the provider's network. Used in SDT tables (stream description)
- **TCP Congestion Control** - the function contains specifying the operation algorithm for TCP CC
- **CC Limit** - the function allows you to set limit on the number of CC errors in the source. After exceeding this limit - the source will be considered non-working
- **Use multithreading for UDP receiving and transmitting** - the function allows used to handle UDP traffic on separate streams. For each UDP input and output, a separate thread process is created
- **Bind DVB adapters by MAC** - function allows you to enter the mac address and bind it to the adapter number 

!!! note ""
    After saving the general settings, Astra restarts

!!! danger ""
    When loading, the adapters can be initialized randomly and mixed up. Not all DVB adapters have MAC addresses