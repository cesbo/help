---
title: "Резервное копирование на e-mail"
date: 2024-02-05
---

Этот скрипт отправляет резервную копию на e-mail с директорией `/etc/astra` и файлом `/usr/bin/astra`.

## Установка sendemail

SendEmail — это легковесная программа для отправки писем через SMTP, полностью основанная на командной строке.

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
BODY="Резервное копирование успешно завершено. Файлы резервной копии прикреплены к этому письму"

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
- `SMTPLOGIN` - логин для SMTP сервера
- `SMTPPASS` - пароль для SMTP сервера

Сохраните скрипт в `/opt/backup.sh`.

Если у вас включена двухфакторная аутентификация, вам нужно создать "пароль приложения" и использовать его вместо вашего обычного пароля.

## Настройка cron

Cron — это планировщик задач в Linux для периодического выполнения любых команд. Откройте редактор командой:

```
sudo crontab -u root -e
```

Добавьте следующую строку в конец файла:

```
40 2 * * * sh /opt/backup.sh > /dev/null
```

Не забудьте нажать Enter в конце строки, чтобы был перенос строки!

Сохраните файл. Теперь в 2 часа 40 минут (ночью) у вас будет резервная копия Astra на вашем e-mail.
