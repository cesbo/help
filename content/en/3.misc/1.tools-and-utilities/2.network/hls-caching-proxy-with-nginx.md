---
title: "HLS Caching Proxy with Nginx"
date: 2023-03-01
---

Nginx could be used on edge servers to act as an HLS caching proxy. If a request for a file is not found in the cache, it is retrieved from the origin server with address `http://192.168.88.100:8000`. File stored in the `/opt/ramcache` folder, and then served to the client.

Create an Nginx configuration file for HLS Caching Proxy in `/etc/nginx/conf.d/hls_proxy.conf`:

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

and common proxy options in `/etc/nginx/hls_proxy_params.conf`:

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

Create directory for nginx cache and set the owner to the appropriate user:

```
mkdir -p /opt/ramcache
chown -R nginx:root /opt/ramcache
```

## Expires header

Important for the source server to send a response with appropriate headers that define the expiration time for the content being served.

The `Expires` and `X-Accel-Expires` headers can be used to specify the amount of time that a response should be considered fresh and can be cached by nginx. Expires header can be used to specify an absolute expiration time for the content, while the X-Accel-Expires header can be used to specify a relative expiration time in seconds.

In Astra settings you may turn on headers in the Settings -> HLS -> Use Expires header