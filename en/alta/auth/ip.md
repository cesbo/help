# IP List

IP List checks client IP address in the lists.

## Configuration

```
"auth": {
    "ip": [
        { "allow": "127.0.0.1" },
        { "deny": "192.168.0.100" },
        { "skip": "192.168.0.0/24" },
        { "skip": "fd32:ce04:8a5c::1/64" },
        { "deny": "*" }
    ]
}
```

- `127.0.0.1` - allow single local IP;
- `192.168.0.100` - deny single IP;
- `192.168.0.0/24` - skip IPv4 network, to autorize with backend, or to default action;
- `fd32:ce04:8a5c::1/64` - skip IPv6 network, to autorize with backend, or to default action;
- `*` - deny any other IP.
