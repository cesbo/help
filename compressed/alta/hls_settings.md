# HLS Streaming Parameters: Core Configuration

## Parameters

| Parameter                  | Description                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------|
| **Media Access**           | Relative URL path for live HLS segments. Default: `media`                                  |
| **Vod Access**             | Path prefix for VOD assets. Default: `vod`                                                 |
| **Index**                  | Main HLS playlist filename (e.g., `index.m3u8`)                                            |
| **Segment Duration**       | Segment length in seconds (**2–30**). Lower = lower latency, higher = fewer requests       |
| **Segment Playlist Count** | Number of segments in playlist window (**3–15**). Higher = more buffer/resilience          |
| **Maximum Pause Duration** | Time (in minutes) to retain segments for paused sessions. Min: **5 min**, Default: **30 min** |

## Configuration Details

- **Media/VOD Access**: Set URL paths for segment access. Use consistent naming for server/CDN integration.
- **Index File**: Root playlist for HLS clients (e.g., `index.m3u8`).
- **Segment Duration**: Lower values (e.g., 2s) reduce latency; higher values increase latency but reduce HTTP load.
- **Segment Playlist Count**: Determines rolling window size. Example: 2s duration × 8 segments = 16s window.
- **Maximum Pause Duration**: Controls how long paused content remains accessible before removal. Used for DVR/live pause.

## Session Timeout Calculation for Channels

- **Without active Storage**:  
  `Session Timeout = Segment Duration × Segment Playlist Count`  
  Example: 2s × 8 = 16s

- **With Active Storage**:  
  If the value in `Maximum Pause Duration` is less than or equal to the storage duration for the channel:  
  `Session Timeout = Maximum Pause Duration (min)`  
  Example: 20 min
  
  If the value in `Maximum Pause Duration` is greater than the storage duration for the channel:  
  `Session Timeout = Storage Duration + (Segment Duration × Segment Playlist Count)`  
  Example: 10 min (storage) + (2s × 8)

- **Minimum value for `Maximum Pause Duration`**: 5 min  
- **Default value `Maximum Pause Duration`**: 30 min

## Example

- Segments: 2s each
- Playlist: 8 segments (16s window)
- Live: `/media/index.m3u8`
- VOD: `/vod/index.m3u8`
- Paused content accessible for up to 10 min (if set)

## Best Practices

- **Live**: Use low `Segment Duration` and moderate `Playlist Count` for low latency and stability.
- **VOD**: Use longer segments for better caching and reduced overhead.