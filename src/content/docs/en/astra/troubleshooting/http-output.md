---
title: Common Issues with HTTP/HLS Output
description: Common issues and solutions for HTTP delivery in Astra
sidebar:
    order: 21
---

## Error 404

A 404 error means the requested resource could not be found.

Common causes and how to fix them:

1. **Channel is disabled**: Check that the channel is enabled in the Astra web interface
2. **Wrong port in URL**: Astra serves HTTP streams on different ports:
   - If HTTP Play is used, the port may match the web interface or set manually in Settings → HTTP Play. Ensure the port in the URL matches the one configured in Astra.
   - The port is specified in the HTTP Output URL. Ensure the port in the URL matches the one configured in the HTTP Output.
3. **Port conflict**: Another application is using the same port

### Checking for Port Conflicts

To see which application is using a port, run this command:

```sh
netstat -tnlp
```

Sometimes the same Astra process listens on multiple interfaces for the same port:

```
tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN      43313/astra
tcp        0      0 192.168.88.1:8000       0.0.0.0:*               LISTEN      43313/astra
```

This shows one Astra process bound to port 8000 on:

- `0.0.0.0:8000` - listens on all network interfaces
- `192.168.88.1:8000` - listens on a specific interface

To fix port conflicts:

- Use the same interface for all HTTP outputs in the channel
- Use different ports for different interfaces

## Channel Delay on Start

When starting a channel, there is a long delay before playback begins.

The delay may be caused by the Authorization method configured in Astra. When using the HTTP Backend authorization, Astra sends an HTTP request to an external middleware for each playback request. If the middleware is slow to respond, playback is delayed.

To verify if this is the case, you may temporarily disable authorization.

We recommend using HTTP Backend authorization only with fast, reliable middleware (response time under 100ms).
