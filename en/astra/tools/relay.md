# HTTP Relay

HTTP Relay is a simple tool to retransmit data from any source supported by Astra to HTTP client.

## Usage

```
astra --relay -p 8000
```

Command line arguments:

- `-p 8000` - local port for incomming connections. Default: `8000`;
- `-a 0.0.0.0` - local IP address for incomming connections. Default `0.0.0.0` - accept request on any interface;
- `-l 0.0.0.0` - IP address of the local interface to receive UDP/RTP streams. Default `0.0.0.0` - receives streams according to system routing table;
- `--pass admin:admin` - basic authorization for all requests (admin/admin);
- `--no-udp` - disable access to the UDP/RTP source;
- `--no-http` - disable access to the HTTP source;
- `--buffer-size 1024` — the maximum buffer size in kilbytes for each client. Default `1024Kb`;
- `--buffer-fill 128` — defines number of kilobytes to fill in buffer before start transmission. Default `128Kb`;
- `--daemon` - start in daemon mode;
- `--log /var/log/relay.log` - full path to the log file;
- `--channels /etc/astra/relay.lua` - full path to the channel aliases.

## Address format

Request address has next format:

- `http://your-server-address:8000/udp/239.255.1.1:1234` - receives UDP stream from multicast group `239.255.1.1:1234`
- `http://your-server-address:8000/http/example.com/travel-channel` - receives HTTP stream from `http://example.com/travel-channel`

## Channel aliases

Channel aslias let to use short name instead of full address. Alias list example:

```
channels = {
    ["demo"] = "udp://239.255.1.1:1234",
    ["travel-channel"] = "http://example.com/travel-channel"
}
```

Save file to `/etc/astra/relay.conf` and append path to the file to command line argument:

```
astra --relay -p 8000 /etc/astra/relay.conf
```

Channels from example above will be availble on:

- `http://your-server-address:8000/demo` - UDP stream
- `http://your-server-address:8000/travel-channel` - HTTP stream

## Statistics

Statistics is a simple page with active sessions contain next information:

- Client IP address
- Request path - alias or full address of the source channel
- Uptime
- Link to close session

To view statistics, open in your browser: `http://your-server-address:8000/stat/`
