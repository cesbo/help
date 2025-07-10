# Cesbo Alta – OTT Archive Configuration

## Local Archive Settings

Configure Alta to store OTT archives on the local filesystem.

**UI Navigation:**  
> Go to **Settings → Storages → Create**

**Parameters:**

- **Duration**: Total archive duration (in hours).  
    > *This value can be overridden for individual channels in their properties.*
- **Location**: Absolute path to the archive directory on the server.

**Data Storage Details:**  
Alta stores archive segments in MPEG-TS format at:  
`<location>/<channel-path>/<variant-name>`  
Each channel and variant has its own directory structure for easy management.

**Storage Common Settings:**
- The **Settings** button, located next to the **Create** button, opens the Storage Common Settings dialog.
- In this dialog, you can configure the **Disk Space Threshold (MB)** to define when a low disk space warning is triggered.
- When available disk space falls below the specified threshold:
  - All channels with recording enabled automatically switch to circular mode.
  - Older data is deleted as new data is recorded, constrained by the remaining available space.
  - The archive size for each channel may vary:
    - For channels running continuously, the archive may retain the full intended duration (e.g., 24 hours) if space permits.
    - For newly started channels, only the most recent data up to the threshold may be retained (e.g., 10 hours).
  - If free disk space increases, the archive size for each channel can expand accordingly.

**Notes:**
- This solution increases system resilience:
  - There is no need to stop recording.
  - Prevents errors caused by disk exhaustion.