# HTTPS certificate with Dehydrated

Dehydrated - is a client for signing certificates with an ACME-server (e.g. Let's Encrypt). This client supports both ACME v1 and the new ACME v2 including support for wildcard certificates!

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

You can use next CA: `letsencrypt`, `zerossl`, `buypass`.

Create domains list file `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Register your account (only for new configuration!):

```
dehydrated --register --accept-terms
```

## Launch HTTP server

Web server should work on port `80` and serve directory `/opt/www`. If you don't have web-server you may launch temporary web server:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Create certificate

To create certificate launch next command:

```
dehydrated -c
```

This command could be added to cron configuration for dayli execution. Certificate will be updated automatically when 30 days remains.

## Use certificate

- certificate path: `/etc/dehydrated/certs/example.com/fullchain.pem`
- private key path: `/etc/dehydrated/certs/example.com/privkey.pem`
