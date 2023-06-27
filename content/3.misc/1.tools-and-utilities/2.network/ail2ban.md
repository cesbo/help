---
title: "Fail2ban: SSH protection"
date: 2023-03-02
---

Fail2Ban is a program that protects servers from bruteforce attacks. (attacks in which a hacker breaks the password to SSH or another service using brute force)

## Installation

```sh
bash <(wget -qO- https://cesbo.com/download/astra/scripts/fail2ban.sh)
```

First, the script will suggest changing the ssh port. For example: changing the port number from 22 to 8382 will make it harder for bots to detect ssh.
Next, you will be asked for the number of failed authorization attempts: (by default, 3)
The last question is how long in hours we will block the ip from which there were unsuccessful attempts to log in.
After that, the script will download, install, and configure the service.
The file /var/log/astra.log will also be monitored: if authorization attempts fail in the Astra web interface, the user will be blocked.
If you use a different log file name for astra, fix it in /etc/fail2ban/jail.local

The fail2ban configuration is complete.

## Use

Viewing statistics

```sh
fail2ban-client status
```

To unblock the ip, run the following command:

```sh
fail2ban-client set ssh-iptables unbanip IPADDRESS
```
