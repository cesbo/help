# HLS Access Options

## 1. URL Structure

- **Base path**: `/<channel_name>` (e.g., `/discovery`)
- **Variant path** (multi-bitrate): `/<channel_name>/<variant>` (e.g., `/discovery/1080p`)
- **Filenames** (default, configurable in [HLS Access]()):
  - `index.m3u8`: Main access point for both live and on-demand content
    * Without parameters: Streams live content
    * With `start` parameter: Provides time-shifted content
  - `media.m3u8` –  Direct access to live content without session creation
  - `vod.m3u8` – Direct access to on-demand content without session creation; URL includes `start` and `duration` parameters

---

## 2. Index Playlist (Stream Mode)

**URL**:  

`/<channel_name>/index.m3u8`

or with optional parameters:

`/<channel_name>/index.m3u8?start=<time>&duration=<sec>`

- **start** (optional):
  - Relative: Seconds before now (e.g., `-300`)
  - Absolute: Unix timestamp (e.g., `1747485787`)
- **duration** (optional): Playback length in seconds

**Examples**:
```text
# 5 minutes ago to now
/discovery/index.m3u8?start=-300

# 40-second segment from a timestamp
/discovery/index.m3u8?start=1747485787&duration=40
````

> *Index streams are near-real-time. Rewind is limited to buffer duration.*

---

## 3. Media Playlist (Live)

**URL**:
`/<channel_name>/<variant>/media.m3u8`

* Streams current live segments
* No query parameters
* Use variant path for multi-bitrate playback

---

## 4. VOD Playlist (On-Demand)

**URL**:
`/<channel_name>/<variant>/vod.m3u8?start=<time>&duration=<sec>`

* **start**: Relative or absolute
* **duration**: Required

**Examples**:

```text
# 30s clip from 100s ago
/discovery/vod.m3u8?start=-100&duration=30

# 30s clip from timestamp using variant
/discovery/hd/vod.m3u8?start=1747485787&duration=30
```

---

## 5. Query Parameters

| Parameter  | Type              | Description                               |
| ---------- | ----------------- | ----------------------------------------- |
| `start`    | relative/absolute | Playback start time (offset or Unix time) |
| `duration` | seconds           | Length of playback                        |

---

## 6. Playback Notes

* **Access**: Public by default. Enable [authentication]() if needed.
* **Pause/Seek**:
  * *Index*: Limited rewind
  * *VOD*: Full seek within requested range
  
* **Multi-bitrate**:
  * `index.m3u8` lists available variants
  * Direct URL forces specific variant
  
* **Archive**: Access to VOD or index requires archive to be enabled ([Storage]() must be assigned in channel settings)

---
