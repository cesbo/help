---
title: "Сертификат HTTPS с помощью Dehydrated"
date: 2023-02-28
sidebar:
    order: 6
---

Dehydrated - клиент для подписания сертификатов на ACME-сервере (например, Let's Encrypt). Этот клиент поддерживает как ACME v1, так и новую версию ACME v2, включая поддержку сертификатов с подстановочными знаками.

## Установка Dehydrated[](/ru/misc/tools-and-utilities/network/dehydrated#install-dehydrated)

```
curl -Lo /usr/local/bin/dehydrated https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/dehydrated
chmod +x /usr/local/bin/dehydrated
```

Конфигурация должна быть восстановлена из резервной копии на `/etc/dehydrated` или можно создать новую конфигурацию.

## Создание новой конфигурации[](/ru/misc/tools-and-utilities/network/dehydrated#create-new-configuration)

Создайте каталог для конфигурации и сертификатов:

```
mkdir /etc/dehydrated
```

Создание нового конфигурационного файла `/etc/dehydrated/config`:

```
CA="letsencrypt"
CHALLENGETYPE="http-01"
WELLKNOWN="/opt/www/.well-known/acme-challenge"
CONTACT_EMAIL="name@example.com"
```

Вы можете использовать следующие центры сертификации:

- letsencrypt
- zerossl
- buypass

Создание файла списка доменов `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Зарегистрируйте свой аккаунт (только для новой конфигурации!):

```
dehydrated --register --accept-terms
```

## Запуск HTTP-сервера[](/ru/misc/tools-and-utilities/network/dehydrated#launch-http-server)

Web-сервер должен работать на порту 80 и обслуживать каталог `/opt/www`. Вы можете использовать любой другой каталог, но не забудьте изменить порт в конфигурации dehydrated.

Если у вас нет веб-сервера, то можно запустить временный веб-сервер:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Создать сертификат[](/ru/misc/tools-and-utilities/network/dehydrated#create-certificate)

Для создания сертификата запустите следующую команду:

```
dehydrated -c
```

## Автообновление сертификата[](/ru/misc/tools-and-utilities/network/dehydrated#autoupdate-certificate)

Для автоматического обновления сертификата создайте сценарий для ежедневного задания cron `/etc/cron.daily/dehydrated.sh`. В этом сценарии напишите:

```
#!/bin/sh

dehydrated -c
```

Затем установите разрешение на выполнение:

```
chmod +x /etc/cron.daily/dehydrated.sh
```

Сертификат будет автоматически обновляться, когда до окончания срока действия останется 30 дней.

## Использование сертификата[](/ru/misc/tools-and-utilities/network/dehydrated#use-certificate)

- Путь к сертификату: `/etc/dehydrated/certs/example.com/fullchain.pem`
- Путь к закрытому ключу: `/etc/dehydrated/certs/example.com/privkey.pem`

Например, конфигурация nginx в `/etc/nginx/conf.d/01-ssl.conf`:

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
