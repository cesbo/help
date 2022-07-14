# IP

IP Authorization checks client IP address in the rules list.

## Actions

- `allow` - allow access
- `deny` - deny access
- `pass` - pass to the next authorization method

## Addresses

IP Authorization supports IPv4 and IPv6 addresses with CIDR notation.

## Configuration

```
"auth": {
    "ip": [
        { "allow": "127.0.0.1" },
        { "deny": "192.168.0.100" },
        { "pass": "192.168.0.0/24" },
        { "pass": "fd32:ce04:8a5c::1/64" },
        { "deny": "*" }
    ]
}
```

- `127.0.0.1` - allow single local IP;
- `192.168.0.100` - deny single IP;
- `192.168.0.0/24` - pass to autorize with backend, or to default action;
- `fd32:ce04:8a5c::1/64` - pass to autorize with backend, or to default action;
- `*` - deny any other IP.
