# IPTVPORTAL

Platform for managing IPTV and OTT solutions by [IPTVPORTAL](https://iptvportal.cloud/)

## Configuration

```
"auth": {
    "backend": [
        "https://go.iptvportal.cloud/auth/arescrypt/"
    ],
    "default": "allow"
}
```

## Portal Configuration

In the "Keys" menu, create a new key:

- Name: `Alta`
- Algorithm: `ARESSTREAM`
- Mode: `SM`
- Key Length: `1472 bit`
- Update Rate: `1:00:00`

In channel settings:

- Auth: `arescrypt`
- Encoded: turn on
- Key: `Alta`
