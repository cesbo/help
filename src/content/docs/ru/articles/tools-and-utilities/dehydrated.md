---
title: "HTTPS certificate with Dehydrated"
date: 2023-02-28
sidebar:
    order: 6
---

Dehydrated - это клиент для подписания сертификатов с помощью ACME-сервера (например, Let's Encrypt). Этот клиент поддерживает как ACME v1, так и новый ACME v2, включая поддержку сертификатов с поддоменами.

## Установка Dehydrated

```
curl -Lo /usr/local/bin/dehydrated https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/dehydrated
chmod +x /usr/local/bin/dehydrated
```

Конфигурацию следует восстановить из резервной копии в каталог `/etc/dehydrated`, или вы можете создать новую конфигурацию.

## Создание новой конфигурации

Создайте каталог для конфигурации и сертификатов:

```
mkdir /etc/dehydrated
```

Создайте новый конфигурационный файл `/etc/dehydrated/config`:

```
CA="letsencrypt"
CHALLENGETYPE="http-01"
WELLKNOWN="/opt/www/.well-known/acme-challenge"
CONTACT_EMAIL="name@example.com"
```

Вы можете использовать следующих удостоверяющих центров:

- letsencrypt
- zerossl
- buypass

Создайте файл со списком доменов `/etc/dehydrated/domains.txt`:

```
example.com www.example.com
```

Зарегистрируйте свой аккаунт (только для новой конфигурации!):

```
dehydrated --register --accept-terms
```

## Запуск HTTP сервера

Веб-сервер должен работать на порту 80 и обслуживать каталог `/opt/www`. Вы можете использовать любой другой каталог, но не забудьте изменить порт в конфигурации dehydrated.

Если у вас нет веб-сервера, вы можете запустить временный веб-сервер:

```
mkdir -p /opt/www/.well-known/acme-challenge
python3 -m http.server -d /opt/www 80
```

## Создание сертификата

Чтобы создать сертификат, выполните следующую команду:

```
dehydrated -c
```

## Автоматическое обновление сертификата

Чтобы автоматически обновлять сертификат, создайте скрипт для ежедневного задания cron `/etc/cron.daily/dehydrated.sh`. В этом скрипте напишите:

```sh
#!/bin/sh

dehydrated -c
```

Затем установите разрешение на выполнение:

```
chmod +x /etc/cron.daily/dehydrated.sh
```

Сертификат будет автоматически обновляться за 30 дней до истечения срока его действия.

## Использование сертификата

- Путь к сертификату: `/etc/dehydrated/certs/example.com/fullchain.pem`
- Путь к закрытому ключу: `/etc/dehydrated/certs/example.com/privkey.pem`

Пример конфигурации nginx в файле `/etc/nginx/conf.d/01-ssl.conf`:

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