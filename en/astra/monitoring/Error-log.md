# LOG and error messages

List of commands for viewing program browsing logs:

- **console** - if Astra is running interactively, without the `--daemon option`
- **file** - `--log /var/log/astra.log` where `/var/log/astra.log` is the full path to the log file
- **syslog** - `--syslog astra`, where `astra` is the process name
- **web interface** - displaying current system messages in the `LOG` tab

Log messages are of the following types:

- **info** - general information about the program work process
- **warning** - non-operational failure warning
- **error** - an error that caused the channel or its source to stop working
- **debug** - log settings mode, displaying additional information when receiving system messages

## Troubleshoot

??? question "fe has lock"

    ```
    fe has lock. status:SCVYL signal:60% snr:80% ber:0 unc:0
    ```

    DVB adapter status is described by several values:
    
    - **status** represents a list of flags describing the state of the tuner
    
    List of states if there is an SCVYL signal:

    - **SIGNAL** - appears even at a low signal level
    - **CARRIER** - found a DVB signal
    - **VITERBI** - FEC (forward error correction) is stable
    - **SYNC** - found sync data
    - **LOCK** - signal locked
    - **signal** - shows signal level
    - **snr** - signal to noise ratio
    - **ber** - bit error rate, it's important for determining the reception quality
    - **unc** - invalid data blocks. same as ber, shows reception quality

??? question "Too many open files"

    The error occurs if the number of active connections or open files exceeds the operating system limit

    To check the current limit, use the following command:

    ```
    grep "open files" /proc/PID/limits
    ```

    PID is a unique process ID
    
    To search for it - run: `ps ax | grep astra`

    To change the system limit, run the `ulimit -n 65536` command and restart Astra

    The command is present in the `init.d` startup script

??? question "PAT: stream with id * is not found"

    The channel with the specified number (pnr) was not found in the stream. To check the available channels, you need to scan the source.

??? question "Device or resource busy"

    The error occurs when trying to use a DVB adapter that is occupied by another process. The list of adapters and their status can be checked with the command: `astra --dvbls`

    Example:

    Free adapter:

    ```
    Nov 10 09:00:00: INFO: adapter = 3, device = 0
    Nov 10 09:00:00: INFO:     mac = 00:17:42:00:00:00
    Nov 10 09:00:00: INFO:     frontend = Montage DS3103/TS2022
    Nov 10 09:00:00: INFO:     type = S
    ```

    Adapter is busy:

    ```
    Nov 10 09:00:00: WARNING: adapter = 2, device = 0
    Nov 10 09:00:00: WARNING:     adapter in use
    Nov 10 09:00:00: WARNING:     mac = 00:17:42:54:09:52
    Nov 10 09:00:00: WARNING:     frontend = Montage DS3103/TS2022
    Nov 10 09:00:00: WARNING:     type = S
    ```

    An error occurred while accessing the device. Perhaps the DVB adapter is defective, or you need to reinstall the driver:

    ```
    Nov 10 09:00:00: ERROR: adapter = 1, device = 0
    Nov 10 09:00:00: ERROR:     failed to open [Bad file descriptor]
    ```

    To determine which process is using the adapter, use the following command:

    ```
    lsof | grep adapterX | head -n1
    ```

    you should replace X with the adapter number

??? question "Address already in use"

    The error occurs when trying to use a TCP port occupied by another process. To view a list of open ports, use the command:

    ```
    netstat -tnlp
    ```

??? question "Resource temporarily unavailable"

    The network adapter cannot cope with the amount of data coming from Astra. Possible reasons:

    - Check network buffer settings
    - Check the mode of the network adapter: run the command `ethtool eth*` or `mii-tool eth*`. The speed must match the adapter type 1Gbit, 10Gbit
    - Network adapter must be Intel or Broadcom
    - Check your DVB adapters and channels settings. If the budget=true parameter is set in the DVB adapter settings, and the channel number (pnr) is not specified in the channel properties, then the entire transponder will be transmitted

