# Local Archive

Writing archive to the filesystem

## Config

```json
{
    "ott": {
        "archives": {
            "main": {
                "duration": 6,
                "local": {
                    "locations": [
                        "/opt/demo-storage"
                    ]
                }
            }
        }
    }
}
```

- `duration` - archive duration in hours;
- `locations` - list of directories on your server.
