---
title: "Port forwarding with socat"
date: 2023-02-28
sidebar:
    order: 9
---

Socat is a command line tool that enables bidirectional data transfer between two streams.

## Exposing local resources

Request received on port `11554` will be forwarded to `192.168.88.100:554`

```
socat tcp-listen:11554,reuseaddr,fork tcp:192.168.88.100:554
```