??? question "PES-Error"

    Error in video or audio packet header. Main reasons:

    - Invalid decryption key
    - If you receive a stream from a DVB adapter, check the signal quality: astra `--femon -a ADAPTER`

??? question "CC-Error"

    CC error, incremented by 1 with each packet counter failure.
    MPEG-TS stream is divided into packets. Each packet has a number with a value in the range 0-15. The counter value increases with each burst and resets to 0 after 15 bursts.
    The CC error counter increases by 1 for each lost packet.

    Possible reasons:

    - Loss of data when receiving UDP/RTP. On Linux, you can check with the `netstat -su` command. If the value of `packet receive errors` increases, you need to check the network connection buffer settings. If possible, run diagnostics on the transmitting server.

    - **Weak DVB signal or errors in the signal**. It is necessary to check the signal level and reception errors: `astra –femon -a ADAPTER`.

    - **Duplication of the stream during transmission over UDP**. Multiple streams have the same multicast group and port number.

??? question "Channel has no active inputs"

    DAn error occurs if the channel does not have available sources to switch.
    
    In the channel settings, you can specify multiple sources (inputs) for redundancy. The sources work in order, in case of failure of the first source, it switches to the second and so on.

    An error occurs if the channel does not have healthy available sources to switch to.

    The cause of the source failure can be identified from other log messages, as it is the result of an earlier error. You can also check the incoming stream using the stream analyzer: `astra--analyze ADDRESS`.

??? question "ECM Not Found"

    The key to decrypt the stream was not found. Possible reason:

    - No subscription or subscription has expired.
    - Invalid package ID for key packages. When a channel is started, the package ID (PID) is displayed in the `Select ECM pid:* message`. The package ID can be manually selected using the `ecm_pid` or `cas_data` options.
    `cm_pid` - Sets the package ID. Available identifiers are displayed in the log (`Skip ECM pid:*` messages).
    `cas_data` - depends on the conditional access system.
    - Limiting the number of requests to the CA server or access card.
  
??? question "Both keys changed"

    Violation of the sequence of decryption keys. Usually appears after the `ECM Not Found` message.
    The keys for decrypting the stream are transmitted in pairs: current and next.
    After changing the encryption key to the next one, a new pair comes. 
    Example:
    ```
    1111110022222200:33333300444444005555550066666600:
    33333300444444005555550066666600:7777770088888800
    ```

??? question "Receiving timeout. restart input"

    If the data source is unavailable, it is restarted.
    
    For example, if we have a failure to receive data via the http mpeg-ts protocol and the server closed the connection, an attempt will be made to reconnect to it.

??? question "Authentication failed"

    Authorization failed when trying to access the Web interface or API.
    
    The log also displays the login and IP address with which an attempt was made to authorize.

??? question "Event_request_send"

    The status of sending data to the monitoring server.
    If the HTTP response code is not 200, then an error will be thrown.

    Example:

    ```
    failed 0:connection timeout
    failed 400:Bad Request
    ```

??? question "Server limit"

    Perhaps your license has been compromised or you have exceeded the number of servers in your license.
    
    Contact support.

??? question "SDT checksum error"

    Error checking the checksum of the SDT table.
    Usually does not lead to image problems.

??? question "PCR interval out of range"

    Timestamps come less than once every 250ms

??? question "hls sync. wrong pts"

    The value of PTS in the stream is constantly increasing.
    
    When the value gets to 8 589 934 591 it should start from 0
    
    Astra considers the difference in PTS as a new value. (It is logical that the new value should be greater than the previous one).
    
    It happens that in the stream the new value is less than the previous one - this causes an error in the formation of segments.

## http client errors

`connection timeout` - connection to the server failed

`request timeout` - the connection was successful but 
the server did not accept the request in time

`response timeout` - the server accepted the request, but did not respond in time

`receiving timeout` - (hls) - segments are being received too long