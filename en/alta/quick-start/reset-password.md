---
description: 'Forgotten password could be reset by administrator. There are two ways to do it: web interface and wizard'
---

# Reset Password

Forgotten password could be reset by administrator. There are two ways to do it: web interface and wizard.

## Web Interface

Administrator could reset password for any user in Settings > Users.

_// TODO: image_

## Wizard

You may use wizard to reset password. On your server launch next command:

```
alta reset-password
```

Wizard ask you next details:

- Service Name
- User login
- New password. Please note that password is not showing in the console on typing

## Troubleshooting

??? question "Service not found"

    Service is not started or installed on another server

??? question "Permission denied"

    Service is more privileged than wizard. Launch command with sudo to raise privileges:

    ```
    sudo alta reset-password
    ```

??? question "User not found"

    User with defined name is not found
