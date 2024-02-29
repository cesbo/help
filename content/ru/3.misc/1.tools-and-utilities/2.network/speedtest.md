---
title: "Check Internet connection speed"
date: 2023-08-08
---

Sometimes it is necessary to check the Internet connection speed from the server console.

## Install

Download and install command line tool for testing internet bandwidth using speedtest.net

```sh
sudo curl -Lo /usr/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x /usr/bin/speedtest-cli
```

## Launch

To start test launch in console:

```sh
speedtest-cli
```

Result will be printed in console:

```
Retrieving speedtest.net configuration...
Testing from Elisa telecommunications group, OU. (76.40.44.19)...
Retrieving speedtest.net server list...
Retrieving information for the selected server...
Hosted by Compic OU (Tallinn, Estonia) [16.84 km]: 28.77 ms
Testing download speed.........................
Download: 93.30 Mbit/s
Testing upload speed..........................
Upload: 92.25 Mbit/s
```

## Select server

You may list available servers with command:

```sh
speedtest-cli --list
```

Example output:

```
 1437) Telia Lietuva, AB (Kaunas, Lithuania) [506.33 km]
16248) Litnet (Kaunas, Lithuania) [506.33 km]
```

Now you may launch speedtest with custom server:

```sh
speedtest-cli --server 16248
```
