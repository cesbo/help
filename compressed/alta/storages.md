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


