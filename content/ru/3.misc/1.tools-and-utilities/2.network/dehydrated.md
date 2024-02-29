---
title: "HTTPS certificate with Dehydrated"
date: 2023-02-28
---

Dehydrated - is a client for signing certificates with an ACME-server (e.g. Let's Encrypt). This client supports both ACME v1 and the new ACME v2 including support for wildcard certificates.

## Install Dehydrated

```
curl -Lo /usr/local/bin/dehydrated https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/dehydrated
chmod +x /usr/local/bin/dehydrated
```

Configuration should be restored from backup to the `/etc/dehydrated` or you may create new configuration.

## Create new configuration

Make directory for configuration and certificates:

```
mkdir /etc/dehydrated
```

Create new configuration file `/etc/dehydrated/config`:

```
CA="letsencrypt"
CHALLENGETYPE="http-01"
WELLKNOWN="/opt/www/.well-known/acme-challenge"
CONTACT_EMAIL="name@example.com"
```

You can use next certificate authorities:

- letsencrypt
- zerossl
- buypass

Create domains list file `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Register your account (only for new configuration!):

```
dehydrated --register --accept-terms
```

## Launch HTTP server

Web server should work on port 80 and serve directory `/opt/www`. You can use any other directory, but don't forget to change port in dehydrated config.

If you don't have web-server you may launch temporary web server:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Create Certificate

To create a certificate, launch the following command:

```
dehydrated -c
```

## Autoupdate Certificate

To update the certificate automatically, create a script for the daily cron job `/etc/cron.daily/dehydrated.sh`. In this script, write:

```sh
#!/bin/sh

dehydrated -c
```

Then set execute permission:

```
chmod +x /etc/cron.daily/dehydrated.sh
```

The certificate will be automatically updated when there are 30 days left until expiration.

## Use certificate

- Certificate path: `/etc/dehydrated/certs/example.com/fullchain.pem`
- Private key path: `/etc/dehydrated/certs/example.com/privkey.pem`

For example nginx configuration in `/etc/nginx/conf.d/01-ssl.conf`:

```
server {
    listen       443 ssl default_server;
    listen       [::]:443 ssl default_server;
    server_name  _;
    root         /opt/www;

    ssl_certificate /etc/dehydrated/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/dehydrated/certs/example.com/privkey.pem;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 1440m;

    ssl_protocols TLSv1.3 TLSv1.2;
    ssl_ciphers EECDH+AESGCM:EECDH+AES256;
    ssl_prefer_server_ciphers on;

    location / {
        return 200 'ok';
    }
}
```
