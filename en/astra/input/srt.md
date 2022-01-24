# SRT

SRT (Secure Reliable Transport) is an UDP based protocol with high stability and security.
[Read more](/en/book/#/delivery/srt)

## Caller address format

In the caller mode receiver sends request to the transmitter.

```
srt://host:port#options
```

- `host` – remote server address
- `port` – remote port

Options:

- `streamid=ID` – stream identifier
- `passphrase=PASS` – password for the encrypted transmission. Password length should be in range 10 .. 79 characters
- `pbkeylen=N` – crypto key length in bytes. Possible values: 16, 24, 32
- `tsbpdmode` – timestamp-based packet delivery mode

## Listener address format

In the listener mode receiver awaits request from the transmitter.

```
srt://@:port
srt://interface@:port#options
```

- `interface` – name of the local interface. If interface is not defined Astra accept requests from any interface
- `port` – local port

Options:

- `tsbpdmode` – timestamp-based packet delivery mode

## Web Interface

In the web interface SRT Input options available in the Stream options. You can write source address directly to the Input address line:

![Input address](input-list-696w.png ':size=696')

Or click to the gear icon and use an Input configuration form. SRT Caller options:

![SRT Caller Input options](srt-caller-696w.png ':size=696')

SRT Listener options:

![SRT Listener Input options](srt-listener-696w.png ':size=696')

## Troubleshooting
