---
title: "Change password to Astra Web Interface"
date: 2023-02-22
sidebar:
    order: 5
---

To administer the Astra interface, you can change the password of any user through the interface menu. To perform this action, you need:

1. Open Settings menu, choose Users. This will take you to the Users page, where you can see a list of all users.
2. Select the user whose password you want to change.
3. Enter new password and click Apply.

If you've changed your own password, the Astra web interface will be reloaded and you will be required to log in with your new password.

## Reset password

Astra interface password can also be changed via the server console command:

```
astra --reset-password
```

Then you need to enter next details:

- Port to your web interface (Default is 8000)
- User login
- New password
