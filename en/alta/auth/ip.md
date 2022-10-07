# IP

IP Authorization checks client IP address in the rules list.

## Actions

- `allow` - allow access
- `deny` - deny access
- `pass` - pass to the next authorization method

## Addresses

IP Authorization supports IPv4 and IPv6 addresses with CIDR notation.

## Configuration

```json
{
    "ott": {
        "authorizers": {
            "main": {
                "ip": [
                    "allow 127.0.0.1",
                    "deny 192.168.0.100",
                    "pass 192.168.0.0/24",
                    "pass fd32:ce04:8a5c::1/64",
                    "deny any"
                ]
            }
        }
    }
}
```

- `127.0.0.1` - allow single IP;
- `192.168.0.100` - deny single IP;
- `192.168.0.0/24` - pass IPv4 network to the next autorization method (backend or action);
- `fd32:ce04:8a5c::1/64` - pass IPv6 network to the next autorization method;
- `any` - deny any other IP.
