# Receivers Overview

The **Receivers** section in Alta Cesbo allows managing input streams (e.g., UDP, RTP, RTSP) that are ingested by the HLS server.
## Supported protocols include:
 - UDP (MPEG-TS)
 - HTTP MPEG-TS
 - HLS
 - RTSP

---

## 1. Receiver List

 **Enabled**  Toggle stream on/off                              
 **Name**     Descriptive label                                 
 **Source**   Input stream URL                                  
 **Speed**    Current throughput (Mbit/s)                       
 **Actions**  Edit or Delete                             

> **Tip:**  Use these features for easier management:
> - **Multi-selection:** Use `Ctrl + A` to select all receivers or `Ctrl + Click` for individual selection. The **Action** button allows batch **Enable**, **Disable**, or **Delete** operations.
> - **Search** by name or URL.
> - **Sort** by name or status.

---

## 2. Import Receivers via M3U

**Steps:**

1. Click **Import m3u**.
2. **Step 1: Import**
   - **Web**: Enter a public `.m3u` URL → **Next**.
   - **Local**: Upload `.m3u` file → **Next**.
3. **Step 2: Create Receivers**
   - Review and select streams to enable.
4. **Step 3: Results**
   - View import success and error messages.

> **Tip:** Use M3U playlists from your provider to import large channel lists efficiently.

---

## 3. Manually Create a Receiver

1. Click **Create**.
2. Fill in:
   - **Enable**: Toggle on/off.
   - **Name** *(required)*: e.g., `Cinemax 2 HD`.
   - **Source** *(required)*: e.g., `udp://239.10.10.7:5000`, `http://example.com/stream.ts`, `rtsp://192.168.1.100/stream`.
3. Click **Save**.

> *Required fields are validated on save. Errors are highlighted.*

## 4. Best Practices & Troubleshooting

- **Naming**: Use consistent prefixes (e.g., region/provider).
- **Multicast**: Ensure proper routing for `udp://` streams.
- **Debugging**:
  - Disabled streams don’t consume resources.
  - Use **Speed** to verify data flow.
---