---
title: URL Format for HLS
---

## URL Structure

- **Base path**: `/<channel_name>` (e.g., `/discovery`)
- **Variant path** (multi-bitrate): `/<channel_name>/<variant>` (e.g., `/discovery/1080p`)

File extensions:

- `index.m3u8`: Main access point for both live and on-demand content also known as the master playlist.
- `/<channel_name>/<variant>/<session_id>.m3u8`: Session-specific playlist to the media segments.
- `/<channel_name>/<variant>/<name>.ts`: Media segment files in MPEG-TS format.

## Standard Access (index.m3u8)

This is the main way to access HLS content. It works for both live streaming and archived content.

### Live Content

Stream current live content:

```
/<channel_name>/index.m3u8
```

### Archived Content

Access content from the archive with time parameters:

```
/<channel_name>/index.m3u8?start=<time>&duration=<sec>
```

**Parameters**:
- **start**: When to start playback
  - Recent: `-300` (5 minutes ago)
  - Specific time: `1747485787` (Unix timestamp)
- **duration**: How long to play (in seconds)

**Examples**:
- `/discovery/index.m3u8?start=-300` - Last 5 minutes
- `/discovery/index.m3u8?start=1747485787&duration=40` - 40 seconds from a specific time

## Direct Access (Optional)

Direct access skips authentication and sessions. Use this when Alta acts as a backend and your app handles user access.

**Note**: This is disabled by default. Enable it in [Channel Settings](/en/alta/ott-settings/channel-settings/) under Media Access options.

### Live Direct Access

Set a name for the media playlist in Channel Settings. If you use `media`:

```
/<channel_name>/<variant>/media.m3u8
```

### Archive Direct Access

Set a name for the VOD playlist in Channel Settings. If you use `vod`:

```
/<channel_name>/<variant>/vod.m3u8?start=<time>&duration=<sec>
```

Use the same time parameters as standard access above.
