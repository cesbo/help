**HTTP Servers**

There are two distinct “Server” entries:

1. **API Server**

   * Used for the web UI and API calls
   * Default port: **8100**
2. **OTT Server**

   * Used for streaming (channels, HLS, etc.)
   * Default port: the port you specified during the service initialization wizard

Each server entry exposes the same set of configurable parameters. Configure them separately under **Settings → HTTP Servers → Edit Server**.

---

## 1. Server Identity

1. **Default Interface**

   * `any` — Accept connections on all network interfaces
   * `localhost` — Restrict connections to the local machine only

2. **Port**

   * Enter any unused TCP port.
   * Defaults (after `alta init`):

     * **API Server** → `8100`
     * **OTT Server** → `8101`

3. **Server Name**

   * (Optional) Hostname or IP address to bind (e.g., `example.com` or `192.168.0.10`).
   * Leave blank to accept requests on all addresses for the chosen interface.

---

## 2. HTTPS

1. **Enable HTTPS**

   * Check the **HTTPS** box to secure traffic on this server entry.

2. **Certificate**

   * Full path to the SSL/TLS certificate chain (PEM format).
   * Example:

     ```text
     /etc/dehydrated/certs/example.com/fullchain.pem
     ```

3. **Private Key**

   * Full path to the corresponding private key (PEM format).
   * Example:

     ```text
     /etc/dehydrated/certs/example.com/privkey.pem
     ```

> **Note:** If **HTTPS** is unchecked, these fields are disabled (greyed out).
> Use a Let’s Encrypt–issued certificate (e.g., via Dehydrated) to populate these paths.
> Ensure your certificate and key paths point to valid, readable PEM files.

---

## 3. Server Headers

1. **Server Tokens**

   * Value sent in the HTTP `Server` header.
   * Default: `Alta/<version>`
   * To obscure version info, replace or blank this field.

2. **Allow Origin (CORS)**
   * Click **+ Add Origin** to whitelist a domain for Cross-Origin Resource Sharing.
   * Enter a domain (e.g., `https://app.example.com`) per line.
   * Leave empty to disallow cross-origin requests.
   > If left empty, the `Allow origin` header will be set to `*`/ `allow all`, allowing cross-origin requests from any domain.
   
   > Add only trusted domains under **Allow Origin** to avoid unwanted cross-origin requests.

---

## 4. Timeouts & Connection Limits

By default, Alta’s HTTP server uses (you may override any of these per server entry):

* **Read (sec):** `2`
  Maximum seconds to read the full client request.
* **Write (sec):** `10`
  Maximum seconds to send a response back to the client.
* **Idle (sec):** `10`
  Disconnect a connection that remains idle this long.
* **Limit:** `5000`
  Maximum number of concurrent connections.

> Keep `Read`, `Write`, `Idle`, and `Limit` set per your throughput/latency needs
