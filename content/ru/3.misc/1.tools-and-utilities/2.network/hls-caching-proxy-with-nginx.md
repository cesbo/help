---
title: "Кэширующий прокси-сервер HLS с Nginx"
date: 2023-03-01
---

Nginx может быть использован на пограничных серверах в качестве прокси-сервера для кэширования HLS. Если запрос на файл не найден в кэше, то он извлекается с оригинального сервера с адресом `http://192.168.88.100:8000`. Файл, хранящийся в `/opt/ramcache` папку, а затем передается клиенту.

Создайте конфигурационный файл Nginx для HLS Caching Proxy в `/etc/nginx/conf.d/hls_proxy.conf`:

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

и общие варианты доверенности в `/etc/nginx/hls_proxy_params.conf`:

```
proxy_redirect              off;

proxy_connect_timeout       5s;
proxy_send_timeout          180s;
proxy_read_timeout          180s;

# Buffer for headers
proxy_buffer_size           16k;
proxy_buffers               512  32k;
proxy_temp_file_write_size  512k;
proxy_max_temp_file_size    256m;

# For keepalive
proxy_http_version          1.1;

proxy_set_header            Host $host;
proxy_set_header            X-Real-IP $remote_addr;
proxy_set_header            X-Forwarded-For $remote_addr;
proxy_set_header            X-Forwarded-Proto $scheme;

proxy_next_upstream         error timeout http_502 http_504;
proxy_next_upstream_tries   2;
```

Создайте каталог для кэша nginx и установите владельцем соответствующего пользователя:

```
mkdir -p /opt/ramcache
chown -R nginx:root /opt/ramcache
```

## Заголовок Expires[](https://help.cesbo.com/misc/tools-and-utilities/network/hls-caching-proxy-with-nginx#expires-header)

Важно, чтобы сервер-источник отправлял ответ с соответствующими заголовками, определяющими время истечения срока действия обслуживаемого содержимого.

Сайт `Expires` и `X-Accel-Expires` заголовки могут использоваться для указания времени, в течение которого ответ должен считаться свежим и может быть кэширован nginx. Заголовок Expires может использоваться для указания абсолютного времени истечения срока хранения содержимого, а заголовок X-Accel-Expires - для указания относительного времени истечения в секундах.

В настройках Astra можно включить заголовки в разделе Настройки -> HLS -> Использовать заголовок Expires
