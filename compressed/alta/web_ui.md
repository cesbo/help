# Alta Web Interface

The Alta Web Interface allows you to manage and monitor your streaming infrastructure through a clean and responsive dashboard. Below are the core sections accessible via the top navigation bar.

---

## Access

* **Supported Browsers:** Chrome, Firefox, Safari
* **Default Port:** `8100` (can be set during `alta init`)
* **Access URL:**

  ```text
  http://<server-address>:<port>
  ```
---

## Authentication

* **Default User:** `admin`
* **Password:** Set during `sudo alta init`
* **[Reset Password]()**

---

## Top Bar Navigation

### [Dashboard]()

Overview of the system status including active channels, receivers, sessions, and storage usage. Quick insights into channel health and activity.

### [Receivers]()

Manage and configure input sources such as RTMP, SRT, and more. Allows importing from M3U playlists and assigning inputs to channels.

### [Channels]()

Create and monitor broadcast channels. Displays stream status, ingest state, and allows grouping of multirate variants.

### [Sessions]()

Live viewer tracking with session details such as IP address, session time, and bitrate consumption.

### Settings

Configure advanced system options:

* **[Storages]()** – Create Storages. Monitor archive usage and disk capacity
* **[Authorizers]()** – Define access control and token rules
* **[Users]()** – Manage user roles and credentials
* **[HTTP Servers]()** – Set TLS, ports, and connection limits
* **[HLS Access]()** – Configure cache, CORS, and retention policies
* **[Export Config]()** – Download full configuration in JSON
* **Logout** – End the current web session