# Local Archive

Writing archive to the filesystem

## Config

```json
{
    "ott": {
        "archives": {
            "main": {
                "duration": 6,
                "local": "/opt/demo-storage"
            }
        },
        "channels": {
            "travel-tv/1080p": {
                "enable": true,
                "name": "Travel TV HD",
                "archive": "main"
            }
        }
    }
}
```

- `duration` - archive duration in hours;
- `local` - archive directory on your server;
- `archive` - selects archive for the channel.
