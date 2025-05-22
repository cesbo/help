---
title: "Copia de seguridad en el correo electrónico"
date: 2024-02-05
sidebar:
    order: 16
---

Este script envía por correo electrónico una copia de seguridad con el directorio `/etc/astra` y el archivo `/usr/bin/astra`.

## Instalar sendemail

SendEmail es un programa de envío de correos SMTP completamente basado en la línea de comandos y ligero.

```
sudo apt-get install sendemail
```

## Crear un script

Crea el script en cualquier editor de texto:

```sh
#!/bin/bash

MAILTO="mi-email@gmail.com"
FROM="astra@server.com"
SMTPSERVER="smtp.gmail.com:587"
SMTPLOGIN="mi-email"
SMTPPASS="contraseña"

NOW=$(date +%Y%m%d)
BACKUP="/tmp/astra-$NOW.tar.gz"
tar -zcf $BACKUP /etc/astra /usr/bin/astra

SUBJ="$FROM backup"
BODY="La copia de seguridad se ha completado con éxito. Los archivos de la copia de seguridad están adjuntos en este correo"

/usr/bin/sendEmail \
    -f $FROM -t $MAILTO \
    -o message-charset=utf-8 \
    -u $SUBJ -m $BODY -a $BACKUP \
    -s $SMTPSERVER -o tls=yes -xu $SMTPLOGIN -xp $SMTPPASS
rm -f $BACKUP
```

Cambie en este script las siguientes variables:

- `MAILTO` - tu dirección de correo electrónico
- `SMTPSERVER` - dirección del servidor SMTP
- `SMTPLOGIN` - usuario del servidor SMTP
- `SMTPPASS` - contraseña del servidor SMTP

Guarda el script en `/opt/backup.sh`.

Si tienes la autenticación de 2 factores habilitada, necesitas crear una "contraseña de aplicación" y usarla en lugar de tu contraseña normal.

## Configurar cron

Cron es un programador de tareas de Linux para ejecutar cualquier comando periódicamente. Abre el editor con el comando:

```
sudo crontab -u root -e
```

Añade la siguiente línea al final del archivo:

```
40 2 * * * sh /opt/backup.sh > /dev/null
```

¡No olvides presionar Enter al final de la línea para que haya un salto de línea!

Guarda el archivo. Ahora, a las 2:40 AM (por la noche), tendrás una copia de seguridad de Astra en tu correo electrónico.
