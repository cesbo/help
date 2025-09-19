## HLS Streaming Parameters: Core Configuration

### Parameters

| Parameter                  | Description                                                                                                        |      Default | Range   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | -----------: | ------- |
| **Media Access**           | Relative URL path for live HLS segments (e.g., `/media.m3u8`).                                                          |      `media` | —       |
| **Vod Access**             | Path prefix for VOD assets (e.g., `/vod.m3u8`).                                                                         |        `vod` | —       |
| **Index Filename**         | Main playlist filename for both live and VOD (e.g., `index.m3u8`).                                                 | `index` | —       |
| **Segment Duration**       | Length of each HLS segment in seconds. Lower values reduce latency; higher values reduce HTTP overhead.            |          `4` | 2–30 s  |
| **Segment Playlist Count** | Number of segments retained in the rolling playlist window. Affects buffer size and resilience.                    |          `8` | 3–15    |
| **Maximum Pause Duration** | Time to retain segments for paused sessions (DVR). Expressed in minutes; conversion to seconds applied internally. |     `30 min` | ≥ 5 min |

### Session Timeout Calculation

* **Without channel storage**

  ```
  Session Timeout = Segment Duration (s) × Segment Playlist Count
  # e.g. 4s × 8 = 32s
  ```

* **With channel storage**
  Let **Storage Duration** be the configured retention (in minutes).

  * If *Maximum Pause Duration* ≤ *Storage Duration*:

    ```
    Session Timeout = Maximum Pause Duration (min)
    ```

    *e.g.*, both 20 min ⇒ 20 min of retention

  * If *Maximum Pause Duration* > *Storage Duration*:

    ```
    Session Timeout = Storage Duration (min) + (Segment Duration × Segment Playlist Count) (converted to minutes)
    ```

    *e.g.*, 120 min storage + (4s × 8 = 32 s ≈ 0.5 min) ⇒ \~120.5 min


### Best Practices

* **Live streaming**:

  * Use *lower* segment duration (2–6 s) and *moderate* playlist count (6–10) for minimal latency and smooth playback.
* **VOD streaming**:

  * Use *higher* segment duration (10–30 s) and larger playlist count for efficient caching and reduced request overhead.
