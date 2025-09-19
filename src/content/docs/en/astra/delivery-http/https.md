---
title: TLS certificate for HTTPS
date: 2025-01-04
sidebar:
    order: 12
---

TLS certificate is required to enable HTTPS for the Astra web interface and media delivery. The certificate is used to encrypt the data transmitted between the server and the client, ensuring secure communication.

## Configuration

You can obtain a TLS certificate with [Dehydrated](/en/articles/tools-and-utilities/dehydrated) for free.

In the Astra web interface, navigate to `Settings` → `General` → `HTTP Server` and set paths to the certificate and private key files.

![TLS certificate](https://cdn.cesbo.com/help/astra/delivery/http-hls/https/tls-certificate.png)

The option `Disable TLS for primary port` allows you to disable HTTPS for web interface and API.

## HTTP Play

Once you turn on HTTPS, it will be enabled for the HTTP Play as well. To disable HTTPS for HTTP Play, you can use the option `Disable TLS on HTTP Play port` in the `Settings` → `HTTP Play`.

![HTTP Play Options](https://cdn.cesbo.com/help/astra/delivery/http-hls/https/http-play.png)

## Output settings

If you configure HTTP manually, you can use `https://0:443/custom-path` as the output URL.
