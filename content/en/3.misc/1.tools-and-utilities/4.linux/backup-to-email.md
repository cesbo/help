---
title: "Backup to e-mail"
date: 2024-02-05
---

This script sends to email backup with directory `/etc/astra` and file `/usr/bin/astra`.

## Install sendemail

The SendEmail is a lightweight and completely command line-based SMTP email delivery program.

```
sudo apt-get install sendemail
```

## Create a script

Create script in any text editor:

```sh
#!/bin/bash

MAILTO="my-email@gmail.com"
FROM="astra@server.com"
SMTPSERVER="smtp.gmail.com:587"
SMTPLOGIN="my-email"
SMTPPASS="password"

NOW=$(date +%Y%m%d)
BACKUP="/tmp/astra-$NOW.tar.gz"
tar -zcf $BACKUP /etc/astra /usr/bin/astra

SUBJ="$FROM backup"
BODY="The backup was successfully completed. The backup files are attached in this email"

/usr/bin/sendEmail \
    -f $FROM -t $MAILTO \
    -o message-charset=utf-8 \
    -u $SUBJ -m $BODY -a $BACKUP \
    -s $SMTPSERVER -o tls=yes -xu $SMTPLOGIN -xp $SMTPPASS
rm -f $BACKUP
```

Change in this script next variables:

- `MAILTO` - your email address
- `SMTPSERVER` - SMTP server address
- `SMTPLOGIN` - SMTP server login
- `SMTPPASS` - SMTP server password

Save script to `/opt/backup.sh`.

If you have 2-factor auth enabled, you need to create an "application password", then use that instead of your normal password.

## Configure cron

Cron is a Linux task scheduler to periodically run any command. Open the editor with the command:

```
sudo crontab -u root -e
```

Append line to the end of file:

```
40 2 * * * sh /opt/backup.sh > /dev/null
```

Do not forget to put Enter at the end of the line to line break!

Save the file. Now at 2 hours 40 minutes (at night) you will have a backup of Astra in your e-mail
