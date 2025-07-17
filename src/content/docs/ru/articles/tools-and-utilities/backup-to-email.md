---
title: "Backup to e-mail"
date: 2024-02-05
sidebar:
    order: 16
---

Этот скрипт отправляет на электронную почту резервную копию с каталога `/etc/astra` и файла `/usr/bin/astra`.

## Установка sendemail

SendEmail — это легковесная программа для доставки электронной почты через SMTP, полностью основанная на командной строке.

```
sudo apt-get install sendemail
```

## Создание скрипта

Создайте скрипт в любом текстовом редакторе:

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

Измените в этом скрипте следующие переменные:

- `MAILTO` - ваш адрес электронной почты
- `SMTPSERVER` - адрес SMTP сервера
- `SMTPLOGIN` - логин SMTP сервера
- `SMTPPASS` - пароль SMTP сервера

Сохраните скрипт в `/opt/backup.sh`.

Если у вас включена двухфакторная аутентификация, необходимо создать "пароль приложения", затем использовать его вместо обычного пароля.

## Настройка cron

Cron — это планировщик задач Linux для периодического выполнения любых команд. Откройте редактор с помощью команды:

```
sudo crontab -u root -e
```

Добавьте строку в конец файла:

```
40 2 * * * sh /opt/backup.sh > /dev/null
```

Не забудьте нажать Enter в конце строки, чтобы добавить перенос строки!

Сохраните файл. Теперь в 2 часа 40 минут ночи у вас будет резервная копия Astra на электронной почте.