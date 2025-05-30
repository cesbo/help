# Alta Installation Guide

## Requirements
- Linux-based OS  
- x86 64-bit CPU  
- Internet connection  
- `curl` (usually pre-installed)

## Install Alta

### Download and Set Permissions
```bash
curl -Lo /usr/bin/alta https://cesbo.com/alta-latest
chmod +x /usr/bin/alta
````

### Verify Installation

```bash
alta version
```

## Start Service with Initialization Wizard

Run the initialization wizard to configure a new Alta service:

```bash
sudo alta init
```

Wizard options:

* **Service name**: Unique identifier for the service.
* **Config path**: Full path to config file; directories created as needed.
* **Admin login**: Username for first admin.
* **Admin password**: Set and confirm password (not visible while typing).
* **Management port**: API/Web UI port (e.g., `127.0.0.1:8100`).
* **OTT Port**: OTT Streaming Port (e.g., `127.0.0.1:8200`)
* **Add to systemd**: Registers the service for system management.
* **Launch on startup**: Enable if added to systemd.
* **Start service**: Launch immediately.

You can run multiple services using unique service names and ports.

## Access Web Interface

* Open: `http://<server-address>:8100`
* Login: Use `admin` and password set during initialization.
* Browser support: Chrome, Safari, Firefox

## Related

* [Alta Web Interface Documentation](#)
* [Systemctl Usage for Alta Services](#)
* [Initialization Wizard Video](https://www.youtube.com/watch?v=cnp3IsYHSZw)
