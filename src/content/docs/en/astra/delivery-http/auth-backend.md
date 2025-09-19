---
title: "Auth: HTTP Backend"
sidebar:
    order: 22
---

HTTP Backend authorization lets you use your existing user management system (Middleware) to control access to your streams. Instead of managing users in Astra, you can connect to your current platform like Ministra, IPTVportal, or a custom system.

## How it works

![HTTP Backend](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/http-backend.svg)

1. **User requests a channel**: The viewer's player sends a request with their token or credentials
2. **Astra asks your Middleware**: Astra forwards the request details to your user management system
3. **Middleware checks permissions**: Your system verifies if the user can access this channel
4. **Access granted or denied**: If approved, Astra streams the content; if not, access is blocked

## Configuration

Go to `Settings` → `HTTP Auth` in Astra. Choose your "Backend Type" and enter the "Backend Address" for your system.

### Ministra/Stalker

Backend Address:

```
http://example.com/stalker_portal
```

In your Ministra/Stalker admin panel, enable `Temporary URL` → `Flussonic support`

### IPTVportal

**For cloud platform:**

```
https://go.iptvportal.cloud
```

**For local installation:** Use your server's address (e.g., `http://your-server.com`)

In the portal settings open `Keys` menu and create a new key:

- `Name`: Astra
- `Algorithm`: ARESSTREAM
- `Mode`: SM
- `Key Length`: 1472 bit
- `Update Rate`: 1:00:00

In portal channel settings:

- `Auth`: arescrypt
- `Encoded`: turn on
- `Key`: Astra

### Microimpulse Smarty

Backend Address:

```
http://example.com
```

### HTTP Request

Create your own authentication system by selecting `HTTP Request` as the Backend Type and providing your custom endpoint URL.

When a user requests access, Astra sends a GET request to your endpoint with:

- Query parameters: All parameters from the original user request
- HTTP headers with session details:
    - `X-Session-ID`: unique session number
    - `X-Channel-ID`: unique channel identifier
    - `X-Real-IP`: client's IP address
    - `X-Real-Path`: client's request path
    - `X-Real-UA`: client's User-Agent
    - `X-Real-Host`: client's Host request

Your backend can respond with:

- `HTTP 200`: Access granted
- `HTTP 403/401`: Access denied
- `X-Session-Name` header - User's login name (optional)

**Example workflow:**

1. Your backend: `https://auth.example.com/check`
2. User requests: `https://live.example.com/play/a001/index.m3u8?token=123`
3. Astra calls: `https://auth.example.com/check?token=123`
4. Headers include: `X-Real-Path: /play/a001/index.m3u8` plus other request details

## Important: Default behavior

If your backend is unreachable, Astra allows access by default. This prevents your service from going down if your authentication server has issues, but means users get free access during outages.

## Troubleshooting

### Users getting free access

If users can watch channels without paying, your backend might be down. Test your backend connection:

```sh
curl -v "https://auth.example.com/check"
```

Replace the URL with your actual backend address from Astra settings.

**Common issues:**

- `Connection refused`: Backend server is down
- Request hangs: Network connectivity problems
- Wrong URL: Check your backend address in settings

### Users can't access paid channels

If legitimate users are blocked:

1. Check your backend logs: Look for authentication errors
2. Verify response codes: Your backend must return HTTP 200 for valid users
3. Test manually: Use curl with a valid token to test your endpoint
