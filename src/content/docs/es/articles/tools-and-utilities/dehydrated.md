---
title: "HTTPS certificate with Dehydrated"
date: 2023-02-28
sidebar:
    order: 6
---

Dehydrated es un cliente para firmar certificados con un servidor ACME (por ejemplo, Let's Encrypt). Este cliente soporta tanto ACME v1 como el nuevo ACME v2, incluyendo soporte para certificados comodín.

## Instalar Dehydrated

```
curl -Lo /usr/local/bin/dehydrated https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/dehydrated
chmod +x /usr/local/bin/dehydrated
```

La configuración debería restaurarse desde una copia de seguridad en `/etc/dehydrated`, o puedes crear una nueva configuración.

## Crear nueva configuración

Crea un directorio para la configuración y los certificados:

```
mkdir /etc/dehydrated
```

Crea un nuevo archivo de configuración `/etc/dehydrated/config`:

```
CA="letsencrypt"
CHALLENGETYPE="http-01"
WELLKNOWN="/opt/www/.well-known/acme-challenge"
CONTACT_EMAIL="nombre@ejemplo.com"
```

Puedes usar las siguientes autoridades de certificación:

- letsencrypt
- zerossl
- buypass

Crea el archivo de lista de dominios `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Registra tu cuenta (¡solo para nueva configuración!):

```
dehydrated --register --accept-terms
```

## Iniciar servidor HTTP

El servidor web debe funcionar en el puerto 80 y servir el directorio `/opt/www`. Puedes usar cualquier otro directorio, pero no olvides cambiar el puerto en la configuración de dehydrated.

Si no tienes un servidor web, puedes lanzar un servidor web temporal:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Crear Certificado

Para crear un certificado, ejecuta el siguiente comando:

```
dehydrated -c
```

## Actualización automática del Certificado

Para actualizar el certificado automáticamente, crea un script para la tarea diaria del cron `/etc/cron.daily/dehydrated.sh`. En este script, escribe:

```sh
#!/bin/sh

dehydrated -c
```

Luego, establece permiso de ejecución:

```
chmod +x /etc/cron.daily/dehydrated.sh
```

El certificado se actualizará automáticamente cuando queden 30 días para su expiración.

## Usar certificado

- Ruta del certificado: `/etc/dehydrated/certs/example.com/fullchain.pem`
- Ruta de la clave privada: `/etc/dehydrated/certs/example.com/privkey.pem`

Por ejemplo, configuración de nginx en `/etc/nginx/conf.d/01-ssl.conf`:

```
server {
    listen       443 ssl default_server;
    listen       [::]:443 ssl default_server;
    server_name  _;
    root         /opt/www;

    ssl_certificate /etc/dehydrated/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/dehydrated/certs/example.com/privkey.pem;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 1440m;

    ssl_protocols TLSv1.3 TLSv1.2;
    ssl_ciphers EECDH+AESGCM:EECDH+AES256;
    ssl_prefer_server_ciphers on;

    location / {
        return 200 'ok';
    }
}
```