---
title: "Check Internet connection speed"
date: 2023-03-02
---

Sometimes it is necessary to check the Internet connection speed from the server console.

Use the following command to find out the Internet speed (download and upload) from the command line in Linux:

```
wget -O - https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python
```

Example of the result of the command:

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

If you plan to measure the bandwidth of the Internet channel frequently, you can install the script speedtest:

```sh
wget https://raw.github.com/sivel/speedtest-cli/master/speedtest.py
chmod +x speedtest.py
mv speedtest.py /usr/local/bin/speedtest
```

After installation, you will be able to check the Internet speed from the terminal, using the command `speedtest`

Sometimes the utility mistakenly selects servers located at a great distance from us:

```
Retrieving speedtest.net configuration...
Testing from Elisa telecommunications group, OU. (76.40.44.19)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by Vodafone España (Alicante, Spain) [3415.53 km]: 112.947 ms
Testing download speed................................................................................
Download: 1.10 Mbit/s
Testing upload speed................................................................................................
Upload: 1.33 Mbit/s
```

Knowing that we are not currently in Spain, we can display a list of available servers with the command:
- `speedtest --list | grep Tallinn` - search for servers in Tallinn or
- `speedtest --list | more` - displays a list of available servers.

Also, this mode can be useful if you want to know - at what speed a subscriber from another country will have access to your server.
