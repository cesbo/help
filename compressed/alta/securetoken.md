# Securetoken Authorization

## Purpose

Securetoken Authorization protects media streams by requiring temporary, signed tokens for access.

---

### Workflow

1. Client requests playlist from middleware.
2. Middleware generates a temporary token for each channel.
3. Client requests the channel with the token.
4. Alta validates the token; access is allowed if valid.

---

### Token Structure

A token has the following components (joined by `-` and added to the stream URL):

* `Hash`: SHA1 hash computed server-side.
* `Salt`: Random string for added security.
* `End time`: Token expiration (UNIX timestamp).
* `Start time`: Token creation time (UNIX timestamp).

**Example Token URL:**

```
https://example.com:8100/tv/travel-channel/index.m3u8?token=e8bff06f373694dda657e8417fe76f6b54b69807-a5cd6c00-1669890000-1669810000
```

---

### Hash Generation (Middleware Side)

Concatenate and SHA1-hash the following in order:

* Channel path (e.g., `/tv/travel-channel/index.m3u8`)
* Client IP address
* Start time (UNIX timestamp)
* End time (UNIX timestamp)
* `securetoken` (defined in Alta settings)
* Salt

**Formula:**

```plaintext
sha1(channel_path + client_ip + start_time + end_time + securetoken + salt)
```

---

### Built-in Secure Link Generator

A built-in tool in the admin panel can generate secure links for any channel.

**Steps:**

1. Go to:
   **Channels → Select channel → Channel settings → Authorizer**
2. Select a predefined access control with **Secure Token**.
3. If Auth is with **Secure Token**, the **Secure Link** button appears.
4. Click **Secure Link** to open the *Generate Channel Secure Link* dialog.
5. Fill in the following:

   * **IP**: Client IP address.
   * **Start / End**: Token validity period.
6. Click **Generate** to create a tokenized link:

   ```
   http://<host>:<OTT_PORT>/<channel_name>/index.m3u8?token=<generated_token>
   ```

   > Where `<host>` is the [OTT server]() hostname.

---

### Example (PHP)

**securetoken.php**

```php
<?php
$channel = '/tv/travel-channel/index.m3u8';
$client = '192.168.88.98';
$starttime = 1669810000;
$endtime = 1669890000;
$securetoken = 'secret';
$salt = 'a5cd6c00';

$hash = sha1($channel . $client . $starttime . $endtime . $securetoken . $salt);
$token = $hash . '-' . $salt . '-' . $endtime . '-' . $starttime;

echo 'https://example.com:8100' . $channel . '?token=' . $token . PHP_EOL;
?>
```

**Run:**

```sh
php securetoken.php
```

> Note: Script is for demonstration purposes only.