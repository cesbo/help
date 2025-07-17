---
title: "Backup to e-mail"
date: 2024-02-05
sidebar:
    order: 16
---

Este script envía un correo electrónico con una copia de seguridad del directorio `/etc/astra` y el archivo `/usr/bin/astra`.

## Instalar sendemail

SendEmail es un programa ligero y completamente basado en la línea de comandos para el envío de correos electrónicos mediante SMTP.

```
sudo apt-get install sendemail
```

## Crear un script

Crea un script en cualquier editor de texto:

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

Cambia en este script las siguientes variables:

- `MAILTO` - tu dirección de correo electrónico
- `SMTPSERVER` - dirección del servidor SMTP
- `SMTPLOGIN` - usuario para el servidor SMTP
- `SMTPPASS` - contraseña del servidor SMTP

Guarda el script en `/opt/backup.sh`.

Si tienes la autenticación de 2 factores habilitada, necesitas crear una "contraseña de aplicación", y luego usarla en lugar de tu contraseña normal.

## Configurar cron

Cron es un programador de tareas en Linux para ejecutar cualquier comando de forma periódica. Abre el editor con el comando:

```
sudo crontab -u root -e
```

Añade la siguiente línea al final del archivo:

```
40 2 * * * sh /opt/backup.sh > /dev/null
```

¡No olvides presionar Enter al final de la línea para el salto de línea!

Guarda el archivo. Ahora, a las 2 horas y 40 minutos (de la noche), tendrás una copia de seguridad de Astra en tu correo electrónico.