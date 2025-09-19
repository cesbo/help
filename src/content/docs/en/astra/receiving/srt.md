---
title: SRT
sidebar:
    order: 21
---

The Secure Reliable Transport (SRT) protocol is an open-source video streaming protocol designed to provide low-latency, high-quality video streaming over unreliable networks. SRT uses end-to-end encryption and provides a range of features designed to enhance reliability and security, including error correction, congestion control, and retransmission of lost packets. SRT is often used for live video streaming applications, such as sports and news broadcasts, where maintaining a reliable, high-quality connection is critical.

:::caution
Available for Astra versions released after 2021-12-21
:::

## Address format

SRT could be received in two modes:

- `Caller mode` - Astra sends request to the SRT server and receives content in response. This is the most popular variant
- `Listener mode` - Astra waits when SRT server established connection and receives content in request. This is point-to-point mode

Address format depends on selected mode.

### Caller mode

```
srt://address:port[#options]
```

- `address` - remote server IPv4 address or hostname
- `port` - remote port

Example:

- `src://example.com:3001` - send request to the example.com

### Listener mode

In listener mode, the address format is similar to the UDP address, with the addition of the `@` symbol to indicate the local interface name.

```
srt://[interface]@:port[#options]
```

- `interface` - local interface name where to listen for connection. By the default Astra will wait connection on all interfaces
- `port` - local port to accept incomming connection
- `options` - additional options for SRT protocol

Examples:

- `srt://@:3001` - wait for connection on any interface
- `srt://eth0@:3001` - wait for connection on interface `eth0`

### Options

- `timeout=N` - restarts the receiver if no data is received within a defined interval, seconds. Default value: `5` seconds
- `latency=N` - maximum accepted transmission latency, milliseconds. Default value: `120` millisecond
- `packetfilter=S` - injecting extra processing instructions at the beginning and/or end of a transmission to implement Forward Error Correction (FEC). [Read more](https://github.com/Haivision/srt/blob/master/docs/features/packet-filtering-and-fec.md#configuring-the-fec-filter){target="_blank"} in official documentation
- `passphrase=S` – password for the encrypted transmission. Password length should be in range 10 .. 79 characters
- `pbkeylen=N` – crypto key length in bytes. Possible values: 16, 24, 32. Default value: `0`
- `streamid=ID` – stream identifier, provided to the SRT server in caller mode
- `no_tsbpdmode` – turn off timestamp-based packet delivery mode
- `oheadbw` - limits bandwidth overhead, percents. Possible values in range: 5 - 100. Default value: `25`

## Web Interface

One of the biggest challenges of working with the Secure Reliable Transport (SRT) protocol is navigating the range of technical requirements and settings involved in the setup process. Fortunately, Astra streamlines this process by offering a comprehensive set of SRT input configuration options

To add a new SRT input in Astra, users can navigate to the `New Stream` tab or the settings of an existing stream and select the `Input Type` option as either SRT

![SRT Listener](https://cdn.cesbo.com/help/astra/receiving/ip/srt/listener.png)

- `Input type` - this parameter is the first option on the SRT settings tab and is used to select the input type. To configure SRT reception, select `SRT` from the drop-down list. This enables the SRT-specific configuration options and allows you to enter the necessary information to receive an SRT stream
- `SRT mode` - this parameter determines whether Astra will act as the caller or listener when establishing an SRT connection. To receive an SRT stream, select `Listener` from the drop-down list. This tells Astra to wait for incoming connections from the SRT stream's sender
- `Local interface` - this parameter specifies the network interface that Astra will use to receive the SRT stream. The default value is `Any interface`, which means that Astra will listen for incoming SRT connections according to system routing rules. If you want to restrict Astra to a specific interface, select it from the drop-down list
- `Port` - this optional parameter specifies the network port that Astra will use to receive the SRT stream
- `Timeout` - this optional parameter specifies the amount of time (in milliseconds) that Astra will wait for incoming data from the SRT stream before timing out. The default value is 5000 milliseconds (5 second), but you can increase or decrease this value if necessary
- `Latency` - this optional parameter introduces a specified amount of delay (in milliseconds) into the SRT stream. The default value is 120ms. Increasing the latency can improve stability but increases delay, and decreasing it can reduce delay but may make the connection less stable
- `Passphrase` - this optional parameter sets a passphrase for secure communication over the SRT stream. The default value is empty. If a passphrase is set, both sender and receiver must use the same one to establish a connection
- `Crypto key length` - this parameter sets the length of the cryptographic key used to secure the SRT stream. The default value is 128 bits, which is enough for SRT reception to work. However, you can increase or decrease the key length if needed for stronger or weaker security
- `Timestamp` - based packet delivery mode - this parameter enables or disables the timestamp-based packet delivery mode of SRT. When enabled (checked), SRT uses timestamps to ensure that packets are delivered in the correct order, even if they arrive out of order. This can improve the quality of the stream but may increase latency. The default state of this parameter is disabled
