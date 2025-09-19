# Manage Alta Services

A **service** is an application process with a specific name and configuration. Multiple services can run on the same server.

## Systemd

Alta services are managed using `systemd` on Linux.

## Initialize a Service

To register a new service, run:

```bash
sudo alta init
```

This launches an initialization wizard and adds the service to the system.

## Service Management Commands

Assuming the default service name `alta`:

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `systemctl start alta`   | Start the service                |
| `systemctl stop alta`    | Stop the service                 |
| `systemctl restart alta` | Restart the service              |
| `systemctl status alta`  | Show service status              |
| `systemctl enable alta`  | Enable service on system startup |
| `systemctl disable alta` | Disable autostart                |
| `journalctl -fu alta`    | View service logs in real-time   |
