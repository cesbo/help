# Change Password to Alta Web Interface

Password could be changed by administrator.

## Console Wizard

You may use console wizard to reset own password. On your server launch next command:

Terminal window

```
alta reset-password
```

Wizard ask you next details:

- Service Name
- User login
- New password. Please note that password is not showing in the console on typing

## Troubleshooting

If you have any issues with console wizard please check common errors:

### Service not found

Service is not started or installed on another server

### Permission denied

Service is more privileged than wizard. Launch command with sudo to raise privileges:

Terminal window

```
sudo alta reset-password
```

### User not found

User with defined name is not found
