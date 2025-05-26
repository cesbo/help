---
title: "Certificado HTTPS con Deshidratado"
date: 2023-02-28
sidebar:
    order: 6
---

Deshidratado - es un cliente para firmar certificados con un servidor ACME (por ejemplo, Let's Encrypt). Este cliente soporta tanto ACME v1 como el nuevo ACME v2 incluyendo soporte para certificados comodín.

## Instalar Deshidratado[](/es/misc/tools-and-utilities/network/dehydrated#install-dehydrated)

```
curl -Lo /usr/local/bin/dehydrated https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/dehydrated
chmod +x /usr/local/bin/dehydrated
```

La configuración debe restaurarse desde la copia de seguridad al `/etc/dehydrated` o puede crear una nueva configuración.

## Crear una nueva configuración[](/es/misc/tools-and-utilities/network/dehydrated#create-new-configuration)

Crear directorio para configuración y certificados:

```
mkdir /etc/dehydrated
```

Crear un nuevo archivo de configuración `/etc/dehydrated/config`:

```
CA="letsencrypt"
CHALLENGETYPE="http-01"
WELLKNOWN="/opt/www/.well-known/acme-challenge"
CONTACT_EMAIL="name@example.com"
```

Puede utilizar las siguientes autoridades de certificación:

- letsencrypt
- zerossl
- buypass

Crear archivo de lista de dominios `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Registre su cuenta (¡sólo para nueva configuración!):

```
dehydrated --register --accept-terms
```

## Iniciar servidor HTTP[](/es/misc/tools-and-utilities/network/dehydrated#launch-http-server)

El servidor web debe funcionar en el puerto 80 y servir el directorio `/opt/www`. Puedes usar cualquier otro directorio, pero no olvides cambiar el puerto en dehydrated config.

Si no dispone de servidor web, puede iniciar un servidor web temporal:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Crear certificado[](/es/misc/tools-and-utilities/network/dehydrated#create-certificate)

Para crear un certificado, ejecute el siguiente comando:

```
dehydrated -c
```

## Certificado de actualización automática[](/es/misc/tools-and-utilities/network/dehydrated#autoupdate-certificate)

Para actualizar el certificado automáticamente, cree una secuencia de comandos para la tarea cron diaria `/etc/cron.daily/dehydrated.sh`. En este script, escribe:

```
#!/bin/sh

dehydrated -c
```

A continuación, establezca el permiso de ejecución:

```
chmod +x /etc/cron.daily/dehydrated.sh
```

El certificado se actualizará automáticamente cuando queden 30 días para su caducidad.

## Utilizar certificado[](/es/misc/tools-and-utilities/network/dehydrated#use-certificate)

- Ruta del certificado: `/etc/dehydrated/certs/example.com/fullchain.pem`
- Ruta de la clave privada: `/etc/dehydrated/certs/example.com/privkey.pem`

Por ejemplo la configuración de nginx en `/etc/nginx/conf.d/01-ssl.conf`:

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
