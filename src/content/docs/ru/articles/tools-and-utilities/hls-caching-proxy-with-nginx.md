---
title: "HLS Caching Proxy with Nginx"
date: 2023-03-01
sidebar:
    order: 7
---

Nginx может быть использован на пограничных серверах, чтобы действовать как HLS-кэширующий прокси. Если запрос на файл отсутствует в кэше, он извлекается с исходного сервера с адресом `http://192.168.88.100:8000`. Файл сохраняется в директории `/opt/ramcache`, а затем отправляется клиенту.

Создайте файл конфигурации Nginx для HLS-кэширующего прокси в `/etc/nginx/conf.d/hls_proxy.conf`:

```
proxy_cache_path "/opt/ramcache" use_temp_path=off keys_zone=hls:1m inactive=30s max_size=10g;

server {
    listen 4000;
    server_name _;

    location ~* \.(m3u8)$ {
        proxy_cache off;
        expires -1;
        proxy_pass http://192.168.88.100:8000;
        include /etc/nginx/hls_proxy_params.conf;
    }

    location ~* \.(ts)$ {
        proxy_pass http://192.168.88.100:8000;
        proxy_cache hls;
        proxy_cache_key $request_uri;
        proxy_cache_valid 200 10s;
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;
        proxy_cache_lock_age 5s;
        include /etc/nginx/hls_proxy_params.conf;
    }
}
```

и общие параметры прокси в `/etc/nginx/hls_proxy_params.conf`:

```
proxy_redirect              off;

proxy_connect_timeout       5s;
proxy_send_timeout          180s;
proxy_read_timeout          180s;

# Буфер для заголовков
proxy_buffer_size           16k;
proxy_buffers               512  32k;
proxy_temp_file_write_size  512k;
proxy_max_temp_file_size    256m;

# Для keepalive
proxy_http_version          1.1;

proxy_set_header            Host $host;
proxy_set_header            X-Real-IP $remote_addr;
proxy_set_header            X-Forwarded-For $remote_addr;
proxy_set_header            X-Forwarded-Proto $scheme;

proxy_next_upstream         error timeout http_502 http_504;
proxy_next_upstream_tries   2;
```

Создайте директорию для кэша Nginx и установите владельца в соответствии с нужным пользователем:

```
mkdir -p /opt/ramcache
chown -R nginx:root /opt/ramcache
```

## Заголовок Expires

Важно, чтобы исходный сервер отправлял ответ с соответствующими заголовками, которые определяют время истечения срока действия содержимого.

Заголовки `Expires` и `X-Accel-Expires` могут использоваться для указания времени, в течение которого ответ должен считаться свежим и может быть закэширован Nginx. Заголовок Expires может указывать абсолютное время истечения срока действия содержимого, в то время как заголовок X-Accel-Expires может указывать относительное время истечения срока действия в секундах.

В Astra в настройках можно включить заголовки в разделе Settings -> HLS -> Use Expires header.